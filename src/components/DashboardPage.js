import React from 'react'
import { connect } from 'react-redux'
import { setFirstname } from '../actions/names'


export class DashboardPage extends React.Component { 
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            profession: '',
            email: 'email',
            error: '',
            agreeConditionsIsChecked: false
        }
    }
    toggleChange = () => {
        this.setState({
            agreeConditionsIsChecked: !this.state.agreeConditionsIsChecked,
        });
      }    
    onFirstNameChange = (e) => {
        const firstName = e.target.value
        this.setState(() => ({firstName}))
    }    
    onLastNameChange = (e) => {
        const lastName = e.target.value
        this.setState(() => ({lastName}))
    }     
    onProfessionChange = (e) => {
        const profession = e.target.value
        this.setState(() => ({profession}))
    }      
    onEmailChange = (e) => {
        const email = e.target.value
        this.setState(() => ({email}))
    }       
    render() {
        return (
            <div>
                <div className="content-container">
                    <div className="input-group">
                        <div className="input-group__item">
                            <input 
                                type="text"
                                placeholder="Meno"
                                autoFocus
                                className="text-input"
                                value={this.state.firstName}
                                onChange={this.onFirstNameChange}
                            />
                            <input 
                                type="text"
                                placeholder="Priezvisko"
                                autoFocus
                                className="text-input"
                                value={this.state.lastName}
                                onChange={this.onLastNameChange}
                            />
                            <input 
                            type="text"
                            placeholder="Profesia"
                            autoFocus
                            className="text-input"
                            value={this.state.profession}
                            onChange={this.onProfessionChange}
                        />
                            <input 
                                type="text"
                                placeholder="email"
                                autoFocus
                                className="text-input"
                                value={this.state.email}
                                onChange={this.onEmailChange}
                            />
                        </div>
                        <label>
                            <input type="checkbox"
                            checked={this.state.agreeConditionsIsChecked}
                            onChange={this.toggleChange}
                            />
                        Suhlasim so spracovanim mojich osobnych udajov
                       </label>                        
                        <div>
                            <button className="button">Podpisat</button>
                        </div>        
        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ names: state.names })

const mapDispatchToProps = (dispatch) => ({
    setFirstname: (text) => dispatch(setFirstname(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)