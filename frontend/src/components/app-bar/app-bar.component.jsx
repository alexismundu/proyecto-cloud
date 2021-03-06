import React from "react";
import { Link } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MapIcon from "@mui/icons-material/Map";
import "./app-bar.styles.scss";
import routes from "../../routes";

export default function AppBar() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className="app-bar-container"
    >
      <BottomNavigationAction
        label="inicio"
        icon={<HomeIcon />}
        component={Link}
        to={routes.homePage}
      />
      <BottomNavigationAction
        className="add-icon-container"
        icon={<AddCircleIcon />}
        component={Link}
        to={routes.createProperty}
      />
      <BottomNavigationAction label="propiedades" icon={<MapIcon />} />
    </BottomNavigation>
  );
}
