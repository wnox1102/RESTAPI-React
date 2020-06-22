import React from 'react'


const HomePage = () => {

    return (
        <>
            <div className='justify-content-center row'>
                <div className='col-lg-12'>
                    <div className='row-grid row'>
                        <div className='col-sm-3'>
                            <div className='card-lift--hover shadow border-0 card'>
                                <br />
                                <div className='card-title'>
                                    <h6 className='text-center'><strong>CREATE USER</strong></h6>
                                </div>
                                <div className='py-5 card-body'>
                                    <h1 className='text-center' style={{ fontSize: '100px' }}>C</h1>
                                </div>
                                <div className='card-footer'>
                                    <div className='justify-content-center row'>
                                        <button className='btn btn-primary' size='sm'>Create user</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-3'>
                            <div className='card-lift--hover shadow border-0 card'>
                                <br />
                                <div className='card-title'>
                                    <h6 className='text-center'><strong>READ USERS</strong></h6>
                                </div>
                                <div className='py-5 card-body'>
                                    <h1 className='text-center' style={{ fontSize: '100px' }}>R</h1>
                                </div>
                                <div className='card-footer'>
                                    <div className='justify-content-center row'>
                                        <button className='btn btn-primary' size='sm'>Read user</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-3'>
                            <div className='card-lift--hover shadow border-0 card'>
                                <br />
                                <div className='card-title'>
                                    <h6 className='text-center'><strong>UPDATE USERS</strong></h6>
                                </div>
                                <div className='py-5 card-body'>
                                    <h1 className='text-center' style={{ fontSize: '100px' }}>U</h1>
                                </div>
                                <div className='card-footer'>
                                    <div className='justify-content-center row'>
                                        <button className='btn btn-primary' size='sm'>Update user</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-3'>
                            <div className='card-lift--hover shadow border-0 card'>
                                <br />
                                <div className='card-title'>
                                    <h6 className='text-center'><strong>DELETE USERS</strong></h6>
                                </div>
                                <div className='py-5 card-body'>
                                    <h1 className='text-center' style={{ fontSize: '100px' }}>D</h1>
                                </div>
                                                                <div className='card-footer'>
                                    <div className='justify-content-center row'>
                                        <button className='btn btn-primary' size='sm'>Delete user</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}


export default HomePage;