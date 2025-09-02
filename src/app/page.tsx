import ClassCard from "@/components/ClassCard";

export default async function Home() {
  const mockClasses = [
        {
          title: "Mathematics",
          description: "Advanced calculus and algebra",
          weekDay: "Monday" as const,
          students: 25,
          time: {
            startAt: "08:00",
            endAt: "10:00"
          },
          room: {
            number: 101,
            letter: "A"
          },
          assignments: [
            { time: new Date(), tile: "Homework 1" },
            { time: new Date(), tile: "Quiz 1" }
          ]
        },
        {
          title: "Physics",
          description: "Quantum mechanics fundamentals",
          weekDay: "Tuesday" as const,
          students: 20,
          time: {
            startAt: "10:30",
            endAt: "12:30"
          },
          room: {
            number: 205,
            letter: "B"
          }
        },
        {
          title: "Chemistry",
          weekDay: "Wednesday" as const,
          students: 18,
          time: {
            startAt: "14:00",
            endAt: "16:00"
          },
          room: {
            number: 301,
            letter: "C"
          },
          assignments: [
            { time: new Date(), tile: "Lab Report" }
          ]
        },
        {
          title: "Biology",
          description: "Cell biology and genetics",
          weekDay: "Thursday" as const,
          students: 22,
          time: {
            startAt: "09:00",
            endAt: "11:00"
          },
          room: {
            number: 150,
            letter: "D"
          }
        }
      ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {mockClasses.map((classData, index) => (
          <ClassCard key={index} card={classData} />
        ))}
      </div>
    </>
  );
}
