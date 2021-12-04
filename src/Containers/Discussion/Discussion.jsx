import axios from 'axios';
import { useEffect, useState } from 'react';
import Comment from '../../Components/Comment/Comment';
import FullComment from '../../Components/FullComment/FullComment';
import NewComment from '../../Components/NewComment/NewComment';
import './discussion.css';

const Discussion = () => {
   const [comments, setComments] = useState(null);
   const [selectedID, setSelectedID] = useState(null);

   useEffect(() => {
      const getComments = async () => {
         try {
            const { data } = await axios.get(
               'https://jsonplaceholder.typicode.com/comments'
            );
            setComments(data.slice(0, 4));
         } catch (error) {
            console.log(error);
         }
      };
      getComments();
   }, []);

   const selectCommentHandler = (id) => {
      setSelectedID(id);
   };

   return (
      <main>
         <section>
            {comments ? (
               comments.map((comment) => (
                  <Comment
                     key={comment.id}
                     comment={comment}
                     onClick={() => selectCommentHandler(comment.id)}
                  />
               ))
            ) : (
               <p>Loading...</p>
            )}
         </section>
         <section>
            <FullComment commentID={selectedID} />
         </section>
         <section>
            <NewComment />
         </section>
      </main>
   );
};

export default Discussion;
