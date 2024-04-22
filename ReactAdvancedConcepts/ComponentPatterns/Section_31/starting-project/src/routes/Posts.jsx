import Post from "../components/Post";
import PostsList from "../components/PostsList";
import MainHeader from "../components/MainHeader";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Posts() {
  // const [modalIsVisible, setModalIsVisible] = useState(true);

  // function showModalHandler(){
  //   setModalIsVisible(true);
  // }
  
  // function hideModalHandler() {
  //   setModalIsVisible(false);
  // }

  return (
    <>
      <Outlet/>
      {/* <MainHeader onCreatePost={showModalHandler} /> */}
      <main>
        <PostsList/>
      </main>  
    </>
  );
}

export default Posts;









