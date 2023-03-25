import React from 'react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

export const Loading = (props) => {
  return(
    <div >
        <CircularProgress size='5rem' isIndeterminate color='blue.300' />
    </div>
   )

 }