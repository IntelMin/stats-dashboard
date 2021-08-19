import logo from 'assets/logo_dark.png';
import { NavLink } from 'react-router-dom';
import classes from 'utils/classes';
import style from './style.module.scss';

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {

  return (
    <div className={classes(style.container, className)}>
      <div className={style.brand}>
        <NavLink to="/" className={style.logoLink}>
          <img src={logo} alt="logo" className={style.logoImg} />
        </NavLink>
      </div>
      <div className="header-content">
        <h1 className="title">Admin Panel</h1>
      </div>
    </div>
  );
};

export default Header;
