import React from "react";
import {
  AppBar,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useState } from "react";
import { Box } from "@mui/system";
import DrawerComponent from "./Drawer";

const Navbar = ({ links }) => {
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState(0);

  return (
    <AppBar
      sx={{
        backgroundImage:
          "linear-gradient(90deg, rgba(18,36,0,1) 0%, rgba(76,9,121,1) 35%, rgba(255,0,39,1) 100%);",
      }}
    >
      <Toolbar>
        {isMatch ? (
          <>
            <Typography>
              <ShoppingCartCheckoutIcon />
            </Typography>
            <DrawerComponent links={links} />
          </>
        ) : (
          <Grid sx={{ placeItems: "center" }} container>
            <Grid item xs={2}>
              <Typography>
                <ShoppingCartCheckoutIcon />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                {links.map((link, index) => (
                  <Tab label={link} key={index} />
                ))}
              </Tabs>
            </Grid>
            <Grid item sx={1} />
            <Grid item sx={3}>
              <Box sx={{ display: "flex" }}>
                <Button
                  sx={{ margin: "auto", background: "rgba(18,36,0,1)" }}
                  variant="contained"
                >
                  Login
                </Button>
                <Button
                  sx={{ marginLeft: 1, background: "rgba(18,36,0,1)" }}
                  variant="contained"
                >
                  Sign up
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
