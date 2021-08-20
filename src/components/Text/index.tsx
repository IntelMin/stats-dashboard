import React from 'react';

import { block, classnames } from 'utils/classname';

import './style.scss';

const b = block('text')

type Tag = Extract<keyof React.ReactHTML, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span'>;

type Typography =
  | 'heading-xl'
  | 'heading-l'
  | 'heading-s'
  | 'text-s'
  | 'text-m'
  | 'text-l'
  | 'label-m'
;

type Color = 'primary' | 'secondary' | 'error' | 'link';

type Weight = 'normal' | 'bold';

type Align = 'left' | 'center' | 'right';

type Props = {
  typography?: Typography;
  color?: Color;
  as?: Tag;
  className?: string;
  weight?: Weight;
  align?: Align;
}

const  Text = (props: React.PropsWithChildren<Props>) => {
  const {
    className,
    as = 'div',
    typography = 'text-m',
    color = 'primary',
    weight = 'normal',
    align = 'left',
    children
  } = props;

  return (
    React.createElement(as, {
      className: classnames(
        className,
        b({ typography, color, weight, align }),
      )
    }, children)
  );
}

const Component = React.memo(Text);

export { Component as Text }
