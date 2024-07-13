import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Product = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Product Name" variant="filled" /><br/>
      <TextField id="filled-basic" label="Description" variant="filled" /><br/>
      <TextField id="standard-basic" label="Price" variant="filled" /><br/>
      <TextField id="standard-basic" label="Category" variant="filled" /><br/>
      <Button variant="contained">SUBMIT</Button>
    </Box>
  )
}

export default Product