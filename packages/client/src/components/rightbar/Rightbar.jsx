import React from "react";
import { Users } from "../../constants/dummyData";
import { Online } from "../online/Online";
import "./rightbar.css";

export const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" />
          <span className="bithdayText">
            Pola Foster and 3 other have a birthday Today
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
           { Users.map((user) => (
             <Online key={user.id} user={user} />
            ))}
        </ul>
      </div>
    </div>
  );
};
