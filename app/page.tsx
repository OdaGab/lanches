import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Homepage = () => {
  return (
    <div className="p-5 border border-red-500 rounded-xl">
      <h1 className="text-red-500">Odair Gabriel</h1>
      <Button>Click me</Button>
      <br /> <br />
      <Input placeholder="Testando Input" />
    </div>
  );
};

export default Homepage;
