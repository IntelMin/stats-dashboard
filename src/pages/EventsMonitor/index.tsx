import TradeLog from '../../features/logs/TradeLog';
import StakeLog from '../../features/logs/StakeLog'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const EventsMonitor = () => {

 
  return (
    <div >
      <Tabs>
        <TabList>
          <Tab>Trade Logs</Tab>
          <Tab>Stake Logs</Tab>
          {/* <Tab>Insurance Logs</Tab> */}
        </TabList>

        <TabPanel>
          <TradeLog />
        </TabPanel>
        <TabPanel>
          <StakeLog/>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default EventsMonitor;