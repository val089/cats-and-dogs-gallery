import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <h1 className={classes.logo}>DogsAndCatsGallery</h1>

        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${classes.link} ${classes.link_active}` : classes.link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? `${classes.link} ${classes.link_active}` : classes.link
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              isActive ? `${classes.link} ${classes.link_active}` : classes.link
            }
          >
            Favourites
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
