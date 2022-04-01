import React, { useState } from 'react';
import { Avatar, Button, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function SignUp() {
    const paperStyle = { padding: '30px 20px', width: '380px' }
    const [show, setShow] = useState(false);

    return (
        <Grid>
            <Paper elevation={2} style={paperStyle}>
                <Grid>
                    <Avatar style={{ background: '#139487', margin: 'auto', width: '56px', height: '56px' }}><LockIcon /></Avatar>
                    <h2 style={{marginTop: '10px'}}>Register</h2>
                    <Typography variant='caption'>Apply for Journalist</Typography>
                </Grid>
                <form style={{ marginTop: '10px' }} >
                    <div style={{ display: 'flex' }} className="flex">
                        <TextField style={{ marginBottom: '10px', marginRight: '5px' }} fullWidth label='First Name' />
                        <TextField style={{ marginBottom: '10px' }} fullWidth label='Last Name' />
                    </div>
                    <TextField style={{ marginBottom: '10px' }} fullWidth label='Email' />
                    <Grid style={{display: 'flex', alignItems: 'center'}}>
                        <TextField style={{ marginBottom: '10px' }} fullWidth label='Password' type={show ? 'text' : 'password'} />
                        <div style={{position: 'absolute', marginLeft: '300px', zIndex: '100'}} className="visibility" onClick={() => setShow(!show)}>{show ? (<VisibilityOffIcon />) : (<VisibilityIcon />)}</div>
                    </Grid>
                    <Button type='submit' variant="contained" style={{ background: '#139487', marginTop: '20px' }}>Sign Up</Button>
                    <Divider style={{margin: '10px 0'}}/>
                    <Typography>Already have an account? <span style={{color: '#139487', cursor: 'pointer'}}>Sign In</span></Typography>
                </form>
            </Paper>
        </Grid>
    );
}

export default SignUp
