import axios from 'axios';
import { useEffect, useState } from 'react';
import {
   getAllComments,
   deleteComment,
   getSingleComment,
} from '../../Services/commentsService.js';
import './fullComment.css';

const FullComment = ({ commentID, setComments, setError, setSelectedID }) => {
   const [comment, setComment] = useState(null);

   useEffect(() => {
      commentID &&
         getSingleComment(commentID)
            .then(({ data }) => setComment(data))
            .catch();
   }, [commentID]);

   const deleteHandler = async () => {
      try {
         await deleteComment(commentID);
         const { data } = await getAllComments();
         setComments(data);
         setComment(null);
         setSelectedID(null);
      } catch (error) {
         setError(true);
      }
   };

   let commentMessage = <p>please select a comment!</p>;

   if (commentID) commentMessage = <p>Loading...</p>;

   if (comment) {
      const { name, email, body } = comment;
      commentMessage = (
         <div className="fullComment">
            <p>{name}</p>
            <p>{email}</p>
            <p>{body}</p>
            <button onClick={deleteHandler}>Delete</button>
         </div>
      );
   }

   return commentMessage;
};

export default FullComment;
