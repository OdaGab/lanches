import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Homepage = () => {
  return (
    <div className="rounded-xl border border-red-500 p-5">
      <h1 className="text-red-500">Odair Gabriel</h1>
      <Button>Click me</Button>
      <br /> <br />
      <Input placeholder="Testando Input" />
    </div>
  );
};

export default Homepage;
