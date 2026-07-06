"use client";

import { useState } from "react";

const questions = [
  "هل تستطيع شرح درس Science كامل بالإنجليزية؟",
  "هل لديك CV دولي جاهز؟",
  "هل لديك Portfolio مهني؟",
  "هل تستطيع تقديم Demo Lesson غدًا؟",
  "هل تعرف أشهر أسئلة المقابلات؟",
  "هل تعرف متطلبات مدارس الخليج؟",
];

export default function ReadinessQuiz() {
  const [answers, setAnswers] = useState<Record<number, "yes" | "no">>({});
  const [showResult, setShowResult] = useState(false);
  const noAnswers = Object.values(answers).filter((answer) => answer === "no").length;
  const completed = Object.keys(answers).length === questions.length;

  return (
    <div className="quiz-card" aria-labelledby="quiz-title">
      <div className="quiz-head">
        <div>
          <p className="eyebrow">اختبار سريع</p>
          <h2 id="quiz-title">هل أنت جاهز لتصبح Science Teacher؟</h2>
          <p>لو ظهرت 3 إجابات لا أو أكثر، فأنت تحتاج مسارًا منظمًا قبل أول مقابلة أو Demo Lesson.</p>
        </div>
        <div className="quiz-meter" aria-label={`أجبت على ${Object.keys(answers).length} من ${questions.length}`}>
          <strong>{Object.keys(answers).length}/{questions.length}</strong>
          <span>اكتمل</span>
        </div>
      </div>

      <div className="quiz-questions">
        {questions.map((question, index) => (
          <fieldset className="quiz-question" key={question}>
            <legend>{question}</legend>
            <div className="quiz-options">
              <button
                type="button"
                className={answers[index] === "yes" ? "active" : ""}
                aria-pressed={answers[index] === "yes"}
                onClick={() => setAnswers((prev) => ({ ...prev, [index]: "yes" }))}
              >
                نعم
              </button>
              <button
                type="button"
                className={answers[index] === "no" ? "active negative" : ""}
                aria-pressed={answers[index] === "no"}
                onClick={() => setAnswers((prev) => ({ ...prev, [index]: "no" }))}
              >
                لا
              </button>
            </div>
          </fieldset>
        ))}
      </div>

      <button className="btn btn-primary quiz-submit" type="button" onClick={() => setShowResult(true)} disabled={!completed}>
        اعرض النتيجة
      </button>

      {showResult && (
        <div className="quiz-result" role="status">
          {noAnswers >= 3
            ? "الكتاب مناسب جدًا لك الآن: لديك فجوات واضحة في الجاهزية المهنية، والصفحة مصممة لتحويلها إلى خطة تطبيق خلال 90 يومًا."
            : "لديك بداية جيدة. الدليل يساعدك على ترتيب نقاط قوتك وتحويلها إلى ملف مهني وحصة تجريبية أكثر إقناعًا."}
        </div>
      )}
    </div>
  );
}
