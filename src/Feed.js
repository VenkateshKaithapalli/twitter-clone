import React, { useEffect, useState } from "react";
import "./Feed.css";
import db from "./Firebase";
import Post from "./Post/Post";
import TweetBox from "./TweetBox";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((posts) => posts.data()))
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed--header">
        <h2>Home</h2>
      </div>
      <TweetBox />
	  <FlipMove>
      {posts.map((ele) => (
        <Post
          displayName={ele.displayName}
          username={ele.username}
          verified={ele.verified}
          text={ele.text}
          image={ele.image}
          avatar={ele.avatar}
        />
      ))}
	  </FlipMove>

      {/* <Post
        displayName="Kushal"
        username="kushal"
        verified={true}
        text="“You can know or not know how a car runs and still enjoy riding in a car.” ..."
        image={Ducati}
        avatar="./profile.png"
      />
      <Post
        displayName="Venkatesh"
        username="venky"
        verified={true}
        text="“I am emotional about engines, if you hurt my car, you hurt my heart.” ..."
        image={BlackLambo}
        avatar="./profile.png"
      />
      <Post
        displayName="Nuthan"
        username="NKumar"
        verified={true}
        text="Money may not buy happiness, but I'd rather cry in a Jaguar than on a bus"
        image={Orange}
        avatar="./profile.png"
      />
      <Post
        displayName="Mahesh"
        username="Mahi"
        verified={false}
        text="“A dream without ambition is like a car without gas…"
        image={Lambo}
        avatar="./profile.png"
      />
      <Post
        displayName="Arun"
        username="arun"
        verified={false}
        text="“Shoes make an outfit; they’re like rims for a car.”"
        image={Red}
        avatar="./profile.png"
      /> */}
    </div>
  );
};

export default Feed;
