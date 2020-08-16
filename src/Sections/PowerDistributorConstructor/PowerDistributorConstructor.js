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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '52px 10px',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)'
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

const marks = [
  {
    value: 0,
    label: '3',
  },
  {
    value: 25,
    label: '5',
  },
  {
    value: 50,
    label: '7',
  },
  {
    value: 75,
    label: '9',
  },
  {
    value: 100,
    label: '12',
  },
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks[marks.findIndex((mark) => mark.value === value)].label;
}

const PowerDistributorConstructor = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [form, _setForm] = useState({
    bodyShape: '',
    bodyColor: '#fff',
    backLight: true,
    gilding: false,
    usb: true,
    amountOfRosettes: 9,
    rosetteColor: '#fff',
    rosetteManufacturer: '',
    cabelType: '',
    cabelLength: 1
  });

  function setForm(field, value) {
    return evt => _setForm({...form, [field]: value !== undefined ? value : evt.target.value});
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
      <PowerDistributorSvg/>
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
        className={classes.mWidth360}
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
              onChange={setForm('bodyShape')}
            >
              <MenuItem value="">
                <em>Не выбрано</em>
              </MenuItem>
              <MenuItem value={1}>Квадрат</MenuItem>
              <MenuItem value={2}>Прямоугольник</MenuItem>
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
            onClick={setForm('bodyColor', '#fff')}
            height={30}
            width={30}
            stretch>
            <ButtonBody bgColor={"#fff"}>
              {form.bodyColor === '#fff' && <CheckMarkSvgIcon/>}
            </ButtonBody>
          </SquareBtn>

          <Box width={'11px'}/>

          <SquareBtn
            onClick={setForm('bodyColor', '#3BDA38')}
            height={30}
            width={30}
            stretch>
            <ButtonBody bgColor={'#3BDA38'}>
              {form.bodyColor === '#3BDA38' && <CheckMarkSvgIcon/>}
            </ButtonBody>
          </SquareBtn>

          <Box width={'11px'}/>

          <SquareBtn
            onClick={setForm('bodyColor', '#FAFF00')}
            height={30}
            width={30}
            stretch>
            <ButtonBody bgColor={'#FAFF00'}>
              {form.bodyColor === '#FAFF00' && <CheckMarkSvgIcon/>}
            </ButtonBody>
          </SquareBtn>

          <Box width={'11px'}/>

          <SquareBtn
            onClick={setForm('bodyColor', '#558BF4')}
            height={30}
            width={30}
            stretch>
            <ButtonBody bgColor={'#558BF4'}>
              {form.bodyColor === '#558BF4' && <CheckMarkSvgIcon/>}
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
        className={classes.mWidth360}
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
              defaultValue={0}
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-restrict"
              step={null}
              valueLabelDisplay="auto"
              marks={marks}
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
            onClick={setForm('rosetteColor', '#fff')}
            height={30}
            width={30}
            stretch>
            <ButtonBody bgColor={"#fff"}>
              {form.rosetteColor === '#fff' && <CheckMarkSvgIcon/>}
            </ButtonBody>
          </SquareBtn>

          <Box width={'11px'}/>

          <SquareBtn
            onClick={setForm('rosetteColor', '#000000')}
            height={30}
            width={30}
            stretch>
            <ButtonBody bgColor={'#000000'}>
              {form.rosetteColor === '#000000' && <CheckMarkSvgIcon/>}
            </ButtonBody>
          </SquareBtn>

          <Box width={'11px'}/>

          <SquareBtn
            onClick={setForm('rosetteColor', '#FF2424')}
            height={30}
            width={30}
            stretch>
            <ButtonBody bgColor={'#FF2424'}>
              {form.rosetteColor === '#FF2424' && <CheckMarkSvgIcon/>}
            </ButtonBody>
          </SquareBtn>

          <Box width={'11px'}/>

          <SquareBtn
            onClick={setForm('rosetteColor', '#FF8A00')}
            height={30}
            width={30}
            stretch>
            <ButtonBody bgColor={'#FF8A00'}>
              {form.rosetteColor === '#FF8A00' && <CheckMarkSvgIcon/>}
            </ButtonBody>
          </SquareBtn>

          <Box width={'11px'}/>

          <SquareBtn
            onClick={setForm('rosetteColor', '#DDB381')}
            height={30}
            width={30}
            stretch>
            <ButtonBody bgColor={'#DDB381'}>
              {form.rosetteColor === '#DDB381' && <CheckMarkSvgIcon/>}
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
              <MenuItem value={1}>Furutech</MenuItem>
              <MenuItem value={2}>Siemens</MenuItem>
              <MenuItem value={3}>Shnaider</MenuItem>
              <MenuItem value={4}>Legrand</MenuItem>
              <MenuItem value={5}>СССР</MenuItem>
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
              <MenuItem value={1}>Пламягасящий</MenuItem>
              <MenuItem value={2}>Огневозжегающий</MenuItem>
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
      <SquareBtn color={'primary'} variant="contained" width={mdUp ? 613 : 317} height={50}>
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
  </Grid>
};

export default memo(PowerDistributorConstructor);
