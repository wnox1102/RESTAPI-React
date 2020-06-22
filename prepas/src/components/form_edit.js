import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Loader from './loader'
import Section from './layout/section'




const EditUser = (props) => {
    const [client, SetClient] = useState(undefined)
    const id = props.match.params.id
    console.log(id)
    useEffect(() => {
        Axios.get(`http://127.0.0.1:8000/api/users/${id}/`).then(res => SetClient(res.data)).catch(err => console.log(err))
    }, [])
    console.log(client)
    const EditUser = (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const data = {
            'username': username,
            'password': password
        }
        Axios.put(`http://127.0.0.1:8000/api/users/${id}/`, data)
    }
    return (
        <>
            {client ?

                <div className='justify-content-center row'>

                    <div className='col-sm-6'>
                        < div className='card mt--200'>
                            <div className='card-title'>
                                <br />
                                <h4 className='text-center'>Editar el  usuario: <strong>{id}</strong></h4>
                            </div>
                            <div className='card-body'>

                                <form method="post">
                                    <div className='form-group'>
                                        <label for='username'>Username</label>
                                        <input className='form-control' id='username' name="username" placeholder={client.username} />
                                    </div>
                                    <div className='form-group'>
                                        <label for='password'> Password</label>
                                        <input type="password" class="form-control" id="password" name="password" ></input>
                                    </div>
                                    <div className='form-group form-check'>
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary" onClick={EditUser} >Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> : <Loader />}

        </>
    );
}


export default EditUser;