import "./App.css";
import { Header } from "./components/header.component/Header";
import Login from "./pages/Login";
import { SignUp } from "./pages/SignUp";

const App = () => (
  <>
    <Header />
    {/* <Login /> */}
    <SignUp />
  </>
);

export default App;
