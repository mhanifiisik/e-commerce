import "./App.css";
import HomePage from "./Pages/HomePage";
import ProductList from "./Pages/ProductList";
import SingleProduct from "./Pages/SingleProduct";
import Chart from "./Pages/Chart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Success from "./Pages/Success";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  let user = false;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/products/:category" element={<ProductList />} />
        <Route exact path="/product/:id" element={<SingleProduct />} />
        <Route exact path="/chart" element={<Chart />} />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          exact
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route exact path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
