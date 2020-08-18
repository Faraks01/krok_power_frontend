import PropTypes from 'prop-types'
import React, {memo, useCallback, useEffect} from 'react';
import Typography from "@material-ui/core/Typography";
import {Box, Grid} from "@material-ui/core";
import SquareBtn from "../../Components/SquareBtn";
import {Colors, RosetteManufacturers} from "./ConstructorVariables";
import ButtonBody from "./ButtonBody";
import CheckMarkSvgIcon from "../../SvgComponents/CheckMarkSvgIcon";
import multicolor from "../../assets/multicolor.png";
// import _ from "lodash";

const Colorizer = ({vendor, children, value, onChange}) => {
  let colors = [];

  switch (vendor) {
    case RosetteManufacturers.Furutech:
      colors = [Colors.white, Colors.lightgray];
      break;
    case RosetteManufacturers.Siemens:
      colors = [Colors.white, Colors.lightgray, Colors.creme];
      break;
    case RosetteManufacturers.Shnaider:
      colors = [Colors.white, Colors.red, Colors.black, Colors.lightgray];
      break;
    case RosetteManufacturers.Legrand:
      colors = [Colors.white, Colors.red, Colors.orange, Colors.green, Colors.black];
      break;
    case RosetteManufacturers.SSSR:
      colors = [Colors.red, Colors.black];
      break;
  }

  // const delayed = useCallback(_.debounce(c => onChange(c), 150), []);

  useEffect(() => {
    onChange(colors[0]);
  }, [vendor]);

  return <Grid item container alignItems={"center"}>
    <Box width={201}>
      <Typography className={'fz16'} variant={"body1"}>
        {children}
      </Typography>
    </Box>

    {colors.map(color => <>
      <SquareBtn
        key={color}
        onClick={() => onChange(color)}
        height={30}
        width={30}
        stretch>
        <ButtonBody bgColor={color}>
          {value === color && <CheckMarkSvgIcon/>}
        </ButtonBody>
      </SquareBtn>

      <Box width={'11px'}/>
    </>)}

    <SquareBtn height={30} width={30} stretch>
      <ButtonBody bgColor={!!vendor && colors.indexOf(value) === -1 ? value : undefined} bgImage={multicolor}>
        {colors.indexOf(value) === -1 && <CheckMarkSvgIcon/>}

        <input
          onChange={evt => onChange(evt.currentTarget.value)}
          value={value}
          style={{
            height: 30,
            width: 30,
            position: 'absolute',
            top: 0,
            left: 0
          }}
          className={'opacity-0 pointer'} type={"color"}/>
      </ButtonBody>
    </SquareBtn>
  </Grid>
};

Colorizer.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  vendor: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

export default memo(Colorizer);
