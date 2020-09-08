import React, {memo, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Grid, Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import SquareBtn from "../../Components/SquareBtn";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ModalContent from "./ModalContent";
import ModalContent2 from "../BillingScetion/ModalContent";
import Modal from "@material-ui/core/Modal";
import {BodyColors, BodyShapes, RosetteColors} from "./ConstructorVariables";
import RozetteSchema from "./RozetteSchema";
import Colorizer from "./Colorizer";
import Switcher from "./Switcher";
import FormSlider from "./FormSlider";
import FormSelector from "./FormSelector";
import FeedbackFormReducer from "../../store/reducers/FeedbackForm";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '52px 10px',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)'
  },

  modal: {
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fz16: {
    fontSize: 16
  },

  textField: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "black"
    },

    '& .MuiInputBase-input': {
      padding: '8px 32px 8px 20px',
    },

    "& fieldset": {
      padding: 'unset'
    }
  },

  widthLimit: {
    maxWidth: 802
  },

  mWidth360: {
    maxWidth: 360
  }
}));

function checkMulticolor(color) {
  switch (color) {
    case '':
    case '#fff':
    case '#3BDA38':
    case '#FAFF00':
    case '#558BF4':
      return false
    default:
      return true
  }
}

const squareRozetteMarks = [
  {
    value: 25,
    label: 4,
  },
  {
    value: 75,
    label: 9,
  }
];

const rectangleRozetteMarks = [
  {
    value: 0,
    label: 5,
  },
  {
    value: 33,
    label: 7,
  },
  {
    value: 66,
    label: 9,
  },
  {
    value: 100,
    label: 12,
  },
];

function valuetext(value) {
  return `${value}`;
}

const feedbackFormReducer = new FeedbackFormReducer();

