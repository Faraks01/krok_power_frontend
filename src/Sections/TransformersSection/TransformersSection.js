import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import transformerPic from '../../assets/transformer.png';

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
    maxWidth: 858
  },

  listPoint: {
    width: 12,
    height: 12,
    backgroundColor: '#61AEE9'
  },

  underlined: {
    textDecorationLine: 'underline'
  },

  fx1: {
    flex: 1
  }
}));

const TransformersSection = () => {
  const classes = useStyles();
  const theme = useTheme();

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return <Grid
    className={mdUp ? classes.root : classes.rootM}
    container
    alignItems={"center"}
    direction={"column"}>
    <Typography align={"center"} variant={"h5"} color={"textSecondary"}>
      ТРАНСФОРМАТОРЫ
    </Typography>

    <Box height={`${mdUp ? 46 : 20}px`}/>

    <Typography className={`${classes.fz16} ${classes.widthLimit}`} align={"center"} variant={"body1"}>
      Входное устройство, формирующее выделенную сеть электроснабжения. {mdUp && <br/>}
      Обеспечивает все виды фильтрации помех первичной сети, формирует безопасную сеть электроснабжения {mdUp && <br/>}
      и уменьшает уровень электромагнитного смога (ЭМИ) вокруг выделенных сетей электропитания. {mdUp && <br/>}
      Именно трансформатор является базовым элементом для развертывания Hi-end системы любого уровня.
    </Typography>

    <Box height={`${mdUp ? 46 : 20}px`}/>

    <img style={{width: mdUp ? 289 : 340, height: 'auto'}} src={transformerPic}/>

    <Box height={`${mdUp ? 46 : 15}px`}/>

    <Grid className={classes.widthLimit} container direction={"column"}>

      <Grid container direction={"row"} alignItems={"center"}>
        <div className={classes.listPoint}/>

        <Box width={'20px'}/>

        <Typography className={`${classes.fz16} ${classes.fx1}`} variant={"body1"}>
          Обеспечивает симметрирование первичной сети питания
        </Typography>
      </Grid>

      <Box width={'15px'}/>

      <Grid container direction={"row"} alignItems={"center"}>
        <div className={classes.listPoint}/>

        <Box width={'20px'}/>

        <Typography className={`${classes.fz16} ${classes.fx1}`} variant={"body1"}>
          Защищает вашу аудиосистему от всплесков (иголок) напряжения первичной сети
        </Typography>
      </Grid>

      <Box width={'15px'}/>

      <Grid container direction={"row"} alignItems={"center"}>
        <div className={classes.listPoint}/>

        <Box width={'20px'}/>

        <Typography className={`${classes.fz16} ${classes.fx1}`} variant={"body1"}>
          Исключает токи уравнивания потенциалов и снижает общий уровень шумов системы, особенно с передовыми
          усилителями без ООС и аналогичными ШИ-модуляторами
        </Typography>
      </Grid>

      <Box width={'15px'}/>

      <Grid container direction={"row"} alignItems={"center"}>
        <div className={classes.listPoint}/>

        <Box width={'20px'}/>

        <Typography className={`${classes.fz16} ${classes.fx1}`} variant={"body1"}>
          Высокий уровень фильтрации помех без применения элементов с сосредоточенными параметрами позволяет избежать
          длительных переходных процессов
        </Typography>
      </Grid>

      <Box height={`${mdUp ? 50 : 20}px`}/>

      <Box marginLeft={'auto'}>
        <Typography className={`${classes.fz16} ${classes.underlined} ${classes.fx1}`} color={"textSecondary"}
                    variant={"body1"}>
          Посмотреть график до и после <br/>
          подключения трансформатора
        </Typography>
      </Box>

    </Grid>
  </Grid>
};

export default memo(TransformersSection);
