import "./App.css";
import Home from "containers/AdminPage";
import Login from "containers/Login";
import Customers from "containers/customers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import {Product} from "containers/Product/Product";
import Coupon from "containers/Coupon/Coupon";
import Orders from "containers/Orders/Orders";
import { Provider, connect } from "react-redux";
import store from "Store/index";
import { PrimaryLayout } from "component/layout";
import User from "containers/user/user";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PrimaryLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<User />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/product" element={<Product />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/coupon" element={<Coupon />} />
          </Routes>
        </PrimaryLayout>
      </Provider>
    </BrowserRouter>
  );
}
export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
