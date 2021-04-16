export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };
import { ViewProps } from 'react-native';
import {
  AccessoryProps,
  AirbnbRatingProps,
  AvatarProps,
  BadgeProps,
  BottomSheetProps,
  ButtonGroupProps,
  ButtonProps,
  CardProps,
  CheckBoxProps,
  DividerProps,
  DividerProps,
  HeaderProps,
  IconProps,
  ImageProps,
  InputProps,
  ListItemProps,
  OverlayProps,
  PricingCardProps,
  RatingProps,
  SearchBarProps,
  SliderProps,
  SocialIconProps,
  TextProps,
  TextProps,
  TileProps,
  TooltipProps
} from 'react-native-elements';
import { Colors } from 'react-native-elements/dist/config/colors';


declare module 'react-native-elements' {
  export interface Palette {
    common: {
      white: string;
      black: string;
      transparent: string;
    };
  };

  export interface FullTheme {
    palette?: RecursivePartial<Palette>;
    Avatar?: Partial<AvatarProps>;
    Accessory?: Partial<AccessoryProps>;
    Badge?: Partial<BadgeProps>;
    BottomSheet?: Partial<BottomSheetProps>;
    Button?: Partial<ButtonProps>;
    ButtonGroup?: Partial<ButtonGroupProps>;
    Card?: Partial<CardProps>;
    CardDivider?: Partial<DividerProps>;
    CardFeaturedSubtitle?: Partial<TextProps>;
    CardFeaturedTitle?: Partial<TextProps>;
    CardImage?: Partial<ImageProps>;
    CardTitle?: Partial<TextProps>;
    CheckBox?: Partial<CheckBoxProps>;
    Divider?: Partial<DividerProps>;
    Header?: Partial<HeaderProps>;
    Icon?: Partial<IconProps>;
    Image?: Partial<ImageProps>;
    Input?: Partial<InputProps>;
    ListItem?: Partial<ListItemProps>;
    ListItemButtonGroup?: Partial<ButtonGroupProps>;
    ListItemCheckBox?: Partial<CheckBoxProps>;
    ListItemContent?: Partial<ViewProps>;
    ListItemChevron?: Partial<IconProps>;
    ListItemInput?: Partial<InputProps>;
    ListItemSubtitle?: Partial<TextProps>;
    ListItemTitle?: Partial<TextProps>;
    Overlay?: Partial<OverlayProps>;
    PricingCard?: Partial<PricingCardProps>;
    Rating?: Partial<RatingProps>;
    AirbnbRating?: Partial<AirbnbRatingProps>;
    SearchBar?: Partial<SearchBarProps>;
    Slider?: Partial<SliderProps>;
    SocialIcon?: Partial<SocialIconProps>;
    Text?: Partial<TextProps>;
    Tile?: Partial<TileProps>;
    Tooltip?: Partial<TooltipProps>;
    colors?: RecursivePartial<Colors>;
  };
};