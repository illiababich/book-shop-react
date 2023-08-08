import React from 'react';
import { BookOpenIcon, PhoneIcon, InformationCircleIcon } from '@heroicons/react/20/solid';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const callsToAction = [
    { name: 'About Us', href: '#', icon: InformationCircleIcon },
    { name: 'Contact Us', href: '#', icon: PhoneIcon },
    { name: 'Privacy Policy', href: '#', icon: BookOpenIcon },
  ];

  return (
    <footer className="bg-gray-900 text-white fixed bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 mt-8 md:grid-cols-3">
          {callsToAction.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2.5 p-3 text-sm font-semibold leading-6 hover:bg-gray-800 rounded-lg"
            >
              <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
