import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth";

const Logout = () => {
  const navigate = useNavigate();
  const {setAuth} = useAuth();

  const handleLogOut = () => {
    setAuth({});
    navigate("/login");
  }

  return (
    <div>
      <button className="icon-btn" onClick={handleLogOut}>
          <img src="/assets/icons/logout.svg" alt="Notification" />
        </button>
    </div>
  )
}

export default Logout