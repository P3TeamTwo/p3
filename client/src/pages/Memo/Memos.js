import React from 'react'

import Entry from './Entry'

const Memos = ({ memos }) => {
  return (
    <>
      {memos.map((memo) => (
        <Entry
          key={memo._id}
          memo={memo}/>
      ))}
    </>
  )
}

export default Memos

