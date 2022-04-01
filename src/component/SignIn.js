import React, { useState } from 'react';
import { Avatar, Button, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styled from 'styled-components';
import RecoveryScreen from '../Screen/RecoveryScreen';

function SignIn() {
    const paperStyle = { padding: '30px 20px', width: '380px' }
    const StyleVisible = styled.div`  
    &:hover{
        cursor: pointer;
    }`
    const StyleForgot = styled.div`
    color: #139487;
    cursor: pointer;
    `
    const StyleNewUser = styled.div`
    margin-left: 10px;
    color: #139487;
    cursor: pointer;
    `

    const [show, setShow] = useState(false);
    const [goToRecovery, setGoToRecovery] = useState(false)

    return (
        <Grid>
            <Paper elevation={2} style={paperStyle}>
                <Grid>
                    <Avatar style={{ background: '#139487', margin: 'auto', width: '56px', height: '56px' }}><LockIcon /></Avatar>
                    <h2>Sign In</h2>
                    <Typography variant='standard'>Welcome Back!!</Typography>
                </Grid>
                <form style={{ marginTop: '10px' }} >
                    <TextField style={{ marginBottom: '10px' }} fullWidth label='Email' />
                    <Grid style={{ display: 'flex', alignItems: 'center' }}>
                        <TextField style={{ marginBottom: '10px' }} fullWidth label='Password' type={show ? 'text' : 'password'} />
                        <StyleVisible style={{ position: 'absolute', marginLeft: '300px', zIndex: '100' }} className="visibility" onClick={() => setShow(!show)}>{show ? (<VisibilityOffIcon />) : (<VisibilityIcon />)}
                        </StyleVisible>
                    </Grid>
                    <StyleForgot onClick={() => setGoToRecovery(!goToRecovery)} varient='standard'>Forgot Password?</StyleForgot>
                    <Button type='submit' variant="contained" style={{ background: '#139487', margin: '10px 0' }}>Sign In</Button>
                </form>
                <Divider /> 
                <div style={{ display: 'flex', alignItems: 'baseline' }} className="newUser">
                    <Typography style={{ marginTop: '10px' }} varient='standard'>Don't have an account?</Typography>
                    <StyleNewUser>Sign Up for free</StyleNewUser>
                </div>
            </Paper>
        </Grid>
    );
}

export default SignIn
