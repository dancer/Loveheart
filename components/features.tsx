export function Features() {
  const features = [
    {
      title: "Global Coverage",
      description: "Support for multiple currencies and payment methods across different regions",
    },
    {
      title: "Instant Settlement",
      description: "Real-time settlement with stablecoins across multiple blockchains",
    },
    {
      title: "Developer First",
      description: "Simple APIs and SDKs for quick and easy integration",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="grid md:grid-cols-3 gap-12">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-6 rounded-xl bg-white/50 hover:bg-white/80 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

