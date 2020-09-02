import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ModalImage from "../../Components/ModalImage";
import transistor4 from "../../assets/transistor-4.png";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 1rem',
  },

  picture: {
    height: 'auto',
  }
}));

const PassiveSpeakerSystemsSection = () => {
  const classes = useStyles();
  const theme = useTheme();

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return <Grid
    className={classes.root}
    container
    direction={'column'}
    alignItems={"center"}>
    <Box height={mdUp ? '36px' : '20px'}/>

    <Typography align={"center"} variant={"h5"} color={"textSecondary"}>
      ПАСИВНЫЕ АКУСТИЧЕСКИЕ СИСТЕМЫ
    </Typography>

    <Box height={mdUp ? '57px' : '20px'}/>

    <Grid
      className={'mx-w-766 w-100per'}
      container
      direction={'row'}
      alignItems={'center'}>
      <Grid item md={3} xs={12}>
        <ModalImage imageSrc={transistor4}>
          <img
            className={`${classes.picture} pointer`}
            style={{width: mdUp ? 153 : '90vw'}}/>
        </ModalImage>
      </Grid>

      <Grid item md={9} xs={12}>
        <Typography className={'fz13'} variant={"body1"} align={'left'}>
          Реплика легендарной акустической советской системы КОРВЕТ 150 АС-001.
          <br/>
          <br/>
          Модель выполнена согласно идеологии и принципам D'Appolito в антирезонансном корпусе увеличенного объёма.
          <br/>
          <br/>
          Все электрические компоненты (например, фильтры, динамики) соответствуют оригиналу.
        </Typography>
      </Grid>
    </Grid>

    <Box height={mdUp ? '46px' : '20px'}/>
  </Grid>
};

export default memo(PassiveSpeakerSystemsSection);
