import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
/*import CountUp from 'react-countup';
import { Cards, Drop, Boxes, Logo, Terminal } from './components';
import SettingsIcon from '@material-ui/icons/Settings';
import serviceworker from './scope/serviceworker';
import NoSsr from '@material-ui/core/NoSsr';
import { createMuiTheme } from '@material-ui/core/styles';
import { palette, spacing, typography } from '@material-ui/system';
import axios from 'axios';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import emoji from 'emoji-datasource';*/
import Icon from '@material-ui/core/Icon';


const WrappedIcon = (props) => <Icon {...props} />;
WrappedIcon.muiName = 'Icon';

/*
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'https://api.samabusiness.sa/api/accounts/2';
const urlapi = 'https://billowing-paper-4f03.sama.workers.dev/';
export const fetchStore = async () => {
  try {
    const { data } = await axios.get(`${proxyurl + url}`);
    
      return data;
    
  } catch (error) {
    return error;
  }
};
export const fetchApiUrl = async () => {
  try {
    const { data } = await axios.get(`${proxyurl + urlapi}`);
    
      return data;
    
  } catch (error) {
    return error;
  }
};
*/


/*
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://platform.clickatell.com/messages/http/send?apiKey=vz3Kf63gTdiC-Ch2JmBQfQ==&to=966562204816&content=It's been 5 years since I started coding,",
"&#119136;started from the bottom, now we're here.",
"&#119136;Look at me now,",
"I just can't get enough </>", true);
xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
        console.log('success')
    }
};
xhr.send();
console.log(xhr)*/



class App extends React.Component {
  state = {
    stores: {},
  }
  async componentDidMount() {/*
    const stores = await fetchStore();
    const fetchUrl = await fetchApiUrl();
    this.setState({ stores });

    const { senderName, accountBalance, receiverName, transactionAmount, accountNumber } = stores;
console.log(senderName, accountBalance, receiverName, transactionAmount, accountNumber);
console.log(fetchUrl);*/


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
    /*const { stores } = this.state;
    const { senderName, accountBalance, receiverName, transactionAmount, accountNumber } = stores;*/
    return (
      <div className="App">
        <div id="maestro"></div>       
        <div id="aemoji"></div>       
      </div>
    );
  }
}

export default App;

