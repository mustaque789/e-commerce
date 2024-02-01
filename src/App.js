import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";

// mern stack

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
