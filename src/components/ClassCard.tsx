import { Clock, Pin, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

enum WeekDays {
  SUNDAY = "Sunday",
  MONDAY = "Monday",
  TUESDAY = "Tuesday",
  WEDNESDAY = "Wednesday",
  THURSDAY = "Thursday",
  FRIDAY = "Friday",
  SATURDAY = "Saturday",
}

interface ClassAssignment {
  time: Date;
  tile: string;
}

interface ClassCardProps {
  title: string;
  description?: string;
  assignments?: ClassAssignment[];
  weekDay: WeekDays;
  students: number;
  time: {
    startAt: string;
    endAt: string;
  };
  room: {
    number: number;
    letter: string;
  };
}

export default function ClassCard({ key, card }: { key: number, card: ClassCardProps }) {
  return (
    <Card className="h-64 flex flex-col cursor-pointer">
      <CardHeader>
        <CardTitle>{card.title}</CardTitle>
        {card.description && (
          <CardDescription>{card.description}</CardDescription>
        )}
      </CardHeader>
      {card.assignments && (
        <CardContent className="flex gap-2 flex-col">
          {card.assignments.slice(0,2).map((card) => (
            <span>
              {card.tile} - {card.tile}
            </span>
          ))}
        </CardContent>
      )}
      <CardFooter className="flex gap-3 mt-auto flex-wrap text-xs">
        <div className="flex-center gap-2 whitespace-nowrap">
          <Users size={12}/>
          {card.students} Students
        </div>
        <div className="flex-center gap-2 flex-center whitespace-nowrap">
          {card.weekDay}
          <Clock size={12}/>
          <div>
            {card.time.startAt} - {card.time.endAt}
          </div>
        </div>
        <div className="flex-center gap-2 whitespace-nowrap">
          <Pin size={12}/>
          {card.room.number} {card.room.letter}
        </div>
      </CardFooter>
    </Card>
  );
}
