import React, { useState, useEffect } from 'react'
import './Settingstatus.css'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { IconButton, } from "@mui/material";
import { Link } from "react-router-dom";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ListItem from '@mui/material/ListItem';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';


import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarFooter,
} from "react-pro-sidebar";




const Settingstatus = () => {

  const label = { inputProps: { 'aria-label': 'Color switch demo' } };

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [checked2, setChecked2] = React.useState(false);

  const handleChange2 = (event2) => {
    setChecked2(event2.target2.checked2);
  };

  const [checked3, setChecked3] = React.useState(false);

  const handleChange3 = (event3) => {
    setChecked3(event3.target3.checked3);
  };

  const [checked4, setChecked4] = React.useState(false);

  const handleChange4 = (event4) => {
    setChecked4(event4.target4.checked4);
  };

  const [checked5, setChecked5] = React.useState(false);

  const handleChange5 = (event5) => {
    setChecked5(event5.target5.checked5);
  };

  const [checked6, setChecked6] = React.useState(false);

  const handleChange6 = (event6) => {
    setChecked6(event6.target6.checked6);
  };

  const [checked7, setChecked7] = React.useState(false);

  const handleChange7 = (event7) => {
    setChecked7(event7.target7.checked7);
  };

  const [checked8, setChecked8] = React.useState(false);

  const handleChange8 = (event8) => {
    setChecked8(event8.target8.checked8);
  };

  const [checked9, setChecked9] = React.useState(false);

  const handleChange9 = (event9) => {
    setChecked9(event9.target9.checked9);
  };


  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

  return (
    <div className='containstatus'>
      <div className='settingbox'>
        <h4>SETTING PARAMETERS</h4>
        <div className='containparameters'>
          <div className='nameswitch'>
            <p>Buzzer</p>
            <Switch checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} color="warning" />
          </div>
          <div className='nameswitch'>
            <p>Overload Bypass</p>
            <Switch checked2={checked2} onChange2={handleChange2} inputProps2={{ 'aria-label': 'controlled' }} color="warning" />
          </div>
          <div className='nameswitch'>
            <p>Power Saving</p>
            <Switch checked3={checked3} onChange3={handleChange3} inputProps3={{ 'aria-label': 'controlled' }} color="warning" />
          </div>
          <div className='nameswitch'>
            <p>LCD Display</p>
            <Switch checked4={checked4} onChange4={handleChange4} inputProps4={{ 'aria-label': 'controlled' }} color="warning" />
          </div>
          <div className='nameswitch'>
            <p>Overload Restart</p>
            <Switch checked5={checked5} onChange5={handleChange5} inputProps5={{ 'aria-label': 'controlled' }} color="warning" />
          </div>
          <div className='nameswitch'>
            <p>Over Temperature Restart</p>
            <Switch checked6={checked6} onChange6={handleChange6} inputProps6={{ 'aria-label': 'controlled' }} color="warning" />
          </div>
          <div className='nameswitch'>
            <p>Backlight</p>
            <Switch checked7={checked7} onChange7={handleChange7} inputProps7={{ 'aria-label': 'controlled' }} color="warning" />
          </div>
          <div className='nameswitch'>
            <p>Alarm</p>
            <Switch checked8={checked8} onChange8={handleChange8} inputProps8={{ 'aria-label': 'controlled' }} color="warning" />
          </div>
          <div className='nameswitch'>
            <p>Fault Code Record</p>
            <Switch checked9={checked9} onChange9={handleChange9} inputProps9={{ 'aria-label': 'controlled' }} color="warning" />
          </div>
        </div>
      </div>
      <div className='settingmenu'>
        <h4>Note!</h4>
        <p>[Buzzer]:Enable/disable silence buzzer or open buzzer</p>
        <p>[Overload Bypass]:Enable/disable overload bypass</p>
        <p>[Power Saving]:Enable/disable power saving</p>
        <p>[LCD Display]:Enable/disable LAD display escape to default page after 1min timeout</p>
        <p>[Overload Restart]:Enable/disable overload restart</p>
        <p>[Over Temperature Restart]:Enable/disable over temperature restart</p>
        <p>[Backlight]:Enable/disable backlight on</p>
        <p>[Alarm]:Enable/disable alarm on when primary source interrupt</p>
        <p>[Fault Code Record]:Enable/disable fault code record</p>
      </div>
    </div>
  )
}

export default Settingstatus