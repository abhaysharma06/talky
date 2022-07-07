import React from 'react'
import './closeFriends.css'

export const CloseFriends = ({user}) => {
  return (
    <div>
        <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src={user.profilePicture}
              alt='Jhon'
            />
            <span className="sidebarFriendName">{user.username}</span>
          </li>
    </div>
  )
}