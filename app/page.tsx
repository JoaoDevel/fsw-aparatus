import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import Image from "next/image";
import Banner from "../public/banner.png";
import BookingItem from "@/components/BookingItem";
import { prisma } from "@/lib/prisma";
import BarbershopItem from "@/components/BarbershopItem";

const Home = async () => {
  const recommendedBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "asc", // pega em ordem alfabética
    },
  });

  const popularBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "desc", // pega em ordem alfabética inversa
    },
  });

  return (
    <main>
      <Header />
      <main className="space-y-4 px-5 py-3">
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

        <h2 className="text-foreground text-sm font-semibold uppercase">
          Barbearias
        </h2>
        <div className="flex items-center gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {recommendedBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="text-foreground text-sm font-semibold uppercase">
          Recomendados
        </h2>
        <div className="flex items-center gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </main>
    </main>
  );
};

export default Home;
