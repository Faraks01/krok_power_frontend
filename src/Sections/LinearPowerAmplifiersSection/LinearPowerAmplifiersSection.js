import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import transistor1 from "../../assets/transistor-1.png";
import ModalImage from "../../Components/ModalImage";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 1rem',
  },

  picture: {
    height: 'auto',
  }
}));

const LinearPowerAmplifiersSection = () => {
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
      ЛИНЕЙНЫЕ УСИЛИТЕЛИ МОЩНОСТИ
    </Typography>

    <Box height={mdUp ? '46px' : '20px'}/>

    <Typography align={"center"} variant={"h5"}>
      Кубик
    </Typography>

    <Box height={mdUp ? '46px' : '20px'}/>

    <Typography className={'fz16 w-100per mx-w-766'} variant={"body1"} align={'center'}>
      Линейный усилитель мощности ЗЧ без использования «легендарных» японо-китайских транзисторов.
      <br/>
      <br/>
      Номинальная мощность — 150 Вт на канал. Точка нулевого потенциала (БП-УМ-АС), земляная Мекка выполнена как
      многослойный узел и обеспечивает практически полное отсутствие паразитной индуктивности и сопротивления, что
      является передовым решением, не имеющим аналогов в мире!
      <br/>
      <br/>
      В результате ваша система получает стабильную мощность в самом широком диапазоне частот.
    </Typography>

    <Box height={mdUp ? '36px' : '20px'}/>

    <ModalImage imageSrc={transistor1}>
      <img
        className={`${classes.picture} pointer`}
        style={{width: mdUp ? 258 : '90vw'}}/>
    </ModalImage>

    <Box height={mdUp ? '36px' : '20px'}/>

    <Typography className={'fz16 mx-w-766 w-100per'} variant={"body1"} align={'left'}>
      • Блок питания усилителя стабилизирован по напряжению и обеспечивает низкий уровень С связи c сетью при
      энергетическом запасе на уровне 1Дж/Вт в полосе полной мощности;
      <br/>
      <br/>
      • Корпус усилителя выполнен из стали и допускает использовать засыпку для снижения уровня паразитных вибраций,
      обеспечивая в базовой конструкции 70-100 дБ экранирования от внешнего ЭМП;
      <br/>
      <br/>
      • Экранированная внутренняя проводка сильноточных цепей (медь/сталь) сводит помехи к абсолютному минимуму. Теперь
      вы услышите именно оригинальный сигнал, а не разнородные, пусть и благозвучные помехи;
      <br/>
      <br/>
      • Уникальный дизайн корпуса в фундаментальном конструктивистском стиле с отсылкой к работам Веры Мухиной. Корпус
      оснащён часами!
    </Typography>

    <Box height={mdUp ? '46px' : '20px'}/>
  </Grid>
};

export default memo(LinearPowerAmplifiersSection);
