import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
function AppContent() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== '/dashboard' && <h1 className="sticky bg-black top-0">rapidPay</h1>}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
      </Routes>


    </div>
  )
}

export default App
