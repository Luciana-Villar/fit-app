import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import IngredientsPage from "./pages/IngredientsPage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/ingredients" element={<IngredientsPage />} />
      </Routes>
    </div>
  );
}

export default App;
