import React, { PureComponent } from 'react';

import { Wrapper } from './Reward.theme';

import Dance1 from './img/dance1.gif';
import Dance2 from './img/dance2.gif';
import Dance3 from './img/dance3.gif';

class Reward extends PureComponent {
  render() {
    const dancing = [Dance1, Dance2, Dance3];
    return (
      <Wrapper>
        <div>
          <div>
            <p>Solve 'Ex Machina' anagrams to reveal.</p>
            <img src={dancing[Math.floor(Math.random() * dancing.length)]} alt="Dance!" />
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Reward;