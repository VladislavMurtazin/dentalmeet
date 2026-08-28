import { redirect } from "next/navigation";

export const metadata = {
  title: "Analytics Dashboard",
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  redirect("/dashboard.html");
}
