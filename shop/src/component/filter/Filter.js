import React from 'react';
import './Filter.css'

class Filter extends React.Component{
    render(){
        return(
            
            <div class="form_filter">
                <h4 class="title">Sizes:</h4>
               
                <Sizes name = "XS"/>
                <Sizes name = "S"/>
                <Sizes name = "M"/>
                <Sizes name = "M"/>
                <Sizes name = "M"/>
                <Sizes name = "M"/>
                <Sizes name = "ML"/>
            </div>
            
        )
    }
}

function Sizes(props){
    return(
        <div class="size-filter">
            <label>
                <input type="checkbox" value={props.name}/>
                <span class="checkmark">{props.name}</span>
                </label>
           
        </div>
    )
}

export default Filter