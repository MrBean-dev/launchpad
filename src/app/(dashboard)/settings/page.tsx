"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function SettingsPage() {
  const { data: session } = useSession();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 mt-1">Manage your account settings</p>
      </div>

      <div className="space-y-6 max-w-2xl">
        {/* Profile Section */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Name
              </label>
              <input
                type="text"
                defaultValue={session?.user?.name || ""}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                defaultValue={session?.user?.email || ""}
                disabled
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-400 cursor-not-allowed"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition">
              Save Changes
            </button>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Subscription</h2>
          <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg mb-4">
            <div>
              <p className="text-white font-medium">Free Plan</p>
              <p className="text-sm text-gray-400">Basic features included</p>
            </div>
            <span className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm">
              Current
            </span>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
            Upgrade to Pro - $29/mo
          </button>
        </div>

        {/* Danger Zone */}
        <div className="bg-gray-800 border border-red-500/30 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-red-400 mb-4">Danger Zone</h2>
          <div className="space-y-4">
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Sign Out
            </button>
            <button className="w-full bg-red-600/20 hover:bg-red-600/30 text-red-400 font-semibold py-3 rounded-lg transition border border-red-500/30">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
