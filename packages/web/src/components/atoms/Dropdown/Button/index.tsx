import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import React from 'react';

export type ButtonProps = { icon?: JSX.Element; title?: string };

const Button: React.FC<ButtonProps> = ({ icon = <></>, title = '' }) => {
  return (
    <div>
      <Menu.Button className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
        {icon}
        {title}
        <ChevronDownIcon className="-mr-1 ml-2 h-4 w-4" aria-hidden="true" />
      </Menu.Button>
    </div>
  );
};

Button.displayName = 'Dropdown.Button';
Button.defaultProps = { icon: <></>, title: '' };

export default Button;
