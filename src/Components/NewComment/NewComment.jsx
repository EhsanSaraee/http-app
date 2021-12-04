import './newComment.css';

const NewComment = () => {
   return (
      <div className="newComment">
         <div>
            <label htmlFor="name">name</label>
            <input type="text" id="name" />
         </div>
         <div>
            <label htmlFor="email">email</label>
            <input type="email" id="email" />
         </div>
         <div>
            <label htmlFor="body">body</label>
            <input type="textarea" id="body" />
         </div>
      </div>
   );
};

export default NewComment;
