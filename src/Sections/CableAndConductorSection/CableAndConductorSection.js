import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Slide from "../../Components/Slide";
import cablePic from '../../assets/trianon-cable.png';
import DefaultSlider from "../../Components/DefaultSlider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '52px 10px'
  },

  rootM: {
    padding: '20px 10px 0'
  },

  fz16: {
    fontSize: 16
  },

  widthLimit: {
    maxWidth: 858
  },
}));

const CableAndConductorSection = () => {
  const classes = useStyles();
  const theme = useTheme();

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return <Grid
    className={`${classes.root} ${!mdUp && classes.rootM}`}
    style={{borderTop: '1px solid rgba(0, 0, 0, 0.1)'}}
    direction={"column"}
    alignItems={"center"}
    container>

    <Typography align={"center"} variant={"h5"} color={"textSecondary"}>
      КАБЕЛЬНО-ПРОВОДНИКОВАЯ ПРОДУКЦИЯ
    </Typography>

    <Box height={`${mdUp ? 46 : 20}px`}/>

    <Typography className={`${classes.fz16} ${classes.widthLimit}`} align={"center"} variant={"body1"}>
      Для совершенного звучания совершенных Hi-end систем требуется минимальная связь с реальной сетью электроснабжения.
      Тотальное экранирование, симметризация первичной сети электроснабжения и минимизация потерь в выделенных линиях
      110-230В — так закладывается фундамент любой Hi-end системы.
    </Typography>

    <Box height={`${mdUp ? 46 : 20}px`}/>

    <Typography align={"center"} variant={"h5"}>
      КАБЕЛЬНО-ПРОВОДНИКОВАЯ ПРОДУКЦИЯ
    </Typography>

    <DefaultSlider height={!mdUp ? 498 : 278} mobile={!mdUp}>
      {Array(5).fill((
        <Slide height={!mdUp ? 498 : 278}>
          <Grid
            container
            justify={"center"}
            alignItems={"center"}
            direction={!mdUp ? "column" : "row"}>
            <img height={278} width={'auto'} src={cablePic}/>

            <Box width={'41px'}/>

            <Typography className={classes.fz16} style={{maxWidth: 488}} align={"center"} variant={"body1"}>
              Универсальный кабель на основе конструкции ЧФЭФ, со сниженными сопротивлением Re и паразитной
              индуктивностью
              L. Низкие потери в диэлектрике (за счёт полиэтиленовой изоляции) и полное экранирование жил обеспечивают
              высокую эффективность работы в силовых и акустических цепях. Возможна поставка без установки концевых муфт
              при заказе от 100 метров. Сложность разделки кабеля средняя. Сечение кабеля — 7х1,5мм2.
            </Typography>
          </Grid>
        </Slide>
      ))}
    </DefaultSlider>

  </Grid>
};

export default memo(CableAndConductorSection);
