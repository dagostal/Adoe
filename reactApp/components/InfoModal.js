

 export default class InfoModal extends React.Component  {
  constructor(props) {
    super(props)
    this.state={
      editDescription:this.props.info,
      newValue:this.props.info
    }
  }

  handleChange(e) {
    this.setState({
      newValue:e.target.value
    })
  }

  ok() {
    this.props.closeModal();

    this.props.changeInfo.bind(null,this.state.newValue)()
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
      flexDirection:'column'
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>

          <div id="description" style={{flex:5,display:'flex',justifyContent:'center',alignItems:'center'}}>
            <input defaultValue={this.props.modalContent} onChange={this.handleChange.bind(this)} style={{height:'40',width:'350'}}></input>
          </div>
          <div style={{flex:1,display:'flex',justifyContent:'center'}} className="close">
            <button style={buttonStyle} onClick={this.ok.bind(this)}>
              Ok
            </button>
          </div>
        </div>
      </div>
    );
  }
}
