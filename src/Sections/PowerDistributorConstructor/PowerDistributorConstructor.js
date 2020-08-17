import React, {memo, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Grid, Box, FormControl, Select, MenuItem, Switch} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PowerDistributorSvg from "../../SvgComponents/PowerDistributorSvg";
import SquareBtn from "../../Components/SquareBtn";
import CheckMarkSvgIcon from "../../SvgComponents/CheckMarkSvgIcon";
import InfoIcon from '@material-ui/icons/Info';
import ButtonBody from "./ButtonBody";
import multicolor from '../../assets/multicolor.png';
import Slider from "@material-ui/core/Slider";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ModalContent from "./ModalContent";
import Modal from "@material-ui/core/Modal";
import {BodyColors, BodyShapes, CabelTypes, RosetteColors, RosetteManufacturers} from "./ConstructorVariables";
import RozetteSchema from "./RozetteSchema";

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
    label: 3,
  },
  {
    value: 25,
    label: 5,
  },
  {
    value: 50,
    label: 7,
  },
  {
    value: 75,
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

function valueLabelFormat(value) {
  return rectangleRozetteMarks[rectangleRozetteMarks.findIndex((mark) => mark.value === value)].label;
}

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
    rosetteManufacturer: null,
    cabelType: null,
    cabelLength: 1
  });

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function setForm(field, value) {
    return evt => _setForm({...form, [field]: value !== undefined ? value : evt.target.value});
  }

  function handleBodyShapeChange(evt) {

    if (evt.target.value === BodyShapes.square) {
      _setForm({
        ...form,
        bodyShape: BodyShapes.square,
        amountOfRosettes: 4
      });
    } else {
      _setForm({
        ...form,
        bodyShape: BodyShapes.rectangle,
        amountOfRosettes: 9
      });
    }

  }

  function handleRozetteSlider(event, newValue) {
    setForm('amountOfRosettes', rectangleRozetteMarks[rectangleRozetteMarks.findIndex((mark) => mark.value === newValue)].label)();
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
        Мы производим KROKODAIL POWER по индивидуальным заказам. Выберите характеристики устройства, и мы сконструируем
        распределитель питания, оптимально подходящий для ваших задач.
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
      item
      justify={"center"}
      container>
      <RozetteSchema bodyShape={form.bodyShape} amountOfRosettes={form.amountOfRosettes}/>
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
        className={'fit-w'}
        item
        direction={'column'}
        justify={"flex-start"}
        container>
        {!mdUp && <Grid item>
          <Box height={'21px'}/>
        </Grid>}

        <Grid item container alignItems={"center"}>
          <Typography className={classes.fz16} align={"center"} variant={"body1"}>
            Форма корпуса
          </Typography>

          <Box width={'23px'}/>

          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              className={classes.textField}
              value={form.bodyShape}
              onChange={handleBodyShapeChange}
            >
              <MenuItem value={BodyShapes.square}>Квадрат</MenuItem>
              <MenuItem value={BodyShapes.rectangle}>Прямоугольник</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item>
          <Box height={'21px'}/>
        </Grid>

        <Grid item container alignItems={"center"}>
          <Typography className={classes.fz16} align={"center"} variant={"body1"}>
            Цвет корпуса
          </Typography>

          <Box width={'41px'}/>

          <SquareBtn
            onClick={setForm('bodyColor', BodyColors.white)}
            height={30}
            width={30}
            stretch>
            <ButtonBody bgColor={BodyColors.white}>
              {form.bodyColor === BodyColors.white && <CheckMarkSvgIcon/>}
            </ButtonBody>
          </SquareBtn>

          <Box width={'11px'}/>

          <SquareBtn
            onClick={setForm('bodyColor', BodyColors.green)}
            height={30}
            width={30}
            stretch>
            <ButtonBody bgColor={BodyColors.green}>
              {form.bodyColor === BodyColors.green && <CheckMarkSvgIcon/>}
            </ButtonBody>
          </SquareBtn>

          <Box width={'11px'}/>

          <SquareBtn
            onClick={setForm('bodyColor', BodyColors.yellow)}
            height={30}
            width={30}
            stretch>
            <ButtonBody bgColor={BodyColors.yellow}>
              {form.bodyColor === BodyColors.yellow && <CheckMarkSvgIcon/>}
            </ButtonBody>
          </SquareBtn>

          <Box width={'11px'}/>

          <SquareBtn
            onClick={setForm('bodyColor', BodyColors.blue)}
            height={30}
            width={30}
            stretch>
            <ButtonBody bgColor={BodyColors.blue}>
              {form.bodyColor === BodyColors.blue && <CheckMarkSvgIcon/>}
            </ButtonBody>
          </SquareBtn>

          <Box width={'11px'}/>

          <SquareBtn height={30} width={30} stretch>
            <ButtonBody bgImage={multicolor}>
              {checkMulticolor(form.bodyColor) && <CheckMarkSvgIcon/>}
            </ButtonBody>
          </SquareBtn>
        </Grid>

        <Grid item>
          <Box height={'18px'}/>
        </Grid>

        <Grid item container alignItems={"center"}>
          <Typography className={classes.fz16} align={"center"} variant={"body1"}>
            Backlight
          </Typography>

          <Box width={'23px'}/>

          <Switch
            checked={form.backLight}
            onChange={setForm('backLight', !form.backLight)}
            color="primary"
            name="checkedB"
            inputProps={{'aria-label': 'primary checkbox'}}
          />

          <Box width={'4px'}/>

          <InfoIcon width={25} height={25} color={"primary"}/>
        </Grid>

        <Grid item>
          <Box height={'18px'}/>
        </Grid>

        <Grid item container alignItems={"center"}>
          <Typography className={classes.fz16} align={"center"} variant={"body1"}>
            Золочение шин
          </Typography>

          <Box width={'23px'}/>

          <Switch
            checked={form.gilding}
            onChange={setForm('gilding', !form.gilding)}
            color="primary"
            name="checkedB"
            inputProps={{'aria-label': 'primary checkbox'}}
          />

          <Box width={'4px'}/>

          <InfoIcon width={25} height={25} color={"primary"}/>
        </Grid>

        <Grid item>
          <Box height={'18px'}/>
        </Grid>

        <Grid item container alignItems={"center"}>
          <Typography className={classes.fz16} align={"center"} variant={"body1"}>
            USB порты
          </Typography>

          <Box width={'23px'}/>

          <Switch
            checked={form.usb}
            onChange={setForm('usb', !form.usb)}
            color="primary"
            name="checkedB"
            inputProps={{'aria-label': 'primary checkbox'}}
          />

          <Box width={'4px'}/>

          <InfoIcon width={25} height={25} color={"primary"}/>
        </Grid>

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
        item
        direction={"column"}
        container>
        {!mdUp && <Grid item>
          <Box height={'21px'}/>
        </Grid>}

        <Grid item container alignItems={"center"}>
          <Typography className={classes.fz16} align={"center"} variant={"body1"}>
            Количество розеток
          </Typography>

          <Box width={'23px'}/>

          <Box width={'184px'}>
            <Slider
              key={`@#q${form.bodyShape}`}
              defaultValue={form.bodyShape === BodyShapes.rectangle ? 75 : 25}
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-restrict"
              step={null}
              valueLabelDisplay="auto"
              marks={form.bodyShape === BodyShapes.rectangle ? rectangleRozetteMarks : squareRozetteMarks}
              onChange={handleRozetteSlider}
            />
          </Box>
        </Grid>

        <Grid item>
          <Box height={'21px'}/>
        </Grid>


        <Grid item container alignItems={"center"}>
          <Typography className={classes.fz16} align={"center"} variant={"body1"}>
            Цвет розеток
          </Typography>

          <Box width={'23px'}/>

          <SquareBtn
            onClick={setForm('rosetteColor', RosetteColors.white)}
            height={30}
            width={30}
            stretch>
            <ButtonBody bgColor={RosetteColors.white}>
              {form.rosetteColor === RosetteColors.white && <CheckMarkSvgIcon/>}
            </ButtonBody>
          </SquareBtn>

          <Box width={'11px'}/>

          <SquareBtn
            onClick={setForm('rosetteColor', RosetteColors.black)}
            height={30}
            width={30}
            stretch>
            <ButtonBody bgColor={RosetteColors.black}>
              {form.rosetteColor === RosetteColors.black && <CheckMarkSvgIcon/>}
            </ButtonBody>
          </SquareBtn>

          <Box width={'11px'}/>

          <SquareBtn
            onClick={setForm('rosetteColor', RosetteColors.red)}
            height={30}
            width={30}
            stretch>
            <ButtonBody bgColor={RosetteColors.red}>
              {form.rosetteColor === RosetteColors.red && <CheckMarkSvgIcon/>}
            </ButtonBody>
          </SquareBtn>

          <Box width={'11px'}/>

          <SquareBtn
            onClick={setForm('rosetteColor', RosetteColors.orange)}
            height={30}
            width={30}
            stretch>
            <ButtonBody bgColor={RosetteColors.orange}>
              {form.rosetteColor === RosetteColors.orange && <CheckMarkSvgIcon/>}
            </ButtonBody>
          </SquareBtn>

          <Box width={'11px'}/>

          <SquareBtn
            onClick={setForm('rosetteColor', RosetteColors.creme)}
            height={30}
            width={30}
            stretch>
            <ButtonBody bgColor={RosetteColors.creme}>
              {form.rosetteColor === RosetteColors.creme && <CheckMarkSvgIcon/>}
            </ButtonBody>
          </SquareBtn>

          <Box width={'11px'}/>

          <SquareBtn
            onClick={setForm('rosetteColor', 'rgba(0, 0, 0, 0.25)')}
            height={30}
            width={30}
            stretch>
            <ButtonBody bgColor={'rgba(0, 0, 0, 0.25)'}>
              {form.rosetteColor === 'rgba(0, 0, 0, 0.25)' && <CheckMarkSvgIcon/>}
            </ButtonBody>
          </SquareBtn>
        </Grid>

        <Grid item>
          <Box height={'18px'}/>
        </Grid>

        <Grid item container alignItems={"center"}>
          <Typography className={classes.fz16} align={"center"} variant={"body1"}>
            Производитель розеток
          </Typography>

          <Box width={'23px'}/>

          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              className={classes.textField}
              value={form.rosetteManufacturer}
              onChange={setForm('rosetteManufacturer')}
            >
              <MenuItem value="">
                <em>Не выбрано</em>
              </MenuItem>
              <MenuItem value={RosetteManufacturers.Furutech}>Furutech</MenuItem>
              <MenuItem value={RosetteManufacturers.Siemens}>Siemens</MenuItem>
              <MenuItem value={RosetteManufacturers.Shnaider}>Shnaider</MenuItem>
              <MenuItem value={RosetteManufacturers.Legrand}>Legrand</MenuItem>
              <MenuItem value={RosetteManufacturers.SSSR}>СССР</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item>
          <Box height={'18px'}/>
        </Grid>

        <Grid item container alignItems={"center"}>
          <Typography className={classes.fz16} align={"center"} variant={"body1"}>
            Тип провода
          </Typography>

          <Box width={'23px'}/>

          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              className={classes.textField}
              value={form.cabelType}
              onChange={setForm('cabelType')}
            >
              <MenuItem value="">
                <em>Не выбрано</em>
              </MenuItem>
              <MenuItem value={CabelTypes.Flammable}>Пламягасящий</MenuItem>
              <MenuItem value={CabelTypes.Firefighter}>Огневозжегающий</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item>
          <Box height={'18px'}/>
        </Grid>

        <Grid item container alignItems={"center"}>
          <Typography className={classes.fz16} variant={"body1"}>
            Длинна хвоста <br/> крокодайла (провода)
          </Typography>

          <Box width={'23px'}/>

          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              className={classes.textField}
              value={form.cabelLength}
              onChange={setForm('cabelLength')}
            >
              <MenuItem value="">
                <em>Не выбрано</em>
              </MenuItem>
              <MenuItem value={1.5}>1.5</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </Grid>
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
        <ModalContent/>
      </Fade>
    </Modal>
  </Grid>
};

export default memo(PowerDistributorConstructor);
