import * as React from 'react';
import classNames from 'classnames';
import './Logo.css';

interface Props {
  theme?: string;
  animated?: boolean;
}

const Logo: React.SFC<Props> = ({ theme, animated }) => {
  const className = classNames(
    'logo',
    theme ? `logo--${theme}` : null,
    {
      'logo--animated': animated,
    },
  );

  return (
    <div className={className}>
      <span className="logo__prefix" />
      <span className="logo__surname">Louis</span>
    </div>
  )
};

export default Logo;
