import React from "react";
import "./post.css";
import { MdMoreVert } from "react-icons/md";
import { Users } from "../../constants/dummyData";

export const Post = ({ post }) => {

  const [like, setLike] = React.useState(0);
  const [isLiked, setIsLiked] = React.useState(false);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };


  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MdMoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
              <img className="likeIcon" alt="" src="/assets/like.png" onClick={handleLike}/>
              <img className="likeIcon" alt="" src="/assets/heart.png" onClick={handleLike}/>
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">{post.comment} comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};
