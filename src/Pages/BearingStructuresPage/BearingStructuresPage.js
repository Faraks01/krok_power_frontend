import React, {memo} from 'react';
import Grid from "@material-ui/core/Grid";
import BearingStructuresSection from "../../Sections/BearingStructuresSection";
import Divider from "@material-ui/core/Divider";
import RacksSection from "../../Sections/RacksSection";

const BearingStructuresPage = () => {
  return <Grid
    className={'w-100per'}
    container
    direction={'column'}
    alignItems={'stretch'}>
    <BearingStructuresSection/>

    <Divider variant={"fullWidth"} component={"div"}/>

    <RacksSection/>
  </Grid>
};

BearingStructuresPage.routeName = '/bearing-structures-page'

export default memo(BearingStructuresPage);
