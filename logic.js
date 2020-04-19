/*
Author: Anas Nasrallah. 
Purpose: Tweeter Project.
Date: 08.04.20
*/

/* This file represents the Logic Module, a module which is 
responsible for maintaining the data of the program (the posts
and the comments).
It returns several function getPosts, addPost, removePost,
addComment, removeComment */

const Tweeter = function(){

    let posts =  [];
    let postIdCounter = 0;
    let commentIdCounter = 0;

    const getPosts = function(){
        return posts
    }

    const addPost = function(text){
        newPost = {
            id: "p" + (postIdCounter + 1),
            text: text,
            comments: []
        }
        posts.push(newPost);
        postIdCounter++;
    }

    const removePost = function(postID){
        for(let i = 0; i < posts.length; i++){
            if(posts[i].id === postID){
                posts.splice(i, 1);
            }
        }
    }

    const addComment = function(text, postID){
        newComment = {
            id: "c" + (commentIdCounter + 1),
            text: text
        }
        for(let post of posts){
            if (post.id === postID){
                post.comments.push(newComment);
                commentIdCounter++;
            }
        }
    }

    const removeComment = function(postID, commentID){
        for(let post of posts){
            if (post.id === postID){
                for(let i = 0; i < post.comments.length; i++){
                    if(post.comments[i].id === commentID){
                        post.comments.splice(i, 1);  
                    }
                }
            }
        }
    }

    return{
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}


