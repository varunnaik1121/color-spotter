import React from 'react';
import image from '../assets/Under Constructions_Outline.png';
const Profile = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={image} className="w-[350px] h-[350px]" />
      <h2 className="text-[rgb(127,166,80)]">Page Under Construction</h2>
    </div>
  );
};

export default Profile;
