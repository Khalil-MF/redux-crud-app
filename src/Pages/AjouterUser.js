import React, { useState } from 'react'
import { AdduserAction } from '../config/action';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function AjouterUser() {
  const count = useSelector((data) => data.users.length)
  const [title, setTitle] = useState()
  const [note, setNote] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const HandelClick = (event) => {
    event.preventDefault()
    dispatch(AdduserAction({
      id: count + 1,
      title: title,
      note: note
    }))
    navigate('/')
  }

  return (
    <div>
      <h1 className='display-3 m-4 p-3'>Add Note</h1>
      <form >
        <table className="table caption-top m-4 p-3">
          <tbody>
            <tr >
              <td><label>Title :</label></td>
              <td><textarea className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} aria-label="title" ></textarea></td>
            </tr>
            <tr >
              <td><label>Note :</label></td>
              <td>
              <textarea className="form-control" value={note} onChange={(e) => setNote(e.target.value)} aria-label="Note"></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={HandelClick} className='btn btn-outline-info m-4 p-3'>Send</button>
      </form>
    </div>
  )
}
export default AjouterUser;