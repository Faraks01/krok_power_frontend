import React, {memo, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import transformerPic from '../../assets/transformer.png';
import ModalContainer from "../../Components/ModalContainer";
import chart from '../../assets/chart.jpeg';

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
  },


}));

const TransformersSection = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return <Grid
    className={mdUp ? classes.root : classes.rootM}
    style={{borderTop: '1px solid rgba(0, 0, 0, 0.1)'}}
    container
    alignItems={"center"}
    direction={"column"}>
    <Typography align={"center"} variant={"h5"} color={"textSecondary"}>
      ТРАНСФОРМАТОРЫ
    </Typography>

    <Box height={`${mdUp ? 46 : 20}px`}/>

    <Typography className={`${classes.fz16} ${classes.widthLimit}`} align={"center"} variant={"body1"}>
      Входное устройство, формирующее выделенную сеть электроснабжения.
    </Typography>

    <Box height={mdUp ? '19px' : '15px'}/>

    <Typography className={`${classes.fz16} ${classes.widthLimit}`} align={"center"} variant={"body1"}>
      Обеспечивает все виды фильтрации помех первичной сети и обеспечивает симметрию для выделенной сети
      электроснабжения. Теперь в системе не будет шумов и фона, связанного с первичной сетью, что важно для Hi-End
      системы любого уровня.
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

      <Box height={'15px'}/>

      <Grid container direction={"row"} alignItems={"center"}>
        <div className={classes.listPoint}/>

        <Box width={'20px'}/>

        <Typography className={`${classes.fz16} ${classes.fx1}`} variant={"body1"}>
          Защищает вашу аудиосистему от всплесков (иголок) напряжения первичной сети
        </Typography>
      </Grid>

      <Box height={'15px'}/>

      <Grid container direction={"row"} alignItems={"center"}>
        <div className={classes.listPoint}/>

        <Box width={'20px'}/>

        <Typography className={`${classes.fz16} ${classes.fx1}`} variant={"body1"}>
          Исключает токи уравнивания потенциалов и снижает общий уровень шумов системы. Особенно с передовыми
          усилителями без ООС и аналогичными ШИ-модуляторами
        </Typography>
      </Grid>

      <Box height={'15px'}/>

      <Grid container direction={"row"} alignItems={"center"}>
        <div className={classes.listPoint}/>

        <Box width={'20px'}/>

        <Typography className={`${classes.fz16} ${classes.fx1}`} variant={"body1"}>
          Высокий уровень фильтрации помех без применения элементов со сосредоточенными параметрами позволяет избежать
          длительных переходных процессов
        </Typography>
      </Grid>

      <Box height={`${mdUp ? 50 : 20}px`}/>

      <Box marginLeft={'auto'}>
        <Typography
          onClick={() => setOpen(true)}
          className={`${classes.fz16} ${classes.underlined} pointer ${classes.fx1}`} color={"textSecondary"}
          variant={"body1"}>
          Посмотреть график до и после <br/>
          подключения трансформатора
        </Typography>
      </Box>

    </Grid>

    <ModalContainer
      open={open}
      onClose={() => setOpen(false)}>
      <img
        src={chart}
        style={{
          width: mdUp ? 'auto' : '80vw',
          height: mdUp ? '70vh' : 'auto',
        }}
      />
    </ModalContainer>
  </Grid>
};

export default memo(TransformersSection);
