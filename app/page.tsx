import Link from "next/link";

const categories = [
  { title: "Science", desc: "Basic science interactive quiz." },
  { title: "Technology", desc: "Technology and digital skills." },
  { title: "History", desc: "Historical knowledge quizzes." },
  { title: "Geography", desc: "Countries, maps and places." },
  { title: "Mathematics", desc: "Numbers and problem solving." },
  { title: "Sports", desc: "Sports knowledge challenges." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hefainh Quiz</h1>

          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl border border-slate-700">
              Login
            </button>
            <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-blue-400 font-semibold mb-4">
            AI Powered Interactive Quiz Platform
          </p>

          <h2 className="text-6xl font-black mb-6 leading-tight">
            Challenge Your Knowledge
          </h2>

          <p className="text-xl text-slate-300 mb-10">
            Create, share and solve professional interactive quizzes with
            results and certificates.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/q/science-basics-82xk"
              className="bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-xl font-bold"
            >
              Start Quiz
            </Link>

            <a
              href="#categories"
              className="border border-slate-700 hover:bg-slate-900 px-7 py-4 rounded-xl font-bold"
            >
              Browse Quizzes
            </a>
          </div>
        </div>
      </section>

      <section id="categories" className="max-w-7xl mx-auto px-6 pb-24">
        <h3 className="text-3xl font-bold mb-8">Popular Categories</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.title}
              href="/q/science-basics-82xk"
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500 transition"
            >
              <h4 className="text-xl font-bold mb-2">{category.title}</h4>
              <p className="text-slate-400">{category.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}