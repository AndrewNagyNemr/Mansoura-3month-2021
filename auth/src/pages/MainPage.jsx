import { useHistory } from "react-router-dom";
import { Navbar } from "../components";

export const MainPage = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.replace("/login");
  };
  return (
    <>
      <Navbar />
      <h4>MainPage</h4>
      <button className="btn btn-danger" onClick={handleLogout}>
        Log-out
      </button>
    </>
  );
};
