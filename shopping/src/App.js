import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
