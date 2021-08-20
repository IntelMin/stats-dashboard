import { useMonlogTrades } from 'graphqlAPI';
import TradeLog from '../../features/logs/TradeLog'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState } from 'react';
const EventsMonitor = () => {
  const [market, setMarket] = useState<{ value: string | number; name: string }>({
    value: 20,
    name: '',
  });
  const [kind, setKind] = useState<{ value: string | number; name: string }>({
    value: 20,
    name: '',
  });

  const handleChangeMarket = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.name as keyof typeof market;
    console.log(name,event.target.value)
    setMarket({
      ...market,
      [name]: event.target.value,
    });
  }
  const handleChangeKind = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.name as keyof typeof kind;
    console.log(name,event.target.value)
    setKind({
      ...market,
      [name]: event.target.value,
    });
  };
  const { monlogTrades } = useMonlogTrades();
  const kinds  = [{value:-1,text:"All"},
                  {value:0,text:"Close Position"},
                  {value:1,text:"Open Long Position"},
                  {value:2,text:"Open Short Position"},
                  {value:2,text:"Unknown Log"}];
  console.log(monlogTrades);
 
  return (
    <div >
      <Tabs>
        <TabList>
          <Tab>Trade Logs</Tab>
          <Tab>Account Logs</Tab>
          <Tab>Insurance Logs</Tab>
        </TabList>

        <TabPanel>
            <FormControl>
              <InputLabel htmlFor="market-native">Market</InputLabel>
              <Select
                native
                disableUnderline
                value={market.value}
                onChange={handleChangeMarket}
                inputProps={{
                  name: 'value',
                  id: 'market-native',
                }}
              >
                <option value={10}>All</option>
                <option value={20}>Nerve</option>
              </Select>
          </FormControl>
          <FormControl className="logs-kind-filter">
              <InputLabel htmlFor="kind-native">Kind</InputLabel>
              <Select
                native
                disableUnderline
                value={kind.value}
                onChange={handleChangeKind}
                inputProps={{
                  name: 'value',
                  id: 'kind-native',
                }}
              >
                {kinds.map((kind)=>(
                  <option value={kind.value}>{kind.text}</option>
                ))}
              </Select>
          </FormControl>
          <TradeLog tradeLogs={monlogTrades}/>
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