import Header from "../Components/common/Header"
import { useAuth } from "../hooks/useAuth"

const HomePage = () => {
  const {auth} =useAuth();
  console.log(auth);

  return (
    <>
      <Header></Header>
      <p>Homepage</p>
    </>
  )
}

export default HomePage