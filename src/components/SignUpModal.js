import React from 'react'
import { AppBar, Toolbar, Button, TextField, Modal, Box, Typography } from "@material-ui/core";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SignUpModal = (props) => {
  return (
    <Modal aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" open={props.open}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Sign Up
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Fill in your information
        </Typography>
        <TextField id="standard-basic" label="Username" variant="standard" />
        <TextField id="standard-basic" label="Email" variant="standard" />
        <TextField id="standard-basic" label="Password" variant="standard" />
        <TextField id="standard-basic" label="Confirm Password" variant="standard" />
        <Button onClick={props.handler} variant="contained">Submit</Button>
      </Box>
    </Modal>
  )
}

export default SignUpModal