import LandingInteractions from "./landing-interactions";
import ReadinessQuiz from "./readiness-quiz";

const whatsappText = encodeURIComponent(
  "مرحبًا، أريد تفاصيل كتاب من معلم علوم إلى Science Teacher"
);
const whatsappHref = `https://wa.me/201096614342?text=${whatsappText}`;

const stats = [
  ["30", "فصل تدريبي", "مسار تطبيقي لا مجرد قراءة"],
  ["1000", "Scientific Terms", "مصطلحات أحياء وكيمياء وفيزياء وبيئة"],
  ["500", "Classroom English", "عبارات جاهزة للشرح والإدارة والتقييم"],
  ["100", "Interview Q&A", "أسئلة مقابلات وإجابات نموذجية"],
  ["90", "يوم تحول", "خطة تنفيذ واقعية أسبوعًا بأسبوع"],
];

const problems = [
  "تتردد عند شرح Science بالإنجليزية أمام إدارة المدرسة.",
  "CV لا يوضح خبرتك الحقيقية ولا يلفت نظر المدارس الدولية.",
  "Portfolio غير جاهز أو غير منظم لإرساله مع التقديم.",
  "Demo Lesson بلا سيناريو واضح أو أهداف قابلة للقياس.",
  "لا تعرف أسئلة المقابلات المتكررة ولا طريقة الإجابة المهنية.",
  "مصادر كثيرة ومشتتة دون خطة يومية قابلة للتنفيذ.",
];

const losses = [
  "فرصة مدرسة لغات أو دولية قد تذهب لمعلم أكثر استعدادًا.",
  "دخول مقابلة أو Demo Lesson وأنت لا تعرف كيف تعرض قوتك.",
  "CV وPortfolio يظلان بنفس الشكل دون تطوير حقيقي.",
  "تأجيل الاستعداد لمدارس الخليج حتى يصبح الوقت ضيقًا.",
];

const outcomes = [
  ["لغة علمية واثقة", "Scientific English وClassroom English للاستخدام داخل الحصة مباشرة."],
  ["حصة تجريبية منظمة", "خطة درس، أسئلة Bloom، إدارة وقت، وإغلاق قوي للحصة."],
  ["ملف توظيف احترافي", "CV وPortfolio وLinkedIn يبرزون نقاط قوتك بوضوح."],
  ["جاهزية للمقابلات", "إجابات عملية لأسئلة المدارس الدولية والخليجية."],
];

const roadmap = [
  ["01", "الشهر الأول: اللغة", "مصطلحات علمية، تبسيط المفاهيم، وعبارات إدارة الفصل بالإنجليزية."],
  ["02", "الشهر الثاني: التدريس", "Lesson Planning، Inquiry، STEM، Assessment، Rubrics وNGSS Practices."],
  ["03", "الشهر الثالث: التوظيف", "CV، Portfolio، LinkedIn، Demo Lesson، Interviews وGulf Recruitment."],
];

const chapters = [
  ["01", "من معلم علوم إلى Science Teacher", "الفرق بين امتلاك المادة العلمية وبين عرضها مهنيًا للمدارس الدولية."],
  ["02", "Scientific English", "قاموسك العلمي الأساسي وطريقة استخدام المصطلحات داخل الشرح."],
  ["03", "Classroom English", "عبارات إدارة الحصة، التوجيه، التحفيز، والتقييم باللغة الإنجليزية."],
  ["04", "Simplified Science Explanation", "تبسيط المفاهيم العلمية دون فقدان الدقة."],
  ["05", "Modern Science Curricula", "فهم طبيعة مناهج Science الحديثة وما تتوقعه المدارس."],
  ["06", "Scientific Questioning", "تحويل الأسئلة من حفظ إلى تفكير علمي."],
  ["07", "Bloom’s Taxonomy", "بناء أسئلة وأنشطة بمستويات تفكير مختلفة."],
  ["08", "Differentiation", "مراعاة الفروق الفردية داخل حصة Science."],
  ["09", "Lesson Planning", "خطة درس تصلح للحصة اليومية وللـ Demo Lesson."],
  ["10", "Inquiry-Based Learning", "تصميم درس قائم على الاستقصاء والتجريب."],
  ["11", "NGSS Practices", "ممارسات العلوم والهندسة المطلوبة في المناهج الحديثة."],
  ["12", "STEM Activities", "أنشطة STEM بسيطة وفعالة لمعلم العلوم."],
  ["13", "Assessment", "تقييم الفهم الحقيقي لا الحفظ فقط."],
  ["14", "Rubrics", "معايير تقييم واضحة للمشروعات والمهام."],
  ["15", "Performance Tasks", "مهام أدائية تثبت الفهم أمام الإدارة."],
  ["16", "Exit Tickets & Quick Checks", "طرق قياس سريعة داخل الحصة."],
  ["17", "Classroom Management", "إدارة فصل Science باللغة الإنجليزية."],
  ["18", "Managing Practical Activities", "إدارة التجارب والأنشطة العملية بأمان ووضوح."],
  ["19", "Lab Safety", "قواعد السلامة داخل معمل العلوم."],
  ["20", "PowerPoint", "عروض Science احترافية وسهلة القراءة."],
  ["21", "Canva", "تصميم موارد تعليمية جذابة."],
  ["22", "Digital Tools", "أدوات رقمية تساعدك في الشرح والتقييم."],
  ["23", "Portfolio", "بناء ملف مهني يثبت خبرتك وإنجازاتك."],
  ["24", "International CV", "CV مناسب للمدارس الدولية والخليجية."],
  ["25", "LinkedIn", "هوية مهنية تعرض تخصصك بشكل احترافي."],
  ["26", "Demo Lesson Mastery", "سيناريو حصة تجريبية متكامل ومقنع."],
  ["27", "International School Interviews", "الاستعداد لأسئلة المدارس الدولية."],
  ["28", "Gulf School Recruitment", "فهم متطلبات التقديم لمدارس الخليج."],
  ["29", "90-Day Transformation Plan", "خطة تنفيذ يومية وأسبوعية واضحة."],
  ["30", "Your First Science Teaching Job", "البحث عن الفرصة الأولى والتقديم بثقة."],
];

