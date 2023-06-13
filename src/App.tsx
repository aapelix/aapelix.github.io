import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/MainPage";
import NoPage from "./components/NoPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Account from "./components/Account";
import Password from "./components/Password";
import Chat from "./components/chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="account" element={<Account />} />
          <Route path="password" element={<Password />} />
          <Route path="chat" element={<Chat />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
