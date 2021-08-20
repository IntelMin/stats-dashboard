import TradeLog from '../../features/logs/TradeLog'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const EventsMonitor = () => {

 
  return (
    <div >
      <Tabs>
        <TabList>
          <Tab>Trade Logs</Tab>
          <Tab>Account Logs</Tab>
          <Tab>Insurance Logs</Tab>
        </TabList>

        <TabPanel>
          <TradeLog />
        </TabPanel>
        <TabPanel>
          <h2>Account Logs</h2>
        </TabPanel>
        <TabPanel>
          <h2>Insurance Logs</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default EventsMonitor;