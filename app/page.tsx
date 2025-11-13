import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import Image from "next/image";
import Banner from "../public/banner.png";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="space-y-4 px-5">
        <SearchInput />
        <Image
          src={Banner}
          alt="Banner barber"
          sizes="100vw"
          className="h-full w-full"
        />
      </main>
    </div>
  );
};

export default Home;
