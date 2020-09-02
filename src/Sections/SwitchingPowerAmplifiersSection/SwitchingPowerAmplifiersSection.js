import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import transistor2 from "../../assets/transistor-2.png";
import transistor3 from "../../assets/transistor-3.png";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ModalImage from "../../Components/ModalImage";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 1rem',
  },

  picture: {
    height: 'auto',
  }
}));

const SwitchingPowerAmplifiersSection = () => {
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
      ИМПУЛЬСНЫЕ УСИЛИТЕЛИ МОЩНОСТИ
    </Typography>

    <Box height={mdUp ? '36px' : '20px'}/>

    <Typography align={"center"} variant={"h5"}>
      CENTURE
    </Typography>

    <Box height={mdUp ? '36px' : '20px'}/>

    <Grid
      className={'mx-w-766 w-100per'}
      container
      direction={'row'}
      alignItems={'center'}>
      <Grid item md={9} xs={12}>
        <Typography className={'fz13'} variant={"body1"} align={'left'}>
          Восьмиканальный ШИМ-модулятор с цифровым входом I2S позволяет создавать полностью цифровой тракт
          воспроизведения.
          <br/>
          <br/>
          Вы получаете широкие возможности по конфигурированию и настройке в диапазоне от четырёх до восьми каналов
          усиления, оснащённых DSP фильтрами, цифровым регулятором громкости и многоточечной схемой тонкомпенсации.
        </Typography>
      </Grid>

      <Grid item md={3} xs={12}>
        <ModalImage imageSrc={transistor2}>
          <img
            className={`${classes.picture} pointer`}
            style={{width: mdUp ? 250 : '90vw'}}/>
        </ModalImage>
      </Grid>
    </Grid>

    <Box height={mdUp ? '76px' : '20px'}/>

    <Typography align={"center"} variant={"h5"}>
      YORK (РАСШИРЕНИЕ CENTURE)
    </Typography>

    <Box height={mdUp ? '36px' : '20px'}/>

    <Typography className={'fz16 mx-w-766 w-100per'} variant={"body1"} align={'center'}>
      Расширитель цифровой системы звукоусиления и обработки сигнала на базе CENTURE.
      <br/>
      <br/>
      Обеспечивает подключение источников сигнала по беспроводным интерфейсам (Bluetooth, Wi-fi), а также дополнительную
      DSP обработку сигнала.
      <br/>
      <br/>
      Платформа для разработки wireless аудио решений с сохранением USB транспорта и возможности создание гибкой и емкой
      платформы для формирования цифрового аудио потока с различных проводных и радио интерфейсов, а также управления
      всей системой при помощи ПК/смартфона.
    </Typography>

    <Box height={mdUp ? '43px' : '20px'}/>

    <ModalImage imageSrc={transistor3}>
      <img
        className={`${classes.picture} pointer`}
        style={{width: mdUp ? 250 : '90vw'}}/>
    </ModalImage>

    <Box height={mdUp ? '36px' : '20px'}/>

    <Typography className={'fz16 mx-w-766 w-100per'} variant={"body1"} align={'left'}>
      Функции системы:
      <br/>
      - USB аудио интерфейс
      <br/>
      - BT AptX аудио
      <br/>
      - Веб интерфейс для управления устройством
      <br/>
      - mDNS сервис для обнаружения в локальной сети DNS по имени
      <br/>
      - Воспроизведение live mp3 потока (интернет радио)
      <br/>
      <br/>
      Программно-аппаратные функции, которые вскоре будут реализованы:
      <br/>
      - Обновление конфигурации ПЛИС с сервера средствами ESP32
      <br/>
      - DLNA
      <br/>
      - Кодеки для других аудио форматов
      <br/>
      - DSP функции на ПЛИС
      <br/>
      <br/>
      Частота аудио потока: от 44.1 до 384кГц
      <br/>
      Размеры: 33x71 мм (формат Amanero)
    </Typography>

    <Box height={mdUp ? '36px' : '20px'}/>
  </Grid>
};

export default memo(SwitchingPowerAmplifiersSection);
