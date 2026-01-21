import React from 'react';

import swimmingImg from '../assets/swimming.png'
import classImg from '../assets/class.png'
import playGroundImg from '../assets/playground.png'

const Qzone = () => {
    return (
      <div className="bg-base-200 p-5 rounded-sm">
        <h1 className="font-semibold  text-primary text-2xl mb-10">Q-Zone</h1>

        <div className='space-y-5'>
          <img className="w-full" src={swimmingImg} alt="Swimming-Image" />
          <img className="w-full" src={classImg} alt="Class-Image" />
          <img className="w-full" src={playGroundImg} alt="Play-Ground-Image" />
        </div>
      </div>
    );
};

export default Qzone;