import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart/CartPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import CartProvider from "./context/ShoppingCartProvider";
import AllProducts from "./pages/AllProductsPage";
import AddressPage from "./pages/Cart/AddressPage";
import Summary from "./pages/Cart/Summary";
import UserAddressProvider from "./context/UserAddressProvider";
function App() {
  return (
    <Router>
      <UserAddressProvider>
        <CartProvider>
          <Navbar>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />

              <Route path="/cart" element={<Cart />} />
              <Route path="/cart/address" element={<AddressPage />} />
              <Route path="/cart/summary" element={<Summary />} />

              <Route path="/allproducts" element={<AllProducts />} />
              <Route path="/contact" element={<Contact />} />
              <Route path={"/product/:id"} element={<Product />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Navbar>
        </CartProvider>
      </UserAddressProvider>
    </Router>
  );
}

export default App;
