import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

function ProfilePage() {
  const { user, handleLogOut } = useContext(GlobalContext);
  console.log(user);
  return (
    <div>
      {user.displayName && <h2>{user.displayName}</h2>}
      <p>{user.email}</p>
      <button className="btn btn-primary" onClick={handleLogOut}>
        Log-Out
      </button>
    </div>
  );
}

export default ProfilePage;
