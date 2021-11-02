import React from 'react'
import propTypes from 'prop-types'

const Post = ({post}) => {
    return(
        <div>
            {post.map((article, index) => <Post key={index}>Post</Post>)}
        </div>
    )
}


export default Post
