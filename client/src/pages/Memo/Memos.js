import React from 'react'

import Entry from './Entry'

const Memos = ({ memos, deleteEntry, editEntry }) => {
  return (
    <>
      {memos.map((memo) => (
        <Entry
          key={memo._id}
          memo={memo}
          deleteEntry={deleteEntry}
          editEntry = {editEntry}/>
      ))}
    </>
  )
}

export default Memos

