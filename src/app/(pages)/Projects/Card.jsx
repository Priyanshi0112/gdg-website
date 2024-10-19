import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

function Card(props) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl m-4 bg-gray-300 flex flex-col justify-between">
      {/* Card background set to light gray */}

      {/* Image Section */}
      <div className="relative h-44 w-full">
        <Image
          src={props.image}
          alt={props.title}
          className="rounded-t-lg w-full object-cover"
          layout="fill"
        />
      </div>

      {/* Content Section */}
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-2xl text-gray-800 mb-3">{props.title}</div>
        <p className="text-gray-700 text-sm leading-relaxed">{props.description}</p>
      </div>

      {/* Action Button Section: Centered and Positioned at the Bottom */}
      <div className="px-6 py-4 flex justify-center">
        <a
          href={props.link}
          className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600 transition duration-300 transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="inline-block mr-2" />
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default Card;
