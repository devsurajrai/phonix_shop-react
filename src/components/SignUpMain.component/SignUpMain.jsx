import "./signup-main.css";
export const SignUpMain = () => (
  <div className="login-page">
    <main>
      <form
        className="log-in-form sign-up-form p-xxl flex-c flex-center br-sm"
        action="submit"
      >
        <h3>Signup</h3>
        <label className="text-sm lh-md login-label" for="">
          First Name*
          <input
            className="input-simple br-l m-b-md"
            type="text"
            placeholder="Enter Username"
            required=""
          />
        </label>
        <label className="text-sm lh-md login-label" for="">
          Last Name
          <input
            className="input-simple br-l m-b-md"
            type="text"
            placeholder="Enter Username"
            required=""
          />
        </label>
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

        <label className=" text-sm lh-md login-label flex-r " for="">
          <input className="input-checkbox m-r-s" type="checkbox" />{" "}
          <span className="text-sm m-r-xl">
            I accept all Terms & Conditions{" "}
          </span>
        </label>

        <button className="button button--secondary log-in-btn m-tb-md">
          Sign Up
        </button>
        <button className="create-new-acc flex-r flex-center">
          <a className=" text-sm" href="../log-in/log-in.html">
            Already have an account
          </a>
          <span className="text-md p-l-xs"> > </span>
        </button>
      </form>
    </main>
  </div>
);
