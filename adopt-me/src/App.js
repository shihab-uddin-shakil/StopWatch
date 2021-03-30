import React, {Component} from "react";
import Title from './StopWatch/Components/Title';
import CountDown  from './StopWatch/Components/CountDown/CountDown';
import Controller from './StopWatch/Components/Controller/Controller';
import Laps from './StopWatch/Components/Laps/Laps';

class App extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       time:{
         min: 0,
         sec: 0,
         mili: 0
       },
       laps: []
    }
  }
  getStart(){
   this.intervalId= setInterval( () =>{
     let min=this.state.time.min
     let sec=this.state.time.sec
     let  mili=this.state.time.mili
     if(mili>=10){
       sec=sec+1;
       mili=0;
     }
     if(sec >=60){
       min=min+1;
       sec=0;
     }
     this.setState({
       ...this.state,
       time: {
        min,
        sec,
        mili: mili+1
       }
      
     })

   },100)

  }
  getPause(){
    clearInterval(this.intervalId)
  }
  getLap(){
    let time ={
      ...this.state.time
    }
    this.setState({
      ...this.state,
      laps: [time,...this.state.laps]
    })
  }
getReset(){
this.setState({
  time:{
    min: 0,
    sec: 0,
    mili: 0
  },
  laps: []
     })
}
  
  
render(){

  return(
  
     <div className="App">
        <div className="container justy">
           <div className="row justify-content-md-center">
            <div className="col-sm-8">
               <Title/>
               <CountDown time={this.state.time}/>
               <Controller 
               start={this.getStart.bind(this)}
               pause={this.getPause.bind(this)}
               reset={this.getReset.bind(this)}
               lap={this.getLap.bind(this)}
               
               />
               <Laps className="" laps={this.state.laps}/>

            </div>
          </div>
       </div>
     
     </div>
    

  )
}


}
export default App;
