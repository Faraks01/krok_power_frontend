import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ModalImage from "../../Components/ModalImage";
import rack from "../../assets/rack.png";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 1rem',
  },
}));

const RacksSection = () => {
  const classes = useStyles();
  const theme = useTheme();

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return <Grid
    className={classes.root}
    container
    direction={'column'}
    alignItems={"center"}>
    <Box height={mdUp ? '46px' : '20px'}/>

    <Typography align={"center"} variant={"h5"}>
      СТЕЛЛАЖИ
    </Typography>

    <Box height={mdUp ? '36px' : '20px'}/>

    <ModalImage imageSrc={rack} modalWidth={'60vw'}>
      <img
        className={`pointer img-h-auto`}
        style={{width: mdUp ? 258 : '65vw'}}/>
    </ModalImage>

    <Box height={mdUp ? '36px' : '20px'}/>

    <Typography className={'fz16 w-100per mx-w-766'} variant={"body1"} align={'center'}>
      Сборные каркасы, позволяющие создать несущую систему для хранения музыкальных носителей (пластинки, плёнки) или
      для использования в гараже-мастерской.
      <br/>
      <br/>
      При разработке несущих конструкций общего (интерьерного) назначения, действуют слабые ограничения на форму и
      внешний вид в пространстве вашего дома, и сильные ограничения, связанные с ТЗ.
    </Typography>

    <Box height={mdUp ? '57px' : '20px'}/>
  </Grid>
};

export default memo(RacksSection);
