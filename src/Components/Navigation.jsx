import { NavLink, withRouter } from 'react-router-dom';

const items = [
   { name: 'Home', to: '/', exact: true },
   { name: 'New Comment', to: '/new-comment' },
];

const Navigation = ({ location }) => {
   return (
      <nav>
         <ul>
            {items.map((item) => (
               <li key={item.to}>
                  <NavLink
                     to={item.to}
                     activeClassName="activeLink"
                     exact={item.text || false}
                  >
                     {item.name}
                  </NavLink>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default withRouter(Navigation);
