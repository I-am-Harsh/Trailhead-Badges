import React, {Component} from 'react'
import $ from 'jquery';

class MainComponent extends Component{

    constructor(){
        super();
        this.state = {
            url : "hverma99"
        }
    }
    
    getBadges = () => {
        console.log(this.state.url);
        // get user id

        var full_url = "https://anyorigin.com/go?url=" + encodeURIComponent("https://trailblazer.me/id/") + this.state.url + "&callback=?";
        console.log(full_url)
        $.get(full_url, function(response) { 
            console.log(full_url)
            console.log("Sent");
            console.log(response);
        });
    }

    change = ({target}) =>{
        this.setState({
            [target.name] : target.value
        });
    }


    render(){
        return(
            <div className ='container-fluid'>
                <div className = 'row'>
                    Enter your profile id :
                    <input type='text' className='form-control' name='url' onChange={this.change}></input>
                    <button className='form-control' onClick={this.getBadges}>Submit</button>
                </div>
                 {/* <div className ='row'>
                    {
                        
                    }
                </div>  */}
            </div>

        );
    }
}

export default MainComponent;
