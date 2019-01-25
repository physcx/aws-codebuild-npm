import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const buildDate = process.env.REACT_APP_BUILD_DATE || "undefined";
const buildCommit = process.env.REACT_APP_BUILD_COMMIT || "undefined";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Build Date: {buildDate}
          </p>
          <p>
            Build Commit: {buildCommit}
          </p>
          <a
            className="App-link"
            href="https://github.com/physcx/aws-codebuild-npm"
            rel="noopener noreferrer"
          >
            AWS CodeBuild npm Tutorial
          </a>
        </header>
      </div>
    );
  }
}

export default App;
