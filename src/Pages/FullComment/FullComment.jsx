import { useEffect, useState } from 'react';
import {
   deleteComment,
   getSingleComment,
} from '../../Services/commentsService.js';
import './fullComment.css';

const FullComment = ({ match, history }) => {
   const [comment, setComment] = useState(null);

   const commentID = match.params.id;

   useEffect(() => {
      commentID &&
         getSingleComment(commentID)
            .then(({ data }) => setComment(data))
            .catch();
   }, [commentID]);

   const deleteHandler = async () => {
      try {
         await deleteComment(commentID);
         history.push('/');
         setComment(null);
      } catch (error) {}
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
