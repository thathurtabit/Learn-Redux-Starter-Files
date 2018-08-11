// increment
function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// add comment
function addComment(postID, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postID,
        author,
        comment
    }
}

// remove comment
function removeComment(postID, index) {
    return {
        type: 'REMOVE_COMMENT',
        index,
        postID
    }
}