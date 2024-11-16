import {Routes, Route} from 'react-router-dom';
import './App.css'
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';
import RegistrationPage from './Pages/RegistrationPage';

function App() {

  return (
   <>
    <Routes>
      <Route element={<HomePage></HomePage>} path="/" />
      <Route element={<LoginPage></LoginPage>} path="/login" />
      <Route element={<ProfilePage></ProfilePage>} path="/me" />
      <Route element={<RegistrationPage></RegistrationPage>} path="/register"/>
    </Routes>

   </>
  )
}

export default App
