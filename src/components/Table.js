import React, { useEffect, useState } from "react";

let searchResult = [];
let data = [];
const Table = () => {
  const [Data, setData] = useState(data);
  useEffect(() => {
    const getData = async () =>
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    getData();
    // return setData([])
  }, []);

  const handleInput = (e) => {
    let query = e.target.value;
    searchResult = [...Data];
    searchResult = searchResult.filter((item) => {
      if (
        item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        item.username.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        item.email.toLowerCase().indexOf(query.toLowerCase()) !== -1
      ) {
        return item;
      }
    });
    console.log(searchResult);
    setData(searchResult);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="relative overflow-x-auto p-5">
      <div className="fixed pr-20 pl-10 w-full">
        <form className="">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              onChange={handleInput}
              // value={SearchTerm}
              className=" w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              required
            />
          </div>
        </form>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-20">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {Data.map((item) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={item.id}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.id}
              </th>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.username}</td>
              <td className="px-6 py-4">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
