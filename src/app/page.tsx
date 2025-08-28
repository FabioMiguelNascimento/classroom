import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CardSim } from "lucide-react";

export default function Home() {
  return (
    <>
      <Card>
        <CardHeader>
          <h2>Ola Mundo!</h2>
        </CardHeader>
        <CardContent>
          <span>Sou um card</span>
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>
    </>
  );
}
