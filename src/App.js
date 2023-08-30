import HeaderBar from "./layout/HeadBar";
import SideBar from "./layout/SideBar";

import { Routes, Route } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";

import Dashboard from "./component/admin/Dashboard";
import Manage from "./component/admin/Manage";
import ViewData from "./component/admin/ViewData";
import Settingstatus from "./component/admin/Settingstatus";
import Home from "./component/admin/Home";
import Setdefault from "./component/admin/Setdefault";
import Settingmaxcharge from "./component/admin/Settingmaxcharge";
import Settingoutput from "./component/admin/Settingoutput";
import Settingbattery from "./component/admin/Settingbattery";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="app">
        <SideBar />
        <main className="content">
          <HeaderBar />
          <div className="content_body">
            <Box m="20px">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin/Dashboard" element={<Dashboard />} />
                <Route path="/admin/Manage" element={<Manage />} />
                <Route path="/admin/Viewtable" element={<ViewData />} />
                <Route path="/admin/Settingstatus" element={<Settingstatus />} />
                <Route path="/admin/Setdefault" element={<Setdefault />} />
                <Route path="/admin/Settingmaxcharge" element={<Settingmaxcharge />} />
                <Route path="/admin/Settingoutput" element={<Settingoutput />} />
                <Route path="/admin/Settingbattery" element={<Settingbattery />} />
              </Routes>
            </Box>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
