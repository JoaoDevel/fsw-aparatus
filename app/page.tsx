import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import Image from "next/image";
import Banner from "../public/banner.png";
import BookingItem from "@/components/BookingItem";
import { prisma } from "@/lib/prisma";
import BarbershopItem from "@/components/BarbershopItem";
import Footer from "@/components/Footer";
import {
  PageContainer,
  PageSection,
  PageSectionTitle,
  PageSectonScroller,
} from "@/components/ui/page";

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
      <PageContainer>
        <SearchInput />
        <Image
          src={Banner}
          alt="Banner barber"
          sizes="100vw"
          className="h-full w-full"
        />

        <PageSection>
          <PageSectionTitle>Agendamentos</PageSectionTitle>
          <BookingItem
            serviceName="corte de cabelo"
            barbershopName="Barbearia do João"
            barbershopImageUrl="https://utfs.io/f/f64f1bd4-59ce-4ee3-972d-2399937eeafc-16x.png"
            date={new Date()}
          />
        </PageSection>

        {/* Composition Pattern */}
        <PageSection>
          <h2 className="text-foreground text-sm font-semibold uppercase">
            Barbearias
          </h2>
          <PageSectonScroller>
            {recommendedBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectonScroller>
        </PageSection>

        {/* Composition Pattern */}
        <PageSection>
          <PageSectionTitle>Recomendados</PageSectionTitle>
          <PageSectonScroller>
            {popularBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectonScroller>
        </PageSection>
      </PageContainer>
      <Footer />
    </main>
  );
};

export default Home;
