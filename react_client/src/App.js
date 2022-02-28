import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Nav from './components/Navigation';
import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import axios from 'axios';

class App extends Component {

    state = {};
    componentDidMount = () =>{

        axios.get('http://localhost:8000/').then(
            res=> {
                this.setState({
                    user: res.data
                });
            },
            err => {
                console.log(err);
            }
        )

        const PORT = process.env.PORT || 8080;
       
    };

    render() {
        return (
            <div className="App">
                <Nav />
                <Routes>
                    <Route exact path='/' element={() => <Home user={this.state.user}/>} />
                    <Route exact path='/login' element={<Login/>} />
                    <Route exact path='/register' element={<Signup/>} />
                </Routes>
            </div>
        );
    }
}

export default App;
