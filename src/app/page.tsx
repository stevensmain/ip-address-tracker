import Image from "next/image";
import SearchBar from "./search/SearchBar";
import AddressInfo from "./address/AddressInfo";

export default function Component() {
  return (
    <main className="bg-[#f6f8ff] min-h-screen">
      <div className="p-6 pb-24 bg-[#4b6a9b]">
        <h1 className="text-2xl font-bold text-white mb-4 text-center">
          IP Address Tracker
        </h1>

        <SearchBar />
      </div>

      <div className="bg-white shadow-md relative">
        <AddressInfo />

        <div className="h-[500px]">
          <Image
            alt="Map"
            className="w-full h-full object-cover"
            height="500"
            src="/placeholder.svg"
            style={{
              aspectRatio: "1382/500",
              objectFit: "cover",
            }}
            width="1382"
          />
          A
        </div>
      </div>
    </main>
  );
}
