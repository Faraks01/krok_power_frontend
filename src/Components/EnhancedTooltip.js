import React, {memo} from 'react';
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Tooltip from "@material-ui/core/Tooltip";

const EnhancedTooltip = ({children, ...restProps}) => {
  const theme = useTheme();

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return <ClickAwayListener onClickAway={handleTooltipClose}>
    <Tooltip
      PopperProps={{
        disablePortal: true,
      }}
      onClose={handleTooltipClose}
      open={open}
      {...restProps}
    >
      {React.cloneElement(children, {onClick: handleTooltipOpen})}
    </Tooltip>
  </ClickAwayListener>
};

export default memo(EnhancedTooltip);
