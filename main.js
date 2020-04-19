/*
Author: Anas Nasrallah. 
Purpose: Tweeter Project.
Date: 17.04.20
*/


/* This file represents the main of the program (the controller). 
It connects the two other modules and handles the event listeners. */

const tweeter = Tweeter()
const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts())

// This is the function that the Twit button invokes.
const post = function(){
    postText = $('#input').val()
    if(postText){   
        // this if statement prevents adding empty posts
        tweeter.addPost(postText)
        renderer.renderPosts(tweeter.getPosts())
    }
}

$('body').on('click', '.addComment', function(){
    $post = $(this).closest('.post');
    postID = $post.data().id;
    commentText = $post.find('.commentText').val()
    if(commentText){     
        // this if statement prevents adding empty comments
        tweeter.addComment(commentText, postID);
        renderer.renderPosts(tweeter.getPosts())
    }
})

$('body').on('click', '.delete', function(){
    $post = $(this).closest('.post');
    postID = $post.data().id;
    tweeter.removePost(postID);
    renderer.renderPosts(tweeter.getPosts())
})

$('body').on('click', '.delete-comment', function(){
    $post = $(this).closest('.post');
    postID = $post.data().id;
    $comment = $(this).closest('.comments');
    commentID = $comment.data().id
    tweeter.removeComment(postID, commentID);
    renderer.renderPosts(tweeter.getPosts())
})
