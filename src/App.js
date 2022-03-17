import "./App.css";
import { Header } from "./components/Header.component/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { SignUp } from "./pages/SignUp";

const App = () => (
  <div className="e-commerce-app-container">
    <Header />
    {/* <Login /> */}
    {/* <SignUp /> */}
    <Home />
  </div>
);

export default App;
