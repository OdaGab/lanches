import { Restaurant } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";

interface RestaurantCategoriesProps {
  restaurant: Restaurant;
}

const RestaurantCategories = ({ restaurant }: RestaurantCategoriesProps) => {
  return (
    <div className="relative z-50 -mt-10 rounded-t-3xl border bg-white p-5">
      <div className="flex items-center gap-3">
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
      <div className="flex items-center gap-3">
        {/* Conteúdo adicional aqui */}
      </div>
      <div className="mt-3 flex items-center gap-1 text-xs">
        <ClockIcon size={12} />
        <p>Aberto!</p>
      </div>
    </div>
  );
};

export default RestaurantCategories;
