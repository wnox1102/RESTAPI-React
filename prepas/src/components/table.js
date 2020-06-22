import React, { Component } from 'react'
import Axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import Loader from './loader'

export class table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clients: {},
            id: ''
        }
    }

    componentDidMount() {
        Axios.get('http://127.0.0.1:8000/api/users/').then(res => this.setState({ clients: res.data })).catch(err => console.log(err))
    }



    DeleteUser = (id) => {
        const { clients } = this.state.clients
        Axios.delete(`http://127.0.0.1:8000/api/users/${id}/`).then(res => console.log(res)).catch(err => console.log(err))
        this.props.history.push('/form/create/user')
    }


    render() {
        const clients = this.state.clients

        return (
            <>
                {clients.length > 0 ?
                    <div className='justify-content-center row'>
                        <div className='col-md-6'>
                            <div className='card shadow mt--200'>

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope='col'>#</th>
                                            <th scope='col'>username</th>
                                            <th scope='col'>password</th>
                                            <th scope='col'>Editar</th>
                                            <th scope='col'>Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {clients.map(client =>
                                            <tr id={client.id}>
                                                <th scope='row'>{client.id}</th>
                                                <td>{client.username}</td>
                                                <td>{client.password}</td>
                                                <td><button className='btn btn-primary'  size='sm' type='button'><Link to={`/edit/user/${client.id}`} className='text-white'>Editar</Link></button></td>
                                                <td><button className='btn btn-primary' size='sm' type='button' onClick={() => this.DeleteUser(client.id)}>Eliminar</button></td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    : <Loader />}

            </>
        )
    }
}

export default table
