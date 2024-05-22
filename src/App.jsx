import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import "./App.css";
import AccountManagement from "./pages/AccountManagement/AccountManagement";
import PasswordReset from "./pages/PasswordReset/PasswordReset";
import OTPVerify from "./pages/OTPVerify/OTPVerify";
import EnterNewPass from "./pages/EnterNewPass/EnterNewPass";
import SignUp from "./components/SignUpForm/SignUpForm";
import First_Page from "./pages/FirstPage/FirstPage";
import LoginForm from "./pages/LoginForm/LoginForm";
import DetailPopup from "./pages/ViewDetailPopup/DetailPopup";
import SignUpForm from "./pages/SignUpForm/SignUpForm";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Routes>
                <Route path="/" element={<First_Page />} />
                <Route path="/Profie" element={<AccountManagement />} />
                <Route path="/pwdreset" element={<PasswordReset />} />
                <Route path="/OTPVerify" element={<OTPVerify />} />
                <Route path="/EnterNewPass" element={<EnterNewPass />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/detailpopup" element={<DetailPopup />} />
                <Route path="/signup" element={<SignUpForm />} />
            </Routes>
        </>
    );
}

export default App;
