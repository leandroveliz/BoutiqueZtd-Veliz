import React, { Component } from 'react';

class ClassComponent extends Component{
    constructor (props){
        super(props);
        
    }
    
    
    render(){
    return(
        <div>
            <p>{this.props.nombre} { this.props.apellido} Bienvenido a Boutique ZTD-Tienda Ropa-Calzado </p>
        </div>
        
        
    );
    }
}

export default ClassComponent;