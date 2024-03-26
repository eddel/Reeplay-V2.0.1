import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = (props: any) => (
  <Svg
    width={18}
    height={19}
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.72514 0.830078C8.52796 0.830078 8.36004 0.969374 8.32404 1.16246L8.17223 1.97106C8.10923 2.30733 7.84131 2.55514 7.50586 2.62305C7.22686 2.6795 6.95281 2.75123 6.68608 2.83878C6.36208 2.94514 6.00653 2.86561 5.7848 2.60707L5.25266 1.98544C5.12421 1.83653 4.90669 1.80097 4.73651 1.89915L4.26349 2.17241C4.09249 2.27059 4.01587 2.47727 4.08132 2.663L4.35618 3.44123C4.46909 3.76359 4.36134 4.11026 4.10689 4.33771C3.89662 4.5259 3.6966 4.7251 3.50923 4.93537C3.28178 5.18982 2.93511 5.29757 2.61275 5.18466L1.83292 4.9114C1.64719 4.84594 1.44211 4.92339 1.34393 5.09357L1.06907 5.56658C0.97007 5.73758 1.00723 5.95429 1.15696 6.08274L1.77859 6.61488C2.03713 6.83661 2.11666 7.19216 2.0103 7.51616C1.92275 7.78289 1.85102 8.05694 1.79457 8.33594C1.72666 8.67139 1.47885 8.93931 1.14258 9.00231L0.333984 9.15412C0.140075 9.19012 0 9.35804 0 9.55522V10.1049C0 10.3021 0.139295 10.47 0.332386 10.506L1.14098 10.6578C1.47725 10.7208 1.72506 10.9888 1.79297 11.3242C1.84942 11.604 1.92115 11.8773 2.0087 12.144C2.11506 12.468 2.03553 12.8235 1.77699 13.0453L1.15536 13.5774C1.00645 13.7059 0.970888 13.9234 1.06907 14.0936L1.34233 14.5666C1.44051 14.7376 1.64719 14.8142 1.83292 14.7488L2.61115 14.4739C2.93351 14.361 3.28018 14.4687 3.50764 14.7232C3.69582 14.9335 3.89502 15.1335 4.10529 15.3208C4.35975 15.5483 4.46749 15.895 4.35458 16.2173L4.08132 16.9972C4.01587 17.1829 4.09331 17.388 4.26349 17.4862L4.73651 17.761C4.90751 17.86 5.12421 17.8228 5.25266 17.6731L5.7848 17.0515C6.00653 16.7929 6.36208 16.7134 6.68608 16.8198C6.95281 16.9073 7.22686 16.9791 7.50586 17.0355C7.84131 17.1034 8.10923 17.3512 8.17223 17.6875L8.32404 18.4961C8.36004 18.69 8.52796 18.8301 8.72514 18.8301H9.27486C9.47204 18.8301 9.64 18.69 9.67436 18.4977L9.82617 17.6891C9.88917 17.3528 10.1571 17.105 10.4925 17.0371C10.7724 16.9807 11.0456 16.9089 11.3123 16.8214C11.6363 16.715 11.9919 16.7945 12.2136 17.0531L12.7457 17.6747C12.8742 17.8236 13.0901 17.8608 13.2603 17.7626L13.7349 17.4877C13.9059 17.3896 13.9825 17.1845 13.9171 16.9988L13.6438 16.2189C13.5309 15.8966 13.6387 15.5499 13.8931 15.3224C14.1034 15.1343 14.3034 14.9351 14.4908 14.7248C14.7182 14.4703 15.0657 14.3626 15.3873 14.4755L16.1671 14.7488C16.3528 14.8142 16.5579 14.7368 16.6561 14.5666L16.9309 14.0936C17.0299 13.9226 16.9928 13.7059 16.843 13.5774L16.2214 13.0453C15.9629 12.8236 15.8833 12.468 15.9897 12.144C16.0772 11.8773 16.149 11.6032 16.2054 11.3242C16.2733 10.9888 16.5211 10.7208 16.8574 10.6578L17.666 10.506C17.8599 10.47 18 10.3021 18 10.1049V9.55522C18 9.35804 17.8599 9.1909 17.6676 9.15572L16.859 9.00391C16.5227 8.94091 16.2749 8.67139 16.207 8.33594C16.1506 8.05694 16.0788 7.78289 15.9913 7.51616C15.8849 7.19216 15.9645 6.8382 16.223 6.61648L16.8446 6.08434C16.9935 5.95588 17.0307 5.73836 16.9325 5.56818L16.6577 5.09357C16.5595 4.92257 16.3544 4.84594 16.1687 4.9114L15.3889 5.18626C15.0665 5.29917 14.7198 5.19142 14.4924 4.93697C14.3042 4.72669 14.105 4.52667 13.8947 4.33931C13.6403 4.11186 13.5325 3.76519 13.6454 3.44283L13.9187 2.663C13.9841 2.47727 13.9067 2.27219 13.7365 2.17401L13.2635 1.89915C13.0925 1.80015 12.8758 1.83731 12.7473 1.98704L12.2152 2.60866C11.9935 2.86721 11.6379 2.94674 11.3139 2.84038C11.0472 2.75283 10.7731 2.6811 10.4941 2.62464C10.1587 2.55674 9.89077 2.30893 9.82777 1.97266L9.67596 1.16406C9.63996 0.970153 9.47204 0.830078 9.27486 0.830078H8.72514ZM9 4.92099C11.7115 4.92099 13.9091 7.11862 13.9091 9.83008C13.9091 12.5415 11.7115 14.7392 9 14.7392C6.28855 14.7392 4.09091 12.5415 4.09091 9.83008C4.09091 7.11862 6.28855 4.92099 9 4.92099ZM9 8.19371C8.09591 8.19371 7.36364 8.92599 7.36364 9.83008C7.36364 10.7342 8.09591 11.4664 9 11.4664C9.90409 11.4664 10.6364 10.7342 10.6364 9.83008C10.6364 8.92599 9.90409 8.19371 9 8.19371Z"
      fill="white"
    />
  </Svg>
);
export default SVGComponent;