import React, {Component} from 'react';
import ReactDOM  from 'react-dom';

class App extends Component {
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            failure => console.log(failure)
            );
    }

    render(){
        return <div>Latitude: </div>
    }
};

ReactDOM.render(<App />, document.querySelector('#root'));