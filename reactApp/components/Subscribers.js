
export default class Subscribers extends React.Component {

  render() {
    const buttonStyle= {
      backgroundColor:'#555ABF',
      color:'white',
      height:'30',
      width:'150',
      fontSize:'15',
      borderRadius: '10'
    }


    return (
      <div id="currentApp" style={currentApp}>
      <div id="top" style={top}>
        <div id="topleft" style={{display:'flex',fontFamily:'Georgia',color:'blue',flex:1,justifyContent:'space-around',alignItems:'center'}}>

        </div>
        <div id="topright" style={{flex:1,display:'flex',justifyContent:'flex-end',alignItems:'flex-end',marginBottom:'10'}}>
          <a href="/api"><button style={buttonStyle}>Download email list</button></a>
          </div>
      </div>
        <div id="body" style={body}>{this.props.subscribers.length===0&&<h2 style={{marginTop:'90'}}>You do not have any subscribers</h2>}</div>
      </div>
    )
  }
}
