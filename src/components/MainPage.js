import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from './Header'
import { SignatureList } from './SignatureList'
import { SignatureForm } from './SignatureForm'
import axios from 'axios'

export default class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signatures: []
        }
    }
    getDataFromExternalAPI = () => {
        axios.post(`https://www.9komentarov.sk/_sy/api/get.php`)
        .then(res => {
            console.log("retrieved users=", res.data);
            const signatures = res.data
            this.setState({signatures})
        })     
    }
    componentDidMount = () => {
        this.getDataFromExternalAPI()
    }    
    stateHandler = (signatures) => {
        this.getDataFromExternalAPI()
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
