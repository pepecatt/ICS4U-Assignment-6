import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
//import RegisterView from ".views/RegisterView";
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
        </Routes>
      </BrowserRouter>

    /*
    <Route path="/register" element={<RegisterView />} />
    <Route path="/genre" element={<GenreView />} />
    */
  )
}

export default App
