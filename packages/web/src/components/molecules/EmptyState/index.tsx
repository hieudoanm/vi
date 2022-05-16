import Button from '@mui/material/Button';
import React from 'react';

export type EmptyStateProps = {
  icon?: string | JSX.Element;
  title?: string;
  description?: string;
  button?: {
    name: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    text: string | JSX.Element;
  };
};

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon = '',
  title = '',
  description = '',
  button = { name: '', text: '', onClick: () => {} },
}) => {
  return (
    <div className="rounded-lg border border-dashed	p-8">
      {icon && <div className="text-center pb-4">{icon}</div>}
      <div className="text-center pb-8">
        <h3 className="font-semibold text-2xl uppercase">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
      <Button type="button" name={button.name} onClick={button.onClick}>
        {button.text}
      </Button>
    </div>
  );
};

EmptyState.displayName = 'EmptyState';
EmptyState.defaultProps = {};

export default EmptyState;
