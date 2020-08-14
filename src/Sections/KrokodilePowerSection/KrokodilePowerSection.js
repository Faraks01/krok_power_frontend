import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import picture from "../../assets/distribution-point-schema.png";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '52px 10px'
  },

  rootM: {
    width: '100%',
    padding: '20px 10px'
  },

  fz16: {
    fontSize: 16
  },

  widthLimit: {
    maxWidth: 926
  },
}));

const KrokodilePowerSection = () => {
  const classes = useStyles();
  const theme = useTheme();

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return <Grid
    className={mdUp ? classes.root : classes.rootM}
    container
    direction={'column'}
    alignItems={"center"}>
    <Typography align={"center"} variant={"h5"} color={"textSecondary"}>
      KROKODILE POWER
    </Typography>

    <Box height={mdUp ? '46px' : '15px'}/>

    <Grid className={classes.widthLimit} container direction={"column"} alignItems={"center"}>
      <Typography className={classes.fz16} align={"center"} variant={"body1"}>
        Распределительный пункт {mdUp && <br/>}
        Распределение электроэнергии со сниженными потерями, для выделенных сетей электроснабжения класса Hi-end
      </Typography>

      <Box height={mdUp ? '19px' : '15px'}/>

      <Typography className={classes.fz16} align={"center"} variant={"body1"}>
        Это не фильтр типа PILOT, а распределительный пункт электроснабжения! KROKODAIL POWER {mdUp &&
      <br/>} устанавливает самое
        низкое в отрасли Re и обеспечивает эквипотенциальность {mdUp && <br/>} подключаемых устройств.
      </Typography>
    </Grid>

    <Box height={mdUp ? '46px' : '20px'}/>

    <img
      style={{transform: `translateX(${mdUp ? 30 : 10}px)`, height: mdUp ? 398 : 167}}
      className={classes.widthLimit}
      src={picture}/>
  </Grid>
};

export default memo(KrokodilePowerSection);
