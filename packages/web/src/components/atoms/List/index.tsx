import React, { ReactNode } from 'react';
import Item from './Item';

export type ListProps = {
  className?: string;
  children?: ReactNode;
};

const List: React.FC<ListProps> = ({ className = '', children = <></> }) => {
  return (
    <div className={`overflow-hidden rounded-lg border ${className}`}>
      {children}
    </div>
  );
};

List.displayName = 'List';
List.defaultProps = { className: '', children: <></> };

export default Object.assign(List, { Item });
