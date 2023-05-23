import "./App.css";

import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import Main from "./components/Main";
import Header from "./components/header";
import Footer from "./components/footer";
import Productslist from "./pages/Productslist";
import useFetch from "./hooks/useFetch";

function App() {
  // const [maindata, setMaindate] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(true);
  //   axios("http://cozshopping.codestates-seb.link/api/v1/products").then(
  //     (res) => {
  //       setMaindate(res.data);
  //       setIsLoading(false);
  //     }
  //   );
  // }, []);

  const [maindata, isLoading] = useFetch(
    "http://cozshopping.codestates-seb.link/api/v1/products"
  );

  console.log(maindata, isLoading);
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
