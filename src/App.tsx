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
              <Route
                path="/Futustore"
                element={<Navigate to="/Futustore/home" />}
              />
              <Route path="/Futustore/home" element={<Home />} />

              <Route path="/Futustore/cart" element={<Cart />} />
              <Route path="/Futustore/cart/address" element={<AddressPage />} />
              <Route path="/Futustore/cart/summary" element={<Summary />} />

              <Route path="/Futustore/allproducts" element={<AllProducts />} />
              <Route path="/Futustore/contact" element={<Contact />} />
              <Route path={"/Futustore/product/:id"} element={<Product />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Navbar>
        </CartProvider>
      </UserAddressProvider>
    </Router>
  );
}

export default App;
