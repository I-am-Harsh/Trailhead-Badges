import React, {Component} from 'react'
import {Nav, Navbar, NavLink} from 'reactstrap';
import axios from 'axios';


class MainComponent extends Component{

    constructor(){
        super();
        this.state = {
            url : "",
            data : []
        }
        this.getDataAxios = this.getDataAxios.bind(this);
    }


    change = ({target}) =>{
        this.setState({
            [target.name] : target.value
        });
        console.log("change URL : " + this.state.url);
    }

    
    async getDataAxios(){
        console.log("getData : " + this.state.url);
        const response = await axios.get("http://localhost:9000/" + this.state.url)
        const json = await response;
        console.log(json);
    }

    // getBadges = () => {
    //     fetch('http:localhost:9000/' + this.state.url)
    //     .then(res => res.json())
    //     .then(json => this.setState({ data : json}));
    //     console.log(this.state.data);
    // }
    render(){
        return(
            <div className ='container'>
                <div>
                    <Navbar light>
                        <Nav selected>
                                Search
                        </Nav>
                        <Nav>   
                            <NavLink href='/leaderboard'>
                                LeaderBoard 
                            </NavLink>
                        </Nav>
                    </Navbar>
                </div>
                <form className='form-group'>
                    <div>        
                        Enter your profile id :
                        <br/>
                        <input type='text' className='form-control' id='' name='url' onChange={this.change}></input>
                    </div>
                    <div className='mt-2'>
                        <button className='form-control success' onClick={this.getDataAxios} >Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default MainComponent;
