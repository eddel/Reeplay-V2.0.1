import * as React from 'react';
import Svg, {Rect, Defs, Pattern, Use, Image} from 'react-native-svg';
const SVGComponent = (props: any) => (
  <Svg
    width={86}
    height={64}
    viewBox="0 0 86 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Rect width={85.6774} height={64} fill="url(#pattern0)" />
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use
          xlinkHref="#image0_2735_964"
          transform="matrix(0.00145896 0 0 0.00195312 0.126506 0)"
        />
      </Pattern>
      <Image
        id="image0_2735_964"
        width={512}
        height={512}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default SVGComponent;