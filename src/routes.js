import FullComment from './Components/FullComment/FullComment';
import HomePage from './Pages/HomePage';
import NewCommentPage from './Pages/NewCommentPage';
import NotFound from './Pages/NotFound';

const routes = [
   { path: '/comments/:id', component: FullComment },
   { path: '/new-comment', component: NewCommentPage },
   { path: '/', component: HomePage, exact: true },
   { component: NotFound },
];

export default routes;
