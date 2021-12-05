import axios from 'axios';
import { useEffect, useState } from 'react';
import './fullComment.css';

const FullComment = ({ commentID, onDelete }) => {
   const [comment, setComment] = useState(null);

   useEffect(() => {
      commentID &&
         axios
            .get(`http://localhost:3001/comments/${commentID}`)
            .then(({ data }) => setComment(data))
            .catch();
   }, [commentID]);

   let commentMessage = <p>please select a comment!</p>;

   if (commentID) commentMessage = <p>Loading...</p>;

   if (comment) {
      const { name, email, body } = comment;
      commentMessage = (
         <div className="fullComment">
            <p>{name}</p>
            <p>{email}</p>
            <p>{body}</p>
            <button onClick={onDelete}>Delete</button>
         </div>
      );
   }

   return commentMessage;
};

export default FullComment;
