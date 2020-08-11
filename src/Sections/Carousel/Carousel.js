import React, {Component, useState} from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import Box from "@material-ui/core/Box";
import Slide from "./Slide";
import bg1 from '../../assets/slider-bg-1.svg';
import bg2 from '../../assets/slider-bg-1.svg';
import bg3 from '../../assets/slider-bg-1.svg';
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";

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

const Carousel = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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
          <Slide height={mdUp ? 385 : 186}>
            <Grid
              container
              justify={"space-evenly"}
              alignItems={"center"}
              direction={"column"}>
              <Typography variant={"h5"} color={"textPrimary"} align={'center'}>
                Распределитель электропитания<br/> со сниженными потерями
              </Typography>

              <Typography variant={"h4"} color={"textSecondary"}>
                KROKODAIL POWER
              </Typography>

              <Typography variant={"h5"} color={"textPrimary"}>
                Создать свой KROKODAIL POWER →
              </Typography>
            </Grid>
          </Slide>
        </div>
        <div>
          <Slide height={mdUp ? 385 : 186}>
            <Grid
              container
              justify={"space-evenly"}
              alignItems={"center"}
              direction={"column"}>
              <Typography variant={"h5"} color={"textPrimary"} align={'center'}>
                Распределитель электропитания<br/> со сниженными потерями
              </Typography>

              <Typography variant={"h4"} color={"textSecondary"}>
                KROKODAIL POWER
              </Typography>

              <Typography variant={"h5"} color={"textPrimary"}>
                Создать свой KROKODAIL POWER
              </Typography>
            </Grid>
          </Slide>
        </div>
        <div>
          <Slide height={mdUp ? 385 : 186}>
            <Grid
              container
              justify={"space-evenly"}
              alignItems={"center"}
              direction={"column"}>
              <Typography variant={"h5"} color={"textPrimary"} align={'center'}>
                Распределитель электропитания<br/> со сниженными потерями
              </Typography>

              <Typography variant={"h4"} color={"textSecondary"}>
                KROKODAIL POWER
              </Typography>

              <Typography variant={"h5"} color={"textPrimary"}>
                Создать свой KROKODAIL POWER
              </Typography>
            </Grid>
          </Slide>
        </div>
      </Slider>
    </Box>
  )
};

export default Carousel
