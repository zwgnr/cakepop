//import { createRainbowSprinkles, defineProperties } from "rainbow-sprinkles";

import {
  defineProperties,
  createSprinkles,
  ConditionalValue,
  createMapValueFn,
} from '@vanilla-extract/sprinkles';

import { space, pallete } from '../contract/tokens';

export type ResponsiveValue<Value extends string | number | boolean> = ConditionalValue<
  typeof responsiveProperties,
  Value
>;

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
    wide: { '@media': 'screen and (min-width: 1200px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    flexDirection: [],
    alignItems: [],
    justifyContent: [],
    flexWrap: [],
    flexGrow: [],
    gap: space,
    padding: space,
    paddingLeft: space,
    paddingRight: space,
    paddingTop: space,
    paddingBottom: space,
    width: space,
    height: space,
    borderRadius: space,
    fontFamily: space,
    fontSize: space,
    lineHeight: space,
    textAlign: [],
    zIndex: [],
    position: [],
    top: space,
    left: space,
    right: space,
    bottom: space,
    verticalAlign: [],
    margin: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    marginTop: space,
    display: ['block', 'flex', 'inline-block', 'inline-flex'],
  },
  shorthands: {
    direction: ['flexDirection'],
    ai: ['alignItems'],
    justify: ['justifyContent'],
    //wrap: ['flexWrap'],
    grow: ['flexGrow'],
    place: ['alignItems', 'justifyContent'],
    p: ['padding'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    typeSize: ['fontSize', 'lineHeight'],
    m: ['margin'],
    mr: ['marginRight'],
    ml: ['marginLeft'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    x: ['height'],
    y: ['width'],
  },
});

const interactiveProperties = defineProperties({
  conditions: {
    base: {},
    focus: { selector: '&:focus' },
    hover: { selector: '&:hover' },
    hoverStrict: { selector: '&:hover:not(:disabled):not(:focus)' },
  },
  defaultCondition: 'base',
  properties: {
    color: pallete,
    backgroundColor: pallete,
    transform: [],
    transition: [],
    animation: [],
  },
});

export const sprinkles = createSprinkles(responsiveProperties, interactiveProperties);

export type SprinklesTypes = Parameters<typeof sprinkles>[0];
