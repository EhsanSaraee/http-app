import './comment.css';

const Comment = ({ comment, onClick }) => {
   const { name, email } = comment;
   return (
      <div className="comment" onClick={onClick}>
         <p>name : {name}</p>
         <p>email : {email}</p>
      </div>
   );
};

export default Comment;
