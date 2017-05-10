

 export default class AddressModal extends React.Component  {
  constructor(props) {
    super(props)
    this.state={
      editDescription:this.props.info,
      newValue:null,
      street:this.props.streetAddress,
      state:this.props.state,
      country:this.props.country,
      zip:this.props.zip,
      city:this.props.city
    }
  }

  handleChangeStreet(e) {
    this.setState({
      street:e.target.value
    })
  }
  handleChangeCity(e) {
    this.setState({
      city:e.target.value
    })
  }
  handleChangeState(e) {
    this.setState({
      state:e.target.value
    })
  }
  handleChangeCountry(e) {
    this.setState({
      country:e.target.value
    })
  }
  handleChangeZip(e) {
    this.setState({
      zip:e.target.value
    })
  }


  addressSubmit(street,city,state,country,zip) {

    this.props.closeModal();
    this.props.changeAddress(street,city,state,country,zip)
  }


  render() {
    const buttonStyle= {
      backgroundColor:'#555ABF',
      color:'white',
      height:'50',
      width:'100',
      fontSize:'15',
      borderRadius: '10',
      marginLeft:'210'
    }

    // Render nothing if the "show" prop is false
    if(this.props.show) {
      return null;
    }
    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      marginTop:'120',
      marginLeft:'450',
      padding: 30,
      display:'flex',
      justifyContent:'center',
      flexDirection:'column'
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>

        <div style={{flex:1}}><input defaultValue={this.props.streetAddress} onChange={this.handleChangeStreet.bind(this)} style={{height:'25',marginBottom:'20',marginLeft:'130',width:'250'}}></input> Street</div>
        <div style={{flex:1}}><input defaultValue={this.props.city} onChange={this.handleChangeCity.bind(this)} style={{height:'25',width:'250',marginLeft:'130',marginBottom:'20'}}></input> City</div>
        <div style={{flex:1}}><input defaultValue={this.props.state} onChange={this.handleChangeState.bind(this)} style={{height:'25',width:'250',marginLeft:'130',marginBottom:'20'}}></input> State</div>
        <div style={{flex:1}}><input defaultValue={this.props.country} onChange={this.handleChangeCountry.bind(this)} style={{height:'25',width:'250',marginLeft:'130',marginBottom:'20'}}></input> Country</div>
        <div style={{flex:1}}><input defaultValue={this.props.zip} onChange={this.handleChangeZip.bind(this)} style={{height:'25',width:'250',marginLeft:'130',marginBottom:'20'}}></input> Zip</div>

        <button  style={buttonStyle} onClick={this.addressSubmit.bind(this,this.state.street,this.state.city,this.state.state,this.state.country,this.state.zip)} >ok</button>

        </div>
      </div>
    );
  }
}
