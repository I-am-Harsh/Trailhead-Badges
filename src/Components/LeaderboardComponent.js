import React, {Component} from 'react';
import {Nav, Navbar, NavLink} from 'reactstrap';


class LeaderboardComponent extends Component{


    render(){
        return(
            <div className='container'>
                <div>
                    <Navbar light>
                        <Nav>
                            <NavLink href='/'>
                                Search
                            </NavLink>
                        </Nav>
                        <Nav selected>
                            LeaderBoard
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