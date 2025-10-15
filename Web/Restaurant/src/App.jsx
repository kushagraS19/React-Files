import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/about";
import Menu from "./pages/Menu/Menu";
import Contact from "./pages/contact/contact";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Cart from "./pages/cart/cart";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
