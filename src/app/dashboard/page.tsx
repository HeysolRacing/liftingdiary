"use client";

import { useState } from "react";
import { format, isSameDay } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Workout = {
  id: string;
  name: string;
  date: Date;
  startedAt: Date;
  completedAt: Date | null;
};

const MOCK_WORKOUTS: Workout[] = [
  {
    id: "1",
    name: "Push Day",
    date: new Date(),
    startedAt: new Date(new Date().setHours(7, 30)),
    completedAt: new Date(new Date().setHours(8, 45)),
  },
  {
    id: "2",
    name: "Leg Day",
    date: new Date(),
    startedAt: new Date(new Date().setHours(17, 0)),
    completedAt: null,
  },
];

export default function DashboardPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [open, setOpen] = useState(false);

  const workoutsForDate = MOCK_WORKOUTS.filter((workout) =>
    isSameDay(workout.date, selectedDate)
  );

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Workout Dashboard</h1>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Workouts for {format(selectedDate, "do MMM yyyy")}
          </h2>
          <div className="flex items-center gap-2">
            <Button>Log New Workout</Button>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger className="inline-flex h-10 items-center justify-start rounded-md border border-input bg-background px-4 py-2 text-left text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {format(selectedDate, "do MMM yyyy")}
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    if (!date) return;
                    setSelectedDate(date);
                    setOpen(false);
                  }}
                  className="rounded-md"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="space-y-4">
          {workoutsForDate.length > 0 ? (
            workoutsForDate.map((workout) => (
              <Card key={workout.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{workout.name}</CardTitle>
                    <span className="text-sm text-muted-foreground">
                      {format(workout.startedAt, "h:mm a")}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {workout.completedAt ? "Completed" : "In Progress"}
                    </span>
                    {workout.completedAt && (
                      <span className="text-sm text-muted-foreground">
                        • Duration:{" "}
                        {Math.round(
                          (workout.completedAt.getTime() -
                            workout.startedAt.getTime()) /
                            (1000 * 60)
                        )}{" "}
                        min
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">
                  No workouts logged for this date
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
