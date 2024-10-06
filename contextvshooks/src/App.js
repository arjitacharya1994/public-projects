import logo from "./context-api-vs-redux.png";
import "./App.css";
import ReduxApp from "./components/reduxApp";
import ContextApp from "./components/contextApp";

export function App1({ children }) {
  console.log("app1");
  return <div className="red">App1{children}</div>;
}

export function App2({ children }) {
  console.log("app2");
  return <div className="green">App2{children}</div>;
}

export function App3({ children }) {
  console.log("app3");
  return <div className="orange">App3{children}</div>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Comparing the peformance of Redux and Context API.</p>
      </header>
      <div className="-flex">
        <ReduxApp />
        <ContextApp />
      </div>
    </div>
  );
}

export default App;
