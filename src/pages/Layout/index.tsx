import block from 'bem-cn-lite';
import { useState } from 'react';
import Header from './Header';
import Sidebar, { SidebarNavItems } from './Sidebar';

interface Props {
  children?: any;
  navItems: SidebarNavItems;
}

const b = block('layout');

const Layout = ({ children, navItems }: Props) => {

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <div className={b('container')}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} className={b('header')} />
      <div className={b('main')}>
        <Sidebar navItems={navItems} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div id="scrollableDiv" className={b('main-content')}>
            {children}
        </div>
      </div>
    </div>
  );
};

export { Layout };
