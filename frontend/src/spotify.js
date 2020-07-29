import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const querystring = require('querystring');

class Spotify extends React.Component{
    constructor(props){
        super(props);
        const params = querystring.decode(window.location.hash.substring(1));
        const access_token = params.access_token;
        const refresh_token = params.refresh_token;

        this.state = {
            accessToken: access_token,
            refreshToken: refresh_token
        }
    }

    render(){
        return (
            <Router>
                <div className="container">
                    <div id="login">
                        <h1>Welcome to MusicTracker </h1>
                        <h1>Access token: { this.state.accessToken }</h1>
                        <h1>Refresh token: { this.state.refreshToken }</h1>
                        <Link to="/spotify" >Refresh Token</Link>
                    </div>
                </div>
                <Switch>
                    <Route path="/spotify">
                        // <RefreshToken/>
                    </Route>
                </Switch>
            </Router>
        );
    }



    async newAccessToken(){
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const url = "http://164.90.182.47:8888/spotify/refresh_token?" + this.state.refreshToken;
        await fetch(url, requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        accessToken: result.accessToken
                    });
                })
    }
}

function RefreshToken(){
    return <h1>This is something else</h1>
}


export default Spotify;



