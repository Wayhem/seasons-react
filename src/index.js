import React, {Component} from 'react';
import ReactDOM  from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
    state = {
        lat: null,
        errorMessage: ''
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),
            failure => this.setState({errorMessage:failure.message})
            );
    }

    render(){
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay latitude={this.state.lat} />
        } else if(this.state.errorMessage && !this.state.lat){
            return <div>Something went wrong: {this.state.errorMessage}</div>
        } else {
            return <div>Loading...</div>
        }
    }
};

ReactDOM.render(<App />, document.querySelector('#root'));