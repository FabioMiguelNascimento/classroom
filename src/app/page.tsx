import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default async function Home() {
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
