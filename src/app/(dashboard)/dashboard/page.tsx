import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 mt-1">
          Welcome back, {session?.user?.name || "there"}!
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Revenue", value: "$12,345", change: "+12%" },
          { label: "Active Users", value: "1,234", change: "+5%" },
          { label: "Subscriptions", value: "856", change: "+8%" },
          { label: "Conversion Rate", value: "3.2%", change: "+2%" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6"
          >
            <p className="text-sm text-gray-400">{stat.label}</p>
            <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
            <p className="text-sm text-green-500 mt-1">{stat.change} from last month</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
        </div>
        <div className="divide-y divide-gray-700">
          {[
            { action: "New user signed up", user: "john@example.com", time: "2 minutes ago" },
            { action: "Subscription upgraded", user: "jane@example.com", time: "1 hour ago" },
            { action: "Payment received", user: "bob@example.com", time: "3 hours ago" },
            { action: "New user signed up", user: "alice@example.com", time: "5 hours ago" },
            { action: "Subscription cancelled", user: "charlie@example.com", time: "1 day ago" },
          ].map((activity, i) => (
            <div key={i} className="p-6 flex items-center justify-between">
              <div>
                <p className="text-white">{activity.action}</p>
                <p className="text-sm text-gray-400">{activity.user}</p>
              </div>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
