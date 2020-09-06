import PropTypes from 'prop-types'
import React, {memo, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  modal: {
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: 'auto'
  }
}));

const ModalImage = ({imageSrc, children, modalWidth = '70vw'}) => {
  const classes = useStyles();

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

  return <>

    {React.cloneElement(children, {
      onMouseMove: handleMouseMove,
      onMouseLeave: endSwipeProgress,
      onMouseDown: endSwipeProgress,
      onClick: handleOpen,
      src: imageSrc
    })}

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
        <img
          style={{width: modalWidth}}
          className={`${classes.image} outline-n`}
          src={imageSrc}/>
      </Fade>
    </Modal>
  </>
};

ModalImage.propTypes = {
  modalWidth: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  imageSrc: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
}

export default memo(ModalImage);
