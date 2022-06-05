import React from 'react'
import Form from './Form';
import Names from './Names';

function Web3List() {

    const [names, setNames] = React.useState([])
  
    function addName(name){
      if (!name.text || /^\s*$/.test(name.text)) {
        return;
      }
      const updatedNames = [name, ...names]
      setNames(updatedNames)
      console.log(updatedNames)
    }

    function toggleFavourite(id){
        const updatedNames = names.map(name => {
          if(name.id === id){
            name.isFavourite = !name.isFavourite
          }
          return name;
        })
        setNames(updatedNames);
      }
  
    function removeName(id){
      const removeArr = [...names].filter(name => name.id !==id)
      setNames(removeArr)
    }
  
    function updateName(newValue, nameId){
      if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
  
      setNames(prevNames => prevNames.map(item => item.id===nameId ? newValue : item))
    }
  
    return (
      <div>
        <h1>Web3 Accounts To Follow On Twitter!</h1>
        <Form onSubmit={addName}/>
        <Names
          names={names}
          updateName={updateName}
          removeName={removeName}
          toggleFavourite={toggleFavourite}
        />
      </div>
    )
  }

export default Web3List