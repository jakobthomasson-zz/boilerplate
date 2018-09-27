import { colorHelpers } from 'helpers';

export const spacing = {
  xxsmall: '1px',
  xsmall: '2px',
  small: '4px',
  medium: '8px',
  large: '16px',
  xlarge: '32px',
};

const fontsize_base = '1em';
const fontsize_scale = 1.2;

export const fontsize = {
  xsmall: `calc(${fontsize_base} / ${Math.pow(fontsize_scale, 2)} )`,
  small: `calc(${fontsize_base} / ${fontsize_scale} )`,
  medium: `calc(${fontsize_base} * ${fontsize_scale} )`,
  large: `calc(${fontsize_base} * ${Math.pow(fontsize_scale, 2)} )`,
  xlarge: `calc(${fontsize_base} / ${Math.pow(fontsize_scale, 3)} )`,
  xxlarge: `calc(${fontsize_base} / ${Math.pow(fontsize_scale, 4)} )`,
  xxxlarge: `calc(${fontsize_base} / ${Math.pow(fontsize_scale, 5)} )`,
};

// // font.google.com
export const font = {
};
// export const font = {
//   SansSerif: "'Noto Serif KR', sans-serif",
//   Serif: "'Montserrat', sans-serif",
// };

const boxShadowColor: string = '#000000';
// // https://material.io/color/#!/?view.left=1&view.right=0&primary.color=BF360C&secondary.color=827717
export const color = {
  primary: '#bf360c',
  primary_light: '#f9683a',
  primary_dark: '#870000',
  primary_text: '#ffffff',
  secondary: '#827412',
  secondary_light: '#b4a243',
  secondary_dark: '#524900',
  secondary_text: '#ffffff',
  background_primary: '#F5F5F6',
  background_secondary: '#E1E2E1',
  text: boxShadowColor,
  box_shadow: colorHelpers.getOpacity(0.5, boxShadowColor),
  text_secondary: '#a0a0a0',
};

// export const border = {
//   site_content: `${fibonacing._1} solid ${color.box_shadow}`,
//   primary: `${fibonacing._2} solid ${color.text}`,
//   search_meta: `1px solid ${color.secondary}`,
//   search_result: `${fibonacing._3} dotted ${color.box_shadow}`,
//   search_seperator: `${fibonacing._1} solid ${color.box_shadow}`,

// };

// export const boxShadow = {
//   site_content: `${fibonacing._0} ${fibonacing._0} ${fibonacing._8} ${fibonacing._1} ${color.box_shadow}`,
//   input: `inset ${fibonacing._0} ${fibonacing._0} ${fibonacing._8} ${fibonacing._1} ${color.box_shadow}`,
//   search_wrapper: `${fibonacing._0} ${fibonacing._3} ${fibonacing._3} -${fibonacing._3} ${color.box_shadow}`,
// };
// /*
// box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color];

//   1 -  The horizontal offset (required),
//      of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.

//   2 -  The vertical offset (required) of the shadow, a negative one means the box-shadow will be above the box, a positive one means the shadow will be below the box.

//   3 -  The blur radius (required)
//      If set to 0 the shadow will be sharp, the higher the number, the more blurred it will be, and the further out the shadow will extend.
//      For instance a shadow with 5px of horizontal offset that also has a 5px blur radius will be 10px of total shadow.

//   4 -  The spread radius (optional), positive values increase the size of the shadow, negative values decrease the size.
//      Default is 0 (the shadow is same size as blur).

//   5 -  Color (required) -
//      takes any color value, like hex, named, rgba or hsla. If the color value is omitted, box shadows are drawn in the foreground color (text color).
//      But be aware, older WebKit browsers (pre Chrome 20 and Safari 6) ignore the rule when color is omitted.
//      Using a semi-transparent color like rgba(0, 0, 0, 0.4) is most common, and a nice effect, as it doesn't completely/opaquely cover what it's over,
//      but allows what's underneath to show through a bit, like a real shadow.
// */
