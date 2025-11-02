import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { auth } from "../../firebaseConfig";
import { updateProfile } from "firebase/auth";
import { useNavigate, Navigate } from "react-router";

function Register() {
  const { register, SaveInfo, registerUser, user } = useContext(GlobalContext);
  const navigate = useNavigate();

  if (user) return <Navigate to={"/profile"}></Navigate>;

  return (
    <div className="flex p-12 items-center flex-col h-full w-full">
      <h1 className="mb-12 text-4xl justify-self-start">Welcome User</h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              onChange={(event) =>
                SaveInfo({ ...register, name: event.target.value })
              }
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              onChange={(event) =>
                SaveInfo({ ...register, email: event.target.value })
              }
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              onChange={(event) =>
                SaveInfo({ ...register, password: event.target.value })
              }
            />
            <button
              className="btn btn-neutral mt-4"
              onClick={async () => {
                try {
                  await registerUser();
                  await updateProfile(auth.currentUser, {
                    displayName: register.name,
                  });
                  // Wait a bit to ensure the context updates
                  setTimeout(() => {
                    navigate("/profile");
                  }, 100);
                } catch (e) {
                  console.log(e.message);
                }
              }}
            >
              Sign-Up
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default Register;
