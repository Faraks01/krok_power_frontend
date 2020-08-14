import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Selector from "./Selector";
import SquareBtn from "../../../Components/SquareBtn";

const NavBar = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      justify={"center"}>
      <Grid item xs={12} md={8}>
        <Grid container direction={'row'}>
          <SquareBtn color={'secondary'} variant="contained">RU</SquareBtn>
          <SquareBtn color={'primary'} variant="contained">ENG</SquareBtn>

          <Hidden smDown>
            <Box ml={'auto'}>
              <Grid
                container
                direction={'column'}
                justify={"space-between"}
                alignItems={"flex-end"}
              >
                <div style={{width: '100%', height: 8, backgroundColor: theme.palette.primary.main}}/>

                <Typography variant={'h6'}>
                  +7 (495) 123-11-22
                </Typography>

                <Typography style={{color: '#666666'}} variant={'body2'}>
                  Пн.-Вс. 09:00 - 21:00
                </Typography>
              </Grid>
            </Box>
          </Hidden>


          <Hidden mdUp>
            <Box ml={'auto'}>
              <Grid
                container
                direction={'column'}
                justify={"space-between"}
                alignItems={"center"}
              >
                <div style={{width: '100%', height: 8, backgroundColor: theme.palette.primary.main}}/>

                <Typography variant={'h6'}>
                  +7 (495) 123-11-22
                </Typography>

                <Typography style={{color: '#666666'}} variant={'body2'}>
                  Пн.-Вс. 09:00 - 21:00
                </Typography>
              </Grid>
            </Box>

            <Box width={8}/>

            <Selector/>
          </Hidden>


        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavBar;
