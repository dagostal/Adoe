


 export default class Description extends React.Component  {
  constructor(props) {
    super(props)
    this.state={
      descriptionshow:false,
      addressshow:false,
      infoshow:false,
      modal:false,
      addressmodal:false,
      infomodal:false,
      modalContent:null,
      type:null
    }
  }

  openModal(value,type) {
    console.log('hit')
    this.setState({
      modal:true,
      descriptionshow:false,
      type:type,
      modalContent: value
    })
  }
  openAddressModal() {
    this.setState({
      addressshow:false,
      addressmodal:true
    })
  }

  openInfoModal(value,type) {
    this.setState({
      infoshow:false,
      infomodal:true,
      modalContent: value
    })
  }

  closeModal(){
    this.setState({
      descriptionshow:true,
      addressshow:true,
      infoshow:true
    })
  }
  uploadPic(event){
    console.log('Selected file:', event.target.files);
  }

  render() {


      const buttonStyle= {
        backgroundColor:'#555ABF',
        color:'white',
        height:'50',
        width:'150',
        fontSize:'15',
        borderRadius: '10'
      }

    return (<div id="master" style={{fontFamily:'Camphor, "Segoe UI", "Open Sans", sans-serif',display:'flex',flex:1,flexDirection:'column',height:1000}}>
              {this.state.modal&&<DescriptionModal type={this.state.type} modalContent={this.state.modalContent} name={this.props.name} info={this.props.info} closeModal={this.closeModal.bind(this)} show={this.state.descriptionshow} changeEmail={this.props.changeEmail}  changeName={this.props.changeName}/>}
                {this.state.addressmodal&&<AddressModal changeAddress={this.props.changeAddress} streetAddress={this.props.streetAddress} city={this.props.city} country={this.props.country} state={this.props.state} zip={this.props.zip} closeModal={this.closeModal.bind(this)} show={this.state.addressshow} />}
                {this.state.infomodal&&<InfoModal info={this.props.info} changeInfo={this.props.changeInfo}show={this.state.infoshow} modalContent={this.state.modalContent} closeModal={this.closeModal.bind(this)}/>}

              <div style={{flex:1,borderColor:'gray',borderBottomStyle:'solid', borderWidth:'5px',display:'flex',alignItems:'center',fontSize:25,fontFamily:'Arial Black',backgroundColor:'#F6F9FC',paddingLeft:'20'}}>Account</div>

              <div id="name" style={{borderBottom:'solid',marginLeft:'20',marginRight:'20',flex:2,borderColor:'gray', borderWidth:'1px',display:'flex'}}>
                <div style={{flex:1,display:'flex',justifyContent:'flex-start',alignItems:'center',fontWeight:'bold',marginLeft:'20'}}>Foundation Name</div><div style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}>{this.props.name}</div>
                <div style={{flex:1,display:'flex',justifyContent:'flex-end',marginRight:'20',alignItems:'center'}}><button style={buttonStyle} onClick={this.openModal.bind(this,this.props.name,'name')}>ChangeName</button></div>
              </div>

              <div id="location" style={{borderBottom:'solid',marginLeft:'20',marginRight:'20',flex:3,borderColor:'gray', borderWidth:'1px',display:'flex'}}>
                  <div style={{flex:1,display:'flex',alignItems:'center',fontWeight:'bold',marginLeft:'20'}}>Where are you located?</div> <div style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                                                        <div style={{marginBottom:'10'}}>{this.props.streetAddress}</div><div style={{marginBottom:'10'}}>{this.props.city}</div><div style={{marginBottom:'10'}}>{this.props.country}</div>
                                                        <div>{this.props.state}</div><div>{this.props.zip}</div>
                                                    </div>
                                                  <div style={{flex:1,display:'flex',justifyContent:'flex-end',alignItems:'center',marginRight:'20'}}><button style={buttonStyle} onClick={this.openAddressModal.bind(this)}>Change Address</button></div>
              </div>

              <div id="mission Statement" style={{borderBottom:'solid',marginLeft:'20',marginRight:'20',borderColor:'gray', borderWidth:'1px',display:'flex',flex:2}}>
                    <div style={{flex:1,display:'flex',justifyContent:'flex-start',alignItems:'center',fontWeight:'bold',marginLeft:'20'}}>Mission Statement/description</div>
                    <div style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}>{this.props.info}</div>
                    <div style={{flex:1,display:'flex',justifyContent:'flex-end',alignItems:'center',marginRight:'20'}}><button style={buttonStyle} onClick={this.openInfoModal.bind(this,this.props.info,'info')}>Edit</button></div>

              </div>
              <div id="logo" style={{borderBottom:'solid',marginLeft:'20',borderColor:'gray',marginRight:'20',marginRight:'20',borderWidth:'1px',display:'flex',flex:3}}>
                    <div style={{flex:1,display:'flex',marginLeft:'20',justifyContent:'flex-start',fontWeight:'bold',alignItems:'center'}}>Logo/description</div>
                    <div style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}><img height="200" width="200" src={this.props.logoURL}></img></div>
                    <div style={{flex:1,display:'flex',justifyContent:'flex-end',alignItems:'center',marginRight:'20'}}><button style={buttonStyle} onClick={this.openModal.bind(this,this.props.info,'info')}>upload</button></div>

              </div>

          </div>
  )}
}
