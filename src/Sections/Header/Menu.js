import React from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SquareBtn from "../../Components/SquareBtn";
import {withRouter} from "react-router";
import PrimaryPowerSupplyPage from "../../Pages/PrimaryPowerSupplyPage/PrimaryPowerSupplyPage";

const Menu = ({location}) => {
  return <Grid
    direction={"row"}
    justify={"center"}
    container>

    <SquareBtn color={location.pathname === PrimaryPowerSupplyPage.routeName ? 'secondary' : 'primary'}
               variant="contained" width={300} height={50}>
      Первичное электропитание
    </SquareBtn>

    <Box width={'1px'}/>

    <SquareBtn color={'secondary'} variant="contained" width={300} height={50}>
      Стойки и стеллажи
    </SquareBtn>

    <Box width={'1px'}/>

    <SquareBtn color={'secondary'} variant="contained" width={150} height={50}>
      HI-END
    </SquareBtn>

    <Box width={'1px'}/>

    <SquareBtn color={'secondary'} variant="contained" width={150} height={50}>
      О НАС
    </SquareBtn>

  </Grid>
};

export default withRouter(Menu);
