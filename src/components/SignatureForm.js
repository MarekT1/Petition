import React from 'react'
import { connect } from 'react-redux'
import { setUpdatedState } from '../actions/names'
import axios from 'axios'
const NUMBER_A_MAX = 50;
const NUMBER_B_MAX = 10;
const NUMBER_AB_MIN = 1;

export class SignatureForm extends React.Component { 
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            profession: '',
            email: '',
            captcha: '',
            captchaAnswer: '',
            error: '',
            agreeGDPRChecked: false,
            agreeSubscribeChecked: false
        }
    }
    componentDidMount = () => {
        const numberA = Math.floor(Math.random()*(NUMBER_A_MAX - NUMBER_AB_MIN) + NUMBER_AB_MIN)
        const numberB = Math.floor(Math.random()*(NUMBER_B_MAX - NUMBER_AB_MIN) + NUMBER_AB_MIN)
        this.setState({
            captcha: `(${numberA} + ${numberB} = zadajte výsledok)`,
        });
    }
    toggleChange = () => {
        this.setState({
            agreeGDPRChecked: !this.state.agreeGDPRChecked,
        });
    }    
    toggleSubscribeChange = () => {
        this.setState({
            agreeSubscribeChecked: !this.state.agreeSubscribeChecked,
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
    onCaptchaChange = (e) => {
        const captchaAnswer = e.target.value
        this.setState(() => ({captchaAnswer}))
    }
    onSubmitClick = () => {
        axios.post(`https://www.9komentarov.sk/_api/ajax-register.php`, { 
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            profession: this.state.profession, 
            email: this.state.email, 
            agreeGDPRChecked: this.state.agreeGDPRChecked ? 1 : 0,
            agreeSubscribeChecked: this.state.agreeSubscribeChecked ? 1 : 0,
            captcha: this.state.captcha,
            captchaAnswer: this.state.captchaAnswer,
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
            // initiate state change
            this.props.stateHandler();
        })        
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
                                className="text-input"
                                value={this.state.lastName}
                                onChange={this.onLastNameChange}
                            />
                            <input 
                            type="text"
                            placeholder="Profesia"
                            className="text-input"
                            value={this.state.profession}
                            onChange={this.onProfessionChange}
                        />
                            <input 
                                type="text"
                                placeholder="email"
                                className="text-input"
                                value={this.state.email}
                                onChange={this.onEmailChange}
                            />
                            <input 
                                type="text"
                                placeholder={this.state.captcha}
                                className="text-input"
                                value={this.state.captchaAnswer}
                                onChange={this.onCaptchaChange}
                            />
                    </div>
                        <label>
                            <input type="checkbox"
                            checked={this.state.agreeGDPRChecked}
                            onChange={this.toggleChange}
                            />
                        Suhlasim so spracovanim mojich osobnych udajov
                       </label>                        
                       <label>
                       <input type="checkbox"
                            checked={this.state.agreeSubscribeChecked}
                            onChange={this.toggleSubscribeChange}
                            />
                        Chcem dostavat aktualne informacie
                        </label> 
                       <div>
                            <button className="button" onClick={this.onSubmitClick}>Podpisat</button>
                        </div>        
        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ names: state.names })

const mapDispatchToProps = (dispatch) => ({
    setUpdatedState: () => dispatch(setUpdatedState()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignatureForm)