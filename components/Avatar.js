import { createElement } from 'react';

function stats(colorHex) {
  const color = parseInt(colorHex.replace('#', ''), 16);
  const r = (color >> 16) & 0xff;
  const g = (color >> 8) & 0xff;
  const b = color & 0xff;
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return {
    dark: luma < 40,
    border: luma > 255 - 10,
  };
}

export default function Avatar({ className, size, color, text }) {
  const { dark, border } = stats(color);
  return createElement('div', {
    className,
    style: {
      width: size || 64,
      height: size || 64,
      backgroundColor: color,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '25%',
      border: border ? '2px solid #000000' : 'none',
      boxSizing: 'border-box',
    },
    children: createElement('p', {
      style: {
        margin: 0,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: size ? size / 1.75 : 32,
        color: dark ? '#ffffff' : '#000000',
      },
      children: text,
    }),
  });
}
