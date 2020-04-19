/*
Author: Anas Nasrallah. 
Purpose: Tweeter Project.
Date: 17.04.20
*/

/* This file represents the Renderer Module, a module which is 
responsible for rendering the whole program. 
It returns one function renderPosts() */

const Renderer = function(){

    // A function that creates and returns a div for a single post
    const createPost = function(post){
        $postdiv = $(`<div>${post['text']}</div>`);
        $postdiv.attr('class', 'post');
        $postdiv.attr('data-id', post['id']);
        $postdiv.attr('data-text', post['text']);
        
        return $postdiv;
    }

    // A function that creates and returns a div for a single post
    const createComment = function(comment){
        commentDel = '<span class="delete-comment">X</span>'
        $commentdiv = $(`<div>${commentDel} ${comment['text']}</div>`);
        $commentdiv.attr('class', 'comments');
        $commentdiv.attr('data-id', comment['id']);
        $commentdiv.attr('data-text', comment['text']);
        
        return $commentdiv;
    }

    const renderPosts = function(posts){
        $('#posts').empty();
        $posts = $('#posts');
        for(let post of posts){
            $postdiv = createPost(post);
            for(let comment of post['comments']){
                $commentdiv = createComment(comment);
                $postdiv.append($commentdiv);
            }
            commentInput = '<br><input class = "commentText" placeholder="Got something to say">'
            commentBtn = '<button class="addComment">Comment</button><br>'
            $postdiv.append($(commentInput + commentBtn))
            $postdiv.append($('<div class = "delete"> Delete Post </div>'))
            $posts.append($postdiv)
        }
    }
    
    return {
        renderPosts
    }
}