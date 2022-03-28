import React from 'react'
import ItemList from './ItemList'

const Content = ({items, handleCheck, handleDelete}) => {

  return (
   <main className='main'>
       {items.length ? (
           <ItemList 
           items={items}
           handleCheck={handleCheck}
           handleDelete={handleDelete}
           />
           ) : (
           <p style={{marginTop: '2rem'}}>List Is Empty</p>
       )}
   </main>
  )
}

export default Content