import React, { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        history.push("/login");
      }
    });

    return unsubscribe;
  }, [history]);

  useEffect(() => {
    if (user) {
      const unsubscribe = db
        .collection("posts")
        .orderBy("createdAt", "desc")
        .onSnapshot((snapshot) => {
          const postsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setPosts(postsData);
        });

      return unsubscribe;
    }
  }, [user]);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleLogout}>Logout</button>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.user}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
