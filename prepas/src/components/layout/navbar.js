import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg">
                    <span className="navbar-brand text-white"><strong>{this.props.title}</strong></span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white">Menu</span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to='/' className='nav-link text-white'>Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to='/form/create/user' className='nav-link text-white'>Create user</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/table/users' className='nav-link text-white'>Read Data</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link text-white' to='/statistics' >Statistics</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
                
            </>
        )
    }
}

export default Navbar
