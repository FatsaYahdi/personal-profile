import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Loader2 className="animate-spin h-12 w-12" />
    </div>
  );
}
