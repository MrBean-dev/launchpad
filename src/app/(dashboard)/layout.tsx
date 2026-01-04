import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const isAdmin = session.user.role === "ADMIN";

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-gray-800 border-r border-gray-700">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-700">
            <Link href="/" className="text-xl font-bold text-white">
              Launchpad
            </Link>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            <Link
              href="/dashboard"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg transition"
            >
              <span className="mr-3">📊</span>
              Dashboard
            </Link>
            <Link
              href="/settings"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg transition"
            >
              <span className="mr-3">⚙️</span>
              Settings
            </Link>
            {isAdmin && (
              <Link
                href="/admin"
                className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg transition"
              >
                <span className="mr-3">👑</span>
                Admin
              </Link>
            )}
          </nav>

          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center px-4 py-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                {session.user.name?.[0] || session.user.email?.[0] || "U"}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white truncate">
                  {session.user.name || "User"}
                </p>
                <p className="text-xs text-gray-400 truncate">
                  {session.user.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 p-8">{children}</main>
    </div>
  );
}
