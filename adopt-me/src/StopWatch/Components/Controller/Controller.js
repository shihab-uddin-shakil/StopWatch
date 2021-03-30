import React,{Component} from 'react';



class Controller extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        start: true,
        pause: false,
        lap: false,
        reset: false

    };
}
startHandler(){
    
    this.setState(
        {
       ...this.state,
       start: false,
       pause: true,
       lap: true
        }
    )
   this.props.start()

}
pauseHandler(){
    this.setState({
        ...this.state,
        start: true,
        pause: false,
        lap: false,
        reset: true
    })

    this.props.pause()
}
lapHandler(){
this.props.lap()

}
resetHandler(){
this.setState({
    ...this.state,
    start: true,
    pause: false,
    lap: false,
    reset: false
})
this.props.reset()
}
getController(){
    let output=null

    if(this.state.start && !this.state.reset){
        output=(
            <div>
            <button className="btn btn-success btn-lg px-5 ml-10" style={{marginLeft: "180px",marginTop:"40px"}} onClick={event => this.startHandler()}>
             Start
            </button>
            
            </div>
        )
    }
    else if(this.state.pause && this.state.lap){
        output=(
            <div>
            <button className="btn btn-warning btn-lg px-5 ml-10" style={{marginLeft: "180px",marginTop:"40px"}} onClick={event => this.pauseHandler()}>
             Pause
            </button>
            <button className="btn btn-info btn-lg px-5 ml-10" style={{marginLeft: "60px",marginTop:"40px"}} onClick={event => this.lapHandler()}>
             Lap
            </button>
            
            </div>
        )

    }
    else if(this.state.start && this.state.reset){
        output=(
            <div>
            <button className="btn btn-success btn-lg px-5 ml-10" style={{marginLeft: "180px",marginTop:"40px"}}  onClick={event => this.startHandler()}>
             Start
            </button>
            <button className="btn btn-danger btn-lg px-5 ml-10" style={{marginLeft: "60px",marginTop:"40px"}} onClick={event => this.resetHandler()}>
            Reset
            </button>
            
            </div>
        )

    }
    return output
}

    render() {
        return this.getController();
           
    }
}


export default Controller;