import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'
import { SignatureList } from '../components/SignatureList'
import { SignatureForm } from '../components/SignatureForm'
import axios from 'axios'

export default class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signatures: []
        }
    }
    componentDidMount = () => {
        axios.post(`https://www.9komentarov.sk/_api/get.php`)
        .then(res => {
            console.log("retrieved users=", res.data);
            debugger
            this.state.signatures = res.data
        })     
    }    
    stateHandler = (signatures) => {
        axios.post(`https://lsapp.dev/api/get.php`)
        .then(res => {
            console.log("retrieved users=", res.data);
            debugger
            const signatures = res.data
            this.setState({signatures})
        })         
    }
    render() {
        return (
            <div>
                <Header/>
                <SignatureForm stateHandler={this.stateHandler}/>
                <SignatureList signatures={this.state.signatures}/>
            </div>            
        )
    }

}
