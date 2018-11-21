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
        <div class="row list-header">
            <div class="col-xs-12 col-md-6">
                <h3 class="section-heading">{props.heading}</h3>
            </div>
        </div>    
)


