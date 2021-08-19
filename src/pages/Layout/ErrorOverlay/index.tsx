import { Typography } from '@material-ui/core';
import { FallbackProps } from 'react-error-boundary';
import { block } from 'utils/classname';
import './style.scss';

const b = block('error-overlay');

const ErrorOverlay = ({ error }: FallbackProps) => {
  return (
    <div className={b()}>
      <Typography variant="h4">Something went wrong!</Typography>
      <Typography color="secondary" variant="subtitle2">
        {error.message}
      </Typography>
    </div>
  );
};

export { ErrorOverlay };
