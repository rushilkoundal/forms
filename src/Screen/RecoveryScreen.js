import React from 'react'
import styled from 'styled-components';
import Recovery from '../component/Recovery';

function RecoveryScreen() {
    const StyleImg = styled.div`
    background: whitesmoke;
    width: 50vw;
    height: 100vh;

    @media Screen and (max-width: 800px) {
        display: none;
    }`

    const StyleForm = styled.div`
    margin: auto;

    @media Screen and (max-width: 800px) {
        margin: 15vh auto auto auto;

    }
    `
    return (
        <div className='signup__screen' style={{display: 'flex'}}>
            <StyleImg className="img">

            </StyleImg>
            <StyleForm className="signup">
                <Recovery />
            </StyleForm>
        </div>
    )
}

export default RecoveryScreen