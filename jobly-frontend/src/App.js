import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";

/**
 * App:
 *
 * Props: none
 *
 * State: none
 *
 * App -> { Navigation, RoutesList }
 */
function App() {
  console.log("App");

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
