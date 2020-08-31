import React, {memo} from 'react';
import {BodyShapes} from "./ConstructorVariables";
import PowerDistributor3Svg from "../../SvgComponents/PowerDistributor3Svg";
import PowerDistributor5Svg from "../../SvgComponents/PowerDistributor5Svg";
import PowerDistributor7Svg from "../../SvgComponents/PowerDistributor7Svg";
import PowerDistributor9Svg from "../../SvgComponents/PowerDistributor9Svg";
import PowerDistributor12Svg from "../../SvgComponents/PowerDistributor12Svg";
import SquarePowerDistributor4Svg from "../../SvgComponents/SquarePowerDistributor4Svg";
import SquarePowerDistributor9Svg from "../../SvgComponents/SquarePowerDistributor9Svg";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useSelector} from "react-redux";
import FeedbackFormReducer from "../../store/reducers/FeedbackForm";

const RozetteSchema = () => {

  const amountOfRosettes = useSelector(s => s[FeedbackFormReducer.reducerName].amount_of_rosette);
  const bodyShape = useSelector(s => s[FeedbackFormReducer.reducerName].body_shape);

  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  switch (bodyShape) {
    case BodyShapes.rectangle: {
      switch (amountOfRosettes) {
        case 3:
          return <PowerDistributor3Svg width={!mdUp ? 300 : undefined}/>
        case 5:
          return <PowerDistributor5Svg width={!mdUp ? 300 : undefined}/>
        case 7:
          return <PowerDistributor7Svg width={!mdUp ? 300 : undefined}/>
        case 9:
          return <PowerDistributor9Svg width={!mdUp ? 300 : undefined}/>
        case 12:
          return <PowerDistributor12Svg width={!mdUp ? 300 : undefined}/>
        default:
          return <PowerDistributor9Svg width={!mdUp ? 300 : undefined}/>
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
      return <PowerDistributor9Svg width={!mdUp ? 300 : undefined}/>;
  }

};

export default memo(RozetteSchema);