const PowerDistributorConstructor = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [form, _setForm] = useState({
    bodyShape: BodyShapes.rectangle,
    bodyColor: BodyColors.white,
    backLight: true,
    gilding: false,
    usb: true,
    amountOfRosettes: 9,
    rosetteColor: RosetteColors.white,
    rosetteManufacturer: 0,
    cabelType: 0,
    cabelLength: 0
  });

  const [open, setOpen] = React.useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSecondModal() {
    handleClose();
    setSecondModalOpen(true)
  }

  function setForm(field, value) {
    return evt => _setForm({...form, [field]: value !== undefined ? value : evt?.target.value});
  }

  function valueLabelFormat(value) {
    const arr = form.bodyShape === BodyShapes.rectangle ? rectangleRozetteMarks : squareRozetteMarks;

    return arr[arr.findIndex((mark) => mark.value === value)].label;
  }

  function handleRozetteSlider(event, newValue) {
    const arr = form.bodyShape === BodyShapes.rectangle ? rectangleRozetteMarks : squareRozetteMarks;

    setForm('amountOfRosettes', arr[arr.findIndex((mark) => mark.value === newValue)].label)();
  }

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return <Grid
    className={classes.root}
    container
    direction={"row"}
    justify={"center"}
    alignItems={"center"}
  >
    <Grid
      xs={12}
      md={6}
      item
      justify={"center"}
      container>
      <Typography align={"center"} variant={"h5"}>
        СОЗДАЙ СВОЙ KROKODAIL POWER
      </Typography>
    </Grid>

    <Grid
      xs={12}
      item
      container>
      <Box height={mdUp ? '46px' : '10px'}/>
    </Grid>

    <Grid
      xs={12}
      md={6}
      item
      justify={"center"}
      container>
      <Typography className={classes.fz16} align={"center"} variant={"body1"}>
        Мы производим KROKODAIL POWER по индивидуальным заказам. Выберите характеристики устройства. И мы сконструируем
        распределитель питания, оптимально подходящий для ваших задач.
      </Typography>
    </Grid>

    <Grid
      xs={12}
      item
      container>
      <Box height={mdUp ? '46px' : '26px'}/>
    </Grid>

    <Grid
      xs={12}
      item
      justify={"center"}
      container>
      <RozetteSchema/>
    </Grid>

    <Grid
      xs={12}
      item
      container>
      <Box height={mdUp ? '46px' : '10px'}/>
    </Grid>

    <Grid
      xs={12}
      md={5}
      item
      justify={mdUp ? "flex-end" : "center"}
      container>

      <Grid
        style={{
          minWidth: mdUp ? 400 : undefined,
          width: mdUp ? 'fit-content' : 280
        }}
        item
        direction={'column'}
        justify={"flex-start"}
        container>
        {!mdUp && <Grid item>
          <Box height={'21px'}/>
        </Grid>}

        <FormSelector
          title={'Форма корпуса'}
          formField={'body_shape'}
        />

        <Grid item>
          <Box height={'21px'}/>
        </Grid>

        <Grid item container alignItems={"center"}>
          <Colorizer
            updateDefaultColor={false}
            column={!mdUp}
            title={'Цвет корпуса'}
            colorGroup={'body_colors'}/>
        </Grid>

        {!mdUp && <>
          <Grid item>
            <Box height={'18px'}/>
          </Grid>

          <FormSlider
            title={'Количество розеток'}
            formField={'amount_of_rosette'}
          />

          <Grid item>
            <Box height={'18px'}/>
          </Grid>

          <FormSelector
            title={'Производитель розеток'}
            formField={'manufacturer'}
          />

          <Grid item>
            <Box height={'18px'}/>
          </Grid>

          <Grid item container alignItems={"center"}>
            <Grid item container alignItems={"center"}>
              <Colorizer
                column={!mdUp}
                title={'Цвет розеток'}
                colorGroup={'rosette_colors'}/>
            </Grid>
          </Grid>
        </>}

        <Grid item>
          <Box height={'18px'}/>
        </Grid>

        <Switcher
          title={'Backlight'}
          formField={'backlight'}
          tooltip={'Внутреннее освещение'}
        />

        <Grid item>
          <Box height={'18px'}/>
        </Grid>

        <Switcher
          title={'Золочение шин'}
          formField={'gilding'}
          tooltip={'Золочение шин толщиной 1 мкм'}
        />

        <Grid item>
          <Box height={'18px'}/>
        </Grid>

        <Switcher
          title={'USB порты'}
          formField={'usb'}
          tooltip={'Наличие в составе USB-портов'}
        />

      </Grid>

    </Grid>

    {mdUp && <Grid item md={1}/>}

    <Grid
      xs={12}
      md={5}
      item
      justify={mdUp ? "flex-start" : "center"}
      container>

      <Grid
        className={'fit-w'}
        style={mdUp ? {minWidth: 400} : undefined}
        item
        direction={"column"}
        container>
        {!mdUp && <Grid item>
          <Box height={'21px'}/>
        </Grid>}

        {mdUp && <>
          <FormSlider
            title={'Количество розеток'}
            formField={'amount_of_rosette'}
          />

          <Grid item>
            <Box height={'21px'}/>
          </Grid>

          <Grid item container alignItems={"center"}>
            <Grid item container alignItems={"center"}>
              <Colorizer
                column={!mdUp}
                title={'Цвет розеток'}
                colorGroup={'rosette_colors'}/>
            </Grid>
          </Grid>

          <Grid item>
            <Box height={'18px'}/>
          </Grid>

          <FormSelector
            title={'Производитель розеток'}
            formField={'manufacturer'}
          />
        </>}

        <Grid item>
          <Box height={'18px'}/>
        </Grid>

        <FormSelector
          title={'Тип провода'}
          formField={'wire_type'}
        />

        <Grid item>
          <Box height={'18px'}/>
        </Grid>

        <FormSelector
          title={'Длинна хвоста \n крокодайла (провода)'}
          formField={'wire_length'}
        />
      </Grid>

    </Grid>

    <Grid item xs={12}>
      <Box height={mdUp ? '54px' : '18px'}/>
    </Grid>

    <Grid item container xs={12} justify={"center"}>
      <SquareBtn onClick={handleOpen} color={'primary'} variant="contained" width={mdUp ? 613 : 317} height={50}>
        РАССЧИТАТЬ
      </SquareBtn>
    </Grid>

    <Grid item xs={12}>
      <Box height={'14px'}/>
    </Grid>

    <Grid item container xs={12} justify={"center"}>
      <Typography align={"center"} style={{color: '#979797'}} className={classes.fz16} variant={"body1"}>
        Если не уверены в каком-то параметре - не проблема. Наши специалисты помогут {mdUp && <br/>}
        подобрать оборудование по необходимым параметрам и ответят на все вопросы
      </Typography>
    </Grid>

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
        <ModalContent
          reducerInstance={feedbackFormReducer}
          secondModalCb={handleSecondModal}
          onClose={handleClose}
        />
      </Fade>
    </Modal>

    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={secondModalOpen}
      onClose={() => setSecondModalOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={secondModalOpen}>
        <ModalContent2 onClose={() => setSecondModalOpen(false)} />
      </Fade>
    </Modal>
  </Grid>
};

export default memo(PowerDistributorConstructor);
