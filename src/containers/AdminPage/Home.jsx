import { PrimaryLayout } from "component/layout";
import CardH from "component/card";
import Chart from "component/Chart/RadialBarChart";
import Linechart from "component/Chart/LineChart";
import ProfitChart from "component/Chart/ProfitChart";
const Home = () => {
  return (
    <>
      <CardH></CardH>
      <Linechart></Linechart>
      <ProfitChart />
      <Chart></Chart>
    </>
  );
};
export default Home;
