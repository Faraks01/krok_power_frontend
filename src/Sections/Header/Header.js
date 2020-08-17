import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NavBar from "./NavBar";
import logo from '../../assets/large-logo.svg';
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Menu from "./Menu";
import Box from "@material-ui/core/Box";
import LargeLogoSvgIcon from "../../SvgComponents/LargeLogoSvgIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: 60
  },

  collapseTransition: {
    transition: '1000ms',
  }
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [collapsed, setCollapsed] = useState(false);

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  function handleScrollEvt() {
    if (window.pageYOffset > (mdUp ? 232 : 139)/*189*/) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }

  useEffect(() => {

    window.addEventListener("scroll", handleScrollEvt, false);

    return () => {
      window.removeEventListener("scroll", handleScrollEvt, false);
    }
  }, []);

  return <>
    <NavBar collapsed={collapsed}/>

    <Grid
      className={classes.root}
      direction={"column"}
      container>

      <Grid
        style={{
          height: mdUp ? 230 : 140,
          // maxHeight: collapsed ? 0 : 230,
          overflow: 'hidden',
          opacity: collapsed ? 0 : 1
        }}
        className={classes.collapseTransition}
        container
        justify={"center"}
        alignItems={"center"}>
        <LargeLogoSvgIcon
          height={mdUp ? 80 : 60}
        />
      </Grid>

      {mdUp && <Menu/>}

      <Box height={'1px'}/>

    </Grid>
  </>
};

export default Header;
