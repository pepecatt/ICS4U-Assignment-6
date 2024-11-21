import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Head";
//import HomeView from "../src/views/HomeView";
//import RegisterView from "../src/views/RegisterView";
import './App.css'

function App() {

  return (
    <div>
      <Header/>
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
