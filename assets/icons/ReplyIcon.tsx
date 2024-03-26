import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = (props: any) => (
  <Svg
    width={10}
    height={12}
    viewBox="0 0 10 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 0C3.67392 0 2.40215 0.526785 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5C0 6.32608 0.526784 7.59785 1.46447 8.53553C2.40215 9.47322 3.67392 10 5 10V11.3889C5 11.6006 5.22899 11.7359 5.41233 11.6298C6.48975 11.006 9.33837 8.94853 9.89692 6.00586L9.9056 5.95595C9.92984 5.82156 9.95321 5.68705 9.96745 5.54905C9.98836 5.36677 9.99923 5.18347 10 5C10 3.67392 9.47322 2.40215 8.53553 1.46447C7.59785 0.526785 6.32608 0 5 0ZM6.72223 5.55562C6.99837 5.55562 7.22223 5.77948 7.22223 6.05562V6.16673C7.22223 6.44287 6.99837 6.66673 6.72223 6.66673H3.27779C3.00165 6.66673 2.77779 6.44287 2.77779 6.16673V6.05562C2.77779 5.77948 3.00165 5.55562 3.27779 5.55562H6.72223ZM7.22223 3.83347C7.22223 3.55732 6.99837 3.33347 6.72223 3.33347H3.27779C3.00165 3.33347 2.77779 3.55732 2.77779 3.83347V3.94458C2.77779 4.22072 3.00165 4.44458 3.27779 4.44458H6.72223C6.99837 4.44458 7.22223 4.22072 7.22223 3.94458V3.83347Z"
      fill="#FFCC00"
    />
  </Svg>
);
export default SVGComponent;
