<script>
  import { supabase } from "../supabaseClient";

  let loading = false;
  let email = "";
  let password = "";

  const handleLogin = async () => {
    try {
      loading = true;
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      alert("Check your email for verification link!");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      loading = false;
    }
  };
</script>

<div class="flex justify-center w-screen">
  <div
    class="flex flex-col bg-[#222222] p-10 rounded-lg h-[calc(100vh-218px)]"
    aria-live="polite"
  >
    <p class="font-bold text-2xl m-5">Sign in</p>
    <form class="form-widget" on:submit|preventDefault={handleLogin}>
      <div>
        <label class="text-xl m-2" for="email">Email</label>
        <input
          id="email"
          class="w-full p-2 text-lg rounded-lg focus:outline-none focus:scale-110 duration-300 bg-[#101010] mt-2"
          type="email"
          placeholder="Email"
          bind:value={email}
        />
        <label for="password" class="text-xl m-2">Password</label>
        <input
          id="password"
          class="w-full p-2 text-lg rounded-lg focus:outline-none focus:scale-110 duration-300 bg-[#101010] mt-2"
          type="password"
          placeholder="Password"
          bind:value={password}
        />
      </div>
      <div class="flex items-center justify-center">
        <button
          type="submit"
          class="bg-[#444444] duration-300 hover:bg-[#2a2a2a] text-center rounded-lg p-2 text-lg cursor-pointer w-60 uppercase mt-5"
          aria-live="polite"
          disabled={loading}
        >
          <span>{loading ? "Loading" : "Sign in"}</span>
        </button>
      </div>
    </form>
    <a class="m-5 hover:text-gray-300 duration-300" href="#/signup"
      >Create account</a
    >
  </div>
</div>
