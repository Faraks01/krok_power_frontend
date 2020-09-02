import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SquareMark from "../../Components/SquareMark";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 1rem',
    width: '100%'
  },

  picture: {
    height: 'auto',
  }
}));

const DocumentationPage = () => {
  const classes = useStyles();
  const theme = useTheme();

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return <Grid
    className={classes.root}
    container
    direction={'column'}
    alignItems={'center'}>
    <Box height={mdUp ? '42px' : '20px'}/>

    <Typography align={"center"} variant={"h5"} color={"textSecondary"}>
      ДОКУМЕНТАЦИЯ
    </Typography>

    <Box height={mdUp ? '36px' : '20px'}/>

    <Typography className={'fz16 w-100per mx-w-370'} variant={"body1"} align={'left'}>
      <SquareMark mRight={6}/> ПЕРВИЧНОЕ ЭЛЕКТРОСНАБЖЕНИЕ
      <br/>
      <br/>
      Развязывающе-фильтрующие элементы
      <br/>
      - Трансформатор (скачать)
      <br/>
      <br/>
      Распределители питания
      <br/>
      - Крокодил (скачать)
      <br/>
      - Квадрат (скачать)
      <br/>
      - Стальной крокодил (скачать)
      <br/>
      <br/>
      Кабельно-проводниковая продукция
      <br/>
      - Огневозжигающий (скачать)
      <br/>
      - Пламягасящий (скачать)
      <br/>
      - Трианон (скачать)
      <br/>
      - Морковка (скачать)
      <br/>
      - Разъёмы RCA (скачать)
      <br/>
      - Вилки SHUKO (230В) (скачать)
      <br/>
      <br/>
      <SquareMark mRight={6}/> Hi-End
      <br/>
      <br/>
      - Кубик (скачать)
      <br/>
      - КОРВЕТ (скачать)
      <br/>
      - ЦАП (DAC) (скачать)
      <br/>
      <br/>
      <SquareMark mRight={6}/> СТЕЛЛАЖНО-СТОЕЧНОЕ ОБОРУДОВАНИЕ
      <br/>
      <br/>
      - Кассетница 6х6 (скачать)
      <br/>
      - Стойка аппаратная (скачать)
      <br/>
      - Каркас для LP (скачать)
      <br/>
      - Стеллажи для хранения LP (скачать)
    </Typography>

    <Box height={mdUp ? '78px' : '20px'}/>
  </Grid>
};

DocumentationPage.routeName = '/documentation-page';

export default memo(DocumentationPage);
