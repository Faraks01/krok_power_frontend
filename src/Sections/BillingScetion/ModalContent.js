import React, {memo, useState} from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import PropTypes from 'prop-types';

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
    padding: '69px 30px',
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

const ModalContent = ({asInfo}) => {
  const classes = useStyles();
  const theme = useTheme();

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return <div className={`${classes.paper} ${!mdUp && classes.paperM}`}>
    <Grid
      container
      direction={"column"}
      alignItems={"center"}
    >
      <Box height={'34px'}/>

      <Typography align={"center"} variant={"h6"}>
        Мы подберем и произведем оборудование, оптимально подходящий для ваших задач.
      </Typography>

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

      <Box height={'34px'}/>
    </Grid>
  </div>
};

ModalContent.propTypes = {
  asInfo: PropTypes.bool
}

export default memo(ModalContent);
