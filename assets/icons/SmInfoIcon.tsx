import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = (props: any) => (
  <Svg
    width={10}
    height={10}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7.33333 11.3334H8.66667V7.33337H7.33333V11.3334ZM8 6.00004C8.18889 6.00004 8.34733 5.93604 8.47534 5.80804C8.60333 5.68004 8.66711 5.52182 8.66667 5.33337C8.66667 5.14448 8.60267 4.98604 8.47467 4.85804C8.34667 4.73004 8.18845 4.66626 8 4.66671C7.81111 4.66671 7.65267 4.73071 7.52467 4.85871C7.39667 4.98671 7.33289 5.14493 7.33333 5.33337C7.33333 5.52226 7.39734 5.68071 7.52533 5.80871C7.65334 5.93671 7.81156 6.00048 8 6.00004ZM8 14.6667C7.07778 14.6667 6.21111 14.4916 5.4 14.1414C4.58889 13.7912 3.88334 13.3163 3.28334 12.7167C2.68334 12.1167 2.20845 11.4111 1.85867 10.6C1.50889 9.78893 1.33378 8.92226 1.33334 8.00004C1.33334 7.07782 1.50845 6.21115 1.85867 5.40004C2.20889 4.58893 2.68378 3.88337 3.28334 3.28337C3.88334 2.68337 4.58889 2.20849 5.4 1.85871C6.21111 1.50893 7.07778 1.33382 8 1.33337C8.92222 1.33337 9.78889 1.50849 10.6 1.85871C11.4111 2.20893 12.1167 2.68382 12.7167 3.28337C13.3167 3.88337 13.7918 4.58893 14.142 5.40004C14.4922 6.21115 14.6671 7.07782 14.6667 8.00004C14.6667 8.92226 14.4916 9.78893 14.1413 10.6C13.7911 11.4111 13.3162 12.1167 12.7167 12.7167C12.1167 13.3167 11.4111 13.7918 10.6 14.142C9.78889 14.4923 8.92222 14.6671 8 14.6667ZM8 13.3334C9.48889 13.3334 10.75 12.8167 11.7833 11.7834C12.8167 10.75 13.3333 9.48893 13.3333 8.00004C13.3333 6.51115 12.8167 5.25004 11.7833 4.21671C10.75 3.18337 9.48889 2.66671 8 2.66671C6.51111 2.66671 5.25 3.18337 4.21667 4.21671C3.18334 5.25004 2.66667 6.51115 2.66667 8.00004C2.66667 9.48893 3.18334 10.75 4.21667 11.7834C5.25 12.8167 6.51111 13.3334 8 13.3334Z"
      fill="white"
    />
  </Svg>
);
export default SVGComponent;