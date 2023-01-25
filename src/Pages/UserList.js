import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import { DeleteUserAction } from '../config/action';

function UserList() {
    const users = useSelector(data => data.users)
    const dispatch =useDispatch()
    const HandeleDelete =(id)=>{
        dispatch(DeleteUserAction(id))
    }

    // const noNotes = users.lenght ===0 ? 
    const notes =users.map((item, index) =>
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.note}</td>
        <td>
            <Link to={`/update_user/${item.id}`}><button className='btn btn-primary m-1'>Edit</button></Link>
            <button onClick={()=>HandeleDelete(item.id)} className='btn btn-danger m-1'>Delete</button>
        </td>
    </tr>
    );

    return (
        <div>


            <Link to="/add_user"><button className='btn btn-outline-primary m-4 p-3'>Add Note</button></Link>
            <table className="table caption-top m-4 p-3">
                <caption className='display-4 m-4 p-3'>List of Notes</caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Note</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {notes}
                </tbody>
            </table>



        </div>
    )
}
export default UserList;