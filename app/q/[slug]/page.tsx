"use client";

import { useEffect, useMemo, useState } from "react";

type Question = {
  question: string;
  answers: string[];
  correct: string;
  explanation: string;
};

type AnswerLog = {
  question: string;
  selected: string;
  correct: string;
  isCorrect: boolean;
  explanation: string;
};

const quiz = {
  title: "Science Basics Quiz",
  platform: "Hefainh Quiz",
  teacher: "Hefainh Teacher",
  school: "Hefainh Academy",
  className: "Grade 2",
  subject: "Science",
  timerSeconds: 180,
  passPercentage: 60,
  questions: [
    { question: "What planet is known as the Red Planet?", answers: ["Earth", "Mars", "Jupiter", "Saturn"], correct: "Mars", explanation: "Mars is called the Red Planet because of its reddish surface." },
    { question: "What gas do plants absorb from the air?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: "Carbon Dioxide", explanation: "Plants absorb carbon dioxide during photosynthesis." },
    { question: "How many states of matter are commonly taught in basic science?", answers: ["2", "3", "4", "5"], correct: "3", explanation: "The common basic states are solid, liquid, and gas." },
    { question: "Which organ pumps blood around the body?", answers: ["Lungs", "Brain", "Heart", "Stomach"], correct: "Heart", explanation: "The heart pumps blood through the body." },
    { question: "What do we use to measure temperature?", answers: ["Ruler", "Thermometer", "Scale", "Clock"], correct: "Thermometer", explanation: "A thermometer measures temperature." },
    { question: "What is H2O commonly known as?", answers: ["Salt", "Water", "Oxygen", "Sugar"], correct: "Water", explanation: "H2O is the chemical formula for water." },
    { question: "Which force pulls objects toward Earth?", answers: ["Magnetism", "Gravity", "Friction", "Electricity"], correct: "Gravity", explanation: "Gravity pulls objects toward Earth." },
    { question: "Which part of the plant makes food?", answers: ["Root", "Stem", "Leaf", "Flower"], correct: "Leaf", explanation: "Leaves make food using sunlight." },
    { question: "What is the center of the solar system?", answers: ["Earth", "Moon", "Sun", "Mars"], correct: "Sun", explanation: "The Sun is at the center of our solar system." },
    { question: "Which sense organ helps us see?", answers: ["Ear", "Eye", "Nose", "Tongue"], correct: "Eye", explanation: "Eyes help us see." },
    { question: "Which animal is a mammal?", answers: ["Shark", "Frog", "Whale", "Snake"], correct: "Whale", explanation: "A whale is a mammal because it breathes air and feeds milk to its young." },
    { question: "What do humans need to breathe?", answers: ["Carbon Dioxide", "Oxygen", "Helium", "Nitrogen"], correct: "Oxygen", explanation: "Humans need oxygen to breathe." },
    { question: "Which object gives us light during the day?", answers: ["Moon", "Star", "Sun", "Lamp"], correct: "Sun", explanation: "The Sun gives Earth daylight." },
    { question: "What is ice made of?", answers: ["Water", "Stone", "Air", "Metal"], correct: "Water", explanation: "Ice is frozen water." },
    { question: "Which material is magnetic?", answers: ["Wood", "Plastic", "Iron", "Glass"], correct: "Iron", explanation: "Iron is attracted to magnets." },
    { question: "What do roots absorb from soil?", answers: ["Water", "Fire", "Light", "Sound"], correct: "Water", explanation: "Roots absorb water and nutrients from soil." },
    { question: "Which body part helps us hear?", answers: ["Eye", "Ear", "Hand", "Foot"], correct: "Ear", explanation: "Ears help us hear sounds." },
    { question: "Which planet do we live on?", answers: ["Mars", "Venus", "Earth", "Jupiter"], correct: "Earth", explanation: "Humans live on Earth." },
    { question: "What is the opposite of hot?", answers: ["Warm", "Cold", "Bright", "Fast"], correct: "Cold", explanation: "Cold is the opposite of hot." },
    { question: "Which tool measures length?", answers: ["Clock", "Ruler", "Thermometer", "Scale"], correct: "Ruler", explanation: "A ruler measures length." },
    { question: "Which living thing lays eggs?", answers: ["Cat", "Dog", "Chicken", "Cow"], correct: "Chicken", explanation: "Chickens lay eggs." },
    { question: "What do plants need to grow?", answers: ["Water and sunlight", "Plastic", "Smoke", "Oil"], correct: "Water and sunlight", explanation: "Plants need water and sunlight to grow." },
    { question: "Which is a source of electricity?", answers: ["Battery", "Paper", "Stone", "Wood"], correct: "Battery", explanation: "A battery stores and provides electrical energy." },
    { question: "Which part of the body controls thinking?", answers: ["Heart", "Brain", "Lung", "Hand"], correct: "Brain", explanation: "The brain controls thinking and body functions." },
    { question: "What is steam?", answers: ["Solid water", "Liquid water", "Water vapor", "Ice"], correct: "Water vapor", explanation: "Steam is water in gas form." },
    { question: "Which object floats on water?", answers: ["Stone", "Metal nail", "Wood", "Brick"], correct: "Wood", explanation: "Wood often floats because it is less dense than water." },
    { question: "Which is a natural source of light?", answers: ["Candle", "Sun", "Torch", "Lamp"], correct: "Sun", explanation: "The Sun is a natural source of light." },
    { question: "Which animal lives in water?", answers: ["Fish", "Lion", "Horse", "Rabbit"], correct: "Fish", explanation: "Fish live in water." },
    { question: "What protects our body from outside?", answers: ["Skin", "Bone", "Blood", "Muscle"], correct: "Skin", explanation: "Skin protects the body from the outside environment." },
    { question: "Which is needed for fire to burn?", answers: ["Oxygen", "Ice", "Sand", "Water"], correct: "Oxygen", explanation: "Fire needs oxygen to keep burning." },
  ] satisfies Question[],
};

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function createCertificateId() {
  return `HF-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
}

export default function QuizPage() {
  const [studentName, setStudentName] = useState("");
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(quiz.timerSeconds);
  const [answersLog, setAnswersLog] = useState<AnswerLog[]>([]);
  const [certificateId] = useState(createCertificateId);
  const [completedDate, setCompletedDate] = useState("");

  const question = quiz.questions[current];
  const total = quiz.questions.length;
  const progress = Math.round(((current + 1) / total) * 100);
  const percentage = useMemo(() => Math.round((score / total) * 100), [score, total]);
  const passed = percentage >= quiz.passPercentage;

  useEffect(() => {
    if (!started || finished || selected) return;

    if (timeLeft <= 0) {
      saveAnswer("Time Out");
      return;
    }

    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [started, finished, selected, timeLeft]);

  function startQuiz() {
    if (!studentName.trim()) return;
    setStarted(true);
  }

  function saveAnswer(answer: string) {
    if (selected) return;

    const isCorrect = answer === question.correct;
    setSelected(answer);

    if (isCorrect) setScore((prev) => prev + 1);

    setAnswersLog((prev) => [
      ...prev,
      {
        question: question.question,
        selected: answer,
        correct: question.correct,
        isCorrect,
        explanation: question.explanation,
      },
    ]);
  }

  function nextQuestion() {
    if (current + 1 < total) {
      setCurrent((prev) => prev + 1);
      setSelected("");
      setTimeLeft(quiz.timerSeconds);
    } else {
      setCompletedDate(new Date().toLocaleDateString());
      setFinished(true);
    }
  }

  function restartQuiz() {
    setStudentName("");
    setStarted(false);
    setCurrent(0);
    setSelected("");
    setScore(0);
    setFinished(false);
    setTimeLeft(quiz.timerSeconds);
    setAnswersLog([]);
    setCompletedDate("");
  }

  if (!started) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
        <section className="max-w-lg w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <div className="mb-8">
            <p className="text-blue-400 font-bold mb-2">{quiz.platform}</p>
            <h1 className="text-4xl font-black mb-4">{quiz.title}</h1>
            <p className="text-slate-400 leading-7">
              Subject: {quiz.subject}<br />
              Teacher: {quiz.teacher}<br />
              School: {quiz.school}<br />
              Class: {quiz.className}<br />
              Questions: {total}<br />
              Time: {quiz.timerSeconds} seconds per question
            </p>
          </div>

          <input
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter student name"
            className="w-full mb-4 rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none focus:border-blue-500"
          />

          <button
            onClick={startQuiz}
            className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl p-4 font-bold"
          >
            Start Quiz
          </button>
        </section>
      </main>
    );
  }

  if (finished) {
    return (
      <main className="min-h-screen bg-slate-950 text-white p-6">
        <section className="max-w-6xl mx-auto py-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center mb-8">
            <p className="text-blue-400 font-bold mb-2">Final Result</p>
            <h1 className="text-4xl font-black mb-4">{quiz.title}</h1>
            <p className="text-xl mb-2">Student: {studentName}</p>

            <p className="text-6xl font-black my-6 text-blue-400">
              {score} / {total}
            </p>

            <p className="text-2xl mb-4">{percentage}%</p>

            <p className={`text-xl font-bold mb-8 ${passed ? "text-green-400" : "text-red-400"}`}>
              {passed ? "Passed" : "Needs Improvement"}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => window.print()}
                className="bg-yellow-500 hover:bg-yellow-600 text-slate-950 px-6 py-3 rounded-xl font-black"
              >
                Print / Save Certificate PDF
              </button>

              <button
                onClick={restartQuiz}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold"
              >
                Try Again
              </button>
            </div>
          </div>

          <div id="certificate" className="bg-white text-slate-950 rounded-2xl p-10 border-[12px] border-yellow-500 shadow-2xl mb-8 print:shadow-none print:border-yellow-600">
            <div className="border-4 border-blue-950 rounded-xl p-10 text-center">
              <div className="flex justify-between items-center mb-8">
                <div className="w-20 h-20 rounded-full bg-blue-950 text-white flex items-center justify-center text-4xl font-black">
                  H
                </div>

                <div className="text-right">
                  <p className="font-black text-blue-950">{quiz.platform}</p>
                  <p className="text-sm text-slate-500">Certificate ID: {certificateId}</p>
                </div>
              </div>

              <p className="text-yellow-700 font-black tracking-[0.35em] uppercase">
                Certificate of Achievement
              </p>

              <h2 className="text-6xl font-black my-8 text-blue-950">
                {studentName}
              </h2>

              <p className="text-lg">has successfully completed</p>

              <h3 className="text-4xl font-black text-blue-800 my-5">
                {quiz.title}
              </h3>

              <div className="inline-block rounded-full bg-blue-950 text-white px-8 py-4 my-6">
                <p className="text-2xl font-black">
                  Score: {score}/{total} — {percentage}%
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-12 text-sm">
                <div>
                  <div className="border-t-2 border-slate-700 pt-2">
                    {quiz.teacher}<br />Teacher
                  </div>
                </div>

                <div>
                  <div className="border-t-2 border-slate-700 pt-2">
                    {completedDate}<br />Date
                  </div>
                </div>

                <div>
                  <div className="border-t-2 border-slate-700 pt-2">
                    {quiz.school}<br />School
                  </div>
                </div>
              </div>

              <p className="text-xs mt-10 text-slate-500">
                This certificate was generated automatically by Hefainh Quiz.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 print:hidden">
            <h2 className="text-2xl font-black mb-4">Answer Review</h2>

            <div className="grid gap-4">
              {answersLog.map((item, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                  <p className="font-bold mb-2">{index + 1}. {item.question}</p>
                  <p className="text-slate-300">Your answer: {item.selected}</p>
                  <p className="text-slate-300">Correct answer: {item.correct}</p>
                  <p className={item.isCorrect ? "text-green-400" : "text-red-400"}>
                    {item.isCorrect ? "Correct" : "Wrong"}
                  </p>
                  <p className="text-slate-400 mt-2">{item.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <section className="max-w-5xl mx-auto py-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-slate-400">Student: {studentName}</p>
            <h1 className="text-3xl font-black">{quiz.title}</h1>
          </div>

          <div className="text-right">
            <p className="text-slate-400">Time Left</p>
            <p className="text-3xl font-black text-blue-400">
              {formatTime(timeLeft)}
            </p>
          </div>
        </div>

        <div className="w-full bg-slate-800 rounded-full h-3 mb-6">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <div className="flex justify-between text-slate-400 mb-6">
            <span>Question {current + 1} of {total}</span>
            <span>Score: {score}</span>
          </div>

          <h2 className="text-3xl font-black mb-8">{question.question}</h2>

          <div className="grid gap-4">
            {question.answers.map((answer) => {
              const isCorrect = answer === question.correct;
              const isSelected = selected === answer;

              let style = "bg-slate-800 border-slate-700 hover:bg-slate-700";

              if (selected) {
                if (isCorrect) style = "bg-green-600 border-green-400";
                else if (isSelected) style = "bg-red-600 border-red-400";
                else style = "bg-slate-800 border-slate-700 opacity-60";
              }

              return (
                <button
                  key={answer}
                  onClick={() => saveAnswer(answer)}
                  className={`p-5 rounded-2xl border text-left font-bold transition ${style}`}
                >
                  {answer}
                </button>
              );
            })}
          </div>

          {selected && (
            <div className="mt-8 flex flex-wrap justify-between items-center gap-4">
              <p className={selected === question.correct ? "text-green-400 font-bold" : "text-red-400 font-bold"}>
                {selected === question.correct
                  ? "Correct Answer"
                  : `Wrong Answer — Correct: ${question.correct}`}
              </p>

              <button
                onClick={nextQuestion}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold"
              >
                {current + 1 === total ? "Show Result" : "Next Question"}
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}