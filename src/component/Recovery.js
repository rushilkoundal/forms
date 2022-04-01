import React, { useState, useEffect } from 'react';
import { Avatar, Button, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';

function Recovery() {
    const paperStyle = { padding: '30px 20px', width: '380px' }
    const [show, setShow] = useState(false);
    const [counter, setCounter] = useState(20);
    const [disable, setDisable] = useState(false)

    const handleClick = () => {
        setShow(!show);
        if (counter > 0) {
            setDisable(true)
        }
        else {
            setDisable(false)
        }
    }    

    return (
        <Grid>
            <Paper elevation={2} style={paperStyle}>
                <Grid>
                    <Avatar style={{ background: '#139487', margin: 'auto', width: '56px', height: '56px' }}><KeyIcon /></Avatar>
                    <h2 style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>Reset Password</h2>
                    <Typography style={{ display: 'flex', justifyContent: 'center' }} variant='caption'>No worries, we'll send you reset instruction</Typography>
                </Grid>
                <form style={{ marginTop: '10px' }} >
                    <TextField style={{ marginBottom: '10px' }} fullWidth label='Email' />
                    <Button variant="contained" style={{ background: '#139487', marginTop: '20px', width: '100%' }} disabled={disable} onClick={handleClick}>Verification Link</Button>
                    {show ? (
                        <>
                            <Divider style={{ margin: '10px 0' }} />
                            <Typography style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: '0.7' }}>Resend Link in 00:{counter}</Typography>
                        </>
                    ) : null}
                </form>
            </Paper>
        </Grid>
    );
}

export default Recovery
