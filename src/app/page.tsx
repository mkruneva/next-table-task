import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page">
      <Link href="/users">Go to Users</Link>
    </div>
  );
}
