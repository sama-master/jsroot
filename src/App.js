import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountUp from 'react-countup';
import { Cards, Drop } from './components';


import axios from 'axios';

const url = 'https://api.samabusiness.sa/api/accounts/2';
export const fetchStore = async () => {
  try {
    const { data } = await axios.get(`${url}`);
    
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

    const { senderName, accountBalance, receiverName, transactionAmount, bankName, accountNumber } = stores;
console.log(senderName, accountBalance, receiverName, transactionAmount, bankName, accountNumber);
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
    const { senderName, accountBalance, receiverName, transactionAmount, bankName, accountNumber } = stores;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          &#119136;
          </p>
          <Cards data={stores} />
          <Drop data={stores} />
          From: {senderName}
          To: {receiverName}
          Amount: {transactionAmount}.00
          <CountUp start={0} end={ accountBalance } duration={3}  />
          Via: {accountBalance}
          {accountNumber}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            
          </a>
          <p>Clients</p>

          
        </header>
      </div>
    );
  }
}

export default App;

