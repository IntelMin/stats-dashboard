import logo from 'assets/logo_dark.png';
import { NavLink } from 'react-router-dom';
import { classes, toggleClicked } from 'utils/utils';
import style from './style.module.scss';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { Typography } from '@material-ui/core';
interface Props {
  className?: string;
  menuOpen?: boolean;
  setMenuOpen?: any;
}

const Header = ({ className, menuOpen, setMenuOpen }: Props) => {
  return (
    <div className={classes(style.container, className)}>
      <div className={style.brand}>
        <IconButton edge="start" className={classes(style.toggle, className)} onClick={ () => {setMenuOpen(!menuOpen);toggleClicked();} } color="inherit" aria-label="menu">
          {menuOpen ? <MenuIcon /> : <MenuOpenIcon />}
        </IconButton>
        <NavLink to="/" className={style.logoLink}>
          <img src={logo} alt="logo" className={style.logoImg} />
        </NavLink>
      </div>
      <div className="header-content">
        <Typography className="title" variant="h4" >Admin Panel</Typography>
      </div>
    </div>
  );
};

export default Header;
