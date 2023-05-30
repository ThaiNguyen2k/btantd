import "./App.css";
import Home from "containers/AdminPage";
import Login from "containers/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import User from "containers/user";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
