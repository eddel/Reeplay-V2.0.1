import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={8}
    viewBox="0 0 10 8"
    fill="none"
    {...props}>
    <Path
      d="M6.71021 6.55974C5.94256 7.45754 4.56814 7.49797 3.74904 6.64684L1.25867 4.05906C0.0553634 2.80869 0.906361 0.724115 2.64095 0.673095L7.46528 0.531193C9.19986 0.480172 10.1719 2.51112 9.04418 3.83006L6.71021 6.55974Z"
      fill="white"
    />
  </Svg>
);
export default SVGComponent;
