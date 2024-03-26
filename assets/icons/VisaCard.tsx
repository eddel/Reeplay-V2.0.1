import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = (props: any) => (
  <Svg
    width={33}
    height={22}
    viewBox="0 0 33 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3.3 0C1.47675 0 0 1.23062 0 2.75V19.25C0 20.7694 1.47675 22 3.3 22H29.7C31.5232 22 33 20.7694 33 19.25V2.75C33 1.23062 31.5232 0 29.7 0H3.3ZM20.4413 6.875C21.4643 6.875 22.6585 7.302 22.6585 7.302L22.1461 9.00732C22.1461 9.00732 21.2927 8.43799 20.4413 8.43799C19.2484 8.43799 18.9073 8.86574 18.9073 9.29199C18.9073 10.2861 22.3169 10.4257 22.3169 12.4153C22.3152 14.1175 19.9294 15.2546 18.3949 15.1116C16.6905 15.1116 15.8394 14.6873 15.8394 14.6873L16.181 12.9819C16.181 12.9819 17.2028 13.4089 18.5657 13.4089C19.9286 13.4089 20.0997 12.9805 20.0997 12.6973C20.0997 11.4185 16.6901 11.8454 16.6901 9.28931C16.6901 8.01056 17.8838 6.875 20.4413 6.875ZM9.70342 7.01733H12.0882L8.50781 14.9719H5.95225L4.07666 8.58032C4.07666 8.58032 6.12248 9.57378 7.31543 11.9883C7.31543 12.2729 7.48623 12.7 7.48623 12.7L9.70342 7.01733ZM26.2356 7.01733H28.7912L30.6668 14.9719H28.6204L28.2788 13.8359H25.2108L24.7017 14.9719H22.3137L26.2356 7.01733ZM13.1098 7.15698H15.6653L14.1313 15.1116H11.7466L13.1098 7.15698ZM1.17949 7.15967H4.93066C5.95366 7.15967 6.29385 7.86865 6.29385 7.86865L7.14463 11.4189C6.12163 8.43657 1.17949 7.15967 1.17949 7.15967ZM27.0864 9.43164L25.7232 12.4153H27.7664L27.0864 9.43164Z"
      fill="white"
    />
  </Svg>
);
export default SVGComponent;