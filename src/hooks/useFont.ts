import * as Font from 'expo-font';

const customFonts = {
  'open-sans-light': require('assets/fonts/open-sans/OpenSans-Light.ttf'),
  'open-sans-regular': require('assets/fonts/open-sans/OpenSans-Regular.ttf'),
  'open-sans-semi-bold': require('assets/fonts/open-sans/OpenSans-SemiBold.ttf'),
  'open-sans-bold': require('assets/fonts/open-sans/OpenSans-Bold.ttf'),
  'open-sans-extra-bold': require('assets/fonts/open-sans/OpenSans-ExtraBold.ttf'),
};

const useFont = () => {
  return Font.useFonts(customFonts);
};

export default useFont;