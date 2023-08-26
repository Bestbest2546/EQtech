import HeaderBar from "./layout/HeadBar";
import SideBar from "./layout/SideBar";

import { Routes, Route } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";

import Dashboard from "./component/admin/Dashboard";
import Manage from "./component/admin/Manage";
import ViewData from "./component/admin/ViewData";
import Settingstatus from "./component/admin/Settingstatus";

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
                <Route path="/" element={<Dashboard />} />
                <Route path="/admin/Dashboard" element={<Dashboard />} />
                <Route path="/admin/Manage" element={<Manage />} />
                <Route path="/admin/Viewtable" element={<ViewData />} />
                <Route path="/admin/Settingstatus" element={<Settingstatus />} />
              </Routes>
            </Box>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
