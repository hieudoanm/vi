import { Menu } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';

export type ItemProps = { href?: string; icon?: JSX.Element; text?: string };

const Item: React.FC<ItemProps> = ({ href = '', icon = <></>, text = '' }) => {
  return (
    <div>
      <Menu.Item>
        {({ active }) => (
          <Link href={href} passHref>
            <div className="flex items-center p-4 gap-2 cursor-pointer">
              {icon}
              <div
                className={
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                }
              >
                {text}
              </div>
            </div>
          </Link>
        )}
      </Menu.Item>
    </div>
  );
};

Item.displayName = 'Dropdown.Item';
Item.defaultProps = { href: '', icon: <></>, text: '' };

export default Item;
