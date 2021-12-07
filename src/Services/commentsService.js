import http from './httpService';

export const getAllComments = () => http.get('/comments');

export const addNewComment = (data) => {
   const token = 'SECURE TOKEN';
   const header = {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   };
   return http.post('/comments', data, header);
};

export const deleteComment = (commentID) =>
   http.delete(`/comments/${commentID}`);

export const getSingleComment = (commentID) =>
   http.get(`/comments/${commentID}`);
