import React, {Component} from 'react'
import {Nav, Navbar, NavLink, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';


class MainComponent extends Component{

    constructor(){
        super();
        this.state = {
            url : "hverma99"
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
                        <NavbarBrand selected>
                            <Link to="/">Search</Link>
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
                <div>
                    Enter your profile id :
                    <br/>
                    <input type='text' className='form-control' name='url' onChange={this.change}></input>
                </div>
                <div className='mt-2'>
                    
                    <button className='form-control success' onClick={this.getBadges}>Submit</button>
                </div>
                
            </div>

        );
    }
}

export default MainComponent;
