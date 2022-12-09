import React,{forwardRef} from 'react'
import './Post.css'
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";
import { Avatar } from "@mui/material";

const Post = forwardRef(({ displayName, username, verified, text, image, avatar },ref)=> {
  return (
	<div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
			  {/* Venkatesh{" "} */}
			  {displayName}{" "}
                <span className="post__headerSpecial">
                { verified && <VerifiedUserIcon className="post__badge" />}@
                 {/* venky */}
				 {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              {/* <p>In nature, nothing is perfect and everything is perfect.</p> */}
			  <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineOutlinedIcon fontSize="small" />
            <RepeatOutlinedIcon fontSize="small" />
            <FavoriteBorderOutlinedIcon fontSize="small" />
            <PublishOutlinedIcon fontSize="small" />
          </div>
        </div>
      </div>
  )

}
);

export default Post