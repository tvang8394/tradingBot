import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import Header from "./components/Header";
import MainBody from "./components/MainBody";

class App extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <React.Fragment>
          <div className="container-fluid header">
            <Header />
          </div>
          <div className="container-fluid">
          <MainBody />
          </div>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
