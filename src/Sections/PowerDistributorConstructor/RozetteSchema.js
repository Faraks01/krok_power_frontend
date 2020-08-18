import PropTypes from 'prop-types'
import React, {memo} from 'react';
import {BodyShapes} from "./ConstructorVariables";
import PowerDistributor3Svg from "../../SvgComponents/PowerDistributor3Svg";
import PowerDistributor5Svg from "../../SvgComponents/PowerDistributor5Svg";
import PowerDistributor7Svg from "../../SvgComponents/PowerDistributor7Svg";
import PowerDistributor9Svg from "../../SvgComponents/PowerDistributor9Svg";
import PowerDistributor12Svg from "../../SvgComponents/PowerDistributor12Svg";
import SquarePowerDistributor4Svg from "../../SvgComponents/SquarePowerDistributor4Svg";
import SquarePowerDistributor9Svg from "../../SvgComponents/SquarePowerDistributor9Svg";

const RozetteSchema = ({bodyShape, amountOfRosettes}) => {

  switch (bodyShape) {
    case BodyShapes.rectangle: {
      switch (amountOfRosettes) {
        case 3:
          return <PowerDistributor3Svg/>
        case 5:
          return <PowerDistributor5Svg/>
        case 7:
          return <PowerDistributor7Svg/>
        case 9:
          return <PowerDistributor9Svg/>
        case 12:
          return <PowerDistributor12Svg/>
        default:
          return <PowerDistributor9Svg/>
      }
    }

    case BodyShapes.square: {
      switch (amountOfRosettes) {
        case 4:
          return <SquarePowerDistributor4Svg/>
        case 9:
          return <SquarePowerDistributor9Svg/>
        default:
          return <SquarePowerDistributor4Svg/>
      }
    }

    default:
      return null
  }

};

RozetteSchema.propTypes = {
  amountOfRosettes: PropTypes.number.isRequired,
  bodyShape: PropTypes.number.isRequired
}

export default memo(RozetteSchema);