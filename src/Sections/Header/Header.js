import React from 'react';
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
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return <Grid
    className={classes.root}
    direction={"column"}
    container>
    <NavBar/>

    <Grid style={{height: mdUp ? 230 : 140}} container justify={"center"} alignItems={"center"}>
      <LargeLogoSvgIcon
        height={mdUp ? 80 : 60}
      />
    </Grid>

    {mdUp && <Menu/>}

    <Box height={'1px'}/>

  </Grid>
};

export default Header;
