import Link from 'next/link';
import React from 'react';

export type MenuProps = {
  active: string;
  links: { href: string; text: string }[];
};

const Menu: React.FC<MenuProps> = ({ active = '', links = [] }) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {links.map((link: { href: string; text: string }, index: number) => {
          const { href, text } = link;
          const last = links.length - 1 === index;
          const border = last
            ? ''
            : 'border-b border-r-0 md:border-b-0 md:border-r';
          const activeClass =
            active === text ? 'bg-black text-white font-semibold' : '';
          return (
            <div key={`link-${href}`} className={`${border} ${activeClass}`}>
              <Link href={href} passHref>
                <div className="text-center py-2 uppercase cursor-pointer">
                  {text}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Menu.displayName = 'Menu';
Menu.defaultProps = {};

export default Menu;
