import React, {memo, useState} from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import PropTypes from 'prop-types';
import {HighlightOff} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'gray',
    },

    '& .MuiInput-underline:after': {
      borderBottomColor: 'lightgray',
    },

    '& .MuiInputBase-input': {
      padding: '6px 14px',
      textAlign: 'center'
    },

    '& .MuiOutlinedInput-root': {
      color: 'black',

      '& fieldset': {
        borderColor: 'gray',
      },
      '&:hover fieldset': {
        borderColor: 'lightgray',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'lightgray',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: '0 15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 16px 32px rgba(0, 0, 0, 0.26)',
    borderRadius: 30,
    padding: '0px 30px',
  },

  paperM: {
    padding: 20
  },

  fitWidth: {
    width: 'fit-content'
  },

  textBlack: {
    color: 'black'
  },

  input: {
    '&>input': {
      color: 'black',
      padding: '6px 14px',
      borderColor: 'red',

    }
  },
}));

const ModalContent = ({asInfo, onClose}) => {
  const classes = useStyles();
  const theme = useTheme();

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return <div className={`${classes.paper} ${!mdUp && classes.paperM}`}>
    <Grid
      container
      direction={"column"}
      alignItems={"center"}
    >
      <Box height={'20px'}/>

      <Grid
        item
        xs={12}
        container
        justify={'center'}
        alignItems={'flex-start'}>
        <Box width={'46px'}/>

        <Typography style={{flex: 1}} align={"center"} variant={"h6"}>
          <br/>
          Мы подберем и произведем оборудование, <br/> оптимально подходящий для ваших задач.
        </Typography>

        <IconButton
          size={"large"}
          onClick={onClose}
          color="secondary"
          aria-label="close modal box">
          <HighlightOff/>
        </IconButton>
      </Grid>

      <Box height={'34px'}/>

      {!asInfo && <>
        <Typography variant={"h5"} align={"center"} color={"textSecondary"}>
          Заявка принята! <br/> Мы перезвоним Вам в ближайшее время.
        </Typography>

        <Box height={'34px'}/>
      </>}

      <Typography align={"center"} variant={"h5"}>
        Связаться с нами можно по телефону: <br/> +7 (985) 646-01-36
      </Typography>

      <Box height={'20px'}/>
    </Grid>
  </div>
};

ModalContent.propTypes = {
  asInfo: PropTypes.bool,
  onClose: PropTypes.func
}

export default memo(ModalContent);
