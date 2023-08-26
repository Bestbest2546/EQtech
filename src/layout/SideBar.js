import React, { useState } from "react";
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarFooter,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme, Badge } from "@mui/material";
import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import TableViewIcon from '@mui/icons-material/TableView';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import UpcomingOutlinedIcon from '@mui/icons-material/UpcomingOutlined';
import FastForwardOutlinedIcon from '@mui/icons-material/FastForwardOutlined';
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import WbIridescentOutlinedIcon from '@mui/icons-material/WbIridescentOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import BatteryChargingFullOutlinedIcon from '@mui/icons-material/BatteryChargingFullOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import RoomPreferencesOutlinedIcon from '@mui/icons-material/RoomPreferencesOutlined';

const SideBar = () => {
    const [isCollapsed, setisCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);
    const [broken, setBroken] = useState(false);

    return (
        <div
            style={{
                display: "flex",
                height: "100%",
            }}
        >
            <Sidebar
                collapsed={isCollapsed}
                toggled={toggled}
                onBackdropClick={() => setToggled(false)}
                onBreakPoint={setBroken}
                image="/assets/backgroundorange.png"
                breakPoint="md"
                style={{ height: "100%" }}
            >
                <div
                    style={{ display: "flex", flexDirection: "column", height: "100%" }}
                >
                    <div style={{ flex: 1, marginBottom: "32px" }}>
                        <Menu iconShape="square">
                            {/* LOGO */}
                            <MenuItem
                                onClick={() => setisCollapsed(!isCollapsed)}
                                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                                style={{
                                    margin: "10px 0 20px 0",
                                }}
                            >
                                {!isCollapsed && (
                                    <Box
                                        display="flex"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        ml="15px"
                                    >
                                        <Typography>EQ tech</Typography>
                                        <IconButton onClick={() => setisCollapsed(!isCollapsed)}>
                                            <MenuOutlinedIcon />
                                        </IconButton>
                                    </Box>
                                )}
                            </MenuItem>
                            {!isCollapsed && (
                                <Box mb="25px">
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <img
                                            alt="profile-user"
                                            width="100px"
                                            height="100px"
                                            src={`/assets/eqlogo2.png`}
                                            style={{ cursor: "pointer", borderRadius: "50%" }}
                                        />
                                    </Box>
                                    <Box textAlign="center">
                                        <Typography sx={{ m: "10px 0 0 0" }}>EQ</Typography>
                                        <Typography>Tech </Typography>
                                    </Box>
                                </Box>
                            )}

                            <Link to="/admin/Dashboard" className="menu-bars">
                                <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
                            </Link>

                            <SubMenu icon={<TuneOutlinedIcon />} label="Control">
                                <Link to={"/admin/Settingstatus"} className="menu-bars">
                                    <MenuItem icon={<ArticleOutlinedIcon />}>
                                        {" "}
                                        Setting status
                                    </MenuItem>
                                </Link >
                                <Link to={"/admin/viewtable"} className="menu-bars">
                                    <MenuItem icon={<ManageHistoryOutlinedIcon />}>
                                        {" "}
                                        Set default
                                    </MenuItem>
                                </Link >
                                <Link to={"/admin/viewtable"} className="menu-bars">
                                    <MenuItem icon={<BatteryChargingFullOutlinedIcon />}>
                                        {" "}
                                       Setting max charge
                                    </MenuItem>
                                </Link >
                                <Link to={"/admin/viewtable"} className="menu-bars">
                                    <MenuItem icon={<ExitToAppOutlinedIcon />}>
                                        {" "}
                                        Setting output
                                    </MenuItem>
                                </Link >
                                <Link to={"/admin/viewtable"} className="menu-bars">
                                    <MenuItem icon={<RoomPreferencesOutlinedIcon />}>
                                        {" "}
                                        Setting Battery
                                    </MenuItem>
                                </Link >
                                {/* <MenuItem icon={<BarChartOutlinedIcon />}>
                                    {" "}
                                    Line charts
                                </MenuItem> */}
                            </SubMenu>

                            <SubMenu label="Monitoring" icon={<DesktopMacOutlinedIcon />}>
                                <Link to={"/admin/Dashboard"} className="menu-bars">
                                    <MenuItem>Inverter1</MenuItem>
                                </Link>
                                <Link to={"/admin/manage"} className="menu-bars">
                                    <MenuItem>Inverter2</MenuItem>
                                </Link>
                                <Link to={"/admin/manage"} className="menu-bars">
                                    <MenuItem>Inverter3</MenuItem>
                                </Link>
                                <Link to={"/admin/manage"} className="menu-bars">
                                    <MenuItem>Inverter4</MenuItem>
                                </Link>
                                <Link to={"/admin/manage"} className="menu-bars">
                                    <MenuItem>Inverter5</MenuItem>
                                </Link>
                                {/* <MenuItem> Admin</MenuItem> */}
                            </SubMenu>
                        </Menu>

                        <div
                            style={{
                                padding: "0 24px",
                                marginBottom: "8px",
                                marginTop: "32px",
                            }}
                        >
                            <Typography
                                variant="body2"
                                fontWeight={600}
                                style={{
                                    opacity: isCollapsed ? 0 : 0.5,
                                    letterSpacing: "0.5px",
                                }}
                            >
                                Extra
                            </Typography>
                        </div>

                        <Menu>
                            <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
                            <MenuItem icon={<ReceiptOutlinedIcon />}>Documentation</MenuItem>
                        </Menu>
                    </div>
                </div>
            </Sidebar>
            <main>
                <div style={{ padding: "16px 2px ", color: "#44596e" }}>
                    <div style={{ marginBottom: "16px" }}>
                        {broken && (
                            <IconButton onClick={() => setToggled(!toggled)}>
                                <MenuOutlinedIcon />
                            </IconButton>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};
export default SideBar;