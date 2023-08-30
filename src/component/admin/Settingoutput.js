import React, { useState } from 'react'
import './Settingoutput.css'
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarFooter,
} from "react-pro-sidebar";
import Button from '@mui/material/Button';

const Settingoutput = () => {

    const [currentLabel, setCurrentLabel] = useState("Select Hz");

    const handleMenuItemClick = (newLabel) => {
        setCurrentLabel(newLabel);
    };

    const [currentLabel2, setCurrentLabel2] = useState("Select Volt");

    const handleMenuItemClick2 = (newLabel2) => {
        setCurrentLabel2(newLabel2);
    };

    const [currentLabel3, setCurrentLabel3] = useState("Select priority");

    const handleMenuItemClick3 = (newLabel3) => {
        setCurrentLabel3(newLabel3);
    };

    return (
        <div className='containvaluehz'>
            <h3>Setting output</h3>
            <div className='widthbox'>
                <Menu>
                    <SubMenu label={currentLabel}>
                        <MenuItem onClick={() => handleMenuItemClick("50Hz")}>50Hz</MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick("60Hz")}>60Hz</MenuItem>
                    </SubMenu>
                </Menu>
                <Menu>
                    <SubMenu label={currentLabel2}>
                        <MenuItem onClick={() => handleMenuItemClick2("220V")}>220V</MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick2("230V")}>230V</MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick2("240V")}>240V</MenuItem>
                    </SubMenu>
                </Menu>
                <Menu>
                    <SubMenu label={currentLabel3}>
                        <MenuItem onClick={() => handleMenuItemClick3("Utility first")}>Utility first</MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick3("Solar fist")}>Solar fist</MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick3("SBU")}>SBU</MenuItem>
                    </SubMenu>
                </Menu>
            </div>
            <Button variant="contained">
                SET
            </Button>
        </div>
    )
}

export default Settingoutput