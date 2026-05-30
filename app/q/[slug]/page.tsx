"use client";

import { useState } from "react";

export default function QuizPage() {
  const [selected, setSelected] = useState("");

  const correct = "Paris";

  const answers = [
    "London",
    "Paris",
    "Rome",
    "Madrid",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Quiz
        </h1>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            What is the capital of France?
          </h2>

          <div className="grid gap-3">
            {answers.map((answer) => (
              <button
                key={answer}
                onClick={() => setSelected(answer)}
                className="bg-slate-800 p-3 rounded-lg text-left hover:bg-slate-700"
              >
                {answer}
              </button>
            ))}
          </div>

          {selected && (
            <div className="mt-6 text-lg">
              {selected === correct ? (
                <p className="text-green-400">
                  ✅ Correct Answer
                </p>
              ) : (
                <p className="text-red-400">
                  ❌ Wrong Answer
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}