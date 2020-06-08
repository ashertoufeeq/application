import React from 'react';
import { SessionClock } from 'components/SessionClock';
import { Auth } from 'components/Auth';
import { HelloButton } from './HelloButton';

export const MonorepoIntro = () => (
  <main style={{ padding: 20 }}>
    <h1>Monorepo Introduction</h1>

    <div>
      <h3>Guides</h3>
      Different guides are available in README.
      <br />
      <a href='https://github.com/Faisal-Manzer/react-and-react-native-monorepo'>
        https://github.com/Faisal-Manzer/react-and-react-native-monorepo
      </a>
    </div>

    <HelloButton />
    <SessionClock />
    <Auth />
    <div>
      <h3>
        With Tailwind CSS
      </h3>
      <div className='max-w-sm bg-white shadow-lg rounded-lg overflow-hidden'>
        <div className='sm:flex sm:items-center px-6 py-4'>
          <img
            className='block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full'
            src='https://randomuser.me/api/portraits/women/17.jpg'
            alt="Woman's Face" />
          <div className='mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left'>
            <p className='text-xl leading-tight'>Erin Lindford</p>
            <p className='text-sm leading-tight text-gray-600'>Customer Support Specialist</p>
            <div className='mt-4'>
              <button
                className='text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal'>
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);
