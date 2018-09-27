function getOpacity(opacity: number, hexColor: string) {
  const rgbColor: any = hexToRgb(hexColor);
  return `rgba(${rgbColor.r},${rgbColor.g},${rgbColor.b},${opacity})`;
}

function componentToHex(c: number) {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

function rgbToHex(r: number, g: number, b: number) {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
}

export default {
  getOpacity, componentToHex, rgbToHex, hexToRgb,
};
