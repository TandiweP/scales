// import logo from './logo.svg';
import './App.css';
import CalcWeights from './components/CalcWeights'
import Table from './components/Table'

function App() {
  return (
    <div className="App">
      <h1 className="company">GCPorter Trucking</h1>
      <h1 className="title">Load Weight Calculator</h1>
      < CalcWeights /> 
      < Table />
    </div>
  );
}

export default App;
