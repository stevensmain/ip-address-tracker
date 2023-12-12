"use client";
import useAddressStore from "../store/addressStore";

export default function AddressInfo() {
  const address = useAddressStore((state) => state.address);

  return (
    <div className="absolute left-2/4 -translate-x-2/4 -top-16 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col items-center border-r-2 px-6">
          <span className="text-sm font-semibold text-gray-500 ">
            IP ADDRESS
          </span>
          <span className="text-lg font-bold">{address?.ip}</span>
        </div>

        <div className="flex flex-col items-center border-r-2 px-6">
          <span className="text-sm font-semibold text-gray-500">LOCATION</span>
          <span className="text-lg font-bold">
            {address?.city} - {address?.region}
          </span>
        </div>
        <div className="flex flex-col items-center border-r-2 px-6">
          <span className="text-sm font-semibold text-gray-500">TIMEZONE</span>
          <span className="text-lg font-bold">{address?.timezone}</span>
        </div>
        <div className="flex flex-col items-center  px-6">
          <span className="text-sm font-semibold text-gray-500">ISP</span>
          <span className="text-lg font-bold">{address?.org}</span>
        </div>
      </div>
    </div>
  );
}
