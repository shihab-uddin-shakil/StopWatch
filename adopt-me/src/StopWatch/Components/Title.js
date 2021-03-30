import { event } from 'jquery';
import React, {Component} from 'react';
import './Title.css';

class Title extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            title: 'Select Your Dummy Title',
            isInput: false
             
        }
    }
    editHandeler(){
        this.setState(
            {
              ...this.state,
              isInput: true  
            }
        )
    }
    inputChange(event){
        this.setState(
            {
                ...this.state,
                title: event.target.value

            }
        )
    }
    keyPressHandler(event){
        if(event.key==='Enter'){
            this.setState(
                {
                  ...this.state,
                  isInput: false  
                }
            )
        }

    }
    blurHandler(){
        this.setState(
            {
              ...this.state,
              isInput: false  
            }
        )
    }

   render(){

    let output=null;
    if(this.state.isInput){
        output=(
            <div className="title form-group row justify-content-md-center">
             <div className="col-md-8">
             <input type="text"
              onKeyPress={event=> this.keyPressHandler(event)}
               onChange={event=> this.inputChange(event)}
               onBlur={event=> this.blurHandler(event)}
               
               className="form-control input-lg inputfield" id="inputlg" value={this.state.title}/>

             </div>
            
            </div>
        )

    }
    else{
        output=(

            <div className="container">
               <div className="row justify-content-md-center title">

                    <div className="col text-center">
                     <h1 className=""> {this.state.title} </h1>
                     
                </div>
                <div className="col col-lg-2">
                     <span onClick={()=> this.editHandeler()}  className="edit-icon ml-auto">
                     <i  className="fas fa-pencil-alt"> </i> 
         
                     </span>

                     </div>
                       
                </div>

            </div>
       
        )
    }

    return(
        <div>
        {output}
        </div>
    )
   }

}

export default Title;