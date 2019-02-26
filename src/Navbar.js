import React, { Component } from 'react';
import './Navbar.css';

const Burger = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
    </svg>
)

const Close = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
    </svg>
)

class Navbar extends Component {
    constructor(props){
        super(props)

        this.state = {
            menuIsOpen: false
        }
    }

    toggleMenu = () => {
        this.setState({
            menuIsOpen: !this.state.menuIsOpen
        })
    }

	render(){
        // for all subjects render them as icon with corresponding class 
        // -> render illu as <i class="nav-link lilcon lil-illu" ...></i>
		// when the icon is clicked, trigger the preview view of the selected subject
		return (
            <React.Fragment>
                <nav className="Navbar-bar">
                    <div className="Navbar-menu-icon" onClick={this.toggleMenu}>
                        <Burger />
                    </div>
                    <div>
                        social
                    </div>
                </nav>
                <div className={`Navbar-overlay ${this.state.menuIsOpen ? 'Navbar-menu-open' : ''}`} onClick={this.toggleMenu}></div>
                <aside className={`Navbar-menu ${this.state.menuIsOpen ? 'Navbar-menu-open' : ''}`}>
                    <header>
                        <div className="Navbar-menu-icon" onClick={this.toggleMenu}>
                            <Close />
                        </div>
                    </header>
                    
                    <ul className="Navbar-nav-link-list">
                        {
                            this.props.projects
                                .filter(project => project.published)
                                .map( project => (
                                <li className="Navbar-nav-link" key={project.id} onClick={() => this.props.handleChange(project.name)}>{project.name}</li>
                            ))
                        }
                    </ul>
                </aside>
            </React.Fragment>
		);
	}
}

export default Navbar;