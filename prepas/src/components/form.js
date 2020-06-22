import React, { Component } from 'react'
import Axios from 'axios'
import Section from './layout/section'

export class form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    /**
     * Funcion para detectar los cambios ingresados por el input y guardarlos en la variable email del estado
     * @param e 
     * 
     */
    handleChange = (e) => {
        this.setState({ email: e.target.value })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value

        const data = {
            'username': username,
            'password': password
        }
        Axios.post(`http://127.0.0.1:8000/api/users/`, data)

    }
    /**
     * Metodo render : El cual va a renderizar todo el codigo HTML que se encuentre dentro de el 
     */
    render() {


        return (
            <>

                <div className='justify-content-center row'>
                    <div className='col-sm-6'>
                        < div className='card-profile shadow  mt--200 card'>
                            <div className='card-title'>
                                <br />
                                <h4 className='text-center'>Crear un usuario</h4>
                            </div>
                            <div className='card-body'>

                                <form method="post">
                                    <div className='form-group'>
                                        <label for='username'>Username</label>
                                        <input className='form-control' id='username' name="username" />
                                    </div>
                                    <div className='form-group'>
                                        <label for='password'> Password</label>
                                        <input type="password" class="form-control" id="password" name="password"></input>
                                    </div>
                                    <div className='form-group form-check'>
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default form
