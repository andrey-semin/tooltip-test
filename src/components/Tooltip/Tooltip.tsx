import * as React from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import styles from './Tooltip.module.css';
import {TOOLTIP_CONTAINER_ID, TooltipPosition} from './constants';
import {makeTooltipStyles} from './utils';

type TooltipRenderProp = () => React.ReactNode;
interface ITooltipProps {
  children: React.ReactNode;
  render: string | TooltipRenderProp;
  position?: TooltipPosition;
}

interface ITooltipState {
  sourceRef: HTMLSpanElement | null;
  active: boolean;
}

export class Tooltip extends React.Component<ITooltipProps, ITooltipState> {
  public static defaultProps = {
    position: TooltipPosition.Top,
  };
  private tooltipWrapper: any = null;

  constructor(props: any) {
    super(props);

    this.tooltipWrapper = document.querySelector(`#${TOOLTIP_CONTAINER_ID}`);
    if (!this.tooltipWrapper) {
      this.createTooltipContainer();
    }

    this.state = {
      sourceRef: null,
      active: false,
    };
  }

  public createTooltipContainer = () => {
    this.tooltipWrapper = document.createElement('div');
    this.tooltipWrapper.setAttribute('id', TOOLTIP_CONTAINER_ID);
    document.body.appendChild(this.tooltipWrapper);
  };

  public showTooltip = () => {
    this.setState({
      active: true,
    });
  };

  public hideTooltip = () => {
    this.setState({
      active: false,
    });
  };

  public renderTooltipContent = () => {
    const {render} = this.props;

    if (typeof render === 'string') {
      return render;
    }

    return render();
  };

  public getTooltipContainerClassName = () => {
    const {position} = this.props;
    return cn(styles.tooltipContainerBasic, {
      [styles.tooltipContainerTop]: position === TooltipPosition.Top,
      [styles.tooltipContainerRight]: position === TooltipPosition.Right,
      [styles.tooltipContainerBottom]: position === TooltipPosition.Bottom,
      [styles.tooltipContainerLeft]: position === TooltipPosition.Left,
    });
  };

  public renderTooltip = () => {
    const {sourceRef, active} = this.state;
    const {position = TooltipPosition.Top} = this.props;

    if (active && sourceRef) {
      const tooltipStyles = makeTooltipStyles(
        position,
        sourceRef.getBoundingClientRect(),
      );

      return ReactDOM.createPortal(
        <div className={styles.tooltip} style={tooltipStyles}>
          <div className={this.getTooltipContainerClassName()}>
            {this.renderTooltipContent()}
          </div>
        </div>,
        this.tooltipWrapper,
      );
    }

    return null;
  };

  public render() {
    const {children} = this.props;

    const source = (
      <span
        className={styles.root}
        ref={this.setContentRef}
        onMouseEnter={this.showTooltip}
        onMouseLeave={this.hideTooltip}
        key="tooltip-container"
      >
        {children}
      </span>
    );
    return [source, this.renderTooltip()];
  }

  private setContentRef = (sourceRef: any) => this.setState({sourceRef});
}
