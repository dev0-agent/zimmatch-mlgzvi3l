import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
        ZimMatch
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-[600px]">
        Connecting Zimbabweans, One Dollar at a Time. Find your perfect match today.
      </p>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link to="/discover">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}
