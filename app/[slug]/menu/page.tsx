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

  return (
    <div>
      Menu page for restaurant {slug}{" "}
      {restaurant?.name ? `- ${restaurant.name}` : ""} - method:{" "}
      {consumptionMethod}
    </div>
  );
};

export default RestaurantmenuPage;
