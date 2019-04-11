import React, { Component } from 'react';
import './estilos.css';


class Navbar extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: 'View-Two'
		}
	}

	handleClick = (e) => {
		this.setState({name: 'View-Hidden'})
	}

	render(){
		return (
			<div className="Menu">
				<ul>
					<li>Home</li>
					<li onClick={this.props.teste}>{this.props.nome}</li>
					<li onClick={this.handleClick}>{this.state.name}</li>
				</ul>
			</div>
			);
	}
}

export default Navbar