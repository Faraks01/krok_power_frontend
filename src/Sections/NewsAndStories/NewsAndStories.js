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
import SlideBody from "./SlideBody";

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

    <DefaultSlider arrowColor={'#61AEE9'} height={'fit-content'} mobile={!mdUp}>
      {Array(5).fill((
        <Slide height={'fit-content'}>
          <SlideBody/>
        </Slide>
      ))}
    </DefaultSlider>

  </Grid>
};

export default memo(NewsAndStories);
