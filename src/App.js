import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicCounter from "./pages/basic/Counter/classComponent";
import BasicReact from "./pages/basic/React";
import SignIn from "./pages/Login";
import BasicLogin from "./pages/basic/Login";
import BasicHome from "./pages/basic/Home";
import BasicDetail from "./pages/basic/Detail";
import BasicOrder from "./pages/basic/Order";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import Signup from "./pages/Signup";
import Viewall from "./pages/Viewall";
import ManageMovie from "./pages/ManageMovie";
import ManageSchedule from "./pages/ManageSchedule";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Ticket from "./pages/Ticket";
import PrivateRoute from "./helpers/route/privateRoute";
import PublicRoute from "./helpers/route/publicRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="basic/counter" element={<BasicCounter />} />
        <Route path="basic/react" element={<BasicReact />} />
        <Route path="basic/login" element={<BasicLogin />} />
        <Route path="basic/home" element={<BasicHome />} />
        <Route path="basic/order" element={<BasicOrder />} />
        <Route path="basic/detail/:id" element={<BasicDetail />} />

        <Route path="login" element={<SignIn />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="viewall" element={<Viewall />} />
        <Route path="detail/:id" element={<Detail />} />

        <Route element={<PrivateRoute isAdmin={true} />}>
          <Route path="managemovie" element={<ManageMovie />} />
          <Route path="manageschedule" element={<ManageSchedule />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<PrivateRoute isAdmin={false} />}>
          <Route path="profile" element={<Profile />} />
          <Route path="history" element={<History />} />
          <Route path="ticket" element={<Ticket />} />
          <Route path="order" element={<Order />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
