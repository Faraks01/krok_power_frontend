import React, {useState} from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import bg1 from '../../assets/slider-bg-1.png';
import bg1m from '../../assets/slider-bg-1-m.png';
import bg2 from '../../assets/slider-bg-2.png';
import worldMap from '../../assets/world-map.png';
import bg3 from '../../assets/slider-bg-3.png';
import rack from '../../assets/rack.png';
import {makeStyles} from "@material-ui/core/styles";
import Slide from "../../Components/Slide";
import {useHistory} from "react-router-dom";
import {withRouter} from "react-router";
import PrimaryPowerSupplyPage from "../../Pages/PrimaryPowerSupplyPage/PrimaryPowerSupplyPage";
import HiEndPage from "../../Pages/HiEndPage/HiEndPage";
import BearingStructuresPage from "../../Pages/BearingStructuresPage/BearingStructuresPage";

const DotsContainer = styled.div`
  background-color: transparent;
  bottom: 10px;
`;

const Dot = styled.div`
  border-radius: 50%;
  width: 15px;
  height: 15px;
  ${props => `
    background-color: ${props.color};
  `}
`;

const useStyles = makeStyles((theme) => ({
  fit: {
    width: 'fit-content',
    height: 'fit-content'
  },

  rack: {
    width: 'auto',
  },

  bottomPadding: {
    paddingBottom: 30
  }
}));

const Carousel = ({location}) => {
  const history = useHistory();

  function navigateTo(routeName) {
    return () => {
      if (location.pathname !== routeName) {
        history.push(routeName);
        window.scrollTo(0, 0);
      }
    }
  }

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const classes = useStyles();
  const theme = useTheme();

  const settings = {
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setCurrentSlideIndex(next)
    },
    appendDots: dots => (
      <DotsContainer>
        {dots}
      </DotsContainer>
    ),
    customPaging: i => (
      <Dot color={i === currentSlideIndex ? theme.palette.primary.main : theme.palette.secondary.main}/>
    )
  };

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box height={mdUp ? 385 : 196} width={'100%'}>
      <Slider {...settings}>
        <div>
          <Slide className={classes.bottomPadding} height={mdUp ? 385 : 196} bgImage={mdUp ? bg1 : bg1m}>
            <Grid
              container
              justify={"space-evenly"}
              alignItems={"center"}
              direction={"column"}>
              <Typography style={{color: 'white'}} variant={mdUp ? "h5" : "h6"} align={'center'}>
                Распределитель электропитания<br/> со сниженными потерями
              </Typography>

              <Typography variant={mdUp ? "h4" : "h5"} color={"textSecondary"}>
                KROKODAIL POWER
              </Typography>

              <Typography
                className={'pointer'}
                onClick={navigateTo(PrimaryPowerSupplyPage.type.routeName)}
                style={{color: 'white'}}
                variant={mdUp ? "h5" : "h6"}>
                Создать свой KROKODAIL POWER →
              </Typography>
            </Grid>
          </Slide>
        </div>
        <div>
          <Slide className={classes.bottomPadding} height={mdUp ? 385 : 196} bgImage={!mdUp ? worldMap : undefined} bgColor={'rgba(0, 0, 0, 0.9)'}>
            <Box margin={`auto`}>
              <Grid
                className={classes.fit}
                container
                justify={"center"}
                alignItems={"center"}
                direction={"row"}>

                {mdUp && <img style={{height: mdUp ? 385 : 196, width: 'auto'}} src={worldMap}/>}

                <div>
                  <Typography variant={mdUp ? "h4" : "h5"} color={"textSecondary"}>
                    ИЗ РОССИИ
                  </Typography>

                  <Typography variant={mdUp ? "h4" : "h5"} style={{color: 'white'}}>
                    С ХАЭНДОМ
                  </Typography>

                  {mdUp && <div style={{height: 40}}/>}

                  <Typography
                    className={'pointer'}
                    onClick={navigateTo(HiEndPage.type.routeName)}
                    variant={mdUp ? "h5" : "h6"}
                    style={{color: 'white'}}>
                    РАБОТАЕМ ПО ВСЕМУ МИРУ
                  </Typography>
                </div>
              </Grid>
            </Box>
          </Slide>
        </div>
        <div>
          <Slide className={classes.bottomPadding} height={mdUp ? 385 : 196} bgImage={bg3}>
            <Grid
              container
              justify={"center"}
              alignItems={"center"}
              direction={"row"}>

              {mdUp && <img style={{width: 'auto', height: mdUp ? 385 : 196}} src={rack}/>}

              {mdUp && <Box width={'46px'} />}

              <Typography
                className={'pointer'}
                onClick={navigateTo(BearingStructuresPage.type.routeName)}
                align={mdUp ? "left" : "center"}
                variant={mdUp ? "h4" : "h5"}
                style={{color: 'white'}}>
                СТЕЛЛАЖИ И СТОЙКИ <br/>
                ДЛЯ HI-END ОБОРУДОВАНИЯ <br/>
                ПО ИНДИВИДУАЛЬНЫМ <br/>
                ПАРАМЕТРАМ
              </Typography>
            </Grid>
          </Slide>
        </div>
      </Slider>
    </Box>
  )
};

export default withRouter(Carousel)
