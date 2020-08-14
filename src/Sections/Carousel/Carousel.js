import React, {useState} from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@material-ui/core/Box";
import Slide from "./Slide";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import bg1 from '../../assets/slider-bg-1.png';
import bg1m from '../../assets/slider-bg-1-m.png';
import bg2 from '../../assets/slider-bg-2.png';
import bg3 from '../../assets/slider-bg-3.png';
import rack from '../../assets/rack.png';
import {makeStyles} from "@material-ui/core/styles";

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
  }
}));

const Carousel = () => {
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
    <Box height={mdUp ? 385 : 186} width={'100%'}>
      <Slider {...settings}>
        <div>
          <Slide height={mdUp ? 385 : 186} bgImage={mdUp ? bg1 : bg1m}>
            <Grid
              container
              justify={"space-evenly"}
              alignItems={"center"}
              direction={"column"}>
              <Typography variant={mdUp ? "h5" : "h6"} color={"textPrimary"} align={'center'}>
                Распределитель электропитания<br/> со сниженными потерями
              </Typography>

              <Typography variant={mdUp ? "h4" : "h5"} color={"textSecondary"}>
                KROKODAIL POWER
              </Typography>

              <Typography variant={mdUp ? "h5" : "h6"} color={"textPrimary"}>
                Создать свой KROKODAIL POWER →
              </Typography>
            </Grid>
          </Slide>
        </div>
        <div>
          <Slide height={mdUp ? 385 : 186} bgImage={bg2}>
            <Box margin={`auto ${mdUp ? '80px' : 'auto'} auto auto`}>
              <Grid
                className={classes.fit}
                container
                alignItems={"flex-start"}
                direction={"column"}>
                <Typography variant={mdUp ? "h4" : "h5"} color={"textSecondary"}>
                  ИЗ РОССИИ
                </Typography>

                <Typography variant={mdUp ? "h4" : "h5"} color={"textPrimary"}>
                  С ХАЭНДОМ
                </Typography>

                <Typography variant={mdUp ? "h5" : "h6"} color={"textPrimary"}>
                  РАБОТАЕМ ПО ВСЕМУ МИРУ
                </Typography>
              </Grid>
            </Box>
          </Slide>
        </div>
        <div>
          <Slide height={mdUp ? 385 : 186} bgImage={bg3}>
            <Grid
              container
              justify={"center"}
              alignItems={"center"}
              direction={"row"}>

              {mdUp && <img style={{width: 'auto', height: mdUp ? 410 : 210}} src={rack}/>}

              <Typography align={mdUp ? "left" : "center"} variant={mdUp ? "h4" : "h5"} color={"textPrimary"}>
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

export default Carousel
