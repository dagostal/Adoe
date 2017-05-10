
  export default class Donations extends React.Component  {

  render() {
    var donationsLength=this.props.donations.length
    var addHeight=900+(donationsLength-4)*100
    const buttonStyle= {
      backgroundColor:'#555ABF',
      color:'white',
      height:'30',
      width:'150',
      fontSize:'15',
      borderRadius: '10'
    }
    const mainBox={
      display:'flex',
      flex:1,
      flexDirection:'column',
      height:donationsLength>4&&addHeight.toString()

    }

    var donationArr=[]

    var donations=this.props.donations.forEach((donation)=>{
      donationArr.push(<div style={{flex:2,borderColor:'gray', borderWidth:'1px',borderBottomStyle:'solid',display:'flex'}}><div style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center'}}>{donation.userName}</div>
                                                                        <div style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}>{donation.amount}</div><div style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}>{donation.createdTime.slice(0,10)}</div></div>)
    })


    return (

      <div id="MB" style={mainBox}>
          <div style={{flex:1,borderColor:'gray',borderBottomStyle:'solid', borderWidth:'5px',display:'flex',fontFamily:'Arial Black',backgroundColor:'#F6F9FC'}}>
          <div style={{flex:1,display:'flex',alignItems:'flex-end',marginBottom:'20',justifyContent:'center'}}>name</div><div style={{flex:1,display:'flex',justifyContent:'center',marginBottom:'20',alignItems:'flex-end'}}>amount donated</div>
          <div style={{flex:1,display:'flex',marginBottom:'20',alignItems:'flex-end',justifyContent:'center'}}>date recieved</div></div>
        {donationArr}
      </div>
    )
  }
}
