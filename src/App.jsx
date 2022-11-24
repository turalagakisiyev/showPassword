import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        isActive: false,
        type: "password",
        text: "Show password"
    }
    handleCheckboxChange() {
        if (this.state.isActive === false) {
            this.setState({ isActive: true, type: "text", text: "Hide password" })
        } else {
            this.setState({ isActive: false, type: "password", text: "Show password" })
        }

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(JSON.stringify(this.state))
    }
    render() {
        return (
            <>
                <div className='app'>
                    <label htmlFor='name'>
                        <div className='int'>
                            <div> Name:</div><input value={this.state.name} type="text" id='name' name='name' onChange={(e) => this.handleChange(e)} />
                        </div>
                        <button onClick={() => {
                            this.setState({ name: "" })
                        }}>X</button></label>


                    <br></br>


                    <label htmlFor='email'>
                        <div className='int'>
                            <div> E-mail:</div><input value={this.state.email} type="text" id='email' name='email' onChange={(e) => this.handleChange(e)} />
                        </div>
                        <button onClick={() => {
                            this.setState({ email: "" })
                        }}>X</button></label>


                    <br></br>


                    <label htmlFor='password'>
                        <div className='int'>
                            <div>   Password:</div><input value={this.state.password} type={this.state.type} id='password' name='password' onChange={(e) => this.handleChange(e)} />
                        </div>
                        <button onClick={() => {
                            this.setState({ password: "" })
                        }}>X</button></label>

                    <br></br>


                    <label htmlFor="checkbox" className='intes'>
                        <div>{this.state.text}</div>
                        <input type="checkbox" id='checkbox' name='checkbox' checked={this.state.isActive} onChange={() => this.handleCheckboxChange()} />
                    </label>




                </div>


            </>
        )
    }
}
