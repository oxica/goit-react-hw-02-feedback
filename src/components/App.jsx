import React, { Component } from 'react';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () => {
    this.setState(state => ({
      good: state.good + 1,
    }));
  };

  addNeutral = () => {
    this.setState(state => ({
      neutral: state.neutral + 1,
    }));
  };

  addBad = () => {
    this.setState(state => ({
      bad: state.bad + 1,
    }));
  };

  render() {
    return (
      <div className={s.container}>
        <p>Please leave feedback</p>
        <button onClick={this.addGood}>Good</button>
        <button onClick={this.addNeutral}>Neutral</button>
        <button onClick={this.addBad}>Bad</button>
        <p>Statistics</p>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
        </ul>
      </div>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       className={s.container}
//       style={{
//         height: '100vh',
//         // display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         textTransform: 'uppercase',
//         color: '#010101',
//       }}
//     >
//       <p>Please leave feedback</p>
//       <button>Good</button>
//       <button>Neutral</button>
//       <button>Bad</button>
//       <p>Statistics</p>
//       <ul>
//         <li>Good: </li>
//         <li>Neutral: </li>
//         <li>Bad: </li>
//       </ul>
//     </div>
//   );
// };

export default App;
