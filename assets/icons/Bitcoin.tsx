import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = (props: any) => (
  <Svg
    width={22}
    height={20}
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.5263 0C4.71263 0 0 4.477 0 10C0 15.523 4.71263 20 10.5263 20C16.34 20 21.0526 15.523 21.0526 10C21.0526 4.477 16.34 0 10.5263 0ZM9.88692 3.12695H11.2541V5.04101C11.6425 5.06001 12.0082 5.1025 12.3314 5.1875C12.7461 5.2965 13.0967 5.46445 13.384 5.68945C13.6714 5.91645 13.8914 6.19901 14.044 6.54101C14.1945 6.88301 14.2701 7.28695 14.2701 7.75195C14.2701 7.97995 14.2456 8.19625 14.1941 8.40625C14.1446 8.61625 14.065 8.81114 13.9576 8.99414C13.8482 9.17714 13.7118 9.34323 13.5444 9.49023C13.3802 9.63823 13.1818 9.76047 12.9523 9.85546C13.2207 9.92846 13.4485 10.0405 13.6349 10.1875C13.8222 10.3355 13.9734 10.5061 14.0892 10.7031C14.205 10.9001 14.2874 11.1127 14.34 11.3437C14.3927 11.5727 14.4202 11.8098 14.4202 12.0508C14.4202 13.0168 14.1404 13.7463 13.5814 14.2383C13.0414 14.7143 12.2625 14.9547 11.2541 14.9707V16.8223H9.88692V14.9766H7.68503V5.02344H9.88692V3.12695ZM9.80057 6.69726V9.18554H10.9025C11.3246 9.18654 11.6358 9.083 11.84 8.875C12.0432 8.668 12.1464 8.36389 12.1464 7.96289C12.1464 7.51189 12.0501 7.18919 11.8585 6.99219C11.667 6.79519 11.3547 6.69726 10.9231 6.69726H9.80057ZM9.80057 10.6484V13.3086H11.1534C11.3597 13.3086 11.5344 13.2769 11.6817 13.2129C11.8281 13.1499 11.9468 13.0574 12.0415 12.9414C12.1342 12.8244 12.204 12.6902 12.2471 12.5352C12.2903 12.3802 12.3108 12.2085 12.3108 12.0215C12.3108 11.5975 12.2305 11.2636 12.0641 11.0176C11.8999 10.7726 11.619 10.6484 11.2253 10.6484H9.80057Z"
      fill="#E5E5E5"
    />
  </Svg>
);
export default SVGComponent;