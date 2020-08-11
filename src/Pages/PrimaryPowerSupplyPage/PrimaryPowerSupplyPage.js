import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import {Grid} from "@material-ui/core";
import HiEndSystemsPrimaryPowerSupply
  from "../../Sections/HiEndSystemsPrimaryPowerSupply/HiEndSystemsPrimaryPowerSupply";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
}));

const PrimaryPowerSupplyPage = () => {
  const classes = useStyles();
  const theme = useTheme();

  return <Grid
    container
    direction={'column'}
    alignItems={'stretch'}>
    <HiEndSystemsPrimaryPowerSupply/>
  </Grid>
};

PrimaryPowerSupplyPage.routeName = '/';

export default memo(PrimaryPowerSupplyPage);
