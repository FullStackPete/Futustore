import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import CartProvider from "./context/ShoppingCartProvider";
import AllProducts from "./pages/AllProductsPage";

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/allproducts" element={<AllProducts/>}/>
            <Route path="/contact" element={<Contact />} />
            <Route path={"/product/:id"} element={<Product />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Navbar>
      </CartProvider>
    </Router>
  );
}

export default App;
