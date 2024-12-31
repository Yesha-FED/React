
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

function CrudHome() {

    const users = useSelector(state => state.usersData);

    const navigate = useNavigate()

    const ViewUser = (id)=>{
        // alert(id)

        // navigate('/view/'+id);

        navigate(`/view/${id}`)

    }

    const EditUser = (id)=>{
        // alert(id)

        // navigate('/view/'+id);

        navigate(`/edit/${id}`)

    }

    return (
        <div>
        <div className='container'>
            <div className='row justify-content-center text-start'>
                <div className='col-xl-8'>
                    <div>
                        <h2>User Details</h2>
                        <Link to='/add' className='btn btn-warning my-3'>Add New</Link>
                        
                    </div>
                    <div>
                        <table className='table'>
                            <thead className='table-dark '>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) =>(
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>
                                            {/* <Link to={`/view/${user.id}`} className='btn btn-info'>View</Link> */}

                                            {/* <Link to={"/view/"+user.id} className='btn btn-info'>View</Link> */}

                                            <button onClick={() => { ViewUser(user.id) }} className='btn btn-info'>View</button>

                                            <button onClick={() => { EditUser(user.id) }}
                                                className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
      
    </div >
  )
}

export default CrudHome
