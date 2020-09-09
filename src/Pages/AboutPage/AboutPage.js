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

const AboutPage = () => {
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
      О НАС
    </Typography>

    <Box height={mdUp ? '37px' : '20px'}/>

    <Typography className={'fz16 w-100per mx-w-988'} variant={"body1"} align={'left'}>
      <SquareMark mRight={6}/> ABSOLUTE SYSTEMS — рабочая группа, целью которой является разработка и изготовление
      элементов аудио- и видеосистем класса Hi-End.
      <br/>
      <br/>
      Заказать у нас разработку Hi-end аудиосистемы с использованием наших компонентов или давальческого материала.
      Выполняем строго придерживаясь вашего технического задания. Можем предложить свое решение задачи в том или ином
      элементе системы.
      <br/>
      <br/>
      Приобрести у нас готовую продукцию или заказать разработку тех устройств, которые идеально подойдут для решения
      вашей задачи в области Hi-End. Мы помогаем услышать звук как он есть — находить решения, которые раскроют
      потенциал вашей системы на максимум.
      <br/>
      <br/>
      Вы находитесь в поиске «своего» звучания? Рабочая группа ABSOLUTE SYSTEMS всегда рядом с Вами.
      <br/>
      <br/>
      Но любим мы хаэнд не за это...
    </Typography>

    <Box height={mdUp ? '77px' : '20px'}/>
  </Grid>
};

AboutPage.routeName = '/about-page';

export default memo(AboutPage);
