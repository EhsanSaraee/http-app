import { useState } from 'react';
import { addNewComment } from '../../Services/commentsService';
import './newComment.css';

const NewComment = ({ history }) => {
   const [comment, setComment] = useState({
      name: '',
      email: '',
      text: '',
   });

   const changeHandler = (event) => {
      setComment({ ...comment, [event.target.name]: event.target.value });
   };

   const postCommentHandler = async (comment) => {
      try {
         await addNewComment({
            ...comment,
            postID: 10,
         });
         history.push('/');
      } catch (error) {}
   };

   return (
      <div className="newComment">
         <div>
            <label htmlFor="name">name</label>
            <input type="text" id="name" name="name" onChange={changeHandler} />
         </div>
         <div>
            <label htmlFor="email">email</label>
            <input
               type="email"
               id="email"
               name="email"
               onChange={changeHandler}
            />
         </div>
         <div>
            <label htmlFor="text">text</label>
            <input
               type="textarea"
               id="text"
               name="text"
               onChange={changeHandler}
            />
         </div>
         <button onClick={() => postCommentHandler(comment)}>
            Add New Comment
         </button>
      </div>
   );
};

export default NewComment;
