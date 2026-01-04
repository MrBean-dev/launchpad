import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-white">Launchpad</div>
            <div className="flex gap-4">
              <Link
                href="/login"
                className="text-gray-300 hover:text-white px-4 py-2 transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Launch Your SaaS
            <span className="text-blue-500"> Faster</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Stop wasting time on boilerplate. Start with authentication, payments,
            and a dashboard out of the box.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
            >
              Start Free
            </Link>
            <Link
              href="#features"
              className="border border-gray-600 hover:border-gray-500 text-gray-300 px-8 py-3 rounded-lg text-lg font-semibold transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Everything You Need
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Authentication",
              description: "Secure email/password auth with NextAuth.js. Add OAuth providers in minutes.",
              icon: "🔐",
            },
            {
              title: "Payments",
              description: "Stripe integration ready to go. Subscriptions, one-time payments, and more.",
              icon: "💳",
            },
            {
              title: "Dashboard",
              description: "Beautiful admin dashboard with user management and analytics.",
              icon: "📊",
            },
            {
              title: "Database",
              description: "PostgreSQL with Prisma ORM. Type-safe queries and migrations.",
              icon: "🗄️",
            },
            {
              title: "API Routes",
              description: "RESTful API structure with proper error handling and validation.",
              icon: "🔌",
            },
            {
              title: "Deployment Ready",
              description: "Deploy to Vercel, AWS, or any platform in minutes.",
              icon: "🚀",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Simple Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Free",
              price: "$0",
              features: ["Up to 100 users", "Basic analytics", "Community support"],
              cta: "Get Started",
              highlighted: false,
            },
            {
              name: "Pro",
              price: "$29",
              features: ["Unlimited users", "Advanced analytics", "Priority support", "Custom domain"],
              cta: "Start Free Trial",
              highlighted: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              features: ["Everything in Pro", "SLA", "Dedicated support", "Custom integrations"],
              cta: "Contact Sales",
              highlighted: false,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 ${
                plan.highlighted
                  ? "bg-blue-600 border-2 border-blue-500 scale-105"
                  : "bg-gray-800 border border-gray-700"
              }`}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-white mb-6">
                {plan.price}
                {plan.price !== "Custom" && (
                  <span className="text-lg font-normal text-gray-400">/mo</span>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className={`block text-center py-3 rounded-lg font-semibold transition ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2026 Launchpad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
