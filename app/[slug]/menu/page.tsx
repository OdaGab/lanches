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
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  const valid = isConsumptionMethodValid(consumptionMethod);

  return (
    <div>
      Menu page for restaurant {slug}{" "}
      {restaurant?.name ? `- ${restaurant.name}` : ""} - method:{" "}
      {valid ? consumptionMethod : "invalid"}
    </div>
  );
};

export default RestaurantmenuPage;

//http://localhost:3000/fsw-donalds/menu?consumptionMethod=DINE_IN
//http://localhost:3000/fsw-donalds/menu?consumptionMethod=123
