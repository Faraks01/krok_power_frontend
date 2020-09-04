import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ModalImage from "../../Components/ModalImage";
import transistor5 from "../../assets/transistor-5.png";
import transistor6 from "../../assets/transistor-6.png";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 1rem',
  },
}));

const AcousticDesignSection = () => {
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
      АКУСТИЧЕСКОЕ ОФОРМЛЕНИИЕ
    </Typography>

    <Box height={mdUp ? '36px' : '20px'}/>

    <Grid
      spacing={5}
      className={'mx-w-766 w-100per'}
      container
      direction={'row'}
      alignItems={'center'}>
      <Grid item md={6} xs={12} container justify={mdUp ? 'flex-end' : 'center'}>
        <ModalImage imageSrc={transistor5}>
          <img
            className={`img-h-auto pointer`}
            style={{width: mdUp ? 271 : '90vw'}}/>
        </ModalImage>
      </Grid>

      <Grid item md={6} xs={12} container justify={mdUp ? 'flex-start' : 'center'}>
        <ModalImage imageSrc={transistor6}>
          <img
            className={`img-h-auto pointer`}
            style={{width: mdUp ? 271 : '90vw'}}/>
        </ModalImage>
      </Grid>
    </Grid>

    <Box height={mdUp ? '36px' : '20px'}/>

    <Typography className={'fz16 w-100per mx-w-766'} variant={"body1"} align={'left'}>
      Мы разрабатываем и реализуем строительно-инженерные и интерьерно-компоновочные решения для достижения желаемого звучания.
      <br/>
      <br/>
      В зависимости от желаемых параметров звукового поля, мы разработаем и создадим акустическое оформление, которое сделает звучание вашей акустической системы еще богаче и точнее, а интерьер кинозала, уникальным.
    </Typography>

    <Box height={mdUp ? '117px' : '20px'}/>
  </Grid>
};

export default memo(AcousticDesignSection);
