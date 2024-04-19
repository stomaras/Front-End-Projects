import React, { useState } from 'react'
import Post from './Post'
import classes from "./PostsList.module.css";
import NewPost from "./NewPost"

const PostsList = () => {

    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value)
    }

    function bodyAuthorHandler(event){
        setEnteredAuthor(event.target.value)
    }

  return (
    <>
        <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={bodyAuthorHandler}/>
        <ul className={classes.posts}>
            <Post author={enteredAuthor} body={enteredBody}/>
            <Post author={enteredAuthor} body="Check out the full courses"/>
        </ul>    
    </>
  )
}

export default PostsList