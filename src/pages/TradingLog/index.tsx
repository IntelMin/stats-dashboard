import { useMonlogTrades } from 'graphqlAPI';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TradingLog = () => {

  const { monlogTrades } = useMonlogTrades();
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
          <table className="log-table">
            <thead>
              <th>No</th>
              <th>Kind</th>
              <th>Param1</th>
              <th>Param2</th>
              <th>Time</th>
            </thead>
            <tbody>
              {
                monlogTrades.map((log, index) => {
                  var kindName = "";
                  switch (log.kind) {
                    case 0: kindName = "Close Position"; break;
                    case 1: kindName = "Open Long Position"; break;
                    case 2: kindName = "Open Short Position"; break;
                    default: kindName = "Unknown Log"; break;
                  }
                  var time = new Date(Number(log.created)).toString();
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{kindName}</td>
                      <td>{log.param1}</td>
                      <td>{log.param2}</td>
                      <td>{time}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
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

export default TradingLog;