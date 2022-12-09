import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import db from "./Firebase";
import "./TweetBox.css";

const TweetBox = () => {
  const [tweetmsg, setTweetmsg] = useState("");
  const [tweetimg, setTweetimg] = useState("");

const submitHandler=(e)=>{

		e.preventDefault();

		db.collection("posts").add({
		  displayName: "venkatesh",
		  username: "venky",
		  verified: true,
		  text: tweetmsg,
		  image: tweetimg,
		  avatar:"./profile.png"
		});

		setTweetmsg("");
		setTweetimg("");
}
  return (
    <div className="tweetbox">
      <form onSubmit={submitHandler}>
        <div className="tweet_input">
          <Avatar src="./profile.png" />
          <input
            type="text"
            value={tweetmsg}
			onChange={e=>setTweetmsg(e.target.value)}
            placeholder="What's happening ?"
          />
        </div>
        <input
          type="text"
		  value={tweetimg}
		  onChange={e=>setTweetimg(e.target.value)}
          placeholder="Optional: Enter Image URL.."
          className="tweet_input_image"
        />
        <Button type='submit' className="tweetbox_tweetbtton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
