import Comment from '../../Components/Comment/Comment';
import FullComment from '../../Components/FullComment/FullComment';
import NewComment from '../../Components/NewComment/NewComment';
import style from './Discussion.module.css';

const Discussion = () => {
   return (
      <main>
         <section>
            <Comment />
            <Comment />
            <Comment />
         </section>
         <section>
            <FullComment />
         </section>
         <section>
            <NewComment />
         </section>
      </main>
   );
};

export default Discussion;
