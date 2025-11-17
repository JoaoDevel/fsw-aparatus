import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import Image from "next/image";
import Banner from "../public/banner.png";
import BookingItem from "@/components/BookingItem";

const Home = () => {
  return (
    <main>
      <Header />
      <main className="space-y-4 px-5">
        <SearchInput />
        <Image
          src={Banner}
          alt="Banner barber"
          sizes="100vw"
          className="h-full w-full"
        />
        <h2 className="text-foreground text-sm font-semibold uppercase">
          Agendamentos
        </h2>
        <BookingItem
          serviceName="corte de cabelo"
          barbershopName="Barbearia do João"
          barbershopImageUrl="https://utfs.io/f/f64f1bd4-59ce-4ee3-972d-2399937eeafc-16x.png"
          date={new Date()}
        />
      </main>
    </main>
  );
};

export default Home;
