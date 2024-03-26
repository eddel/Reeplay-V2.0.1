import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = (props: any) => (
  <Svg
    width={16}
    height={18}
    viewBox="0 0 16 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M13.5 4.66987C16.8333 6.59437 16.8333 11.4056 13.5 13.3301L7.5 16.7942C4.16666 18.7187 9.75723e-07 16.3131 1.14397e-06 12.4641L1.44681e-06 5.53589C1.61506e-06 1.68689 4.16667 -0.71873 7.5 1.20577L13.5 4.66987Z"
      fill="white"
    />
  </Svg>
);
export default SVGComponent;
