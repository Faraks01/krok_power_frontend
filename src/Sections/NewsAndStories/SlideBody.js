import React, {memo, useState} from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import picPlaceholder from "../../assets/picture-placeholder.png";
import ModalContainer from "../../Components/ModalContainer";
import {shallowEqual, useSelector} from "react-redux";
import NewsReducer from "../../store/reducers/News";
import Utils from "../../utils/Utils";

const useStyles = makeStyles((theme) => ({
  root: {},

  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#979797"
  }
}));

const SlideBody = ({id}) => {
  const classes = useStyles();
  const theme = useTheme();

  const news = useSelector(s => s[NewsReducer.reducerName][id], shallowEqual);

  const [open, setOpen] = useState();
  const [swipeInProgress, setSwipeInProgress] = useState(false);

  function handleMouseMove() {
    if (!swipeInProgress) {
      setSwipeInProgress(true);
    }
  }

  function endSwipeProgress() {
    if (swipeInProgress) {
      setSwipeInProgress(false);
    }
  }

  function handleOpen() {
    if (!swipeInProgress) {
      setOpen(true);
    }
  }

  function handleClose() {
    setOpen(false);
  }

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return <>
    <Grid
      onMouseMove={handleMouseMove}
      onMouseLeave={endSwipeProgress}
      onMouseDown={endSwipeProgress}
      onClick={handleOpen}
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
            {moment(news.created).format('l')}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box height={'18px'}/>
        </Grid>

        <Grid item xs={12}>
          <Typography variant={'h6'}>
            {news.title}
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

        {!!news.image && <Grid item xs={12} md={3} container justify={"center"}>
          <img height={200} width={'auto'} src={Utils.normalizeApiAssetsUrl(news.image)}/>
        </Grid>}

        {mdUp && <Box width={'43px'}/>}

        {!mdUp && <Grid item xs={12}>
          <Box height={'20px'}/>
        </Grid>}

        <Grid item xs={12} md={8}>
          <Typography
            className={`${classes.fz16} block-ellipsis`}
            variant={"body1"}
            style={{maxHeight: 300}}>
            {news.text}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box height={'20px'}/>
        </Grid>
      </Grid>
    </Grid>

    <ModalContainer open={open} onClose={handleClose}>
      <Grid
        style={{maxWidth: 735}}
        container
        direction={"row"}>
        <Grid item xs={12}>
          <Typography variant={'body1'}>
            {moment(news.created).format('l')}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box height={'18px'}/>
        </Grid>

        <Grid item xs={12}>
          <Typography variant={'h6'}>
            {news.title}
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

        {!!news.image && <Grid item xs={12} container justify={"center"}>
          <img height={200} width={'auto'} src={Utils.normalizeApiAssetsUrl(news.image)}/>
        </Grid>}

        <Grid item xs={12}>
          <Box height={mdUp ? '43px' : '20px'}/>
        </Grid>

        <Grid item xs={12} style={{maxHeight: 300, overflow: 'auto'}}>
          <Typography
            className={classes.fz16}
            variant={"body1"}>
            {news.text}
          </Typography>
        </Grid>
      </Grid>
    </ModalContainer>
  </>
};

SlideBody.propTypes = {
  id: PropTypes.number
}

export default memo(SlideBody);
