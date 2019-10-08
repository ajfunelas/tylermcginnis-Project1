import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Popular from '../components/Popular';

class App extends React.Component {
  render() {
    return (
      <div>
        <Popular />
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
