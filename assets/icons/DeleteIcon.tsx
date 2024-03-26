import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
const SVGComponent = (props: any) => (
  <Svg
    width={9}
    height={10}
    viewBox="0 0 9 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.10494 9.99956H2.42356C1.78876 9.99956 1.31556 9.55374 1.26848 9.01229L0.644153 1.84606C0.629167 1.67395 0.809425 1.53223 1.01132 1.53223H7.51732C7.71921 1.53223 7.89947 1.67428 7.88448 1.84606L7.26015 9.01229C7.21307 9.55325 6.73916 9.99956 6.10494 9.99956ZM3.08154 8.80929C2.93874 8.81672 2.81376 8.70589 2.80387 8.56268L2.45127 3.45704C2.44137 3.314 2.55023 3.19077 2.69302 3.18318C2.83582 3.17574 2.9608 3.28658 2.97069 3.42979L3.32329 8.53542C3.33319 8.67847 3.22433 8.80169 3.08154 8.80929ZM4.24975 8.81457C4.10668 8.81457 3.98962 8.69713 3.98962 8.55376V3.43887C3.98962 3.29533 4.10668 3.17806 4.24975 3.17806C4.39283 3.17806 4.50989 3.2955 4.50989 3.43887V8.55376C4.50989 8.6973 4.39283 8.81457 4.24975 8.81457ZM5.41797 8.80929C5.56077 8.81672 5.68575 8.70589 5.69564 8.56268L6.0481 3.45704C6.058 3.314 5.94928 3.19077 5.80634 3.18318C5.66355 3.17558 5.53857 3.28658 5.52867 3.42979L5.17621 8.53542C5.16632 8.67847 5.27504 8.80169 5.41797 8.80929Z"
      fill="#E5E5E5"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.63726 1.89227H3.00584V0.912936C3.00584 0.700683 3.15457 0.526916 3.33624 0.526916H5.19538C5.37706 0.526916 5.52579 0.700683 5.52579 0.912936V1.89227H5.89436C5.93961 1.89227 5.97665 1.849 5.97665 1.79614V0.946137C5.97665 0.425828 5.61217 0 5.16683 0H3.36466C2.91932 0 2.55484 0.425828 2.55484 0.946137V1.79614C2.55484 1.849 2.59188 1.89227 2.63712 1.89227H2.63726Z"
      fill="#E5E5E5"
    />
    <Rect
      x={8.49924}
      y={1.25}
      width={0.608318}
      height={8.49973}
      rx={0.304159}
      transform="rotate(90 8.49924 1.25)"
      fill="#E5E5E5"
    />
  </Svg>
);
export default SVGComponent;