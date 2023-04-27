import style from "./SignIn.module.css";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function SignIn() {
 const nav = useNavigate()
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")

  const handleLogin = ()=>{
    alert(` You are logged in`)
   nav("/dashboard")
  }

  function handleSignIn(e) {
    e.preventDefault()
    if(email=== "" || password === ""){
      alert("Please fill the inputs")
    }else{
      const userData = {
        email,password
      }
      alert(`${email} you are logged in`)
      nav("/dashboard")
    }
  }
  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
        <span>Board.</span>
      </div>

      <div className={style.rightContainer}>
        <div className={style.headingContainer}>
          <h1>Sign In</h1>
          <p>Sign in to your account</p>
        </div>

        <div className={style.buttonContainer}>
          <button onClick={handleLogin}>
            <FcGoogle className={style.googleIcon} />{" "}
            <span>Sign in with Google</span>
          </button>
          <button>
            <GrApple className={style.appleIcon} />{" "}
            <span>Sign in with Apple</span>
          </button>
        </div>

        <div className={style.formContainer}>
          <form>
            <div>
              <label type="email" htmlFor="email">
                Email address
              </label>
              <input onChange={(e)=>setEmail(e.target.value)} placeholder="jhondoe@gmail.com" />
            </div>
            <div>
              <label type="password" htmlFor="password">
                Password
              </label>
              <input  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
            </div>
            <div className={style.forgotText}>
              <label>Forgot password?</label>
            </div>
            <button onClick={handleSignIn} className={style.btn}>Sign In</button>
          </form>
        </div>

        <div className={style.register}>
        <p>Don't have an account? <span>Register here</span></p>
        </div>
      </div>
    </div>
  );
}
