import React from 'react';
import Item from './Item';

export type ListProps = {
  className?: string;
};

const List: React.FC<ListProps> = ({ className = '', children }) => {
  return (
    <div className={`overflow-hidden rounded-lg border ${className}`}>
      {children}
    </div>
  );
};

List.displayName = 'List';
List.defaultProps = { className: '' };

export default Object.assign(List, { Item });
