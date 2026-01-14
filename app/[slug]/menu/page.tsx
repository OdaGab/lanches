import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

interface RestaurantmenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod?: string }>;
}

const isConsumptionMethodValid = (consumptionMethod?: string) => {
  return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod ?? "");
};

const RestaurantmenuPage = async ({
  params,
  searchParams,
}: RestaurantmenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;

  if (!isConsumptionMethodValid(consumptionMethod)) {
    return notFound();
  }

  const restaurant = await db.restaurant.findUnique({ where: { slug } });

  if (!restaurant) {
    return notFound();
  }

  return (
    <div>
      <div>
        <div className="relative h-[250px] w-full">
          <Image
            src={restaurant.coverImageUrl}
            alt={restaurant.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantmenuPage;
