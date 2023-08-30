import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Settingmaxcharge.css'

const Settingmaxcharge = () => {
    return (
        <div className='containmaxcharge'>
                <h3>Setting max chargeing current</h3>
            <div className='containsent'>
                <TextField id="outlined-basic" label="Value(A)" variant="outlined" />
                <Button style={{ width: '20px', height: '55px' }} variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </div>
                <h3>Setting utility max charging current</h3>
            <div className='containsent'>
                <TextField id="outlined-basic" label="Value(A)" variant="outlined" />
                <Button style={{ width: '20px', height: '55px' }} variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </div>
        </div>
    )
}

export default Settingmaxcharge
