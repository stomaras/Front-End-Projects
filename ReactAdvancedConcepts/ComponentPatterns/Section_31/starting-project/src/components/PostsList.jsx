import React from 'react'
import Post from './Post'
import classes from "./PostsList.module.css";
import { useLoaderData } from 'react-router-dom';
import NewPost from "../routes/NewPost"
import Modal from './Modal';

const PostsList = () => {
    const posts = useLoaderData();


  return (
    <>

        {posts.length > 0 && (
            <ul className={classes.posts}>
                    {posts.map((post) => {
                        return <Post key={post.body} author={post.author} body={post.body}/>
                    })}
            </ul>
        )}
        {posts.length === 0 && <div style={{textAlign:'center', color:'white'}}>
            <h2>There are no posts yet.</h2>
            <p>Start adding some!</p>
        </div>}
    </>
  )
}

export default PostsList