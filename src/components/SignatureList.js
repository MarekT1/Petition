import React from 'react'
import { connect } from 'react-redux'
import { setFirstname } from '../actions/names'
import axios from 'axios'


export class SignatureList extends React.Component { 
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <div className="content-container">
                    <div className="input-group">
                        <p>Spolu podpisov: {this.props.signatures.length}</p>
                        <ul>
                        { this.props.signatures.map(signature => <li>{signature.firstName} {signature.lastName}, {signature.profession}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ signatures: state.signatures })

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SignatureList)