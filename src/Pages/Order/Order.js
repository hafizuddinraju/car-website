import React, { useEffect, useState } from "react";

const Order = ({ check, handleDetete, handleUpdate }) => {
  const { serviceName, email, price, _id, service_id, status } = check;
  const [serviceImg, setServiceImg] = useState({});

  useEffect(() => {
    fetch(`https://server-car.vercel.app/services/${service_id}`)
      .then((res) => res.json())
      .then((data) => setServiceImg(data.data));
  }, []);

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <a href="#" className="block relative">
              {serviceImg?.img && (
                <img
                  alt="profil"
                  src={serviceImg.img}
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              )}
            </a>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 font-semibold whitespace-no-wrap">
              {serviceName}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{email}</p>
      </td>
      <td className="px-5 py-6 border-b flex items-center border-gray-200 bg-white text-sm">
        {status ? (
          <span
            onClick={() => handleUpdate(_id)}
            className="relative inline-block bg-green-500 rounded-full hover:bg-green-600 px-3 py-1 cursor-pointer font-semibold text-white leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0   opacity-50"
            ></span>
            <span className="relative ">{status ? status : "panding"}</span>
          </span>
        ) : (
          <span
            onClick={() => handleUpdate(_id)}
            className="relative inline-block bg-orange-500 rounded-full hover:bg-orange-600 px-3 py-1 cursor-pointer font-semibold text-white leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0   opacity-50"
            ></span>
            <span className="relative ">{status ? status : "panding"}</span>
          </span>
        )}

        <button
          onClick={() => handleDetete(_id)}
          className="btn btn-square ml-6 btn-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default Order;
