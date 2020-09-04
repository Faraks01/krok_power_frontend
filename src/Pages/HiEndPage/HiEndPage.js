import React, {memo} from 'react';
import Grid from "@material-ui/core/Grid";
import LinearPowerAmplifiersSection from "../../Sections/LinearPowerAmplifiersSection";
import {Divider} from "@material-ui/core";
import SwitchingPowerAmplifiersSection from "../../Sections/SwitchingPowerAmplifiersSection";
import PassiveSpeakerSystemsSection from "../../Sections/PassiveSpeakerSystemsSection";
import AcousticDesignSection from "../../Sections/AcousticDesignSection";

const HiEndPage = () => {
  return <Grid
    container
    direction={'column'}
    alignItems={'stretch'}>
    <LinearPowerAmplifiersSection/>

    <Divider variant="fullWidth" component="div"/>

    <SwitchingPowerAmplifiersSection/>

    <Divider variant="fullWidth" component="div"/>

    <PassiveSpeakerSystemsSection />

    <Divider variant="fullWidth" component="div"/>

    <AcousticDesignSection />

  </Grid>
};

HiEndPage.routeName = '/hi-end'

export default memo(HiEndPage);
