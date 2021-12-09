import FullComment from './Pages/FullComment/FullComment';
import HomePage from './Pages/HomePage';
import NewComment from './Pages/NewComment/NewComment';
import NotFound from './Pages/NotFound';

const routes = [
   { path: '/comments/:id', component: FullComment },
   { path: '/new-comment', component: NewComment },
   { path: '/', component: HomePage, exact: true },
   { component: NotFound },
];

export default routes;
