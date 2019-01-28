import React, {Component} from 'react';
import FaBeer from 'react-icons/lib/fa/beer';
import {Tooltip, TooltipPosition} from './components';

class App extends Component {
  public renderSection = (position: TooltipPosition) => (
    <div>
      <h3>{position}</h3>
      <div className="row">
        <div>
          <h5>Plain text</h5>
          <p>
            Lorem ipsum dolor sit amet,{' '}
            <Tooltip
              render={`Inline ${position} tooltip string`}
              position={position}
            >
              consectetur adipiscing elit
            </Tooltip>
            . Nam vel turpis varius, egestas erat vel, pellentesque libero.
            Phasellus quam enim, facilisis sed augue at, faucibus finibus sem.
            Nam dictum dolor urna, id porttitor dolor fermentum id. Vivamus
            congue interdum urna ac varius.
          </p>
        </div>
        <div>
          <h5>Hover over button</h5>
          <p>
            Lorem ipsum dolor sit amet,{' '}
            <Tooltip
              render={() => (
                <div>
                  <p>
                    <span>{position} tooltip render prop</span>{' '}
                    <FaBeer color="#ff9933" /> <FaBeer color="#ff9933" />
                  </p>
                  <p>You can even add custom markup to the tooltip!</p>
                </div>
              )}
              position={position}
            >
              <button>consectetur adipiscing elit</button>
            </Tooltip>
            . Nam vel turpis varius, egestas erat vel, pellentesque libero.
            Phasellus quam enim, facilisis sed augue at, faucibus finibus sem.
            Nam dictum dolor urna, id porttitor dolor fermentum id. Vivamus
            congue interdum urna ac varius.
          </p>
        </div>
        <div>
          <h5>Hover over Icon</h5>
          <p>
            Lorem ipsum dolor sit amet,{' '}
            <Tooltip
              render={() => (
                <div>
                  <img src="https://pictures.tripmasters.com/images/asst/984/amsterdam_-_canal_and_boat_-662518-500.jpg" />
                  <span>{position} tooltip render prop</span>
                </div>
              )}
              position={position}
            >
              <FaBeer color="#ff9933" />
            </Tooltip>
            . Nam vel turpis varius, egestas erat vel, pellentesque libero.
            Phasellus quam enim, facilisis sed augue at, faucibus finibus sem.
            Nam dictum dolor urna, id porttitor dolor fermentum id. Vivamus
            congue interdum urna ac varius.
          </p>
        </div>
      </div>
    </div>
  );

  public render() {
    return (
      <div className="container">
        {this.renderSection(TooltipPosition.Top)}
        {this.renderSection(TooltipPosition.Right)}
        {this.renderSection(TooltipPosition.Bottom)}
        {this.renderSection(TooltipPosition.Left)}
      </div>
    );
  }
}

export default App;
