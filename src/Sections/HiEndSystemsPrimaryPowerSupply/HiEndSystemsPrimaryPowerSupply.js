import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import picture from "../../assets/hi-end-scheme.png";
import ModalImage from "../../Components/ModalImage";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 1rem',
  },

  picture: {
    height: 'auto',
  }
}));

const HiEndSystemsPrimaryPowerSupply = () => {
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
      Первичное электропитание HI-END СИСТЕМ
    </Typography>

    <Box height={mdUp ? '36px' : '15px'}/>

    <ModalImage imageSrc={picture}>
      <img
        className={`${classes.picture} pointer`}
        style={{width: mdUp ? 622 : '90vw'}}/>
    </ModalImage>


    <Box height={mdUp ? '46px' : '15px'}/>

    <Typography className={'fz16'} variant={"body1"} align={'center'}>
      Первичное электроснабжение — основа любой современной аудио-видео системы Hi-End класса.
      <br/>
      <br/>
      Применительно к современным сетям электроснабжения и высококачественным аудио- и видеосистемам никакие меры по
      снижению динамических и статических потерь мощности, не могут быть признаны чрезмерными.
      <br/>
      <br/>
      Представленные разработки ABSOLUTE SYSTEMS позволяют создавать выделенные сети электроснабжения, имеющие
      минимальные потери за счёт отсутствия «фильтров» — и при этом обеспечивающие высокий уровень фильтрации
      напряжения, в т.ч. и двухсторонней.
      <br/>
      <br/>
      Нет фильтра типа «Пилот», нет потерь на «фильтрующих» элементах, нет потерь, есть настоящий Hi-End.
    </Typography>

    <Box height={mdUp ? '46px' : '20px'}/>
  </Grid>
};

export default memo(HiEndSystemsPrimaryPowerSupply);
