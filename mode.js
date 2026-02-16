import { useState } from "react";

export function Show() {
  let [Show, ShowSet] = useState(false);
  function Set() {
    ShowSet(!Show);
  }
  return (
    <div className="w-96 shadow-gray-900  mx-2 shadow-lg rounded-lg m-4 p-3">
      <h1 className="text-green-500 font-extrabold ">Click Bottom</h1>
      <div>
        <button
          className="p-2 bg-green-900 text-white rounded-lg hover:bg-green-400 m-2"
          onClick={Set}
        >
          Show Details
        </button>
        {Show && (
          <p className="text-gray-500 dark">
            this paragraph is showing some yhing which is hide
          </p>
        )}
      </div>
    </div>
  );
}
