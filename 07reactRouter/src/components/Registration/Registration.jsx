import React from 'react'

function Registration() {
  return (
    <div>
      <div className="relative flex items-top justify-center h-[700px] bg-white sm:items-center sm:pt-0">
      <div className="p-8 mr-4 bg-gray-100 sm:rounded-lg h-[500px] w-[500px]">
        <h1 className="text-4xl sm:text-5xl text-gray-800 font-extrabold tracking-tight text-center">
        Registration
        </h1>
        <form className="p-8 h-auto flex flex-col justify-center">
          <div className="flex flex-col">
            <label htmlFor="name" className="hidden">
              Full Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Enter username or Mobile Number"
              className=" text-xl w-full mt-4 py-5 px-4 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="hidden">
               email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className=" text-xl w-full mt-4 py-5 px-4 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="tel" className="hidden">
              Password
            </label>
            <input
              type="Password"
              name="Password"
              id="Password"
              placeholder="Enter New Password"
              className="text-xl w-full mt-4 py-5 px-4 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
           
          </div>

          <button
            type="submit"
            className="text-xl w-full bg-orange-700 hover:bg-blue-dark text-white font-bold py-5 px-6 rounded-lg mt-6 hover:bg-orange-600 transition ease-in-out duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Registration
