export enum variantOrder {
  'first',
  'last',
  'odd',
  'even',
  'visited',
  'checked',
  'group-hover',
  'group-focus',
  'focus-within',
  'hover',
  'focus',
  'focus-visible',
  'active',
  'disabled',
}

export const layerOrder: { [ key:string ] : number } = {
  'base': 10,
  'components': 150,
  'shortcuts': 160,
  'utilities': 50000,
};

export const pluginOrder: { [ key:string ] : number } = {
  'container': 100,
  'space': 200,
  'divideWidth': 300,
  'divideColor': 400,
  'divideStyle': 500,
  'divideOpacity': 600,
  'accessibility': 700,
  'appearance': 800,
  'backgroundAttachment': 900,
  'backgroundClip': 1000,
  'backgroundColor': 1100,
  'backgroundImage': 1200,
  'gradientColorStops': 1300,
  'backgroundOpacity': 1400,
  'backgroundPosition': 1500,
  'backgroundRepeat': 1600,
  'backgroundSize': 1700,
  'backgroundOrigin': 1750,
  'borderCollapse': 1800,
  'borderColor': 1900,
  'borderOpacity': 2000,
  'borderRadius': 2100,
  'borderStyle': 2200,
  'borderWidth': 2300,
  'boxDecorationBreak': 2350,
  'boxSizing': 2400,
  'cursor': 2500,
  'captionSide': 2550,
  'display': 2600,
  'flexDirection': 2700,
  'flexWrap': 2800,
  'placeItems': 2900,
  'placeContent': 3000,
  'placeSelf': 3100,
  'alignItems': 3200,
  'alignContent': 3300,
  'alignSelf': 3400,
  'justifyItems': 3500,
  'justifyContent': 3600,
  'justifySelf': 3700,
  'flex': 3800,
  'flexGrow': 3900,
  'flexShrink': 4000,
  'order': 4100,
  'float': 4200,
  'clear': 4300,
  'fontFamily': 4400,
  'fontWeight': 4500,
  'height': 4600,
  'fontSize': 4700,
  'lineHeight': 4800,
  'listStylePosition': 4900,
  'listStyleType': 5000,
  'margin': 5100,
  'maxHeight': 5200,
  'maxWidth': 5300,
  'minHeight': 5400,
  'minWidth': 5500,
  'objectFit': 5600,
  'objectPosition': 5700,
  'opacity': 5800,
  'outline': 5900,
  'overflow': 6000,
  'overscrollBehavior': 6100,
  'padding': 6200,
  'placeholderColor': 6300,
  'placeholderOpacity': 6400,
  'caretColor': 6450,
  'caretOpacity': 6460,
  'tabSize': 6470,
  'pointerEvents': 6500,
  'position': 6600,
  'inset': 6700,
  'resize': 6800,
  'boxShadow': 6900,
  'boxShadowColor': 6950,
  'ringWidth': 7000,
  'ringOffsetColor': 7100,
  'ringOffsetWidth': 7200,
  'ringColor': 7300,
  'ringOpacity': 7400,
  'fill': 7500,
  'stroke': 7600,
  'strokeWidth': 7700,
  'tableLayout': 7800,
  'textAlign': 7900,
  'textColor': 8000,
  'textOpacity': 8100,
  'textOverflow': 8200,
  'fontStyle': 8300,
  'textTransform': 8400,
  'textDecorationStyle': 8450,
  'textDecorationLength': 8455,
  'textDecorationColor': 8460,
  'textDecorationOpacity': 8470,
  'textDecoration': 8500,
  'textIndent': 8550,
  'fontSmoothing': 8600,
  'fontVariantNumeric': 8700,
  'letterSpacing': 8800,
  'userSelect': 8900,
  'verticalAlign': 9000,
  'visibility': 9100,
  'backfaceVisibility': 9150,
  'whitespace': 9200,
  'wordBreak': 9300,
  'hyphens': 9350,
  'width': 9400,
  'zIndex': 9500,
  'isolation': 9550,
  'gap': 9600,
  'gridAutoFlow': 9700,
  'gridTemplateColumns': 9800,
  'gridAutoColumns': 9900,
  'gridColumn': 10000,
  'gridColumnStart': 10100,
  'gridColumnEnd': 10200,
  'gridTemplateRows': 10300,
  'gridAutoRows': 10400,
  'gridRow': 10500,
  'gridRowStart': 10600,
  'gridRowEnd': 10700,
  'transform': 10800,
  'transformOrigin': 10900,
  'scale': 11000,
  'rotate': 11100,
  'translate': 11200,
  'skew': 11300,
  'transitionProperty': 11400,
  'transitionTimingFunction': 11500,
  'transitionDuration': 11600,
  'transitionDelay': 11700,
  'keyframes': 11800,
  'animation': 11900,
  'imageRendering': 11950,
  'mixBlendMode': 12000,
  'backgroundBlendMode': 12100,
  'filter': 12200,
  'blur': 12300,
  'brightness': 12400,
  'contrast': 12500,
  'dropShadow': 12600,
  'grayscale': 12700,
  'hueRotate': 12800,
  'invert': 12900,
  'saturate': 13000,
  'sepia': 13100,
  'backdropFilter': 13200,
  'backdropBlur': 13300,
  'backdropBrightness': 13400,
  'backdropContrast': 13500,
  'backdropGrayscale': 13600,
  'backdropHueRotate': 13700,
  'backdropInvert': 13800,
  'backdropOpacity': 13900,
  'backdropSaturate': 14000,
  'backdropSepia': 14100,
};

export const keyOrder: { [key: string]: number } = {
  container: 201,
  space: 202,
  divide: 203,
  bg: 204,
  from: 205,
  via: 206,
  to: 207,
  border: 208,
  rounded: 209,
  cursor: 210,
  flex: 211,
  order: 212,
  font: 213,
  h: 214,
  list: 215,
  m: 216,
  my: 217,
  mx: 218,
  mt: 219,
  mr: 220,
  mb: 221,
  ml: 222,
  min: 223,
  max: 224,
  object: 225,
  opacity: 226,
  outline: 227,
  p: 228,
  py: 229,
  px: 230,
  pt: 231,
  pr: 232,
  pb: 233,
  pl: 234,
  placeholder: 235,
  inset: 236,
  top: 237,
  right: 238,
  bottom: 239,
  left: 240,
  shadow: 241,
  ring: 242,
  fill: 243,
  stroke: 244,
  text: 245,
  leading: 246,
  tracking: 247,
  w: 248,
  z: 249,
  gap: 250,
  auto: 251,
  grid: 252,
  col: 253,
  row: 254,
  transform: 255,
  origin: 256,
  scale: 257,
  rotate: 258,
  translate: 259,
  skew: 260,
  transition: 261,
  ease: 262,
  duration: 263,
  delay: 264,
  animate: 265,
};
