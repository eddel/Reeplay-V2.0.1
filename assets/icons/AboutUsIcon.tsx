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
      d="M8.5 0C3.80545 0 0 3.80545 0 8.5C0 13.1945 3.80545 17 8.5 17C13.1945 17 17 13.1945 17 8.5C17 3.80545 13.1945 0 8.5 0ZM8.5 12.75C8.0308 12.75 7.65 12.3692 7.65 11.9V8.5C7.65 8.0308 8.0308 7.65 8.5 7.65C8.9692 7.65 9.35 8.0308 9.35 8.5V11.9C9.35 12.3692 8.9692 12.75 8.5 12.75ZM8.925 5.95H8.075C7.8404 5.95 7.65 5.7596 7.65 5.525V4.675C7.65 4.4404 7.8404 4.25 8.075 4.25H8.925C9.1596 4.25 9.35 4.4404 9.35 4.675V5.525C9.35 5.7596 9.1596 5.95 8.925 5.95Z"
      fill="white"
    />
  </Svg>
);
export default SVGComponent;
