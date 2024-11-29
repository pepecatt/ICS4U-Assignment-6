import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
//import HomeView from "../src/views/HomeView";
//import RegisterView from "../src/views/RegisterView";
import './App.css'

function App() {

  return (
    <div>
      <HomeView/>
    </div>

    /*
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider> */
  )
}

export default App
