import RESTCountriesContainer from './containers/CountryContainer'; 
import './App.css';
import CountryContainer from './containers/CountryContainer';

function App() {
  return (
    <div className='App'>
      <div className='country'>
        <CountryContainer/>
      </div>
      <div className='visitedCountry'>
        <VisitedCountry/>
      </div>
    </div>

  );
}

export default App;
