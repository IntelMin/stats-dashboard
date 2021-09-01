import 'react-tabs/style/react-tabs.css';
import './styles/index.scss';
import {
  faTachometerAlt,
  faInfoCircle,
  faGavel,
  faExchangeAlt,
  faGifts,
  faHandHoldingUsd
} from '@fortawesome/free-solid-svg-icons';
import { Redirect, Route, Switch } from 'react-router';
import NotFound from 'pages/NotFound';
import EventsMonitor from './pages/EventsMonitor';
import Markets from './pages/Markets';
import Traders from './pages/Traders';
import Stakers from './pages/Stakers';
import GeneralInfo from './pages/GeneralInfo';
import DetailView from './features/markets/DetailView'
import { Layout } from 'pages/Layout';
import InsuranceFunds from 'pages/InsuranceFunds';

const navs = [
  { text: "General Info", icon: faInfoCircle, to: '/generalinfo', component: GeneralInfo },
  { text: 'Markets', icon: faGifts, to: '/markets',component: Markets},
  { text: 'Traders', icon: faExchangeAlt, to: '/traders',component: Traders },
  { text: 'Stakers', icon: faGavel, to: '/stakers',component: Stakers},
  { text: 'Insurance Funds', icon: faHandHoldingUsd, to: '/insurancefunds', component: InsuranceFunds },
  { text: 'Events Monitor', icon: faTachometerAlt, to: `/eventslog`, component: EventsMonitor },
]

function App() {
  return (
    <Layout
    navItems={navs}
  >
    <Switch>
      <Route exact path="/markets/:id" component={DetailView} />
      <Route exact path="/traders/:id" component={Traders} />
      <Route exact path="/stakers/:id" component={Stakers} />
      {
        navs.map((nav) => {
          return (
            <Route key={nav.to} path={nav.to} component={nav.component} exact />
          )
        })
      }
      <Redirect exact from="/" to="/generalinfo" />
      <Route component={NotFound} />
    </Switch>
  </Layout>
  );
}

export default App;
