import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = (props: any) => (
  <Svg
    width={10}
    height={10}
    viewBox="0 0 9 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3.7014 0.923145C4.00075 0.00183439 5.30416 0.00183439 5.60351 0.923145L5.92269 1.90547C6.05657 2.3175 6.44052 2.59646 6.87375 2.59646H7.90663C8.87535 2.59646 9.27813 3.83607 8.49442 4.40547L7.6588 5.01259C7.30831 5.26723 7.16165 5.7186 7.29553 6.13062L7.6147 7.11295C7.91406 8.03426 6.85958 8.80038 6.07586 8.23098L5.24024 7.62387C4.88976 7.36923 4.41516 7.36923 4.06467 7.62387L3.22905 8.23098C2.44534 8.80038 1.39086 8.03426 1.69021 7.11295L2.00939 6.13062C2.14326 5.7186 1.99661 5.26723 1.64612 5.01259L0.810501 4.40547C0.0267873 3.83607 0.429563 2.59646 1.39829 2.59646H2.43117C2.86439 2.59646 3.24835 2.3175 3.38222 1.90547L3.7014 0.923145Z"
      fill="#FFCC00"
    />
  </Svg>
);
export default SVGComponent;
