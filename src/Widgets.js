import React from 'react'
import './Widgets.css';
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
  } from "react-twitter-embed";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Widgets = () => {
  return (
	<div className='widgets'>
	  <div className='widgets_input'>
          <SearchOutlinedIcon className='widgets_searchIcon'/>
		  <input placeholder='Search Twitter' type='text' />
	  </div>

	  <div className='widget_container'>
		<h2>What's happening</h2>
		<TwitterTweetEmbed tweetId={"1601174963503140864"} />

		<TwitterTweetEmbed tweetId={"1597525626126471169"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="bdivakarsingh"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "bdivakarsingh" }}
        />
		</div>
	</div>
  )
}

export default Widgets