
import { useState } from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = ()=> {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();

  const raw = (phone ?? '').trim();
  if (!raw) {                                 
    toast.error('Please enter your phone number');
    return;
  }

  const digits = (phone || '').replace(/[^0-9]/g, '');
  if (digits.length < 10 || digits.length > 14) {
    toast.error('Invalid phone number');
    return;
  }

  setError('');
  navigate('/main');
};


  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>Login Page</h1>

      <PhoneInput
        country={'ng'}
        value={phone}
        onChange={setPhone}
        inputStyle={{
          width: "100%",
          height: "40px",
        }}
      />

      <button className="btn-login" onClick={handleLogin}>Login</button>
    </div>
    
  );
  
}

export default Login




