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
    <div className="h-screenflex-col flex items-center justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt="Logo"
          width={100}
          height={100}
        />
        <h2>{restaurant.name}</h2>
      </div>
    </div>
  );
};

export default RestaurantPage;
