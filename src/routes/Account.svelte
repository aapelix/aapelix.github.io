<script lang="ts">
  import { onMount } from "svelte";
  import { supabase } from "../supabaseClient";
  import type { AuthSession } from "@supabase/supabase-js";
  import Signin from "./Signin.svelte";

  let loading = false;
  let username: string | null = null;

  let session: AuthSession;

  onMount(() => {
    supabase.auth.getSession().then(({ data }) => {
      session = data.session;
      getProfile();
    });

    supabase.auth.onAuthStateChange((_event, _session) => {
      session = _session;
    });
  });

  const getProfile = async () => {
    try {
      loading = true;
      const { user } = session;

      const { data, error, status } = await supabase
        .from("profiles")
        .select("username, website, avatar_url")
        .eq("id", user.id)
        .single();

      if (error && status !== 406) throw error;

      if (data) {
        username = data.username;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      loading = false;
    }
  };
  const updateProfile = async () => {
    try {
      loading = true;
      const { user } = session;

      const updates = {
        id: user.id,
        username,
        updated_at: new Date().toISOString(),
      };

      localStorage.setItem("username", username);

      let { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      loading = false;
    }
  };
</script>

<div class="w-screen">
  {#if !session}
    <Signin />
  {:else}
    <div>
      <h1 class="text-2xl font-bold">
        Hello <p class="text-gray-300">{session.user.email}</p>
      </h1>
    </div>
    <form on:submit|preventDefault={updateProfile} class="form-widget">
      <div class="flex flex-col justify-center items-center">
        <label for="username" class="text-xl m-2">Username</label>
        <input
          class="p-2 text-lg rounded-lg focus:outline-none focus:scale-110 duration-300 bg-[#101010] mt-2"
          id="username"
          name="username"
          type="text"
          placeholder={localStorage.getItem("username")}
          bind:value={username}
        />
      </div>
      <div class="flex justify-center">
        <button
          type="submit"
          class="bg-[#444444] duration-300 hover:bg-[#2a2a2a] text-center rounded-lg p-2 text-lg cursor-pointer w-60 uppercase mt-5"
          disabled={loading}
        >
          {loading ? "Saving ..." : "Update profile"}
        </button>
      </div>
      <div>
        <button
          type="button"
          class="bg-red-400 p-2 m-5 rounded-lg hover:bg-red-500 duration-300"
          on:click={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </form>
  {/if}
</div>
