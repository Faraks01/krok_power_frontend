import React from 'react';
import Grid from "@material-ui/core/Grid";
import SquareBtn from "./NavBar/SquareBtn";
import Box from "@material-ui/core/Box";

const Menu = () => {
  return <Grid
    direction={"row"}
    justify={"center"}
    container>

    <SquareBtn color={'secondary'} variant="contained" width={300} height={50}>
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

export default Menu;
