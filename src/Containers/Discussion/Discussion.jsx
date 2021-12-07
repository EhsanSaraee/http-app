import axios from 'axios';
import { useEffect, useState } from 'react';
import Comment from '../../Components/Comment/Comment';
import FullComment from '../../Components/FullComment/FullComment';
import NewComment from '../../Components/NewComment/NewComment';
import { toast } from 'react-toastify';
import './discussion.css';

const Discussion = () => {
   const [comments, setComments] = useState(null);
   const [selectedID, setSelectedID] = useState(null);
   const [error, setError] = useState(false);

   useEffect(() => {
      const getComments = async () => {
         try {
            const { data } = await axios.get('http://localhost:3001/comments');
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
            <Comment
               key={comment.id}
               comment={comment}
               onClick={() => selectCommentHandler(comment.id)}
            />
         ));
      }
      return renderValue;
   };

   const postCommentHandler = async (comment) => {
      try {
         await axios.post('http://localhost:3001/comments', {
            ...comment,
            postID: 10,
         });
         const { data } = await axios.get('http://localhost:3001/comments');
         setComments(data);
      } catch (error) {
         setError(true);
      }
   };

   return (
      <main>
         <section>{renderComments()}</section>
         <section>
            <FullComment
               commentID={selectedID}
               setComments={setComments}
               setError={setError}
            />
         </section>
         <section>
            <NewComment onAdd={postCommentHandler} />
         </section>
      </main>
   );
};

export default Discussion;
