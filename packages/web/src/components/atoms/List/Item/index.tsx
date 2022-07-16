import React, { ReactNode } from 'react';

export type ItemProps = {
  last?: boolean;
  children?: ReactNode;
};

const Item: React.FC<ItemProps> = ({ last = false, children = <></> }) => (
  <div className={last ? '' : 'border-b'}>{children}</div>
);

Item.displayName = 'List.Item';
Item.defaultProps = { last: false, children: <></> };

export default Item;
