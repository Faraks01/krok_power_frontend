import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import logo1 from '../../assets/siemens-logo.png';
import logo2 from '../../assets/furutech-logo.png';
import logo3 from '../../assets/legrand-logo.png';
import logo4 from '../../assets/vimar-logo.png';
import logo5 from '../../assets/schneider-logo.png';
import logo6 from '../../assets/radiomuseum-logo.png';
import CircleButton from "../../Components/CircleButton";
import PhoneSvgIcon from "../../SvgComponents/PhoneSvgIcon";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ModalContent from "./ModalContent";

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    padding: '56.5px 20px 56px'
  },

  rootM: {
    position: 'relative',
    width: '100%',
    padding: '20px 15px 30px'
  },

  logoWrapper: {
    padding: '0 40px'
  },

  logo: {
    maxWidth: '242px',
    minWidth: '142px',
    width: '100%',
    height: 'auto'
  },

  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    outline: 'none',
    background: '#FFFFFF',
    boxShadow: '0px 16px 32px rgba(0, 0, 0, 0.26)',
    borderRadius: 30,
    padding: '30px 45px',
    backgroundColor: theme.palette.background.paper,
  },
}));

const PartnersSection = () => {
  const classes = useStyles();
  const theme = useTheme();

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Grid
      className={mdUp ? classes.root : classes.rootM}
      container
      direction={"column"}
      alignItems={"center"}>

      <Typography align={"center"} variant={'h5'} color={"textSecondary"}>
        НАШИ ПАРТЕНЕРЫ
      </Typography>

      <Grid item xs={12} md={8}>
        <Grid
          container
          alignItems={"center"}
          direction={"row"}>

          <Grid
            className={classes.logoWrapper}
            item container xs={6} md={4}
            justify={"center"}
            alignItems={"center"}>
            <img className={classes.logo} src={logo1}/>
          </Grid>

          <Grid
            className={classes.logoWrapper}
            item container xs={6} md={4}
            justify={"center"}
            alignItems={"center"}>
            <img className={classes.logo} src={logo2}/>
          </Grid>

          <Grid
            className={classes.logoWrapper}
            item container xs={6} md={4}
            justify={"center"}
            alignItems={"center"}>
            <img className={classes.logo} src={logo3}/>
          </Grid>

          <Grid
            className={classes.logoWrapper}
            item container xs={6} md={4}
            justify={"center"}
            alignItems={"center"}>
            <img className={classes.logo} src={logo4}/>
          </Grid>

          <Grid
            className={classes.logoWrapper}
            item container xs={6} md={4}
            justify={"center"}
            alignItems={"center"}>
            <img className={classes.logo} src={logo5}/>
          </Grid>

          <Grid
            className={classes.logoWrapper}
            item container xs={6} md={4}
            justify={"center"}
            alignItems={"center"}>
            <img className={classes.logo} src={logo6}/>
          </Grid>

        </Grid>
      </Grid>

    </Grid>
  )
};

export default memo(PartnersSection);
