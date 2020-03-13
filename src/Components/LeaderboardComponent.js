import React, {Component} from 'react';
import {Nav, Navbar, NavLink, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';


class LeaderboardComponent extends Component{


    render(){
        return(
            <div className='container'>
                <div>
                <Navbar light>
                    <NavbarBrand>
                        <Link to="/">Search</Link>
                    </NavbarBrand>
                    <Nav >
                        <NavLink selected>
                            LeaderBoard
                        </NavLink>
                    </Nav>
                    </Navbar>
                <h1>
                    LeaderBoard
                </h1>
                <p>
                    this is some text
                </p>
                </div>
            </div>
        );
    }
}


export default LeaderboardComponent;