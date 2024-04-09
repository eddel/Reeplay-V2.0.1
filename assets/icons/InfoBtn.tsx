import * as React from 'react';
import Svg, {Rect, Path, G, Defs, ClipPath} from 'react-native-svg';
const SVGComponent = (props: any) => (
  <Svg
    width={33}
    height={13}
    viewBox="0 0 33 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect width={33} height={13} fill="#FF1313" />
    <Path
      d="M14.8174 4.02344V9H13.7954V4.02344H14.8174ZM16.6802 6.09131V9H15.6958V5.30176H16.6187L16.6802 6.09131ZM16.5366 7.021H16.27C16.27 6.74756 16.3053 6.50146 16.376 6.28271C16.4466 6.06169 16.5457 5.8737 16.6733 5.71875C16.8009 5.56152 16.9525 5.44189 17.1279 5.35986C17.3057 5.27555 17.5039 5.2334 17.7227 5.2334C17.8958 5.2334 18.0542 5.25846 18.1978 5.30859C18.3413 5.35872 18.4644 5.43848 18.5669 5.54785C18.6717 5.65723 18.7515 5.80192 18.8062 5.98193C18.8631 6.16195 18.8916 6.38184 18.8916 6.6416V9H17.9004V6.63818C17.9004 6.47412 17.8776 6.34652 17.832 6.25537C17.7865 6.16423 17.7192 6.10042 17.6304 6.06396C17.5438 6.02523 17.4367 6.00586 17.3091 6.00586C17.1769 6.00586 17.0618 6.03206 16.9639 6.08447C16.8682 6.13688 16.7884 6.2098 16.7246 6.30322C16.6631 6.39437 16.6164 6.50146 16.5845 6.62451C16.5526 6.74756 16.5366 6.87972 16.5366 7.021ZM20.8945 9H19.9033V4.97363C19.9033 4.69336 19.958 4.45752 20.0674 4.26611C20.179 4.07243 20.3351 3.9266 20.5356 3.82861C20.7384 3.72835 20.9788 3.67822 21.2568 3.67822C21.348 3.67822 21.4357 3.68506 21.52 3.69873C21.6043 3.71012 21.6864 3.72493 21.7661 3.74316L21.7559 4.48486C21.7126 4.47347 21.667 4.46549 21.6191 4.46094C21.5713 4.45638 21.5155 4.4541 21.4517 4.4541C21.3332 4.4541 21.2318 4.47461 21.1475 4.51562C21.0654 4.55436 21.0028 4.61247 20.9595 4.68994C20.9162 4.76742 20.8945 4.86198 20.8945 4.97363V9ZM21.6328 5.30176V5.99902H19.353V5.30176H21.6328ZM21.9917 7.18848V7.1167C21.9917 6.84554 22.0304 6.59603 22.1079 6.36816C22.1854 6.13802 22.2982 5.93864 22.4463 5.77002C22.5944 5.6014 22.7767 5.47038 22.9932 5.37695C23.2096 5.28125 23.458 5.2334 23.7383 5.2334C24.0186 5.2334 24.2681 5.28125 24.4868 5.37695C24.7056 5.47038 24.889 5.6014 25.0371 5.77002C25.1875 5.93864 25.3014 6.13802 25.3789 6.36816C25.4564 6.59603 25.4951 6.84554 25.4951 7.1167V7.18848C25.4951 7.45736 25.4564 7.70687 25.3789 7.93701C25.3014 8.16488 25.1875 8.36426 25.0371 8.53516C24.889 8.70378 24.7067 8.8348 24.4902 8.92822C24.2738 9.02165 24.0254 9.06836 23.7451 9.06836C23.4648 9.06836 23.2153 9.02165 22.9966 8.92822C22.7801 8.8348 22.5967 8.70378 22.4463 8.53516C22.2982 8.36426 22.1854 8.16488 22.1079 7.93701C22.0304 7.70687 21.9917 7.45736 21.9917 7.18848ZM22.9761 7.1167V7.18848C22.9761 7.34342 22.9897 7.48812 23.0171 7.62256C23.0444 7.757 23.0877 7.87549 23.147 7.97803C23.2085 8.07829 23.2882 8.1569 23.3862 8.21387C23.4842 8.27083 23.6038 8.29932 23.7451 8.29932C23.8818 8.29932 23.9992 8.27083 24.0972 8.21387C24.1951 8.1569 24.2738 8.07829 24.333 7.97803C24.3923 7.87549 24.4355 7.757 24.4629 7.62256C24.4925 7.48812 24.5073 7.34342 24.5073 7.18848V7.1167C24.5073 6.96631 24.4925 6.82503 24.4629 6.69287C24.4355 6.55843 24.3911 6.43994 24.3296 6.3374C24.2703 6.23258 24.1917 6.15055 24.0938 6.09131C23.9958 6.03206 23.8773 6.00244 23.7383 6.00244C23.5993 6.00244 23.4808 6.03206 23.3828 6.09131C23.2871 6.15055 23.2085 6.23258 23.147 6.3374C23.0877 6.43994 23.0444 6.55843 23.0171 6.69287C22.9897 6.82503 22.9761 6.96631 22.9761 7.1167Z"
      fill="white"
    />
    <G clipPath="url(#clip0_2625_918)">
      <Path
        d="M7.20834 7.95837H7.79167V6.20837H7.20834V7.95837ZM7.5 5.62504C7.58264 5.62504 7.65196 5.59704 7.70796 5.54104C7.76396 5.48504 7.79186 5.41582 7.79167 5.33337C7.79167 5.25074 7.76367 5.18142 7.70767 5.12542C7.65167 5.06942 7.58245 5.04151 7.5 5.04171C7.41736 5.04171 7.34804 5.06971 7.29204 5.12571C7.23604 5.18171 7.20814 5.25093 7.20834 5.33337C7.20834 5.41601 7.23634 5.48533 7.29234 5.54133C7.34834 5.59733 7.41756 5.62524 7.5 5.62504ZM7.5 9.41671C7.09653 9.41671 6.71736 9.3401 6.3625 9.18687C6.00764 9.03365 5.69896 8.82589 5.43646 8.56358C5.17396 8.30108 4.9662 7.9924 4.81317 7.63754C4.66014 7.28268 4.58353 6.90351 4.58334 6.50004C4.58334 6.09657 4.65995 5.7174 4.81317 5.36254C4.96639 5.00768 5.17416 4.699 5.43646 4.4365C5.69896 4.174 6.00764 3.96624 6.3625 3.81321C6.71736 3.66018 7.09653 3.58357 7.5 3.58337C7.90347 3.58337 8.28264 3.65999 8.6375 3.81321C8.99236 3.96643 9.30104 4.17419 9.56354 4.4365C9.82604 4.699 10.0339 5.00768 10.1871 5.36254C10.3403 5.7174 10.4169 6.09657 10.4167 6.50004C10.4167 6.90351 10.3401 7.28268 10.1868 7.63754C10.0336 7.9924 9.82585 8.30108 9.56354 8.56358C9.30104 8.82608 8.99236 9.03394 8.6375 9.18717C8.28264 9.34039 7.90347 9.4169 7.5 9.41671ZM7.5 8.83337C8.15139 8.83337 8.70313 8.60733 9.15521 8.15525C9.60729 7.70317 9.83334 7.15143 9.83334 6.50004C9.83334 5.84865 9.60729 5.29692 9.15521 4.84483C8.70313 4.39275 8.15139 4.16671 7.5 4.16671C6.84861 4.16671 6.29688 4.39275 5.84479 4.84483C5.39271 5.29692 5.16667 5.84865 5.16667 6.50004C5.16667 7.15143 5.39271 7.70317 5.84479 8.15525C6.29688 8.60733 6.84861 8.83337 7.5 8.83337Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_2625_918">
        <Rect width={7} height={7} fill="white" transform="translate(4 3)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;