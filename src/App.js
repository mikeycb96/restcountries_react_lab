import VisitedCountryContainer from './containers/VisitedCountryContainer';
import './App.css';
import CountryContainer from './containers/CountryContainer';

function App() {
  return (
    <div className='App'>
      <h1>Country Bucket List</h1>
      <div className='country'>
        <CountryContainer/>
      </div>
      <div className='visitedCountry'>
        <VisitedCountryContainer/>
      </div>
    </div>

  );
}

export default App;