const appendices = [
  ["1000", "Scientific Terms", "مصطلحات علمية منظمة حسب فروع العلوم."],
  ["500", "Classroom English", "جمل جاهزة للاستخدام داخل الحصة."],
  ["100", "Interview Q&A", "أسئلة مقابلات وإجابات قابلة للتخصيص."],
];

const testimonials = [
  ["الكتاب منظم وعملي، ويختصر الطريق على أي معلم علوم يريد دخول مجال Science.", "معلم علوم"],
  ["أكثر ما يميزه أنه لا يكتفي بالكلام النظري، بل يوجهك لمهام تطبيقية واضحة.", "Science Teacher"],
  ["الفهرس وحده يوضح أن الكتاب مبني كخطة تطوير كاملة وليس مجرد PDF.", "مدرب تعليمي"],
];

const faqs = [
  ["هل الكتاب مناسب لحديثي التخرج؟", "نعم، يبدأ من الأساسيات المهنية واللغوية ويقودك خطوة بخطوة."],
  ["هل يشترط أن أكون قويًا في الإنجليزية؟", "لا. التركيز على اللغة العلمية ولغة الفصل التي يحتاجها معلم العلوم فعليًا."],
  ["هل يناسب مدارس الخليج؟", "نعم، يتضمن فصلًا كاملًا عن Gulf Recruitment والاستعداد للتقديم."],
  ["هل يوجد جزء خاص بالـ Demo Lesson؟", "نعم، يوجد فصل Demo Lesson Mastery لتجهيز الحصة التجريبية بشكل منظم."],
  ["هل يضمن وظيفة؟", "لا يضمن وظيفة، لكنه يرفع جاهزيتك المهنية ويزيد فرصك عند التقديم."],
  ["كيف أستلم الكتاب؟", "PDF عبر واتساب بعد تأكيد الدفع."],
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "من معلم علوم إلى Science Teacher",
    description: "دليل عملي لمعلمي العلوم للانتقال إلى تدريس Science بالإنجليزية والاستعداد للمدارس الدولية والخليجية.",
    brand: { "@type": "Brand", name: "أسرة العلوم" },
    offers: { "@type": "Offer", price: "250", priceCurrency: "EGP", availability: "https://schema.org/InStock" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "محمد عبد الرحمن حفينة",
    jobTitle: "معلم علوم ومدرب متخصص",
    worksFor: { "@type": "Organization", name: "أسرة العلوم" },
  },
];

