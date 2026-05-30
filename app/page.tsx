export default function Home() {
  const categories = [
    "Science",
    "Technology",
    "History",
    "Geography",
    "Mathematics",
    "Sports",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hefainh Quiz</h1>

          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-lg border border-slate-700">
              Login
            </button>

            <button className="px-4 py-2 rounded-lg bg-blue-600">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h2 className="text-6xl font-bold mb-6 leading-tight">
            Challenge Your Knowledge
          </h2>

          <p className="text-xl text-slate-300 mb-10">
            Create, share and solve interactive quizzes powered by AI.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-600 px-6 py-3 rounded-xl">
              Start Quiz
            </button>

            <button className="border border-slate-700 px-6 py-3 rounded-xl">
              Browse Quizzes
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h3 className="text-3xl font-bold mb-8">
          Popular Categories
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl"
            >
              <h4 className="text-xl font-semibold mb-2">
                {category}
              </h4>

              <p className="text-slate-400">
                Explore quizzes about {category}.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}