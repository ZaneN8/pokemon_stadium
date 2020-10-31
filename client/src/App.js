import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import FetchUser from "./components/FetchUser";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";
import SamplesDemo from "./samples/SamplesDemo";
import store from "./redux/store";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <NavBar />
        <FetchUser>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/samplesDemo" component={SamplesDemo} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
