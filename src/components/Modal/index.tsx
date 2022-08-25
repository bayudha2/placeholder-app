import React, { useRef, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';
import { toggleModal } from 'src/helper/helperSlice';

const Modal = () => {
  const titleRef = useRef<HTMLInputElement>();
  const bodyRef = useRef<HTMLInputElement>();

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.helper.data);

  useEffect(() => {
    titleRef.current.value = data.title;
    bodyRef.current.value = data.body;
  }, []);

  function handleSubmit(event: React.MouseEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleClose() {
    dispatch(toggleModal({}));
  }
  return (
    <div
      className="fixed top-0 left-0 z-10 h-screen w-screen "
      style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
      <div className="absolute top-1/2 left-1/2 z-20 h-auto w-[34%] -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white">
        <div className="flex items-center p-4">
          <h1 className="px-4 text-2xl font-bold">Edit Post</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-4 flex items-center gap-4 px-8">
            <label htmlFor="title" className="mb-1 w-20 text-sm font-semibold text-gray-600">
              Title
            </label>
            <input
              className={`h-[45px] p-2 w-full rounded-xl border border-solid text-sm placeholder-gray-400 outline-none focus:border-emerald-500 focus:outline-none focus:ring-0`}
              placeholder="Enter post title…"
              id="title"
              ref={titleRef}
              name="title"
              type="title"
            />
          </div>
          <div className="mt-4 flex items-center gap-4 px-8">
            <label htmlFor="body" className="mb-1 w-20 text-sm font-semibold text-gray-600">
              Body
            </label>
            <input
              className={`h-[45px] p-2 w-full rounded-xl border border-solid text-sm placeholder-gray-400 outline-none focus:border-emerald-500 focus:outline-none focus:ring-0`}
              placeholder="Enter post body…"
              id="body"
              ref={bodyRef}
              name="body"
              type="body"
            />
          </div>
          <div className="mt-4 flex items-center justify-end rounded-b-lg bg-gray-100 px-6 py-5">
            <div className="flex items-center gap-4">
              <button type="button" onClick={handleClose} className="text-sm text-gray-500">
                Cancel
              </button>
              <button
                // disabled={!(isValid && dirty)}
                type="submit"
                className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-md disabled:pointer-events-none disabled:cursor-not-allowed">
                {/* {loadingUpdate || loadingAdd ? 'Saving...' : data ? 'Save Changes' : 'Save User'} */}
                Save Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;