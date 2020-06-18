import React from 'react';
import { useUser } from 'hooks/auth';

export const Auth = () => {

  const { signIn, user, signOut, inProgress, isAuthenticated } = useUser();

  return (
    <div>
      <h3>Google Sign-in</h3>

      {
        inProgress? (
          <>
            Loading...
            <br />
          </>
        ) : null
      }

      {isAuthenticated ? (
        <div>
          Hello
          {' '}
          {user.firstName}
          <br />
          <button type='button' onClick={signOut}>
            Sign-out
          </button>
        </div>
      ) : (
        <button type='button' onClick={signIn}>
          Click to sign-in
        </button>
      )}
    </div>
  );
};
