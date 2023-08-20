import { Box, Typography } from "@mui/material";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import StyleIcon from "@mui/icons-material/Style";
import SourceIcon from "@mui/icons-material/Source";
import { useTheme } from '@mui/material/styles';

function SideNav() {
   const theme = useTheme();
  
  return (
    <Sidebar
      style={{
        height: '100%',
        top: 'auto'
      }}
      breakPoint="md"
      backgroundColor={theme.palette.neutral.main}
    >
      <Menu>
        <MenuItem active icon={<DashboardCustomizeIcon />}>
          <Typography variant="body2">Dashboard</Typography>
        </MenuItem>
        <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>

        <MenuItem active icon={<StyleIcon />}>
          <Typography variant="body2">Content</Typography>
        </MenuItem>
        <MenuItem active icon={<SourceIcon />}>
          <Typography variant="body2">Analytics</Typography>
        </MenuItem>
        <MenuItem active icon={<SourceIcon />}>
          <Typography variant="body2">Customization</Typography>
        </MenuItem>
      
      </Menu>
    </Sidebar>
  );
}

export default SideNav;
