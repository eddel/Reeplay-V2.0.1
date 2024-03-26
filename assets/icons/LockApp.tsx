import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = (props: any) => (
  <Svg
    width={17}
    height={17}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M17 4.02632L13.4211 7.60526V4.47368C13.4211 3.98158 13.0184 3.57895 12.5263 3.57895H6.99684L17 13.5821V4.02632ZM1.13632 0L0 1.13632L2.44263 3.57895H1.78947C1.29737 3.57895 0.894737 3.98158 0.894737 4.47368V13.4211C0.894737 13.9132 1.29737 14.3158 1.78947 14.3158H12.5263C12.7142 14.3158 12.8753 14.2442 13.0095 14.1547L15.8637 17L17 15.8637L1.13632 0Z"
      fill="white"
    />
  </Svg>
);
export default SVGComponent;
