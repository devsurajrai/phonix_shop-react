import "./login-main.css";
const LoginMain = () => (
  <div>
    <main>
      <form
        className="log-in-form p-xxl flex-c flex-center br-sm"
        action="submit"
      >
        <h3>Login</h3>
        <label className="text-sm lh-md login-label" for="">
          Username*
          <input
            className="input-simple br-l m-b-md"
            type="text"
            placeholder="Enter Username"
            required=""
          />
        </label>

        <label className=" text-sm lh-md login-label" for="">
          Password*
          <input
            className="input-simple br-l m-b-s"
            type="password"
            placeholder="Enter Password"
            required=""
          />
        </label>

        <label className=" text-sm lh-md login-label flex-r flex-center" for="">
          <input className="input-checkbox m-r-s" type="checkbox" />
          <span className="text-sm m-r-xl">Keep me logged in</span>
          <a className="forget-pass" href="">
            Forget Your Password?
          </a>
        </label>

        <button className="button button--secondary log-in-btn m-tb-md">
          LOG IN
        </button>
        <button className="create-new-acc flex-r flex-center">
          <a className=" text-sm" href="../sign-up/sign-up.html">
            Create a new account
          </a>
          <span className="text-md p-l-xs"> > </span>
        </button>
      </form>
    </main>
  </div>
);

export default LoginMain;
