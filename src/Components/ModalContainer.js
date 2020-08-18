import PropTypes from 'prop-types'
import React, {memo} from 'react';
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

  paper: {
    width: 'fit-content',
    maxHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    outline: 'none',
    boxShadow: '0px 16px 32px rgba(0, 0, 0, 0.26)',
    borderRadius: 30,
    padding: 20,
    margin: 10,
    backgroundColor: '#FFFFFF',
  },
}));

const ModalContainer = ({children, open, onClose}) => {
  const classes = useStyles();

  return <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    className={classes.modal}
    open={open}
    onClose={onClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={open}>
      <div className={classes.paper}>
        {children}
      </div>
    </Fade>
  </Modal>
};

ModalContainer.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  open: PropTypes.bool
}

export default memo(ModalContainer);
