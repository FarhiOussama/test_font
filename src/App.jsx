import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
