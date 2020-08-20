import React, {memo, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SquareBtn from "../../Components/SquareBtn";

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
  }
}));

const BillingSection = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [phoneNumber, setPhoneNumber] = useState('');

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

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
        onChange={evt => {
          setPhoneNumber(evt.target.value)
        }}
      />

      {!mdUp && <Box height={'10px'}/>}

      {mdUp && <Box width={'38px'}/>}

      <SquareBtn style={{textTransform: 'unset'}} color={'secondary'} variant="contained" width={272} height={46}>
        Перезвоните мне
      </SquareBtn>
    </Grid>
  </Grid>
};

export default memo(BillingSection);
