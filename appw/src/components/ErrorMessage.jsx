import React from 'react';

const ErrorMessage = ({ error }) => {
  return (
    <div className="text-red-500 text-xl mt-4">
      {error && <p>{error}</p>}
    </div>
  );
};

export default ErrorMessage;
