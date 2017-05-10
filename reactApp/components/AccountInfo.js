
export default class AccountInfo extends React.Component  {
  constructor(props){
    super(props)
    this.state={
      logo:false,
      description:true,
      stripe:false,
      isOpen:false,
      buttonText:''
    }
  }
  toggleModal(description) {
     this.setState({
       isOpen: !this.state.isOpen,
       info:description
     });
   }

  info() {
  this.setState({
      logo:false,
      stripe:false,
      info:true,
      description:true,
      buttonText:'edit description'
    })
  }


  stripe() {
    this.setState({
      stripe:true,
      info:false,
      logo:false,
      buttonText:'connect with stripe'
    })
  }


  button() {
  this.setState({
    modal:true
  })


  }

  render() {

    const accountInfo= {
      cursor:'pointer',
      fontFamily:'Camphor, "Segoe UI", "Open Sans", sans-serif',
      color:this.state.info===true?'blue':'black'

    }
    const donations= {
      cursor:'pointer',
      fontFamily:'Camphor, "Segoe UI", "Open Sans", sans-serif',
      color:this.state.stripe===true?'blue':'black'

    }
    const buttonStyle= {
      backgroundColor:'#555ABF',
      color:'white',
      height:'30',
      width:'150',
      fontSize:'15',
      borderRadius: '10'
    }

    const bodyStyling ={
      flex:15,
      display:'flex',
      borderStyleLeft:'groove',
      borderColorLeft:'red',
      backgroundColor:"#F6F9FC",
      fontFamily: 'Camphor, "Segoe UI", "Open Sans", sans-serif',
      borderStyle:"groove",
      overflowY: !this.state.info&&this.props.donations.length<5?"hidden":"scroll"
    }

    return (
      <div id="currentApp" style={currentApp}>
        <div id="top" style={top}>
          <div id="top left" style={{display:'flex',fontFamily:'Georgia',color:'blue',flex:1,justifyContent:'space-around',alignItems:'center'}}>
          <h2 style={accountInfo} onClick={this.info.bind(this)}>Account Info</h2><h2  style={donations} onClick={this.stripe.bind(this)}>Donations</h2>
          </div>
          <div id="top right" style={{flex:1,display:'flex',justifyContent:'flex-end',alignItems:'flex-end',marginBottom:'10'}}>
              {this.state.stripe&&<a href='/api/foundations/api/oauth'><button style={buttonStyle}>Connect to Stripe</button></a>}
              {this.state.info&&<a href="/api/foundations/logout">Logout</a>}
          </div>
        </div>
        <div id="body" style={bodyStyling}>
        {this.state.info===true&&
        <Description changeAddress={this.props.changeAddress} changeName={this.props.changeName} changeEmail={this.props.changeEmail} changeInfo={this.props.changeInfo} country={this.props.country}
        logoURL={this.props.logoURL} email={this.props.email } zip={this.props.zip} state={this.props.state} city={this.props.city} streetAddress={this.props.streetAddress} name={this.props.accountName} info={this.props.accountInfo}/>}
        {this.state.stripe===true&&<Donations donations={this.props.donations}/>}
        </div>
      </div>
    )
  }
}
