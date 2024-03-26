import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = (props: any) => (
  <Svg
    width={21}
    height={21}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3.65828 9.34974e-05C3.55036 -0.00132949 3.44325 0.0184941 3.34327 0.058393C3.24329 0.098292 3.15247 0.157457 3.07617 0.232393C2.92474 0.381089 2.83967 0.582745 2.83967 0.79301C2.83967 1.00328 2.92474 1.20493 3.07617 1.35363C3.22764 1.50229 3.43305 1.58581 3.64724 1.58581C3.86142 1.58581 4.06683 1.50229 4.2183 1.35363C4.36973 1.20493 4.45481 1.00328 4.45481 0.79301C4.45481 0.582745 4.36973 0.381089 4.2183 0.232393C4.06957 0.0863124 3.86865 0.00296851 3.65828 9.34974e-05ZM17.3654 9.34974e-05C17.2572 -0.00153749 17.1498 0.0181849 17.0495 0.0580898C16.9493 0.0979947 16.8582 0.157269 16.7817 0.232393C16.6303 0.381089 16.5452 0.582745 16.5452 0.79301C16.5452 1.00328 16.6303 1.20493 16.7817 1.35363C16.9332 1.50229 17.1386 1.58581 17.3528 1.58581C17.5669 1.58581 17.7724 1.50229 17.9238 1.35363C18.0753 1.20493 18.1603 1.00328 18.1603 0.79301C18.1603 0.582745 18.0753 0.381089 17.9238 0.232393C17.7755 0.086683 17.5752 0.00336957 17.3654 9.34974e-05ZM10.5 0.384163C6.48496 0.384163 3.23077 3.57882 3.23077 7.52041C3.23077 11.485 6.46154 13.0708 8.07692 16.2425H12.9231C14.5385 13.0708 17.7692 11.485 17.7692 7.52041C17.7692 3.57882 14.515 0.384163 10.5 0.384163ZM10.5 2.76291V6.7275H13.7308L10.5 12.2779V8.31333H7.26923L10.5 2.76291ZM0.807692 6.7275C0.593479 6.7275 0.388039 6.81104 0.236568 6.95974C0.0850959 7.10844 0 7.31012 0 7.52041C0 7.73071 0.0850959 7.93239 0.236568 8.08109C0.388039 8.22979 0.593479 8.31333 0.807692 8.31333C1.02191 8.31333 1.22735 8.22979 1.37882 8.08109C1.53029 7.93239 1.61538 7.73071 1.61538 7.52041C1.61538 7.31012 1.53029 7.10844 1.37882 6.95974C1.22735 6.81104 1.02191 6.7275 0.807692 6.7275ZM20.1923 6.7275C19.9781 6.7275 19.7727 6.81104 19.6212 6.95974C19.4697 7.10844 19.3846 7.31012 19.3846 7.52041C19.3846 7.73071 19.4697 7.93239 19.6212 8.08109C19.7727 8.22979 19.9781 8.31333 20.1923 8.31333C20.4065 8.31333 20.612 8.22979 20.7634 8.08109C20.9149 7.93239 21 7.73071 21 7.52041C21 7.31012 20.9149 7.10844 20.7634 6.95974C20.612 6.81104 20.4065 6.7275 20.1923 6.7275ZM3.65828 13.4549C3.5501 13.4533 3.44269 13.473 3.34242 13.5129C3.24215 13.5528 3.15108 13.6121 3.07459 13.6872C2.92316 13.8359 2.83809 14.0376 2.83809 14.2478C2.83809 14.4581 2.92316 14.6597 3.07459 14.8084C3.14962 14.8823 3.23875 14.9409 3.33688 14.9808C3.43501 15.0208 3.54021 15.0414 3.64645 15.0414C3.75269 15.0414 3.85788 15.0208 3.95601 14.9808C4.05414 14.9409 4.14327 14.8823 4.2183 14.8084C4.36973 14.6597 4.45481 14.4581 4.45481 14.2478C4.45481 14.0376 4.36973 13.8359 4.2183 13.6872C4.06957 13.5411 3.86865 13.4578 3.65828 13.4549ZM17.3638 13.4564C17.256 13.4548 17.149 13.4744 17.049 13.514C16.949 13.5537 16.8581 13.6125 16.7817 13.6872C16.7065 13.7609 16.6468 13.8484 16.6061 13.9447C16.5654 14.041 16.5444 14.1443 16.5444 14.2486C16.5444 14.3529 16.5654 14.4562 16.6061 14.5525C16.6468 14.6488 16.7065 14.7363 16.7817 14.81C16.9332 14.9586 17.1386 15.0422 17.3528 15.0422C17.5669 15.0422 17.7724 14.9586 17.9238 14.81C17.999 14.7363 18.0587 14.6488 18.0994 14.5525C18.1402 14.4562 18.1611 14.3529 18.1611 14.2486C18.1611 14.1443 18.1402 14.041 18.0994 13.9447C18.0587 13.8484 17.999 13.7609 17.9238 13.6872C17.7748 13.5417 17.574 13.4589 17.3638 13.4564ZM8.07692 17.8283V18.6213C8.07692 19.4974 8.79981 20.2071 9.69231 20.2071C9.69231 20.4174 9.7774 20.6191 9.92887 20.7678C10.0803 20.9165 10.2858 21 10.5 21C10.7142 21 10.9197 20.9165 11.0711 20.7678C11.2226 20.6191 11.3077 20.4174 11.3077 20.2071C12.2002 20.2071 12.9231 19.4974 12.9231 18.6213V17.8283H8.07692Z"
      fill="white"
    />
  </Svg>
);
export default SVGComponent;
