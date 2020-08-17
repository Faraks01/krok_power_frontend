import PropTypes from 'prop-types'
import React, {memo, useState} from 'react';
import Slider from "react-slick";
import Box from "@material-ui/core/Box";
import Slide from "../../Components/Slide";
import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  indicator: {
    height: 2,
    flex: 1,
    backgroundColor: '#DADADA'
  },

  indicatorActive: {
    backgroundColor: '#61AEE9'
  }
}));

const DefaultSlider = ({height, width = '100%', mobile, arrowColor, children}) => {
  const [activeIndicatorIndex, setActiveIndicatorIndex] = useState(0);

  const classes = useStyles();

  const settings = {
    arrows: !mobile,
    dots: false,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setActiveIndicatorIndex(next)
    },
    nextArrow: <ArrowRight arrowColor={arrowColor}/>,
    prevArrow: <ArrowLeft arrowColor={arrowColor}/>
  };

  return <Box height={`${mobile ? height + 16 : height}px`} width={width}>
    <Slider {...settings}>

      {React.Children.map(children, ((item, index) => <Slide key={`slide#${index}`} height={height}>
        {item}
      </Slide>))}

    </Slider>

    {mobile && <Grid
      container
      style={{marginTop: 10, width: "100%"}}
      direction={"row"}
    >

      {React.Children.map(children, ((item, index) => <>
        <div className={`${classes.indicator} ${activeIndicatorIndex === index && classes.indicatorActive}`}/>

        {children.length - 1 !== index && <div style={{width: 5}}/>}
      </>))}

    </Grid>}
  </Box>
};

DefaultSlider.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.number,
  mobile: PropTypes.bool,
  arrowColor: PropTypes.string,
  width: PropTypes.oneOf([PropTypes.number, PropTypes.string])
}

export default memo(DefaultSlider);


