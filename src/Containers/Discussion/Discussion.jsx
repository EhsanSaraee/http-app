import axios from 'axios';
import { useEffect, useState } from 'react';
import Comment from '../../Components/Comment/Comment';
import FullComment from '../../Components/FullComment/FullComment';
import NewComment from '../../Components/NewComment/NewComment';
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
            console.log(error);
            setError(true);
         }
      };
      getComments();
   }, []);

   const selectCommentHandler = (id) => {
      setSelectedID(id);
   };

   const deleteHandler = async () => {
      try {
         const { data } = await axios.delete(
            `http://localhost:3001/comments/${selectedID}`
         );
         setComments(data);
      } catch (error) {
         console.log(error);
      }
   };

   const renderComments = () => {
      let renderValue = <p>Loading...</p>;
      if (error) {
         renderValue = <p>fetching data failed!</p>;
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

   return (
      <main>
         <section>{renderComments()}</section>
         <section>
            <FullComment commentID={selectedID} onDelete={deleteHandler} />
         </section>
         <section>
            <NewComment />
         </section>
      </main>
   );
};

export default Discussion;
