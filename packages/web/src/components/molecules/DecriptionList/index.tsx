import React from 'react';
import { uuid } from '../../../utils/uuid';
import List from '../../atoms/List';

export type DescriptionItem = {
  term?: string;
  description?: string | number;
};

export type DescriptionListProps = {
  items: DescriptionItem[];
};

const DescriptionList: React.FC<DescriptionListProps> = ({ items = [] }) => {
  return (
    <List className="shadow">
      {items.map((item: DescriptionItem) => {
        const { term = '', description = '' } = item;
        return (
          <List.Item key={`item-${uuid()}`}>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="col-span-1">
                <p className="truncate uppercase">{term}</p>
              </div>
              <div className="col-span-2">
                <p className="truncate underline decoration-dotted cursor-pointer">
                  {description}
                </p>
              </div>
            </div>
          </List.Item>
        );
      })}
    </List>
  );
};

DescriptionList.displayName = 'DescriptionList';
DescriptionList.defaultProps = { items: [] };

export default DescriptionList;
