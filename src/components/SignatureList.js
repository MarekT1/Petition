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
                        
                            
                            {this.props.signatures.map(signature => {
                                return (
                                    <div className="col-xs-4" key={signature.user_id}>
                                        <p>{signature.firstName} {signature.lastName}, {signature.profession}</p>
                                    </div>
                                )
                            })}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ signatures: state.signatures })

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SignatureList)