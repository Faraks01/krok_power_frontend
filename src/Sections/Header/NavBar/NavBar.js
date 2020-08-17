import PropTypes from 'prop-types'
import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Selector from "./Selector";
import SquareBtn from "../../../Components/SquareBtn";
import LargeLogoSvgIcon from "../../../SvgComponents/LargeLogoSvgIcon";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'fixed',
    zIndex: 1300,
    height: 50,
    backgroundColor: '#fff'
  },

  collapseTransition: {
    transition: '300ms',
  },

  fz16: {
    fontSize: 16
  },

  fz12: {
    fontSize: 12
  },

  floatLogo: {
    position: 'absolute',
    left: 5,
    top: '50%',
    transform: 'translateY(-50%)'
  }
}));

const NavBar = ({collapsed}) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid
      className={classes.root}
      container
      justify={"center"}>
      <Grid item xs={12} md={8}>
        <Grid container direction={'row'}>

          <SquareBtn
            className={`transition-600 ${collapsed && 'zero-opacity'}`}
            color={'secondary'}
            variant="contained">
            RU
          </SquareBtn>
          {/*<SquareBtn color={'primary'} variant="contained">ENG</SquareBtn>*/}

          <Box className={`transition-600 ${classes.floatLogo} ${collapsed ? 'full-opacity' : 'zero-opacity'}`}>
            <LargeLogoSvgIcon height={39}/>
          </Box>

          <Hidden smDown>
            <Box ml={'auto'}>
              <Grid
                container
                direction={'column'}
                justify={"space-between"}
                alignItems={"flex-end"}
              >
                <div style={{width: '100%', height: 8, backgroundColor: theme.palette.primary.main}}/>

                <Typography className={classes.fz16} variant={'h6'}>
                  +7 (495) 123-11-22
                </Typography>

                <Typography className={classes.fz12} style={{color: '#666666'}} variant={'body1'}>
                  Пн.-Вс. 09:00 - 21:00
                </Typography>
              </Grid>
            </Box>
          </Hidden>


          <Hidden mdUp>
            <Box ml={'auto'}>
              <Grid
                container
                direction={'column'}
                justify={"space-between"}
                alignItems={"center"}
              >
                <div style={{width: '100%', height: 8, backgroundColor: theme.palette.primary.main}}/>

                <Typography className={classes.fz16} variant={'h6'}>
                  +7 (495) 123-11-22
                </Typography>

                <Typography className={classes.fz12} style={{color: '#666666'}} variant={'body2'}>
                  Пн.-Вс. 09:00 - 21:00
                </Typography>
              </Grid>
            </Box>

            <Box width={8}/>

            <Selector/>
          </Hidden>


        </Grid>
      </Grid>
    </Grid>
  );
};

NavBar.propTypes = {
  collapsed: PropTypes.bool
}

export default NavBar;
