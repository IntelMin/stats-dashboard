import 'react-tabs/style/react-tabs.css';
import './styles/index.scss';
import {
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Redirect, Route, Switch } from 'react-router';
import NotFound from 'pages/NotFound';
import EventsMonitor from './pages/EventsMonitor';
import { Layout } from 'pages/Layout';

const navs = [
  { text: 'Events Monitor', icon: faTachometerAlt, to: `/eventslog`, component: EventsMonitor }
]

function App() {
  return (
    <Layout
    navItems={navs}
  >
    <Switch>
      {
        navs.map((nav) => {
          return (
            <Route key={nav.to} path={nav.to} component={nav.component} exact />
          )
        })
      }
      <Redirect exact from="/" to="/eventslog" />
      <Route component={NotFound} />
    </Switch>
  </Layout>
  );
}

export default App;
