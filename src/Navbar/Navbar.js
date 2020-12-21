import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { MenuItems } from "./MenuItems"
import { Button } from "../components/Button"
import '../css/Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h5 className="navbar-logo">SCUT-EXTRATIME</h5>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <Button><a href='https://www.linkedin.com/groups/13923307/' target='_blank'>Join Us</a></Button>
                
            </nav>
        )
    }
}

export default Navbar