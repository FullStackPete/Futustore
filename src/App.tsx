import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return(
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path={'/product/:id'} element={<Product />}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  </Router>
  )
}

export default App;
