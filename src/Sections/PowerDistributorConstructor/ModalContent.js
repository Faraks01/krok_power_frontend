import React, {memo, useState} from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import SquareBtn from "../../Components/SquareBtn";
import TextField from "@material-ui/core/TextField";

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
    padding: '30px 45px',
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
  }
}));

const ModalContent = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [phoneNumber, setPhoneNumber] = useState('');

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return <div className={classes.paper}>

    <Grid
      container
      direction={"column"}
      alignItems={"center"}
    >
      <Typography align={"center"} variant={"h4"}>
        Позвоните нам
      </Typography>

      <Box height={'14px'}/>

      <Typography variant={"body2"}>+7 (495) 123-45-67</Typography>

      <Box height={'14px'}/>

      <Typography align={"center"} variant={"body2"}>
        Мы подберем и произведем распределитель питания, оптимально подходящий для ваш задач.
      </Typography>

      <Box height={'14px'}/>

      <Typography align={"center"} variant={"subtitle1"}>Или оставьте номер и мы вам перезвоним</Typography>

      <Box height={'10px'}/>

      <CssTextField
        onChange={evt => setPhoneNumber(evt.target.value)}
        value={phoneNumber}
        variant={"outlined"}
        className={classes.input}/>

      <Box height={'20px'}/>

      <SquareBtn
        onClick={() => null}
        height={50}
        width={238}
        color={'primary'}
        variant="contained">
        <Typography variant={"body2"}>Перезвоните мне</Typography>
      </SquareBtn>
    </Grid>
  </div>
};

export default memo(ModalContent);
