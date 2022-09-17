import React, { useEffect, useState } from "react";
import "./blog.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "./firebase";
import { useNavigate } from "react-router-dom";
export default function Blog({ isAuth }) {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [post, setPost] = useState(" ");
  const [url, setUrl] = useState(" ");
  const postCollectionRef = collection(db, "customersData");
  const createPost = async () => {
    console.log("Create function call");

    await addDoc(postCollectionRef, {
      title,
      post,
      url,
      timeStamp: serverTimestamp(),
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    })
      .then((docRef) => {
        alert("Data Successfully Submitted");
      })
      .catch((error) => {
        console.error("Error In adding document: ", error);
      });

    setTitle("");
    setPost("");

    navigate("/resources");
  };
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1> Create a Post</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input
            placeholder="Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputGp">
          <label> Blogmsg:</label>
          <textarea
            placeholder="text.."
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          <div className="inputGp">
            <label> Youtube video Url:</label>
            <input
              placeholder="Add youtube video embed url...."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        </div>
        <button className="submit" onClick={createPost}>
          Submit Post
        </button>
      </div>
    </div>
  );
}

// import React from "react";
// import { useState } from "react";
// import db from "./firebase";
// import {
//   // collection,
//   // getDocs,
//   // addDoc,
//   // setDoc,
//   // doc,
//   // deleteDoc,
//   // query,
//   // where,
//   serverTimestamp,
// } from "firebase/firestore";
// import "./blog.css";
// export default function Blog() {
//   const [Name, setName] = useState(" ");
//   const [msg, setMsg] = useState(" ");
//   const [timeStamp, setTimestamp] = useState(" ");
//   // const collectionRef = db.collection("customersData");
//   // const payload ={ Name , msg , timeStamp :serverTimestamp()};
//   // const docref =  addDoc(collectionRef , payload);
//   // const submit =() => {
//   //   addDoc(collectionRef , payload);
//   // }
//   const submit = (e) => {
//     e.preventDefault();
//   //  timeStamp : serverTimestamp();
//     db.collection("customersData")
//       .add({
//         Name: Name,
//         msg: msg,
//         timeStamp : serverTimestamp(),
//       })
//       .then((docRef) => {
//         alert("Data Successfully Submitted");
//       })
//       .catch((error) => {
//         console.error("Error In adding document: ", error);
//       });

//     setName("");
//     setMsg("");
//     };
//   return (
//     <div className="blog">
//       <div className="w3-col m6">
//         <form action="" target="_blank">
//           <div
//             className="w3-row-padding"
//             style={{ margin: "0 -16px 8px -16px" }}
//           >
//             <div className="w3-half">
//               <input
//                 id="name"
//                 className="w3-input w3-border"
//                 type="text"
//                 placeholder="Name"
//                 value={Name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//           </div>
//           <input
//             id="msg"
//             className="w3-input w3-border"
//             type="text"
//             placeholder="Msg"
//             value={msg}
//             onChange={(e) => setMsg(e.target.value)}
//           />
//           <button
//             className="w3-button w3-black w3-section w3-right"
//             type="submit"
//             onClick={submit}
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// // import React from "react";
// // import { useState } from "react";
// // import db  from "./firebase";
// // import {
// //   collection,
// //   getDocs,
// //   addDoc,
// //   setDoc,
// //   doc,
// //   deleteDoc,
// //   query,
// //   where,

// // } from "firebase/firestore";
// // import "./blog.css";
// // export default function Blog() {
// //   const [Name, setName] = useState(" ");
// //   const [msg, setMsg] = useState(" ");
// //   const [timeStamp, setTimestamp] = useState(" ");
// //   const submit = (e) => {
// //     e.preventDefault();
// //     db.collection("customersData").add({
// //       Name: Name,
// //       msg: msg,
// //     }).then((docRef) => {
// //         alert("Data Successfully Submitted");
// //     })
// //     .catch((error) => {
// //         console.error("Error In adding document: ", error);
// //     });

// //     setName("");
// //     setMsg("");
// //   };
// //   return (
// //     <div className="blog">
// //       <div className="w3-col m6">
// //         <form action="" target="_blank">
// //           <div
// //             className="w3-row-padding"
// //             style={{ margin: "0 -16px 8px -16px" }}
// //           >
// //             <div className="w3-half">
// //               <input
// //                 id="name"
// //                 className="w3-input w3-border"
// //                 type="text"
// //                 placeholder="Name"
// //                 value={Name}
// //                 onChange={(e) => setName(e.target.value)}
// //               />
// //             </div>
// //           </div>
// //           <input
// //             id="msg"
// //             className="w3-input w3-border"
// //             type="text"
// //             placeholder="Msg"
// //             value={msg}
// //             onChange={(e) => setMsg(e.target.value)}
// //           />
// //           <button
// //             className="w3-button w3-black w3-section w3-right"
// //             type="submit"
// //             onClick={submit}
// //           >
// //             Submit
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }
