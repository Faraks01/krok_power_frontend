import React from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SquareBtn from "../../Components/SquareBtn";
import {withRouter} from "react-router";
import {useHistory} from "react-router-dom";
import PrimaryPowerSupplyPage from "../../Pages/PrimaryPowerSupplyPage/PrimaryPowerSupplyPage";
import BearingStructuresPage from "../../Pages/BearingStructuresPage/BearingStructuresPage";
import HiEndPage from "../../Pages/HiEndPage";
import AboutPage from "../../Pages/AboutPage";
import DocumentationPage from "../../Pages/DocumentationPage";

const Menu = ({location}) => {
  const history = useHistory();

  function navigateTo(routeName) {
    return () => {
      if (location.pathname !== routeName) {
        history.push(routeName);
      }
    }
  }

  function buttonColor(routeName) {
    return location.pathname === routeName ? 'primary' : 'secondary';
  }

  return <Grid
    direction={"row"}
    justify={"center"}
    container>

    <SquareBtn
      onClick={navigateTo(PrimaryPowerSupplyPage.type.routeName)}
      color={buttonColor(PrimaryPowerSupplyPage.type.routeName)}
      variant="contained" width={300} height={50}>
      Первичное электропитание
    </SquareBtn>

    <Box width={'1px'}/>

    <SquareBtn
      onClick={navigateTo(BearingStructuresPage.type.routeName)}
      color={buttonColor(BearingStructuresPage.type.routeName)}
      variant="contained" width={300} height={50}>
      Несущие конструкции
    </SquareBtn>

    <Box width={'1px'}/>

    <SquareBtn
      onClick={navigateTo(HiEndPage.type.routeName)}
      color={buttonColor(HiEndPage.type.routeName)}
      variant="contained"
      width={150}
      height={50}>
      HI-END
    </SquareBtn>

    <Box width={'1px'}/>

    <SquareBtn
      onClick={navigateTo(AboutPage.type.routeName)}
      color={buttonColor(AboutPage.type.routeName)}
      variant="contained"
      width={150}
      height={50}>
      О НАС
    </SquareBtn>

    <Box width={'1px'}/>

    <SquareBtn
      onClick={navigateTo(DocumentationPage.type.routeName)}
      color={buttonColor(DocumentationPage.type.routeName)}
      variant="contained"
      width={150}
      height={50}>
      Документация
    </SquareBtn>

    {/*<Box width={'1px'}/>*/}

    {/*<SquareBtn color={'secondary'} variant="contained" width={150} height={50}>*/}
    {/*  Контакты*/}
    {/*</SquareBtn>*/}

  </Grid>
};

export default withRouter(Menu);
