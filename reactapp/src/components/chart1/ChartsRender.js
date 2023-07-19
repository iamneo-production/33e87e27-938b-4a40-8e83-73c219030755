import Barchart from './GraphChart';
import Navbar from './navbarhome';
import SecondBarchart from './GraphChartSecond';
import './chartsrender.css'

function ChartsRender() {
  return (
    <div>
      <Navbar/>
      <br></br>

    
    <div className="ChartsRender">
          <Barchart/>
          <SecondBarchart/>
    </div>
    </div>
  );
}

export default ChartsRender;
