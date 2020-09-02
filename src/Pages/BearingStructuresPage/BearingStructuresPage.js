import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import BearingStructuresSection from "../../Sections/BearingStructuresSection";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
}));

const BearingStructuresPage = () => {
  const classes = useStyles();
  const theme = useTheme();

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return <Grid
    container
    direction={'column'}
    alignItems={'stretch'}>
    <BearingStructuresSection/>
  </Grid>
};

BearingStructuresPage.routeName = '/bearing-structures-page'

export default memo(BearingStructuresPage);
