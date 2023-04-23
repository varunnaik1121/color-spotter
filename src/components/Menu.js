import React from 'react';
import scoreIcon from '../assets/points.png';
import account from '../assets/account.png';
import { MdOutlineAccountCircle } from 'react-icons/md';
const Menu = () => {
  const list = [
    {
      name: 'profile',
      path: '/profile',
      image: account,
    },
    {
      name: 'score',
      path: '/score',
      image: scoreIcon,
    },
  ];
  return (
    <div className="   absolute top-10  right-4 bg-[rgb(49,46,43)]  flex flex-col items-start justify-between w-[160px] pb-1">
      {list.map((item, i) => (
        <div
          className="flex justify-start  items-center w-full hover:bg-[rgb(39,37,34)] mt-2 px-3 "
          key={i}
        >
          <img
            src={item.image && item.image}
            className="w-6 h-6 object-cover "
          />
          <a href={item.path} className="mx-3">
            <li
              key={i}
              className="text-[#ffffff] list-none text-sm  py-2  capitalize font-[400] "
            >
              {item.name}
            </li>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Menu;
