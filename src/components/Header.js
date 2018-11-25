import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

export default (props) => (
    props.type === "petition" ?
        <div className="row">
            <div className="col-xs-12 text-center">
                <h3 className="section-heading heading-no-top-margin">{props.heading}</h3>
                <div className="h-line"></div>
            </div>
        </div>
    :
        <div className="row list-header">
            <div className="col-xs-12">
                <h3 className="section-heading">{props.heading}</h3>
            </div>
        </div>    
)


