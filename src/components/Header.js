import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

export default () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>aa</h1>
                </Link>
            </div>
        </div>
    </header>
)


