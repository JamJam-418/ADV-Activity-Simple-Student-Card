import StudentCard from "../components/StudentCard";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <StudentCard
        name="Jam Marcus Ondong"
        course="BSIT"
        year="2nd Year"
      />
    </main>
  );
}