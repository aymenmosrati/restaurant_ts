import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import "./App.scss";
import routes, { RenderRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Dashboard /> */}
      <RenderRoutes routes={routes} />
    </div>
  );
}

export default App;
