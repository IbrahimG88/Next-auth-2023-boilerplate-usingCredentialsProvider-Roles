import { useSession } from "next-auth/react";

export default function AdminComponent() {
  const { data: session } = useSession();
  console.log("session", session);
  console.log("session.user.role", session.user.role);

  if (session && session.user.role === "admin") {
    return <h1>Hello Admin to AdminComponent</h1>;
  } else {
    <h1>user is not an admin</h1>;
  }
}
