import React from 'react';
import { SessionClock } from 'components/SessionClock';
import { Auth } from 'components/Auth';
import { Tailwind } from 'components/Tailwind';
import { PushNotification } from 'components/PushNotification';
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
    <PushNotification />
    <Tailwind />
  </main>
);
