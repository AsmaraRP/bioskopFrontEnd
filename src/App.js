import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicCounter from "./pages/basic/Counter/classComponent";
import BasicReact from "./pages/basic/React";
import SignIn from "./pages/Login";
import BasicLogin from "./pages/basic/Login";
import BasicHome from "./pages/basic/Home";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Order from "./pages/Order";
import Payment from "./pages/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="basic/counter" element={<BasicCounter />} />
        <Route path="basic/react" element={<BasicReact />} />
        <Route path="basic/login" element={<BasicLogin />} />
        <Route path="basic/home" element={<BasicHome />} />
        <Route path="login" element={<SignIn />} />
        <Route path="home" element={<Home />} />
        <Route path="detail" element={<Detail />} />
        <Route path="order" element={<Order />} />
        <Route path="payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
