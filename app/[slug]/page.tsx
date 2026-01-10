import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { db } from "@/lib/prisma";

import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}
const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;

  const restaurant = await db.restaurant.findUnique({ where: { slug } });

  if (!restaurant) {
    return notFound;
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt="Logo"
          width={100}
          height={100}
        />
        <h2>{restaurant.name}</h2>
      </div>
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-center font-bold">Bem-vindo!</h3>
        <p className="opacity-70">
          Explore nosso menu e faça seu pedido online.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-14">
        <ConsumptionMethodOption
          slug={slug}
          imageUrl="/dine_in.png"
          imageAlt="Para comer aqui!"
          buttonText="Para comer aqui!"
          option="DINE_IN"
        />

        <ConsumptionMethodOption
          slug={slug}
          imageUrl="/takeaway.png"
          imageAlt="Para levar!"
          buttonText="Para levar!"
          option="TAKEAWAY"
        />
      </div>
    </div>
  );
};

export default RestaurantPage;
