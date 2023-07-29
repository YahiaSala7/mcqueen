import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import logo from "../assets/imgs/logo.png";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { allLinks, navLinks, subnavLinks } from "../Constants/Constants";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import { ArrowCircleDown } from "@mui/icons-material";

function Navbar() {
  const [active, setActive] = useState("");
  const [openSublinks, setOpenSublinks] = useState(false);

  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "transparent",
        p: "50px",
        position: "absolute",
        top: 0,
        zIndex: 1,
      }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <NavLink
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <img src={logo} alt="logo" />
            <Typography
              sx={{ color: "white", fontSize: { xs: "22px", sm: "24px" } }}>
              Mcqeen
            </Typography>
          </Stack>
        </NavLink>

        <Stack
          position="relative"
          direction="row"
          spacing={2}
          sx={{ display: { xs: "none", md: "flex" } }}>
          {navLinks.map((nav) => (
            <Button
              sx={{
                color: active === nav.title ? "#edb901" : "white",
                "&:hover": { color: "#edb901" },
              }}
              key={nav.id}
              onClick={() => setActive(nav.title)}
              href={`#${nav.id}`}
              endIcon={
                nav.id === "All Blocks" ? (
                  <ArrowCircleDown
                    onClick={() => setOpenSublinks(!openSublinks)}
                  />
                ) : (
                  ""
                )
              }>
              {nav.title}
            </Button>
          ))}
          <Box
            display={openSublinks === false ? "none" : "flex"}
            flexDirection="column"
            position="absolute"
            right="0"
            top="50px"
            bgcolor="#23262b"
            borderBottom="1px solid var(--primary-color)"
            p="10px"
            width="150px">
            {subnavLinks.map((nav) => (
              <Button
                sx={{
                  color: active === nav.title ? "#edb901" : "white",
                  "&:hover": { color: "#edb901" },
                }}
                key={nav.id}
                onClick={() => setActive(nav.title)}
                href={`#${nav.id}`}>
                {nav.title}
              </Button>
            ))}
          </Box>
        </Stack>

        <Stack
          sx={{
            display: { sm: "flex", md: "none" },
          }}>
          <IconButton {...bindTrigger(popupState)}>
            <MenuIcon sx={{ color: "var(--primary-color)" }} />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            {allLinks.map((nav) => (
              <MenuItem onClick={popupState.close} key={nav.id}>
                <Button
                  sx={{
                    color: active === nav.title ? "#edb901" : "black",
                    "&:hover": { color: "#edb901" },
                  }}
                  onClick={() => setActive(nav.title)}
                  href={`#${nav.id}`}>
                  {nav.title}
                </Button>
              </MenuItem>
            ))}
          </Menu>
        </Stack>
        <Typography
          sx={{
            "&:hover": { color: "#edb901" },
            transition: ".4s",
            cursor: "pointer",
            display: { xs: "none", md: "block" },
          }}>
          <IconButton>
            <PhoneIcon sx={{ color: "#edb901" }} />
          </IconButton>{" "}
          1-800-1234-567
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
