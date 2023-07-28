import './Graphrender.css';
import FirstGraph from './FirstGraph';
import Navbar from './Navbar';
import Barchart from './SecondGraph';

function GraphRender() {
    return (
      <div>
        <Navbar/>
        <br></br>
        
  
      
      <div className="GraphRender">
        
        <br></br>
        <FirstGraph/>
        <Barchart/>
      </div>
      </div>
    );
  }
  
  export default GraphRender;
  