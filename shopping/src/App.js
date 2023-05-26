import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

import Main from "./components/Main";
import Header from "./components/header";
import Footer from "./components/footer";
import Productslist from "./pages/Productslist";
import useFetch from "./hooks/useFetch";

function App() {
  const [maindata, isLoading] = useFetch(
    "http://cozshopping.codestates-seb.link/api/v1/products"
  );

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={isLoading ? null : <Main maindata={maindata} />}
        />
        <Route
          path="/products/list"
          element={isLoading ? null : <Productslist maindata={maindata} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
