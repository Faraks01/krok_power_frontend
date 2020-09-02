import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ModalImage from "../../Components/ModalImage";
import rack from "../../assets/rack.png";
import rack1 from "../../assets/rack-1.png";
import rack2 from "../../assets/rack-2.png";
import rack3 from "../../assets/rack-3.png";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 1rem',
  },

  picture: {
    height: 'auto',
  }
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
      alignItems={'center'}>

      <Grid item md={5} xs={12} container justify={mdUp ? 'flex-end' : 'center'}>
        <ModalImage imageSrc={rack1}>
          <img
            className={`${classes.picture} pointer`}
            style={{width: mdUp ? 292 : '90vw'}}/>
        </ModalImage>
      </Grid>

      <Grid item md={2} xs={12} container justify={'center'}>
        <ModalImage imageSrc={rack2}>
          <img
            className={`${classes.picture} pointer`}
            style={{width: mdUp ? 194 : '90vw'}}/>
        </ModalImage>
      </Grid>

      <Grid item md={5} xs={12} container justify={mdUp ? 'flex-start' : 'center'}>
        <ModalImage imageSrc={rack3}>
          <img
            className={`${classes.picture} pointer`}
            style={{width: mdUp ? 199 : '90vw'}}/>
        </ModalImage>
      </Grid>


    </Grid>

    <Box height={mdUp ? '46px' : '15px'}/>

    <Typography className={'fz16 w-100per mx-w-766'} variant={"body1"} align={'center'}>
      Композиция для удобного размещения вашей аудиосистемы.
      <br/>
      <br/>
      Умеренно жесткий, засыпной и не сварной каркас, с амортизированными полками типа «сэндвич».
      <br/>
      <br/>
      Стойки разрабатываются по индивидуальному заказу или могут быть, построены по принятым в отрасли канонам или
      решениям, применяемым Ю.Макаровым.
    </Typography>

    <Box height={mdUp ? '46px' : '20px'}/>

    <Divider variant="inset" component="div"/>

    <Box height={mdUp ? '46px' : '20px'}/>

    <Typography align={"center"} variant={"h5"}>
      СТЕЛЛАЖИ
    </Typography>

    <Box height={mdUp ? '36px' : '20px'}/>

    <ModalImage imageSrc={rack}>
      <img
        className={`${classes.picture} pointer`}
        style={{width: mdUp ? 258 : '90vw'}}/>
    </ModalImage>

    <Box height={mdUp ? '36px' : '20px'}/>

    <Typography className={'fz16 w-100per mx-w-766'} variant={"body1"} align={'center'}>
      Сборные каркасы, позволяющие создать несущую систему для хранения музыкальных носителей (пластинки, плёнки) или
      для использования в гараже-мастерской.
      <br/>
      <br/>
      При разработке несущих конструкций общего (интерьерного) назначения, действуют слабые ограничения на форму и
      внешний вид в пространстве вашего дома, и сильные ограничения, связанные с ТЗ.
    </Typography>

    <Box height={mdUp ? '57px' : '20px'}/>
  </Grid>
};

export default memo(BearingStructuresSection);
