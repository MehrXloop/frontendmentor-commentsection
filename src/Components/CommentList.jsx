import React, { useState } from 'react'
import Data from "../data.json"
import Comment from './Comment'

function CommentList() {
     const [comments, setComments] = useState(Data.comments)
     console.log(comments)
  return (
    <ul className='comments'>
        {comments.map((comment=>{
            return <Comment key={comment.id} comment={comment}/>
        }))}
    </ul>
  )
}

export default CommentList