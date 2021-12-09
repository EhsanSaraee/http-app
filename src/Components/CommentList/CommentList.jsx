import { useEffect, useState } from 'react';
import Comment from './Comment/Comment';
import { getAllComments } from '../../Services/commentsService.js';
import { toast } from 'react-toastify';
import './commentList.css';
import { Link } from 'react-router-dom';

const CommentList = () => {
   const [comments, setComments] = useState(null);
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

   const renderComments = () => {
      let renderValue = <p>Loading...</p>;
      if (error) {
         renderValue = <p>fetching data Failed!</p>;
         toast.error('there is an error!');
      }
      if (comments && !error) {
         renderValue = comments.map((comment) => (
            <Link key={comment.id} to={`/comments/${comment.id}`}>
               <Comment comment={comment} />
            </Link>
         ));
      }
      return renderValue;
   };

   return <section>{renderComments()}</section>;
};

export default CommentList;
