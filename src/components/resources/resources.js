import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { useNavigate } from "react-router-dom";
import "../ml/ml.css";
import "./resources.css";
import { Container, Button } from "react-bootstrap";

export default function Resources({ isAuth }) {
  let navigate = useNavigate();
  const Blog = () => {
    navigate("/blog");
  };
  const [postLists, setPostList] = useState([]);

  const postCollectionRef = collection(db, "customersData");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    console.log(auth.currentUser.uid);
    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "customersData", id);
    await deleteDoc(postDoc);
  };
  return (
    <div className="intro">
      <div>
        <Container>
          <button className="button" onClick={Blog}>
            Add a blog
          </button>
          <Button> This is division </Button>
        </Container>
      </div>
      <div className="homePage">
        {postLists.map((posteach) => {
          return (
            <div className="post">
              <div className="title">
                <h1>
                  {" "}
                  #{posteach.title}
                  <div className=" tooltip-wrap deletePost">
                    {isAuth && posteach.author.id === auth.currentUser.uid && (
                      <button
                        className="deleteButton"
                        onClick={() => {
                          deletePost(posteach.id);
                        }}
                      >
                        &#128465;{" "}
                      </button>
                    )}
                  </div>{" "}
                  <hr />
                </h1>
              </div>
              <div className="postTextContainer">
                {posteach.post}
                <hr />
                {posteach.url.length > 10 ? (
                  <div className="ytl">
                    <iframe
                      width="360"
                      height="315"
                      src={posteach.url}
                      title="YouTube video "
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                ) : (
                  <hr />
                )}
              </div>

              <div className="four">
                <hr />@{posteach.author.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// //import { query, orderBy, limit } from "firebase/firestore";

// import { useNavigate } from "react-router-dom";
// import db from "./firebase";
// import "../ml/ml.css";
// import "./resources.css";
// import { Container, Button } from "react-bootstrap";
// export default function Resources( ) {
//   let navigate = useNavigate();
//   const Blog = () => {
//     navigate("/blog");
//   };

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const ref = db.collection("customersData").orderBy("timeStamp", "desc");
//   // const q = query(ref, orderBy("timeStamp"), limit(45));
//   function getData() {
//     setLoading(true);
//     ref.onSnapshot((QuerySnapshot) => {
//       const items = [];
//       QuerySnapshot.forEach((doc) => {
//         items.push(doc.data());
//       });
//       setData(items);
//       setLoading(false);
//     });
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   console.log(ref);

//   if (loading) {
//     return <h1>Loading....</h1>;
//   }

//   return (
//     <div className="intro">
//       <div className="button">
//         <Container>
//           <Button className="   w3-black " onClick={Blog}>
//             Add a Blog
//           </Button>
//         </Container>
//       </div>
//       <div className="float">this is the division</div>
//       <div>
//         <h1> Blogs</h1>
//         {data.map((blog) => (
//           <div key={blog.id}>
//             <h2>
//               <iframe
//                 width="360"
//                 height="315"
//                 src={"https://youtube.com/embed/zL0dKETbCNE"}
//                 title="YouTube video "
//                 frameborder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowfullscreen
//               ></iframe>
//               {blog.title}{" "}
//             </h2>
//             <p> {blog.post} </p>
//           </div>
//         ))}
//       </div>
//       <div></div>
//     </div>
//   );
// }
