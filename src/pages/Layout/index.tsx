import block from 'bem-cn-lite';
// import * as Sentry from '@sentry/react';

import Header from './Header';
import Sidebar, { SidebarNavItems } from './Sidebar';
// import { ErrorOverlay } from './ErrorOverlay';

import './style.scss';

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
        <div className={b('main-content')}>
          {/* <Sentry.ErrorBoundary fallback={ErrorOverlay}> */}
            {children}
          {/* </Sentry.ErrorBoundary> */}
        </div>
      </div>
    </div>
  );
};

export { Layout };
