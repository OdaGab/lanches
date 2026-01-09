import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

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
    </div>
  );
};

export default RestaurantPage;
