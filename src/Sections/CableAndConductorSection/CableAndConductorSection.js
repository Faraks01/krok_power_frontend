import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Slide from "../../Components/Slide";
import cablePic from '../../assets/trianon-cable.png';
import picPlaceholder from '../../assets/picture-placeholder.png';
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
      Для совершенного звучания совершенных Hi-end систем требуется минимальная связь с первичной сетью электроснабжения.
    </Typography>

    <Box height={`15px`}/>

    <Typography className={`${classes.fz16} ${classes.widthLimit}`} align={"center"} variant={"body1"}>
      Тотальное экранирование, симметризация первичной сети и минимизация потерь в выделенных линиях
      110-230В — так закладывается фундамент любой Hi-end системы.
    </Typography>

    <Box height={`${mdUp ? 46 : 20}px`}/>

    <DefaultSlider height={'fit-content'} mobile={!mdUp}>
      <Slide height={'fit-content'}>
        <Grid
          container
          justify={"center"}
          alignItems={"center"}
          direction={"column"}>

          <Typography align={"center"} variant={"h5"}>
            TRIANON (улучшенная версия легендарного ENCORE-II)
          </Typography>

          <Box height={`${mdUp ? '36' : '20'}px`}/>

          <Grid
            container
            justify={"center"}
            alignItems={"center"}
            direction={!mdUp ? "column" : "row"}>
            <img height={211} width={'auto'} src={picPlaceholder}/>

            {mdUp && <Box width={'41px'}/>}
            {!mdUp && <Box height={'20px'}/>}

            <Typography
              className={classes.fz16}
              style={{maxWidth: 488}}
              align={'left'}
              variant={"body1"}>
              Опытная конструкция триаксиальной геометрии — развитие идей, положенных в основу легендарного кабеля
              ENCORE-II (Stright Wire).
              <br/>
              <br/>
              Данный кабель позволяет выполнять все виды соединительных линий, в том числе и межблочные.
              <br/>
              <br/>
              Минимальная поставка — 1 км, сложность разделки — выше средней.
            </Typography>
          </Grid>
        </Grid>
      </Slide>

      <Slide height={'fit-content'}>
        <Grid
          container
          justify={"center"}
          alignItems={"center"}
          direction={"column"}>

          <Typography align={"center"} variant={"h5"}>
            ПЛАМЯГАСЯЩИЙ
          </Typography>

          <Box height={`${mdUp ? '36' : '20'}px`}/>

          <Grid
            container
            justify={"center"}
            alignItems={"center"}
            direction={!mdUp ? "column" : "row"}>

            <img height={211} width={'auto'} src={picPlaceholder}/>

            {mdUp && <Box width={'41px'}/>}
            {!mdUp && <Box height={'20px'}/>}

            <Typography
              className={classes.fz16}
              style={{maxWidth: 488}}
              align={'left'}
              variant={"body1"}>
              Универсальный кабель на основе конструкции ЧФЭФ, со сниженными сопротивлением Re и паразитной
              индуктивностью
              L.
              <br/>
              <br/>
              Низкие потери в диэлектрике (за счёт полиэтиленовой изоляции) и полное экранирование жил обеспечивают
              высокую эффективность работы в сетях питания 230В и акустических линиях.
              <br/>
              <br/>
              Возможна поставка без установки концевых муфт при заказе от 100 метров. Сложность разделки кабеля средняя.
              Сечение кабеля — 7х1,5мм2.
            </Typography>
          </Grid>
        </Grid>
      </Slide>

      <Slide height={'fit-content'}>
        <Grid
          container
          justify={"center"}
          alignItems={"center"}
          direction={"column"}>

          <Typography align={"center"} variant={"h5"}>
            ОГНЕВОЗЖИГАЮЩИЙ
          </Typography>

          <Box height={`${mdUp ? '36' : '20'}px`}/>

          <Grid
            container
            justify={"center"}
            alignItems={"center"}
            direction={!mdUp ? "column" : "row"}>
            <img height={211} width={'auto'} src={picPlaceholder}/>

            {mdUp && <Box width={'41px'}/>}
            {!mdUp && <Box height={'20px'}/>}

            <Typography
              className={classes.fz16}
              style={{maxWidth: 488}}
              align={'left'}
              variant={"body1"}>
              Кабель выполнен на основе базовой конструкции МИЛ-1 по схеме «звёздная четвёрка» и обеспечивает
              широкополосное согласование между усилителем и АС.
              <br/>
              <br/>
              Идеальный проводник для применения в многоампинговых схемах усиления и для СЧ-ВЧ каналов.
              <br/>
              <br/>
              Также может быть хорошим решением и в традиционных схемах — для определения эффективности советуем
              провести
              тест-драйв.
              <br/>
              <br/>
              Поставляется только в готовом виде, с концевыми муфтами и разъемами.
            </Typography>
          </Grid>
        </Grid>
      </Slide>
    </DefaultSlider>

  </Grid>
};

export default memo(CableAndConductorSection);
