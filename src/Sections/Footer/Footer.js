import React, {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import LogoSvgIcon from "../../SvgComponents/LogoSvgIcon";
import PrimaryPowerSupplyPage from "../../Pages/PrimaryPowerSupplyPage/PrimaryPowerSupplyPage";
import BearingStructuresPage from "../../Pages/BearingStructuresPage/BearingStructuresPage";
import HiEndPage from "../../Pages/HiEndPage/HiEndPage";
import AboutPage from "../../Pages/AboutPage/AboutPage";
import DocumentationPage from "../../Pages/DocumentationPage/DocumentationPage";
import {useHistory} from "react-router-dom";
import {withRouter} from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    width: '100%',
    padding: '38px 40px 33px'
  },

  rootM: {
    backgroundColor: 'black',
    width: '100%',
    padding: '20px 20px 10px'
  },

  list: {
    width: 'fit-content'
  },

  underlined: {
    textDecorationLine: 'underline'
  },

  w300: {
    fontWeight: '300'
  }
}));

const Footer = ({location}) => {
  const history = useHistory();

  const classes = useStyles();
  const theme = useTheme();

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  function navigateTo(routeName) {
    return () => {
      if (location.pathname !== routeName) {
        history.push(routeName);
        window.scrollTo(0, 0);
      }
    }
  }

  if (mdUp) {
    return (
      <Grid
        container
        className={classes.root}
        alignItems={"stretch"}
        direction={"column"}>
        <Typography
          className={classes.w300}
          align={"center"}
          variant={"h6"}
          style={{color: 'white'}}>
          Постоянные НЕ участники выставки Rus-хаэнд
        </Typography>

        <Box height={'55px'}/>

        <Grid
          container
          direction={"row"}
          justify={"space-between"}
          alignItems={"center"}>
          <Grid
            className={classes.list}
            container
            direction={"column"}>
            <Typography
              onClick={navigateTo(PrimaryPowerSupplyPage.type.routeName)}
              className={`${classes.w300} pointer`}
              variant={"h6"}
              style={{color: 'white'}}>
              Первичное электропитание
            </Typography>

            <Typography
              onClick={navigateTo(BearingStructuresPage.type.routeName)}
              className={`${classes.w300} pointer`}
              variant={"h6"}
              style={{color: 'white'}}>
              Несущие конструкции
            </Typography>

            <Typography
              onClick={navigateTo(HiEndPage.type.routeName)}
              className={`${classes.w300} pointer`}
              variant={"h6"}
              style={{color: 'white'}}>
              HI-END
            </Typography>

            <Typography
              onClick={navigateTo(AboutPage.type.routeName)}
              className={`${classes.w300} pointer`}
              variant={"h6"}
              style={{color: 'white'}}>
              О НАС
            </Typography>

            <Typography
              onClick={navigateTo(DocumentationPage.type.routeName)}
              className={`${classes.w300} pointer`}
              variant={"h6"}
              style={{color: 'white'}}>
              Документация
            </Typography>
          </Grid>

          <LogoSvgIcon/>

          <Grid
            className={classes.list}
            container
            direction={"column"}>
            <Typography className={classes.w300} variant={"h6"} style={{color: 'white'}}>
              Телефон: +7 (985) 646-01-36
            </Typography>

            <Typography className={classes.w300} variant={"h6"} style={{color: 'white'}}>
              E-mail: krokodailpower@gmail.com
            </Typography>

            <Typography className={classes.w300} variant={"h6"}>
              {' '}
            </Typography>

            <Typography className={classes.w300} variant={"h6"} style={{color: 'white'}}>
              Адрес бюро: г. Москва, ул. Вересаева, д. 15
            </Typography>

            <Typography className={classes.w300} variant={"h6"} style={{color: 'white'}}>
              Адрес шоурума: г. Москва, ул. Бажова, д. 30
            </Typography>
          </Grid>
        </Grid>

        <Box height={'49px'}/>

        <Typography className={classes.w300} align={"center"} variant={"h6"} style={{color: 'white'}}>
          © 2020, Absolute Systems
        </Typography>

      </Grid>
    )
  } else {
    return (
      <Grid
        container
        className={classes.rootM}
        alignItems={"stretch"}
        direction={"column"}>
        <Grid
          container
          direction={"row"}
          justify={"space-between"}
          alignItems={"flex-start"}>
          {mdUp && <LogoSvgIcon height={31.39} width={45}/>}

          <Grid
            item
            xs={12}
            className={classes.list}
            container
            alignItems={"flex-end"}
            direction={"column"}>
            {!mdUp && <Grid
              item
              container
              xs={12}
              justify={"space-between"}
              direction={"row"}>
              <LogoSvgIcon height={31.39} width={45}/>

              <Grid direction={"column"}>
                <Typography variant={"body1"} style={{color: 'white'}}>
                  +7 (985) 646-01-36
                </Typography>

                <Typography variant={"body1"} style={{color: 'white'}}>
                  krokodailpower@gmail.com
                </Typography>
              </Grid>
            </Grid>}

            {mdUp && <>
              <Typography variant={"body1"} style={{color: 'white'}}>
                +7 (985) 646-01-36
              </Typography>

              <Typography variant={"body1"} style={{color: 'white'}}>
                mf21@live.ru
              </Typography>
            </>}

            <Box height={'16px'}/>

            <Typography variant={"body1"} style={{color: 'white'}}>
              Адрес бюро: г. Москва, ул. Вересаева, д. 15
            </Typography>

            <Typography variant={"body1"} style={{color: 'white'}}>
              Адрес шоурума: г. Москва, ул. Бажова, д. 30
            </Typography>
          </Grid>
        </Grid>

        <Box height={'29px'}/>

        <Grid
          className={classes.list}
          container
          direction={"column"}>
          <Typography
            onClick={navigateTo(PrimaryPowerSupplyPage.type.routeName)}
            className={`${classes.underlined} pointer`}
            variant={"body2"}
            style={{color: 'white'}}>
            Первичное электропитание
          </Typography>

          <Typography
            onClick={navigateTo(BearingStructuresPage.type.routeName)}
            className={`${classes.underlined} pointer`}
            variant={"body2"}
            style={{color: 'white'}}>
            Несущие конструкции
          </Typography>

          <Typography
            onClick={navigateTo(HiEndPage.type.routeName)}
            className={`${classes.underlined} pointer`}
            variant={"body2"}
            style={{color: 'white'}}>
            HI-END
          </Typography>

          <Typography
            onClick={navigateTo(AboutPage.type.routeName)}
            className={`${classes.underlined} pointer`}
            variant={"body2"}
            style={{color: 'white'}}>
            О НАС
          </Typography>

          <Typography
            onClick={navigateTo(DocumentationPage.type.routeName)}
            className={`${classes.underlined} pointer`}
            variant={"body2"}
            style={{color: 'white'}}>
            Документация
          </Typography>
        </Grid>

        <Box height={'29px'}/>

        <Typography variant={"body2"} style={{color: 'white'}}>
          Постоянные НЕ участники выставки Rus-хаэнд
        </Typography>

        <Box height={'11px'}/>

        <Typography align={"center"} variant={"body2"} style={{color: 'white'}}>
          © 2020, Absolute Systems
        </Typography>
      </Grid>
    )
  }
};

export default memo(withRouter(Footer));
