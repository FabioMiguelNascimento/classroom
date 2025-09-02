import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingState() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <Skeleton className="h-64 w-[450px]" />
      <Skeleton className="h-64 w-[450px]" />
      <Skeleton className="h-64 w-[450px]" />
      <Skeleton className="h-64 w-[450px]" />
      <Skeleton className="h-64 w-[450px]" />
      <Skeleton className="h-64 w-[450px]" />
      <Skeleton className="h-64 w-[450px]" />
      <Skeleton className="h-64 w-[450px]" />
    </div>
  );
}
