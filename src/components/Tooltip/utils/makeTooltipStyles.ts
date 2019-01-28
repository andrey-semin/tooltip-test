import {TooltipPosition} from '../constants';

const getTopTooltipStyles = ({top, left, width}: ClientRect) => ({
  bottom: window.innerHeight - top + 8 - window.scrollY,
  left: left + width / 2 + window.scrollX,
});

const getRightTooltipStyles = ({top, right, height}: ClientRect) => ({
  bottom: window.innerHeight - top - height * 2 + 12 - window.scrollY,
  left: right + window.scrollX + 8,
});

const getBottomTooltipStyles = ({top, height, left, width}: ClientRect) => ({
  bottom: window.innerHeight - top - height * 2 - 22 - window.scrollY,
  left: left + width / 2 + window.scrollX,
});

const getLeftTooltipStyles = ({top, height, left, width}: ClientRect) => ({
  bottom: window.innerHeight - top - height * 2 + 10 - window.scrollY,
  left: left - width + window.scrollX - 8,
});

export const makeTooltipStyles = (
  position: TooltipPosition,
  clientRect: ClientRect,
) => {
  switch (position) {
    case TooltipPosition.Top:
      return getTopTooltipStyles(clientRect);
    case TooltipPosition.Right:
      return getRightTooltipStyles(clientRect);
    case TooltipPosition.Bottom:
      return getBottomTooltipStyles(clientRect);
    case TooltipPosition.Left:
      return getLeftTooltipStyles(clientRect);
  }
};
