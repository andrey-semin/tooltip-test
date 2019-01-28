import React, {Component} from 'react';
import {Tooltip} from './components';

class App extends Component {
  public render() {
    return (
      <div
        style={{
          flex: 1,
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <p>
          Lorem ipsum dolor sit amet,{' '}
          <Tooltip render="tooltip">consectetur adipiscing elit</Tooltip>. Nam
          vel turpis varius, egestas erat vel, pellentesque libero. Phasellus
          quam enim, facilisis sed augue at, faucibus finibus sem. Nam dictum
          dolor urna, id porttitor dolor fermentum id. Vivamus congue interdum
          urna ac varius. Ut nec odio eget justo mollis sodales. Curabitur ac
          enim sit amet massa posuere fermentum ac sed augue. Aliquam eu mattis
          diam, nec{' '}
          <Tooltip
            render={() => (
              <div>
                <p>
                  Nam vel turpis varius, egestas erat vel, pellentesque libero.
                </p>
                <p>
                  Nam vel turpis varius, egestas erat vel, pellentesque libero.
                </p>
                <p>
                  Nam vel turpis varius, egestas erat vel, pellentesque libero.
                </p>
                <p>
                  Nam vel turpis varius, egestas erat vel, pellentesque libero.
                </p>
                <p>
                  Nam vel turpis varius, egestas erat vel, pellentesque libero.
                </p>
                <p>
                  Nam vel turpis varius, egestas erat vel, pellentesque libero.
                </p>
                <p>
                  Nam vel turpis varius, egestas erat vel, pellentesque libero.
                </p>
                <p>
                  Nam vel turpis varius, egestas erat vel, pellentesque libero.
                </p>
                <p>
                  Nam vel turpis varius, egestas erat vel, pellentesque libero.
                </p>
              </div>
            )}
          >
            hendrerit
          </Tooltip>{' '}
          risus.
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </div>
    );
  }
}

export default App;
