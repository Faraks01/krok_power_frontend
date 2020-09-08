import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import dp1 from "../../assets/distribution-point-schema-1.png";
import dp2 from "../../assets/distribution-point-schema-2.png";
import dp3 from "../../assets/distribution-point-schema-3.png";
import Box from "@material-ui/core/Box";
import DefaultSlider from "../../Components/DefaultSlider/DefaultSlider";
import ModalImage from "../../Components/ModalImage";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '52px 10px'
  },

  rootM: {
    width: '100%',
    padding: '20px 10px 0'
  },

  fz16: {
    fontSize: 16
  },

  widthLimit: {
    maxWidth: 926
  },
}));

const KrokodilePowerSection = () => {
  const classes = useStyles();
  const theme = useTheme();

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return <Grid
    className={mdUp ? classes.root : classes.rootM}
    style={{borderTop: '1px solid rgba(0, 0, 0, 0.1)'}}
    container
    direction={'column'}
    alignItems={"center"}>
    <Typography align={"center"} variant={"h5"} color={"textSecondary"}>
      KROKODILE POWER
    </Typography>

    <Box height={mdUp ? '46px' : '15px'}/>

    <Grid className={classes.widthLimit} container direction={"column"} alignItems={"center"}>
      <Typography className={classes.fz16} align={"center"} variant={"body1"}>
        Это не фильтр типа «PILOT», а распределительный пункт (РП) внутреннего электроснабжения!
      </Typography>

      <Box height={mdUp ? '19px' : '15px'}/>

      <Typography className={classes.fz16} align={"center"} variant={"body1"}>
        KROKODAIL POWER предназначен, в первую очередь, для работы в выделенной сети электроснабжения и дает уникальную
        возможность двухкабельного подключения к источнику питания.
      </Typography>

      <Box height={mdUp ? '19px' : '15px'}/>

      <Typography className={classes.fz16} align={"center"} variant={"body1"}>
        А сечение внутренних шин гарантирует самое низкое в отрасли паразитное Re и, следовательно, низкие потери и
        равноправность розеток 230В.
      </Typography>
    </Grid>

    <Box height={mdUp ? '46px' : '20px'}/>

    <DefaultSlider height={'fit-content'} arrowColor={'#61AEE9'} mobile={!mdUp}>

      <Grid
        container
        justify={"center"}
        alignItems={"center"}>
        <ModalImage imageSrc={dp1}>
          <img
            style={{paddingLeft: mdUp ? 30 : 10, width: '100%', height: 'auto'}}
            className={`${classes.widthLimit} pointer`}/>
        </ModalImage>
      </Grid>

      <Grid
        container
        justify={"center"}
        alignItems={"center"}>
        <ModalImage imageSrc={dp2}>
          <img
            style={{paddingLeft: mdUp ? 30 : 10, width: '100%', height: 'auto'}}
            className={`${classes.widthLimit} pointer`}/>
        </ModalImage>
      </Grid>

      <Grid
        container
        justify={"center"}
        alignItems={"center"}>
        <ModalImage imageSrc={dp3}>
          <img
            style={{paddingLeft: mdUp ? 30 : 10, width: '100%', height: 'auto'}}
            className={`${classes.widthLimit} pointer`}/>
        </ModalImage>
      </Grid>


    </DefaultSlider>
  </Grid>
};

export default memo(KrokodilePowerSection);
