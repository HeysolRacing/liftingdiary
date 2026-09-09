import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserWorkouts } from "@/data/user-workouts";
import DashboardClient from "./dashboard-client";

interface DashboardPageProps {
  searchParams: Promise<{ date?: string }>;
}

export default async function DashboardPage({ searchParams }: DashboardPageProps) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const { date } = await searchParams;
  const selectedDate = date ? new Date(`${date}T00:00:00`) : new Date();

  const workouts = await getUserWorkouts(selectedDate);

  return <DashboardClient workouts={workouts} selectedDate={selectedDate} />;
}
