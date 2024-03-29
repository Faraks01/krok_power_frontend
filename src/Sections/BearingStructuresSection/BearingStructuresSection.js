import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ModalImage from "../../Components/ModalImage";
import rackGroup from "../../assets/rack-group.png";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 1rem',
  },
}));

const BearingStructuresSection = () => {
  const classes = useStyles();
  const theme = useTheme();

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return <Grid
    className={classes.root}
    container
    direction={'column'}
    alignItems={"center"}>
    <Box height={mdUp ? '46px' : '20px'}/>

    <Typography align={"center"} variant={"h5"} color={"textSecondary"}>
      НЕСУЩИЕ КОНСТРУКЦИИ
    </Typography>

    <Box height={mdUp ? '46px' : '20px'}/>

    <Typography align={"center"} variant={"h5"}>
      СТОЙКИ
    </Typography>

    <Box height={mdUp ? '46px' : '20px'}/>

    <Grid
      className={'w-100per mx-w-766'}
      container
      xs={12}
      direction={'row'}
      justify={'center'}
      alignItems={'center'}>

      <ModalImage imageSrc={rackGroup}>
        <img
          className={`img-h-auto pointer`}
          style={{width: mdUp ? 614 : '80vw'}}
        />
      </ModalImage>

    </Grid>

    <Box height={mdUp ? '46px' : '15px'}/>

    <Typography className={'fz16 w-100per mx-w-766'} variant={"body1"} align={'center'}>
      Композиция для удобного размещения вашей аудиосистемы.
      <br/>
      <br/>
      Умеренно жесткий, засыпной, не сварной каркас с амортизированными полками типа «сэндвич».
      <br/>
      <br/>
      Стойки разрабатываются по индивидуальному заказу. А могут быть построены по принятым в отрасли канонам или
      решениям, применяемым Ю.Макаровым.
    </Typography>

    <Box height={mdUp ? '46px' : '20px'}/>
  </Grid>
};

export default memo(BearingStructuresSection);
