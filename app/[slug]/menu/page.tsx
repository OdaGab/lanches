interface RestaurantmenuPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantmenuPage = async ({ params }: RestaurantmenuPageProps) => {
  const { slug } = await params;
  return <div>{slug}</div>;
};

export default RestaurantmenuPage;
