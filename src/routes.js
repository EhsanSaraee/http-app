import HomePage from './Pages/HomePage';
import NewCommentPage from './Pages/NewCommentPage';
import NotFound from './Pages/NotFound';

const routes = [
   { path: '/new-comment', component: NewCommentPage },
   { path: '/', component: HomePage, exact: true },
   { component: NotFound },
];

export default routes;