export default function Home() {
  return (
    <main id="top">
      {jsonLd.map((item, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />
      ))}
      <LandingInteractions />
      <a className="skip-link" href="#content">تخطَّ إلى المحتوى</a>
      <div className="scroll-progress" aria-hidden="true"><span id="scrollProgress" /></div>
      <a className="sticky-whatsapp" href={whatsappHref} target="_blank" rel="noopener" data-track="WhatsAppClick" data-position="Sticky">📲 اطلب عبر واتساب</a>

      <header className="site-header">
        <nav className="nav container" aria-label="التنقل الرئيسي">
          <a className="brand" href="#top" aria-label="العودة إلى بداية الصفحة"><span>ST</span><b>Science Teacher Guide</b></a>
          <div className="nav-links">
            <a href="#quiz">الاختبار</a><a href="#problem">المشكلة</a><a href="#contents">المحتويات</a><a href="#testimonials">الآراء</a><a href="#pricing">السعر</a><a href="#faq">الأسئلة</a>
          </div>
          <a className="btn btn-primary nav-cta" href={whatsappHref} target="_blank" rel="noopener" data-track="WhatsAppClick" data-position="Nav">واتساب</a>
        </nav>
      </header>

      <section className="hero section" id="content">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">دليل عملي لمعلمي العلوم الطموحين</p>
            <h1>من معلم علوم يعرف المادة… إلى <span>Science Teacher</span> جاهز للتقديم.</h1>
            <p className="hero-lead">رحلة عملية تساعدك على تطوير لغتك العلمية، تجهيز Demo Lesson، بناء CV وPortfolio، والاستعداد بثقة لمقابلات المدارس الدولية والخليجية.</p>
            <div className="hero-actions">
              <a className="btn btn-whatsapp" href={whatsappHref} target="_blank" rel="noopener" data-track="WhatsAppClick" data-position="Hero">📲 أريد تفاصيل الكتاب</a>
              <a className="btn btn-ghost" href="#contents">شاهد المحتويات</a>
            </div>
            <ul className="trust-list" aria-label="مميزات سريعة"><li>PDF عبر واتساب</li><li>250 جنيه فقط</li><li>30 فصل تدريبي</li><li>خطة 90 يوم</li></ul>
          </div>
          <div className="hero-visual" aria-label="عرض رمزي لغلاف الكتاب" role="img">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="book-card"><small>Professional Roadmap</small><strong>من معلم علوم إلى<br />SCIENCE TEACHER</strong><em>30 فصل + 3 ملاحق + خطة 90 يوم</em><span>أ. محمد عبد الرحمن حفينة</span></div>
            <div className="floating-card card-one">Demo Lesson Mastery</div>
            <div className="floating-card card-two">100 Interview Q&A</div>
          </div>
        </div>
      </section>

      <section className="stats-section" aria-label="أرقام الكتاب"><div className="container stats-grid">{stats.map(([n,t,d]) => <div className="stat" key={t}><strong>{n}</strong><span>{t}</span><p>{d}</p></div>)}</div></section>

      <section className="section" id="quiz"><div className="container"><ReadinessQuiz /></div></section>

      <section className="section section-dark" id="problem"><div className="container"><div className="section-head"><p className="eyebrow">المشكلة الحقيقية</p><h2>كثير من المعلمين لا يُرفضون بسبب ضعفهم في العلوم.</h2><p>بل بسبب فجوات في اللغة المهنية، الملف المهني، المقابلة، والـ Demo Lesson.</p></div><div className="cards problem-grid">{problems.map((p) => <article className="card problem-card" key={p}><span>✕</span><p>{p}</p></article>)}</div></div></section>

      <section className="section section-loss"><div className="container"><div className="section-head"><p className="eyebrow">قبل أن تُغلق الصفحة</p><h2>ماذا ستخسر لو لم تبدأ الآن؟</h2><p>كل شهر يمر دون استعداد حقيقي هو فرصة أقل في مدرسة أفضل.</p></div><div className="loss-grid">{losses.map((loss) => <article className="loss-card" key={loss}>{loss}</article>)}</div><a className="btn btn-whatsapp section-cta" href={whatsappHref} target="_blank" rel="noopener" data-track="WhatsAppClick" data-position="Loss">📲 لا أريد أن أفوّت الفرصة القادمة</a></div></section>

      <section className="section" id="outcomes"><div className="container"><div className="section-head"><p className="eyebrow">الحل</p><h2>لا تحتاج عشرات المصادر… تحتاج مسارًا واضحًا.</h2><p>الدليل يجمع اللغة العلمية، التدريس الحديث، الملف المهني، والمقابلات في نظام واحد قابل للتطبيق.</p></div><div className="cards outcome-grid">{outcomes.map(([title,desc]) => <article className="card outcome-card" key={title}><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>

      <section className="section section-soft"><div className="container"><div className="section-head"><p className="eyebrow">قبل وبعد</p><h2>فرق واضح في طريقة الاستعداد والتقديم.</h2></div><div className="compare-grid"><div className="compare-card before"><h3>قبل الكتاب</h3><ul><li>لغة علمية مشتتة</li><li>CV عادي لا يبرز قوتك</li><li>خوف من Demo Lesson</li><li>مصادر كثيرة بلا ترتيب</li></ul></div><div className="compare-card after"><h3>بعد التطبيق</h3><ul><li>قاموس علمي مستخدم داخل الحصة</li><li>CV يعرض خبراتك ومهاراتك بوضوح</li><li>خطة حصة تجريبية منظمة</li><li>مسار تدريبي من 30 فصلًا وخطة 90 يوم</li></ul></div></div></div></section>

      <section className="section section-dark"><div className="container"><div className="section-head"><p className="eyebrow">رحلة 90 يوم</p><h2>تحول تدريجي بدل القفز العشوائي.</h2></div><div className="roadmap">{roadmap.map(([num,title,desc]) => <article className="road-card" key={num}><span>{num}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>

      <section className="section section-soft" id="contents"><div className="container"><div className="section-head"><p className="eyebrow">محتويات الدليل</p><h2>30 فصلًا + 3 ملاحق تم تصميمها كخطوات عملية.</h2><p>كل فصل ينتهي بنتيجة تطبيقية محددة تساعدك على تحويل المعرفة إلى مهارة قابلة للعرض.</p></div><div className="chapters-grid">{chapters.map(([num, chapter, desc]) => <details className="chapter" key={chapter}><summary><span>{num}</span>{chapter}</summary><p>{desc}</p></details>)}</div><div className="appendix-grid">{appendices.map(([num,title,desc]) => <article className="appendix" key={title}><strong>{num}</strong><h3>{title}</h3><p>{desc}</p></article>)}</div><a className="btn btn-whatsapp section-cta" href={whatsappHref} target="_blank" rel="noopener" data-track="WhatsAppClick" data-position="Contents">📲 أريد تفاصيل الكتاب على واتساب</a></div></section>

      <section className="section"><div className="container"><div className="audience-grid"><article className="audience-card fit"><p className="eyebrow">مناسب لك إذا كنت…</p><h2>تريد الانتقال بجدية.</h2><p>معلم علوم، حديث تخرج، معلم حكومي أو خاص، تستهدف مدارس لغات أو دولية أو الخليج، وتريد تطوير ملفك المهني.</p></article><article className="audience-card not-fit"><p className="eyebrow">ليس مناسبًا إذا كنت…</p><h2>تبحث عن وعد غير واقعي.</h2><p>تريد ضمان وظيفة، أو لا تريد التطبيق، أو تبحث عن قراءة سريعة دون تنفيذ مهام عملية.</p></article></div></div></section>

      <section className="section section-soft" id="testimonials"><div className="container"><div className="section-head"><p className="eyebrow">آراء العملاء</p><h2>الكلمات ليست منا… بل من قرأوا الكتاب.</h2><p>استبدل هذه البطاقات بصور آراء العملاء الحقيقية بعد موافقتهم.</p></div><div className="testimonial-grid">{testimonials.map(([quote, author]) => <figure className="testimonial" key={quote}><blockquote>{quote}</blockquote><figcaption><span>{author[0]}</span>{author}</figcaption></figure>)}</div></div></section>

      <section className="section" id="pricing"><div className="container pricing-wrap"><div className="pricing-card"><p className="eyebrow">العرض الحالي</p><h2>ماذا ستحصل مقابل 250 جنيه؟</h2><div className="price"><span>250</span> جنيه</div><ul><li>30 فصلًا تدريبيًا</li><li>3 ملاحق: مصطلحات، لغة فصل، مقابلات</li><li>مهام عملية وخطة 90 يوم</li><li>استلام PDF عبر واتساب بعد تأكيد الدفع</li></ul><a className="btn btn-whatsapp" href={whatsappHref} target="_blank" rel="noopener" data-track="WhatsAppClick" data-position="Pricing">📲 اطلب الكتاب الآن</a><p className="guarantee">الكتاب لا يضمن وظيفة، لكنه يساعدك على رفع جاهزيتك المهنية وزيادة فرص القبول.</p></div></div></section>

      <section className="section section-soft" id="faq"><div className="container"><div className="section-head"><p className="eyebrow">الأسئلة الشائعة</p><h2>إجابات واضحة قبل الشراء.</h2></div><div className="faq-list">{faqs.map(([q,a], i) => <details key={q} open={i===0}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>

      <section className="final-cta section-dark"><div className="container"><h2>لا تنتظر أول مقابلة حتى تكتشف أنك غير جاهز.</h2><p>ابدأ الآن بدليل عملي يساعدك على تجهيز لغتك العلمية، ملفك المهني، الـ Demo Lesson، والمقابلات.</p><a className="btn btn-whatsapp" href={whatsappHref} target="_blank" rel="noopener" data-track="WhatsAppClick" data-position="FinalCTA">📲 اطلب الكتاب الآن عبر واتساب — 250 جنيه فقط</a></div></section>

      <footer className="footer"><div className="container"><b>من معلم علوم إلى Science Teacher</b><p>تأليف الأستاذ / محمد عبد الرحمن حفينة — مسؤول التسويق: تيم أسرة العلوم</p><p>واتساب: <a href="tel:+201096614342">01096614342</a></p><p className="copyright">جميع الحقوق محفوظة. يمنع إعادة البيع أو النشر أو التوزيع دون إذن.</p></div></footer>
    </main>
  );
}
