import "./App.css";
import { Header } from "./components/Header/index";
import { Tabs } from "./components/Tabs/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { YourCards } from "./components/YourCards/index";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Tabs />
        <Routes>
          <Route path="/" element={<YourCards />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
