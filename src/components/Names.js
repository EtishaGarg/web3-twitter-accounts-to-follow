import React from 'react'
import {RiDeleteBin5Line} from 'react-icons/ri';
import {FiEdit} from 'react-icons/fi'
import {BsSuitHeart} from 'react-icons/bs'
import {BsSuitHeartFill} from 'react-icons/bs'
import Form from './Form';

function Names({names, updateName, removeName, toggleFavourite}) {
    const [edit, setEdit] = React.useState({
      id: null,
      value: ""
    })
  
    function handleSubmit(newName){
      updateName(newName, edit.id)
      setEdit({
        id: null,
        value:""
      })
    }
  
    if(edit.id){
      return(
        <Form edit={edit} onSubmit={handleSubmit}/>
      )
    }
  
    return names.map((name,index) => (
      <div className='todo-row' key={index}>
        {name.text}
        <div className="icons">
           {name.isFavourite ? <BsSuitHeartFill onClick={() => toggleFavourite(name.id)} className='heart-icon'/>  : <BsSuitHeart onClick={() => toggleFavourite(name.id)} className='heart-icon'/> }
          <RiDeleteBin5Line onClick={() => removeName(name.id)} className='delete-icon'/>
          <FiEdit onClick={() => setEdit({id: name.id, value: name.text})} className='edit-icon'/>
        </div>
      </div>
    ))
  }

export default Names
