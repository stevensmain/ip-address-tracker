"use client";
import { useState } from "react";
import Button from "../ui/Button";
import ChevronRightIcon from "../ui/icons/CheveronRight";
import useAddressStore from "../store/addressStore";

function SearchBar() {
  const [inputIp, setInputIp] = useState("");
  const setAddress = useAddressStore((state) => state.setAddress);

  async function searchIp() {
    const DOMAIN = process.env.NEXT_PUBLIC_IP_API_URL;
    const TOKEN = process.env.NEXT_PUBLIC_IP_TOKEN;
    const ipAddress = inputIp.trim();

    const response = await fetch(`${DOMAIN}?token=${TOKEN}`);
    const data = await response.json();

    setAddress(data);
  }

  return (
    <div className="flex justify-between items-center max-w-md mx-auto bg-white rounded-lg overflow-hidden">
      <input
        type="text"
        className="flex-grow p-4 focus-visible:outline-none"
        placeholder="Search for any IP address or domain"
        onChange={(e) => setInputIp(e.target.value)}
      />

      <Button className="bg-[#000000]  text-white p-4" onClick={searchIp}>
        <ChevronRightIcon className="w-6 h-6" />
      </Button>
    </div>
  );
}

export default SearchBar;
