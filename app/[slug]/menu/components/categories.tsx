import { Restaurant } from "@prisma/client";
import Image from "next/image";

interface RestaurantCategoriesProps {
  restaurant: Restaurant;
}

const RestaurantCategories = ({ restaurant }: RestaurantCategoriesProps) => {
  return (
    <div className="-mt-10 relative z-50 rounded-t-3xl border bg-white">
      <div className="flex items-center gap-3 p-5">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          height={45}
          width={45}
        />
        <div>
          <h2 className="text-lg font-semibold">{restaurant.name}</h2>
          <p className="text-muted-foreground text-xs">
            {restaurant.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategories;
