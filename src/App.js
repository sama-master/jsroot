import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountUp from 'react-countup';
import axios from 'axios';
import { Cards, Drop } from './components';


const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'https://api.samabusiness.sa/api/Payments/1';
export const fetchStore = async () => {
  try {
    const { data } = await axios.get(`${proxyurl + url}`);
    
      return data;

    
  } catch (error) {
    return error;
  }
};



class App extends React.Component {
  state = {
    stores: {},
  }
  async componentDidMount() {
    const stores = await fetchStore();
    this.setState({ stores });

    const { senderName, receiverName, transactionAmount, bankName } = stores;
console.log(senderName, receiverName, transactionAmount, bankName);
  }


  // state = { store: ''};
  

  // fetchStore = () => {
  //   axios.get('https://api.samabusiness.sa/api/stores')
  //   .then((response) => {

  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }

  render() {
    const { stores } = this.state;
    const { senderName, receiverName, transactionAmount, bankName } = stores;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          &#119136;
          </p>
          <Cards data={stores} />
          <Drop data={stores} />
          From: {senderName} To: {receiverName} Amount: {transactionAmount} Via: {bankName}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CountUp start={0} end={65488} duration={3} separator="," />
            
          </a>
          <p>Clients</p>

          
        </header>
      </div>
    );
  }
}

export default App;

