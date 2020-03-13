import React, {Component} from 'react'
import {Nav, Navbar, NavLink, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';


class MainComponent extends Component{

    constructor(){
        super();
        this.state = {
            url : ""
        }
    }


    change = ({target}) =>{
        this.setState({
            [target.name] : target.value
        });
    }
    
    render(){
        return(
            <div className ='container'>
                <div>
                    <Navbar light>
                        <NavbarBrand>
                            <NavLink selected>
                                Search
                            </NavLink>
                        </NavbarBrand>
                        <Nav>   
                            <NavLink>
                                <Link to='/leaderboard'>
                                    LeaderBoard
                                </Link> 
                            </NavLink>
                        </Nav>
                    </Navbar>
                </div>
                <form className='form-group' method='POST' action='/:profile' >
                    <div>        
                        Enter your profile id :
                        <br/>
                        <input type='text' className='form-control' name='url' onChange={this.change}></input>
                    </div>
                    <div className='mt-2'>
                        <button className='form-control success'>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default MainComponent;
