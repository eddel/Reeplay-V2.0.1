import {ImageSourcePropType} from 'react-native';

export interface HeroSliderDataProps {
  image: any;
  type: string;
  title: string;
  tags: string[];
  colors: string[];
}

export interface LiveSliderDataProps {
  image: any;
  type: string;
  title: string;
  subscription: string;
}

export interface HomeSlideProps {
  image?: ImageSourcePropType;
  videoURL?: string;
  type?: string;
  title: string;
  tags?: string[];
  colors?: string[];
}
export interface LiveSlideProps {
  image: ImageSourcePropType;
  videoURL: string;
  type: string;
  title: string;
  subscription: string;
}
