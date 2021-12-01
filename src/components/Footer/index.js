import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
      style={{
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
      }}
      showLabels
      value={123}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Recents" />
      <BottomNavigationAction label="Favorites" />
      <BottomNavigationAction label="Nearby" />
    </BottomNavigation>
    </Box>
  );
}