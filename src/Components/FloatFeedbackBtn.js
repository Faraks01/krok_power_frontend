import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CircleButton from "./CircleButton";
import PhoneSvgIcon from "../SvgComponents/PhoneSvgIcon";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ModalContent from "../Sections/BillingScetion/ModalContent";

const useStyles = makeStyles((theme) => ({
  floatBtn: {
    position: 'fixed',
    zIndex: 9999,
    right: 28,
    bottom: 15
  },

  modal: {
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const FloatFeedbackBtn = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return <>
    <CircleButton
      onClick={handleOpen}
      className={classes.floatBtn}
      bgColor={'black'}
      height={60}
      width={60}
      color={'secondary'}
      variant="contained">
      <PhoneSvgIcon height={30} width={30}/>
    </CircleButton>

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
        <ModalContent asInfo/>
      </Fade>
    </Modal>
  </>
};

export default memo(FloatFeedbackBtn);
