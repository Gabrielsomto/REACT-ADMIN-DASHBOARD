import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import StyleIcon from "@mui/icons-material/Style";
import SourceIcon from "@mui/icons-material/Source";

function SideNav() {
  const { collapsed } = useProSidebar();
   const theme = useTheme();
  
  return (
    <Sidebar
      style={{
        height: '100%',
        top: 'auto'
      }}
      breakPoint="md"
      backgroundColor={theme.palette.primary.main}
    >

      <Box sx={styles.avatarContainer}>
          <Avatar sx={styles.avatar} alt='Channel Name' src='src/assets/edited logo.jpg'></Avatar>
          {!collapsed ? <Typography variant="body2" sx={styles.yourChannel}>Your Channel</Typography> : null}
            {!collapsed ? <Typography variant="overline">React with Masoud</Typography> : null}

      </Box>
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

/**
 * @type {import("@mui/material").SxProps}
 */
const styles = {
  avatarContainer: {
      display: "flex",
      alignItems: "center",
      flexDirection: 'column',
      my: 5
  },
  avatar: {
      width: '40%',
      height: 'auto'
  },
  yourChannel: {
      mt: 1
  }

}
