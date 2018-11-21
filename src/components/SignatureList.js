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
            <div className="row">
                <div className="col-xs-12">
                    <p>Spolu podpisov: {this.props.signatures.length}</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Meno</th>
                                <th>Povolanie</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                            
                            {this.props.signatures.map(signature => {
                                return (
                                    <tr key={signature.user_id}>
                                        <td>{signature.user_id} </td>
                                        <td>{signature.firstName} {signature.lastName}</td>
                                        <td>{signature.profession}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ signatures: state.signatures })

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SignatureList)