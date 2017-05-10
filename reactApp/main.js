import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'react-router'
import FileInput from 'react-file-input';


import AccountInfo from './components/AccountInfo.js'
import Donations from './components/Donations.js'
import Description from './components/Description.js'
import DescriptionModal from './components/DescriptionModal.js'
import AddressModal from './components/AddressModal.js'
import Subscribers from './components/Subscribers.js'
import InfoModal from './components/InfoModal.js'
import Fundraisers from './components/Fundraisers.js'


const mainDiv = {
   display:'flex',
   width:"1360px",
   height:'640px',
   fontFamily:'Camphor, "Segoe UI", "Open Sans", sans-serif',
   backgroundColor:'#F1F5F9'
 };

 const sideBar = {
    flex:2,
    display:'flex',
    flexDirection:'column'
  };
      const topSideBar = {
         flex:1,
         display:'flex',
         justifyContent:'center',
         alignItems:'center'
       };
       const bottomSideBar = {
          flex:4,
          flexDirection:'column',
          display:'flex',
          justifyContent:'center'
        };

  const left = {
     flex:1,
     display:'flex',
     flexDirection:'column',
     justifyContent:'center',
     borderStyleLeft:'groove',
     borderColorLeft:'red',
     backgroundColor:"#F1F5F9"
   };



          const top = {
                  flex:2,
                  display:'flex',
                  flexDirection:'row',
                  backgroundColor:"#F1F5F9"
            };


    const right = {
             flex:1,
             display:'flex',
             justifyContent:'center',
             borderStyleLeft:'groove',
             borderColorLeft:'red',
             backgroundColor:"#F1F5F9"
         };


         const currentApp = {
                 flex:7,
                 display:'flex',
                 justifyContent:'center',
                 flexDirection:'column',
                 borderStyleLeft:'groove',
                 borderColorLeft:'red',
                 backgroundColor:"white"
           };
           const body = {
                   flex:15,
                   display:'flex',
                   justifyContent:'center',
                   borderStyleLeft:'groove',
                   borderColorLeft:'red',
                   backgroundColor:"#F6F9FC",
                   fontFamily: 'Camphor, "Segoe UI", "Open Sans", sans-serif',
                   borderStyle:"groove"
             };

             const bottom = {
                     flex:1,
                     display:'flex',
                     justifyContent:'center',
                     borderStyleLeft:'groove',
                     borderColorLeft:'red',
                     backgroundColor:"#F1F5F9"
               };



class Main extends React.Component {
  constructor(props){
    super(props)
    this.state={
      main: 'account',
      accountName: null,
      accountInfo:null,
      subscribers: [],
      fundraisers:[],
      donations:[],
      logoURL: null,
      email:null,
      streetAddress:null,
      country:null,
      city:null,
      state:null,
      zip:null
    }
  }

  componentWillMount() {
    fetch('https://polar-sands-99108.herokuapp.com/api/foundations/userdata', {
      method: 'GET',
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('got fetch data!',responseJson)
      this.setState({
      accountName: responseJson.name,
      accountInfo:responseJson.description,
      logoURL: responseJson.logoURL,
      email:responseJson.email,
      streetAddress:responseJson.streetAddress,
      country:responseJson.country,
      city:responseJson.city,
      state:responseJson.ustate,
      zip:responseJson.zipCode
    })
  })
    .catch((err) => {
      console.log('error', err)
    });

    fetch('https://polar-sands-99108.herokuapp.com/api/foundations/donations', {
      method: 'GET',
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        donations:responseJson
      })

  })
    .catch((err) => {
      console.log('error', err)
    });

  }

  account() {
    this.setState({
      main:'account'
    })
  }
  about() {
    this.setState({
      main:'about'
    })
  }
  subscribers() {
    this.setState({
      main:'subscribers'
    })
  }
  fundraisers() {
    this.setState({
      main:'fundraisers'
    })
  }
  changeName(name) {
    console.log('updating name...')
    fetch('https://polar-sands-99108.herokuapp.com/api/foundations/updateName', {
      method: 'POST',
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        accountName: name
      })
      console.log('name updated!')
    })
    .catch((err) => {
      console.log('update name error:(', err)
    });
  }


    changeEmail(email) {
      console.log('updating email...')
      fetch('https://polar-sands-99108.herokuapp.com/api/foundations/updateEmail', {
        method: 'POST',
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          email: email
        })
        console.log('email updated!')
      })
      .catch((err) => {
        console.log('update email error:(', err)
      });
    }
    changeInfo(info) {

      console.log('updating info...')
      fetch('https://polar-sands-99108.herokuapp.com/api/foundations/updateDescription', {
        method: 'POST',
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          description: info
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          accountInfo: info
        })
        console.log('info updated!')
      })
      .catch((err) => {
        console.log('update name error:(', err)
      });
    }

    changeAddress(street,city,state,country,zip) {

      fetch('https://polar-sands-99108.herokuapp.com/api/foundations/updateAddress', {
        method: 'POST',
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          streetAddress: street,
          city:city,
          state:state,
          country:country,
          zip:zip
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          streetAddress: street,
          city:city,
          state:state,
          country:country,
          zip:zip
        })
        console.log('address updated!')
      })
      .catch((err) => {
        console.log('update name error:(', err)
      });
    }





  render() {

    const account= {
      cursor:'pointer',
      padding:'0',
      fontSize:'30',
      marginBottom:'30',
      color:this.state.main==="account"&&'blue'

    }

    const subscribers= {
      cursor:'pointer',
      fontSize:'30',
      marginBottom:'30',
      color:this.state.main==="subscribers"&&'blue'

    }

    const fundraisers= {
      cursor:'pointer',
      fontSize:'30',
      color:this.state.main==="fundraisers"&&'blue'

    }


    return (
  <div id="mainDiv" style={mainDiv}>
      <div id="sidebar" style={sideBar}>
          <div id="topSideBar" style={topSideBar}> <h1 style={{fontFamily:'Camphor, "Segoe UI", "Open Sans", sans-serif',fontSize:'30'}}>{this.state.accountName}</h1></div>
          <div id="bottomSideBar" style={bottomSideBar}>
          <div style={{flex:1,display:'flex',justifyContent:'flex-start',marginLeft:'100',flexDirection:'column',alignItems:'flex-start'}}><span style={account} onClick={this.account.bind(this)}>Account</span><span style={subscribers} onClick={this.subscribers.bind(this)}>Subscribers</span>
           <span style={fundraisers} onClick={this.fundraisers.bind(this)}>Fundraisers</span></div></div>
      </div>
        {this.state.main==="account"&& <AccountInfo donations={this.state.donations} changeAddress={this.changeAddress.bind(this)} logo={this.state.logo} changeInfo={this.changeInfo.bind(this)} changeEmail={this.changeEmail.bind(this)} changeName={this.changeName.bind(this)} country={this.state.country}
          logoURL={this.state.logoURL} email={this.state.email} zip={this.state.zip} city={this.state.city} state={this.state.state} fundraisers={this.state.fundraisers} streetAddress={this.state.streetAddress} accountName={this.state.accountName} accountInfo={this.state.accountInfo}/>}
        {this.state.main==="about"&& <About/>}
        {this.state.main==="fundraisers"&& <Fundraisers fundraisers={this.state.fundraisers}/>}
        {this.state.main==="subscribers"&& <Subscribers subscribers={this.state.subscribers}/>}

  </div>
    )
  }
}


ReactDOM.render(<Main/>, document.getElementById('root'));
