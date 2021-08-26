import block from 'bem-cn-lite';
import Header from './Header';
import Sidebar, { SidebarNavItems } from './Sidebar';

interface Props {
  children?: any;
  navItems: SidebarNavItems;
}

const b = block('layout');

const Layout = ({ children, navItems }: Props) => {
  return (
    <div className={b('container')}>
      <Header className={b('header')} />
      <div className={b('main')}>
        <Sidebar navItems={navItems} />
        <div id="scrollableDiv" className={b('main-content')}>
            {children}
        </div>
      </div>
    </div>
  );
};

export { Layout };
