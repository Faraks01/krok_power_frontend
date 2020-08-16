import React, {memo, useState} from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import SquareBtn from "../../Components/SquareBtn";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";

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

  const [form, setForm] = useState({
    phoneNumber: '',
    name: '',
    email: ''
  });

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  if (mdUp) {
    return <div className={classes.paper}>
      <Typography align={"center"} variant={"h4"}>
        Оставьте свои контакты и наш менеджер свяжется с Вами
      </Typography>

      <Box height={'29px'}/>

      <Grid
        container
        direction={"row"}
        justify={"space-evenly"}
      >
        <Grid
          className={classes.fitWidth}
          container
          direction={"column"}
          alignItems={"center"}
        >
          <Typography variant={"subtitle1"}>Телефон</Typography>
          <CssTextField
            onChange={evt => {
              setForm({...form, phoneNumber: evt.target.value})
            }}
            value={form.phoneNumber}
            variant={"outlined"}
            className={classes.input}/>

          <Box height={'20px'}/>

          <Typography variant={"subtitle1"}>Имя</Typography>
          <CssTextField
            onChange={evt => {
              setForm({...form, name: evt.target.value})
            }}
            value={form.name}
            variant={"outlined"}
            className={classes.input}/>
        </Grid>

        <Box margin={'auto 0'}>
          <Typography variant={"body2"}>или</Typography>
        </Box>

        <Grid
          className={classes.fitWidth}
          container
          direction={"column"}
          justify={"space-between"}
          alignItems={"center"}
        >
          <Grid
            direction={"column"}>
            <Typography align={"center"} variant={"subtitle1"}>Email</Typography>
            <CssTextField
              onChange={evt => {
                setForm({...form, email: evt.target.value})
              }}
              value={form.email}
              variant={"outlined"}
              className={classes.input}/>
          </Grid>

          <SquareBtn
            onClick={() => {
            }}
            height={45}
            width={238}
            color={'primary'}
            variant="contained">
            <Typography variant={"body2"}>Отправить заявку</Typography>
          </SquareBtn>
        </Grid>
      </Grid>
    </div>
  } else {
    return <div className={classes.paper}>
      <Typography align={"center"} variant={"h6"}>
        Оставьте свои контакты и наш менеджер свяжется с Вами
      </Typography>

      <Box height={'29px'}/>

      <Grid
        container
        direction={"row"}
        justify={"space-evenly"}
      >
        <Grid
          className={classes.fitWidth}
          container
          direction={"column"}
          alignItems={"center"}
        >
          <Typography variant={"subtitle1"}>Телефон</Typography>
          <CssTextField
            onChange={evt => {
              setForm({...form, phoneNumber: evt.target.value})
            }}
            value={form.phoneNumber}
            variant={"outlined"}
            className={classes.input}/>

          <Box height={'20px'}/>

          <Typography variant={"subtitle1"}>Имя</Typography>
          <CssTextField
            onChange={evt => {
              setForm({...form, name: evt.target.value})
            }}
            value={form.name}
            variant={"outlined"}
            className={classes.input}/>

          <Box height={'20px'}/>

          <Typography variant={"body2"}>или</Typography>

          <Box height={'20px'}/>

          <Typography align={"center"} variant={"subtitle1"}>Email</Typography>
          <CssTextField
            onChange={evt => {
              setForm({...form, email: evt.target.value})
            }}
            value={form.email}
            variant={"outlined"}
            className={classes.input}/>

          <Box height={'20px'}/>

          <SquareBtn
            onClick={() => {
            }}
            height={45}
            width={238}
            color={'primary'}
            variant="contained">
            <Typography variant={"body2"}>Отправить заявку</Typography>
          </SquareBtn>
        </Grid>
      </Grid>
    </div>
  }

};

export default memo(ModalContent);
