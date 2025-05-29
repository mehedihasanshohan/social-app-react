import {Routes, Route} from 'react-router-dom';
import './App.css'
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';
import RegistrationPage from './Pages/RegistrationPage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {

  return (
   <>
    <Routes>
      <Route element={<HomePage></HomePage>} path="/" exact/>
      <Route element={<LoginPage></LoginPage>} path="/login" />
      <Route element={<ProfilePage></ProfilePage>} path="/profile" />
      <Route element={<RegistrationPage></RegistrationPage>} path="/register"/>
      <Route element={<NotFoundPage />} path="*"/>
    </Routes>

   </>
  )
}

export default App
