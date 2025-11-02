import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { useNavigate } from "react-router";
import { auth } from "../../firebaseConfig";

function LoginPage() {
  const { login, setLogin, validateUser, setUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  function handleClick() {
    validateUser().then(function (res) {
      console.log("success");
      setUser(auth.currentUser);
      navigate("/profile");
    });
  }
  return (
    <div className="flex p-12 items-center flex-col h-full w-full">
      <h1 className="text-4xl mb-8">Login Page</h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              onChange={(e) => setLogin({ ...login, mail: e.target.value })}
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
            />
            <button className="btn btn-neutral mt-4" onClick={handleClick}>
              Login
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
