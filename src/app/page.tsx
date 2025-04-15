import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Welcome to the App</h1>
      <Link href="/users">
        <button style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}>
          Go to User List
        </button>
      </Link>
    </div>
  );
}