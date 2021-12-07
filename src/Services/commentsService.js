import http from './httpService';

export const getAllComments = () => http.get('/comments');

export const addNewComment = (data) => http.post('/comments', data);

export const deleteComment = (commentID) =>
   http.delete(`/comments/${commentID}`);

export const getSingleComment = (commentID) =>
   http.get(`/comments/${commentID}`);
