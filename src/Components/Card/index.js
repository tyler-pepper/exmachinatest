import styled, { css } from 'styled-components';

import Square from '../../Components/Square';

// Responsive card div.
// Props:
// - order: Used to calculate left spacing for ordering
// - maxCards: Used to make sure left spacing stays within bounds
// - selected: Toggle active style
export default styled(Square)`
  background-color: rgba(245, 245, 220, 1);
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: block;
  font-size: 1.25rem;
  left: ${(props) => props.order * (95 / props.maxCards)}%;
  position: absolute;
  text-transform: uppercase;
  top: 0;
  transition: background 100ms ease-out, color 100ms ease-out, left 250ms ease-out;
  z-index: ${(props) => props.order * 10};

  ${(props) => props.selected && css`
    background-color: ${(props) => props.errorFlag ? 'red' : 'green'};
    color: #fff;
  `};

  & > span {
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
`;
