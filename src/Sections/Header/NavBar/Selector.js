import React, {useState} from 'react'
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SquareBtn from "../../../Components/SquareBtn";
import PrimaryPowerSupplyPage from "../../../Pages/PrimaryPowerSupplyPage/PrimaryPowerSupplyPage";
import BearingStructuresPage from "../../../Pages/BearingStructuresPage/BearingStructuresPage";
import HiEndPage from "../../../Pages/HiEndPage/HiEndPage";
import AboutPage from "../../../Pages/AboutPage/AboutPage";
import DocumentationPage from "../../../Pages/DocumentationPage/DocumentationPage";
import {useHistory} from "react-router-dom";
import {withRouter} from "react-router";

const useStyles = makeStyles((theme) => ({
  menu: {
    height: 'fit-content',
    zIndex: 9999,
    overflow: 'hidden',
    maxHeight: 0,
    transition: '300ms',
    width: 'fit-content',
    top: '50px',
    right: 0,
    position: 'absolute',
    backgroundColor: 'white',
    boxShadow: '-1px 4px 4px rgba(0, 0, 0, 0.25)',
    padding: '0 15px',
    '&>*': {
      transition: 'opacity 300ms',
      opacity: 0
    }
  },

  menuOpened: {
    maxHeight: '600px',
    '&>*': {
      opacity: 1
    }
  },

  pointer: {
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main
    }
  },

  option: {
    transition: '150ms',
    textAlign: 'right',
    textTransform: 'uppercase',
    fontWeight: '300',
    fontSize: 16,
  }
}));

const Selector = ({location}) => {
  const history = useHistory();

  const classes = useStyles();

  const [menuOpened, setMenuOpened] = useState(false);

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

  return (
    <Box style={{position: 'relative'}}>
      <SquareBtn onClick={() => {
        setMenuOpened(!menuOpened)
      }} color={'primary'} variant="contained">
        <MenuIcon/>
      </SquareBtn>

      <Grid
        className={`${classes.menu} ${menuOpened ? classes.menuOpened : ''}`}
        container
        alignItems={'flex-end'}
        direction={'column'}>
        <Box height={20}/>

        <Box
          onClick={navigateTo(PrimaryPowerSupplyPage.type.routeName)}
          className={classes.pointer}
          width={'100%'}>
          <Typography
            color={buttonColor(PrimaryPowerSupplyPage.type.routeName)}
            className={classes.option}
            variant={'h6'}>
            Первичное <br/> электропитание
          </Typography>
        </Box>

        <Box height={15}/>

        <Box
          onClick={navigateTo(BearingStructuresPage.type.routeName)}
          className={classes.pointer}
          width={'100%'}>
          <Typography
            color={buttonColor(BearingStructuresPage.type.routeName)}
            className={classes.option}
            variant={'h6'}>
            Несущие конструкции
          </Typography>
        </Box>

        <Box height={15}/>

        <Box
          onClick={navigateTo(HiEndPage.type.routeName)}
          className={classes.pointer}
          width={'100%'}>
          <Typography
            color={buttonColor(HiEndPage.type.routeName)}
            className={classes.option}
            variant={'h6'}>
            HI-END
          </Typography>
        </Box>

        <Box height={15}/>

        <Box
          onClick={navigateTo(AboutPage.type.routeName)}
          className={classes.pointer}
          width={'100%'}>
          <Typography
            color={buttonColor(AboutPage.type.routeName)}
            className={classes.option}
            variant={'h6'}>
            О НАС
          </Typography>
        </Box>

        <Box height={15}/>

        <Box
          onClick={navigateTo(DocumentationPage.type.routeName)}
          className={classes.pointer}
          width={'100%'}>
          <Typography
            color={buttonColor(DocumentationPage.type.routeName)}
            className={classes.option}
            variant={'h6'}>
            Документация
          </Typography>
        </Box>

        <Box height={20}/>
      </Grid>
    </Box>
  )
}

export default withRouter(Selector)
