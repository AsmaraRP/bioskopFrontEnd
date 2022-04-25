import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicCounter from "./pages/basic/Counter/classComponent";
import BasicReact from "./pages/basic/React";
import SignIn from "./pages/signin";
import BasicLogin from "./pages/basic/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="basic/counter" element={<BasicCounter />} />
        <Route path="basic/react" element={<BasicReact />} />
        <Route path="basic/login" element={<BasicLogin />} />
        <Route path="login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
