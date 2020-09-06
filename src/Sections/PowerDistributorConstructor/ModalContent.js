import React, {memo, useState} from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import SquareBtn from "../../Components/SquareBtn";
import TextField from "@material-ui/core/TextField";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import FeedbackFormReducer from "../../store/reducers/FeedbackForm";
import CircularProgress from "@material-ui/core/CircularProgress";
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

  title: {
    color: '#9a9fa4',
  }
}));

const ModalContent = ({reducerInstance, secondModalCb, onClose}) => {
  const classes = useStyles();
  const theme = useTheme();

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const form = useSelector(s => s[reducerInstance.constructor.reducerName], shallowEqual);

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  function _handleInputChange(field) {
    return evt => {
      dispatch({
        type: reducerInstance.constructor.actionTypes.UPDATE_FIELD,
        key: field,
        payload: evt.target.value
      })
    }
  }

  async function submitForm() {
    setLoading(true);

    let succeeded = await dispatch(reducerInstance.createForm());

    if (!succeeded) {
      alert("Не удалось отправить заявку, попробуйте еще раз!");
    }

    setLoading(false);

    secondModalCb();
  }

  return <div className={`${classes.paper} ${!mdUp && classes.paperM}`}>

    <Grid
      container
      direction={"column"}
      alignItems={"center"}
    >
      <Box height={'20px'}/>

      <div style={{display: 'flex', marginLeft: 'auto'}}>
        <IconButton
          size={"large"}
          onClick={onClose}
          color="secondary"
          aria-label="close modal box">
          <HighlightOff/>
        </IconButton>
      </div>

      <Typography className={classes.title} align={"center"} variant={"subtitle1"}>
        Мы подберем и произведем оборудование, оптимально подходящий для ваших задач.
      </Typography>

      <Box height={'14px'}/>

      <Typography align={"center"} variant={"h6"}>
        Свяжитесь с нами
      </Typography>

      <Box height={'14px'}/>

      <Typography variant={"h5"} color={"textSecondary"}>+7 (495) 123-45-67</Typography>

      <Box height={'14px'}/>

      <Typography align={"center"} variant={"h6"}>
        Или оставьте свой номер телефона и мы перезвоним в ближайшее время
      </Typography>

      <Box height={'10px'}/>

      <CssTextField
        placeholder={'+7 (495) 123-45-67'}
        onChange={_handleInputChange('phone_number')}
        value={form.phone_number}
        variant={"outlined"}
        className={classes.input}/>

      <Box height={'20px'}/>

      <CssTextField
        placeholder={'Ваше имя'}
        onChange={_handleInputChange('first_name')}
        value={form.first_name}
        variant={"outlined"}
        className={classes.input}/>

      <Box height={'20px'}/>

      <SquareBtn
        onClick={submitForm}
        height={50}
        width={238}
        color={'primary'}
        variant="contained">
        {loading && <CircularProgress size={26} color={"secondary"}/>}
        {!loading && <Typography variant={"body2"}>Перезвоните мне</Typography>}
      </SquareBtn>

      <Box height={'20px'}/>
    </Grid>
  </div>
};

export default memo(ModalContent);
