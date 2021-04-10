import React from 'react'

import Entry from './Entry'

const Memos = ({ memos, deleteEntry }) => {
  return (
    <>
      {memos.map((memo) => (
        <Entry
          key={memo._id}
          memo={memo}
          deleteEntry={deleteEntry}/>
      ))}
    </>
  )
}

export default Memos

