import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Slide from "../../Components/Slide";
import Box from "@material-ui/core/Box";
import DefaultSlider from "../../Components/DefaultSlider/DefaultSlider";
import picPlaceholder from "../../assets/picture-placeholder.png";
import cablePic from "../../assets/trianon-cable.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '56px 20px'
  },

  rootM: {
    padding: '20px'
  },

  divider: {
    height: 1,
    backgroundColor: '#979797'
  },
}));

const NewsAndStories = () => {
  const classes = useStyles();
  const theme = useTheme();

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return <Grid
    className={mdUp ? classes.root : classes.rootM}
    container
    direction={"column"}
    alignItems={"center"}>

    <Typography align={"center"} variant={'h5'} color={"textSecondary"}>
      НОВОСТИ И ИСТОРИИ
    </Typography>

    <Box height={mdUp ? '44px' : '20px'}/>

    <DefaultSlider arrowColor={'#61AEE9'} height={mdUp ? 320 : 600} mobile={!mdUp}>
      {Array(5).fill((
        <Slide height={mdUp ? 320 : 600}>
          <Grid
            xs={12}
            container
            justify={"center"}>
            <Grid
              xs={11}
              md={6}
              container
              direction={"row"}>
              <Grid item xs={12}>
                <Typography variant={'body1'}>
                  01.08.2020
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Box height={'18px'}/>
              </Grid>

              <Grid item xs={12}>
                <Typography variant={'h6'}>
                  Заголовок первой новости или истории
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Box height={'19px'}/>
              </Grid>

              <Grid item xs={12}>
                <Box className={classes.divider} height={'1px'}/>
              </Grid>

              <Grid item xs={12}>
                <Box height={'27px'}/>
              </Grid>

              <Grid item xs={12} md={3} container justify={"center"}>
                <img height={200} width={'auto'} src={picPlaceholder}/>
              </Grid>

              {mdUp && <Box width={'43px'}/>}

              {!mdUp && <Grid item xs={12}>
                <Box height={'20px'}/>
              </Grid>}

              <Grid item xs={12} md={8}>
                <Typography className={classes.fz16} variant={"body1"}>
                  Text text text text text text text text text text text text text text text text text text text text
                  text
                  text text text text text text text text text text text text text text text text text text text text
                  text
                  text text text text text text text text text text text text text text text text text text text text
                  text
                  text text text text text text text text text text text text text text text text text text text text
                  text
                  text text text text text text text text text text text text text text text text text text text text
                  text
                  text text text text text text text text text text text text text text text text text text text text
                  text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Slide>
      ))}
    </DefaultSlider>

  </Grid>
};

export default memo(NewsAndStories);
