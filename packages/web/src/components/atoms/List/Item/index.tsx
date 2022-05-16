import React from 'react';

export type ItemProps = {
  last?: boolean;
};

const Item: React.FC<ItemProps> = ({ last, children }) => (
  <div className={last ? '' : 'border-b'}>{children}</div>
);

Item.displayName = 'List.Item';
Item.defaultProps = { last: false };

export default Item;
