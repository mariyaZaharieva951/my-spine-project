import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="lg:text-5xl text-2xl mb-4">Coming soon</h1>
      <Link className="hover:underline" href="/">
        Go back home
      </Link>
    </div>
  );
}