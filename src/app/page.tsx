import Banner from "@/components/Banner";
import LectureList from "@/components/LectureList";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Menu />
      <Banner />
      <LectureList />
    </main>
  );
}
