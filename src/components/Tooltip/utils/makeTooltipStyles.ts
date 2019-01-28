import {TooltipPosition} from '../constants';

const getTopTooltipStyles = ({top, left, width}: ClientRect) => ({
  bottom: window.innerHeight - top + 8 - window.scrollY,
  left: left + width / 2 + window.scrollX,
});

const getRightTooltipStyles = ({top, right, height}: ClientRect) => ({
  top: top + height / 2 + window.scrollY - 18,
  left: right + window.scrollX + 8,
});

const getBottomTooltipStyles = ({top, height, left, width}: ClientRect) => ({
  top: top + height + window.scrollY + 8,
  left: left + width / 2 + window.scrollX,
});

const getLeftTooltipStyles = ({top, height, width, right}: ClientRect) => ({
  top: top + height / 2 + window.scrollY - 18,
  right: window.innerWidth - window.scrollX - right + width,
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
