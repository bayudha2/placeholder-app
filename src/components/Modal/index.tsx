import React from 'react';

const Modal = () => {
  return (
    <div
      className="absolute top-0 left-0 z-10 h-screen w-screen "
      style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
      <div className="absolute top-1/2 left-1/2 z-20 h-[36%] w-[34%] -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white">
        <p>form</p>
      </div>
    </div>
  );
};

export default Modal;
