import { useNavigate } from "react-router-dom"

const Logout = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
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