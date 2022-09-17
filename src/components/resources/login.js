import React from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./blog.css";
export default function Login({ setIsAuth }) {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth ", true);
        setIsAuth(true);
        alert("Login Successfully");
        navigate("/resources");
      })
      .catch((error) =>
        alert(
          "You Don't have access to this page...Please contact us for further access..!"
        )
      );
  };
  return (
    <div className="loginPage">
      <p>Sign in with Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

// import React, { useState } from "react";
// import "./login.css";
// import { Link, useNavigate } from "react-router-dom";
// import { auth } from "./firebase";
// // import logo from "./logo.png";

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const signIn = (e) => {
//     e.preventDefault();
//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then((auth) => {
//         navigate("/blog");
//         console.log(auth);
//         // alert("success");
//       })
//       .catch((error) =>
//         alert(
//           "You Don't have access to this page...Please contact us for further access..!"
//         )
//       );
//   };

//   //   const register = (e) => {
//   //     e.preventDefault();

//   //     auth
//   //       .createUserWithEmailAndPassword(email, password)
//   //       .then((auth) => {
//   //         // it successfully created a new user with email and password
//   //         if (auth) {
//   //           navigate("/");
//   //         }
//   //       })
//   //       .catch((error) => alert(error.message));
//   //   };

//   return (
//     <div className="login">
//       <Link to="/login">
//         {/* <img className="login__logo" src={logo} /> */}
//       </Link>

//       <div className="center">
//         <h1>Login</h1>

//         <form>
//           <div class="text">
//             <input
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <span></span>
//             <label>E-mail</label>
//           </div>

//           <div class="text">
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <span></span>
//             <label>password</label>
//           </div>

//           <button
//             type="submit"
//             onClick={signIn}
//             className="loginButton"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
