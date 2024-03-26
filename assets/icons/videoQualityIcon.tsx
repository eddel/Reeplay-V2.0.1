import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = (props: any) => (
  <Svg
    width={18}
    height={15}
    viewBox="0 0 18 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14.7273 7.5H13.0909V10H10.6364V11.6667H14.7273V7.5ZM4.90909 5H7.36364V3.33333H3.27273V7.5H4.90909V5ZM16.3636 0H1.63636C0.736364 0 0 0.75 0 1.66667V13.3333C0 14.25 0.736364 15 1.63636 15H16.3636C17.2636 15 18 14.25 18 13.3333V1.66667C18 0.75 17.2636 0 16.3636 0ZM16.3636 13.3417H1.63636V1.65833H16.3636V13.3417Z"
      fill="white"
    />
  </Svg>
);
export default SVGComponent;
