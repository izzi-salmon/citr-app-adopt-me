import {createRoot} from 'react-dom/client';
import SearchParams from './SearchParams';

// Capitalising "App" is required
const App = () => {
  return(
    <div>
      <h1>Adopt Me</h1>
      <SearchParams />
      {/* <Pet name="Spaghetti" animal="dog" breed="Dachshund"/>
      <Pet name="Chomp" animal="dog" breed="German Shepard"/>
      <Pet name="Splat" animal="dog" breed="Domestic short hair"/> */}
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
