import React, { useState } from 'react'
import { Container, Paper } from '@material-ui/core'

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

