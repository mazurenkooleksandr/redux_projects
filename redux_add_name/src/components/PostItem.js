import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postsSlice";

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  const { id, title } = post || {};

  return (
    <div
      className="flex w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4"
      onClick={() => dispatch(deletePost(id))}
    >
      {title}
    </div>
  );
};

export default PostItem;
