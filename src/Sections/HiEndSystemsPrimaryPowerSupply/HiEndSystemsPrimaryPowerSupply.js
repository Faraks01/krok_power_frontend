import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import picture from '../../assets/hi-end-scheme.png';
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 555,
    padding: '20px 1rem',
  },

  picture: {
    width: 'auto',
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
    justify={'space-evenly'}
    alignItems={"center"}>
    <Typography align={"center"} variant={"h5"} color={"textSecondary"}>
      Первичное электропитание HI-END СИСТЕМ
    </Typography>

    <img className={classes.picture} style={{maxHeight: mdUp ? 198 : 116}} src={picture}/>

    <Typography variant={"body2"} align={'center'}>
      Первичное электроснабжение — основа любой Hi-end аудиосистемы.
      <br/>
      <br/>
      Отсутствие потерь в процессе дистрибуции электроэнергии ведет к восстановлению фазовых соотношений. Именно так
      можно сохранить тонкую структуру сигнала — и ваша аудиосистема раскроет свой истинный потенциал.
      <br/>
      <br/>
      Детализированный, «подвижный» бас, чистейший высокие частоты, объемные послезвучия — вы услышите их только с
      источниками первичного питания класса Hi-end.
    </Typography>
  </Grid>
};

export default memo(HiEndSystemsPrimaryPowerSupply);
