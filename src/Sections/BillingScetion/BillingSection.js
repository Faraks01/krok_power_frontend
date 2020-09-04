import React, {memo, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SquareBtn from "../../Components/SquareBtn";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import ModalContent from "./ModalContent";
import {useDispatch, useSelector} from "react-redux";
import BillingFormReducer from "../../store/reducers/BillingForm";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    padding: '52px'
  },

  rootM: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    padding: '15px 52px'
  },

  input: {
    boxSizing: 'border-box',
    width: 272,
    height: 46,
    padding: '0 13px',
    border: 'none',
    textAlign: 'center',
    fontSize: 16
  },

  modal: {
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const billingFormReducer = new BillingFormReducer();

const BillingSection = () => {
  const classes = useStyles();
  const theme = useTheme();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const phoneNumber = useSelector(s => s[BillingFormReducer.reducerName].phone_number);

  function setPhoneNumber(evt) {
    dispatch({
      type: BillingFormReducer.actionTypes.UPDATE_FIELD,
      key: 'phone_number',
      payload: evt.target.value
    })
  }

  async function submitForm() {
    setLoading(true);

    let succeeded = await dispatch(billingFormReducer.createForm());

    if (succeeded) {
      dispatch({
        type: BillingFormReducer.actionTypes.CLEAR_FORM
      });

      handleOpen();
    } else {
      alert('Ошибка при попытке отправки, попробуйте еще раз!');
    }

    setLoading(false);
  }

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return <Grid
    className={mdUp ? classes.root : classes.rootM}
    container
    direction={'column'}
    alignItems={'stretch'}>
    <Typography style={{color: 'white'}} align={"center"} variant={mdUp ? "h5" : "h6"}>
      Персональный расчет или бесплатная консультация {mdUp && <br/>} по продуктам Absolute Systems
    </Typography>

    <Box height={mdUp ? '46px' : '15px'}/>

    <Grid
      item
      container
      xs={12}
      direction={mdUp ? "row" : "column"}
      justify={"center"}
      alignItems={"center"}>

      <input
        className={classes.input}
        type={"text"}
        placeholder={'+7 (495) 123-45-67'}
        value={phoneNumber}
        onChange={setPhoneNumber}
      />

      {!mdUp && <Box height={'10px'}/>}

      {mdUp && <Box width={'38px'}/>}

      <SquareBtn
        onClick={submitForm}
        style={{textTransform: 'unset'}}
        color={'secondary'}
        variant="contained"
        width={272}
        height={46}>
        {loading && <CircularProgress size={26} color={"primary"}/>}
        {!loading && 'Перезвоните мне'}
      </SquareBtn>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalContent/>
        </Fade>
      </Modal>
    </Grid>
  </Grid>
};

export default memo(BillingSection);
