import { Routes, Route } from "react-router";
import LoginPage from "./Pages/Login";
import Register from "./Pages/Register";
import PrivateRoute from "./Pages/PrivateRoute";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <div className="flex h-full w-full">
      <Routes>
        <Route path="/login-page" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register-page" element={<Register></Register>}></Route>
        <Route
          path="/Profile"
          element={
            <PrivateRoute>
              <ProfilePage></ProfilePage>
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
