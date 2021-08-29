import 'react-tabs/style/react-tabs.css';
import './styles/index.scss';
import {
  faTachometerAlt,
  faGifts
} from '@fortawesome/free-solid-svg-icons';
import { Redirect, Route, Switch } from 'react-router';
import NotFound from 'pages/NotFound';
import EventsMonitor from './pages/EventsMonitor';
import Markets from './pages/Markets';
import GeneralInfo from './pages/GeneralInfo';
import DetailView from './features/markets/DetailView'
import { Layout } from 'pages/Layout';

const navs = [
  { text: "General Info", icon: faTachometerAlt, to: '/generalinfo', component: GeneralInfo },
  { text: 'Events Monitor', icon: faTachometerAlt, to: `/eventslog`, component: EventsMonitor },
  { text: 'Markets', icon: faGifts, to: '/markets',component: Markets},
]

function App() {
  return (
    <Layout
    navItems={navs}
  >
    <Switch>
      <Route exact path="/markets/:id" component={DetailView} />
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
