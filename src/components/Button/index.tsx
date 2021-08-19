import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from 'utils/classes';
import style from './style.module.scss';

type Props = {
  size?: 'small' | 'medium' | 'large';
  children?: any;
  onClick?: (e: any) => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'negative' | 'positive' | 'clear';
  block?: boolean;
  icon?: IconProp;
  isVisible?: boolean;
} & Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'disabled' | 'color'>;

const Button = ({
  size = 'medium',
  children,
  onClick,
  className,
  variant = 'dark',
  block,
  icon,
  isVisible = true,
  ...restProps
}: Props) => {
  return (
    <button
      className={classes(style.button, className, style[variant], {
        [style.small]: size === 'small',
        [style.medium]: size === 'medium',
        [style.large]: size === 'large',
        [style.block]: block,
        [style.hidden]: !isVisible,
      })}
      onClick={onClick}
      {...restProps}
    >
      {icon && <FontAwesomeIcon icon={icon} className={style.icon} />}
      {children}
    </button>
  );
};

export default Button;
