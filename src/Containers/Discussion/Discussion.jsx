import axios from 'axios';
import { useEffect, useState } from 'react';
import Comment from '../../Components/Comment/Comment';
import FullComment from '../../Components/FullComment/FullComment';
import NewComment from '../../Components/NewComment/NewComment';
import {
   getAllComments,
   addNewComment,
} from '../../Services/commentsService.js';
import { toast } from 'react-toastify';
import './discussion.css';
import { Link } from 'react-router-dom';

const Discussion = () => {
   const [comments, setComments] = useState(null);
   const [selectedID, setSelectedID] = useState(null);
   const [error, setError] = useState(false);

   useEffect(() => {
      const getComments = async () => {
         try {
            const { data } = await getAllComments();
            setComments(data);
         } catch (error) {
            setError(true);
         }
      };
      getComments();
   }, []);

   const selectCommentHandler = (id) => {
      setSelectedID(id);
   };

   const renderComments = () => {
      let renderValue = <p>Loading...</p>;
      if (error) {
         renderValue = <p>fetching data Failed!</p>;
         toast.error('there is an error!');
      }
      if (comments && !error) {
         renderValue = comments.map((comment) => (
            <Link key={comment.id} to={`/comments/${comment.id}`}>
               <Comment
                  comment={comment}
                  onClick={() => selectCommentHandler(comment.id)}
               />
            </Link>
         ));
      }
      return renderValue;
   };

   const postCommentHandler = async (comment) => {
      try {
         await addNewComment({
            ...comment,
            postID: 10,
         });
         const { data } = await getAllComments();
         setComments(data);
      } catch (error) {
         setError(true);
      }
   };

   return (
      <main>
         <section>{renderComments()}</section>
         {/* <section>
            <FullComment
               commentID={selectedID}
               setComments={setComments}
               setError={setError}
               setSelectedID={setSelectedID}
            />
         </section>
         <section>
            <NewComment onAdd={postCommentHandler} />
         </section> */}
      </main>
   );
};

export default Discussion;
