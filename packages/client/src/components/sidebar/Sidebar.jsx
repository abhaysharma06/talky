import "./sidebar.css";
import React from "react";
import {
  MdRssFeed,
  MdSlowMotionVideo,
  MdGroups,
  MdBookmark,
  MdEventNote,
} from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import {
  BsFillQuestionCircleFill,
  BsFillChatLeftTextFill,
} from "react-icons/bs";

export const Sidebar = () => {
  return (
    <div className="sidebar scroller">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdRssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <BsFillChatLeftTextFill className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <MdSlowMotionVideo className="sidebarIcon" />
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <MdGroups className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <MdBookmark className="sidebarIcon" />
            <span className="sidebarListItemText">BookMark</span>
          </li>
          <li className="sidebarListItem">
            <MdEventNote className="sidebarIcon" />
            <span className="sidebarListItemText">Notes</span>
          </li>
          <li className="sidebarListItem">
            <BsFillQuestionCircleFill className="sidebarIcon" />
            <span className="sidebarListItemText">Question</span>
          </li>
          <li className="sidebarListItem">
            <GiGraduateCap className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>

        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/2.jpeg"
              alt="Jhon"
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/4.jpeg"
              alt="Jhon"
            />
            <span className="sidebarFriendName">Jack Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/1.jpeg"
              alt="Jhon"
            />
            <span className="sidebarFriendName">Rahul Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/3.jpeg"
              alt="Jhon"
            />
            <span className="sidebarFriendName">Rohit Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/5.jpeg"
              alt="Jhon"
            />
            <span className="sidebarFriendName">Rex Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/6.jpeg"
              alt="Jhon"
            />
            <span className="sidebarFriendName">Rex Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/7.jpeg"
              alt="Jhon"
            />
            <span className="sidebarFriendName">Rex Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/8.jpeg"
              alt="Jhon"
            />
            <span className="sidebarFriendName">Rex Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/10.jpeg"
              alt="Jhon"
            />
            <span className="sidebarFriendName">Rex Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/9.jpeg"
              alt="Jhon"
            />
            <span className="sidebarFriendName">Rex Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
