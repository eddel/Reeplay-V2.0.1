import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const EyeIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={11}
    viewBox="0 0 13 11"
    fill="none"
    {...props}>
    <Circle cx={6.59749} cy={6.834} r={3.5005} fill="white" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.1854 5.33372C12.7392 5.33372 13.1517 4.81734 12.9464 4.30294C11.9405 1.78164 9.47643 0 6.59625 0C3.71665 0 1.25301 1.78091 0.246671 4.3014C0.0409928 4.81654 0.454083 5.33372 1.00877 5.33372C1.39037 5.33372 1.72027 5.08047 1.87567 4.73194C2.68099 2.92572 4.49225 1.66668 6.59757 1.66668C8.70324 1.66668 10.5148 2.92614 11.3199 4.73284C11.475 5.08086 11.8044 5.33372 12.1854 5.33372Z"
      fill="white"
    />
  </Svg>
);
export default EyeIcon;
