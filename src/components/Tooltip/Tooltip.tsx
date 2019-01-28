import * as React from 'react';
import ReactDOM from 'react-dom';
import styles from './Tooltip.module.css';
import {TOOLTIP_CONTAINER_ID} from './constants';

export class Tooltip extends React.Component<any, any> {
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

  public getTooltipStyles = (sourceRef: HTMLSpanElement) => {
    const {top, left, width} = sourceRef.getBoundingClientRect();

    const tooltipStyles = {
      bottom: window.innerHeight - top + 8 - window.scrollY,
      left: left + width / 2 + window.scrollX,
    };

    return tooltipStyles;
  };

  public renderTooltip = () => {
    const {sourceRef, active} = this.state;

    if (active && sourceRef) {
      const tooltipStyles = this.getTooltipStyles(sourceRef);

      return ReactDOM.createPortal(
        <div className={styles.tooltip} style={tooltipStyles}>
          <div className={styles.tooltipContainer}>
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
