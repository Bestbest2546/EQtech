import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarFooter,
} from "react-pro-sidebar";
import './Settingbattery.css'

const Settingbattery = () => {

    const [currentLabel, setCurrentLabel] = useState("Select Voltage");

    const handleMenuItemClick = (newLabel) => {
        setCurrentLabel(newLabel);
    };

    const [currentLabel2, setCurrentLabel2] = useState("Select Batt type");

    const handleMenuItemClick2 = (newLabel2) => {
        setCurrentLabel2(newLabel2);
    };

    const [currentLabel3, setCurrentLabel3] = useState("Select Batt cut-off");

    const handleMenuItemClick3 = (newLabel3) => {
        setCurrentLabel3(newLabel3);
    };

    return (
        <div style={{display:'flex', flexDirection:'row', gap:'10px'}}>
            <div className='containbattery'>
                <h3>Battery voltage back to utility</h3>
                <div className='containsent'>
                    <TextField id="outlined-basic" label="Volt" variant="outlined" />
                    <Button style={{ width: '20px', height: '55px' }} variant="contained" endIcon={<SendIcon />}>
                        SET
                    </Button>
                </div>
                <h3>Battery voltage back to battery</h3>
                <div className='containsentbattery'>
                    <TextField id="outlined-basic" label="Volt" variant="outlined" />
                    <Button style={{ width: '20px', height: '55px' }} variant="contained" endIcon={<SendIcon />}>
                        SET
                    </Button>
                </div>
                <h3>Setting battery C.V. charging voltage(48V-63V)</h3>
                <div className='containsent'>
                    <TextField id="outlined-basic" label="Volt" variant="outlined" />
                    <Button style={{ width: '20px', height: '55px' }} variant="contained" endIcon={<SendIcon />}>
                        SET
                    </Button>
                </div>
                <h3>Setting battery float charging voltage(48V-63V)</h3>
                <div className='containsent'>
                    <TextField id="outlined-basic" label="Volt" variant="outlined" />
                    <Button style={{ width: '20px', height: '55px' }} variant="contained" endIcon={<SendIcon />}>
                        SET
                    </Button>
                </div>
            </div >
            <div className='containbattery'>
                <h3>Setting device charger priority</h3>
                <div className='prioritycharge'>
                    <Menu>
                        <SubMenu label={currentLabel}>
                            <MenuItem onClick={() => handleMenuItemClick("Solar first")}>Solar first</MenuItem>
                            <MenuItem onClick={() => handleMenuItemClick("Solar & utility")}>Solar & utility</MenuItem>
                            <MenuItem onClick={() => handleMenuItemClick("Only solar charge")}>Only solar charge</MenuItem>
                        </SubMenu>
                    </Menu>
                </div>
                <h3>Setting battery type</h3>
                <div className='prioritycharge'>
                    <Menu>
                        <SubMenu label={currentLabel2}>
                            <MenuItem onClick={() => handleMenuItemClick2("AGM")}>AGM</MenuItem>
                            <MenuItem onClick={() => handleMenuItemClick2("Flooded")}>Flooded</MenuItem>
                            <MenuItem onClick={() => handleMenuItemClick2("User define")}>User define</MenuItem>
                        </SubMenu>
                    </Menu>
                </div>
                <h3>Setting battery cut-off voltage</h3>
                <div className='prioritycharge'>
                    <Menu>
                        <SubMenu label={currentLabel3}>
                            <MenuItem onClick={() => handleMenuItemClick3("42V")}>42V</MenuItem>
                            <MenuItem onClick={() => handleMenuItemClick3("43V")}>43V</MenuItem>
                            <MenuItem onClick={() => handleMenuItemClick3("44V")}>44V</MenuItem>
                            <MenuItem onClick={() => handleMenuItemClick3("45V")}>45V</MenuItem>
                            <MenuItem onClick={() => handleMenuItemClick3("46V")}>46V</MenuItem>
                            <MenuItem onClick={() => handleMenuItemClick3("47V")}>47V</MenuItem>
                            <MenuItem onClick={() => handleMenuItemClick3("48V")}>48V</MenuItem>
                        </SubMenu>
                    </Menu>
                </div>
            </div >
        </div>
    )
}

export default Settingbattery
