import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { UpdateUserAction } from '../config/action';

function UpdateUser() {
  const { id } = useParams();
  const user =useSelector(data =>data.users.find((u)=>u.id ===parseInt(id)))
  const [title, setTitle] = useState(user.title)
  const [note, setNote] = useState(user.note)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const HandelClick = (event) => {
    event.preventDefault()
    dispatch(UpdateUserAction({
      id: id,
      title: title,
      note: note
    }))
    navigate('/')
  }
  return (
    <div>
      <h1 className='display-3 m-4 p-3'>AddUser</h1>
      <form >
        <table className="table caption-top m-4 p-3">
          <tbody>
           
            <tr >
              <td><label>Title :</label></td>
              <td><input className='form-control' type="text" value={title} onChange={(e) => setTitle(e.target.value)} /></td>
            </tr>
            <tr >
              <td><label>Note :</label></td>
              <td><input className='form-control' type="note" value={note} onChange={(e) => setNote(e.target.value)} /></td>
            </tr>
          </tbody>
        </table>
        <button onClick={HandelClick} className ='btn btn-secondary m-4 p-3'>Update</button>
      </form>
    </div>
  )
}
export default UpdateUser;