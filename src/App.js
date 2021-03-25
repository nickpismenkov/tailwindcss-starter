import React from 'react';
import './styles/app.css';

const App = () => {
  return (
    <div className="bg-blue w-full p-8 flex justify-center font-sans">
      <div className="rounded bg-grey-light w-64 p-2">
        <div className="flex justify-between py-1">
          <h3 className="text-sm">New landing page</h3>
          <svg
            className="h-4 fill-current text-grey-dark cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
          </svg>
        </div>
        <div className="text-sm mt-2">
          <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
            Do a mobile first layout
          </div>

          <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
            Check the meta tags
          </div>

          <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
            Check the responsive layout on all devices
            <div className="text-grey-darker mt-2 ml-2 flex justify-between items-start">
              <span className="text-xs flex items-center">
                <svg
                  className="h-4 fill-current mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" />
                </svg>
                3/5
              </span>
              <img
                src="https://i.imgur.com/OZaT7jl.png"
                className="rounded-full"
                alt=""
              />
            </div>
          </div>
          <p className="mt-3 text-grey-dark">Add a card...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
