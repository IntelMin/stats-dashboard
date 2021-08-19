import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MUITooltip from '@material-ui/core/Tooltip';
import { TooltipProps } from '@material-ui/core/Tooltip/Tooltip';

type Props = {
  children: React.ReactNode;
  fontSize?: string;
} & Omit<TooltipProps, 'children'>;

const Tooltip = withStyles(() => ({
  tooltip: {
    fontSize: '16px',
    fontWeight: 'normal',
  },
}))(MUITooltip);

const NumberTooltip: React.FC<Props> = (props) => {
  const { children, fontSize = '16px', ...restProps } = props;
  return (
    <Tooltip placement="left" arrow {...restProps}>
      <div>
        {children}
      </div>
    </Tooltip>
  );
};

export const Component = React.memo(NumberTooltip);
export type { Props as TooltipProps };
