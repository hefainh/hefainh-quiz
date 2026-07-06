import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://science-teacher.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "من معلم علوم إلى Science Teacher | دليل عملي للمدارس الدولية والخليجية",
    template: "%s | Science Teacher Guide",
  },
  description:
    "كتاب عملي لمعلمي العلوم يساعدهم على تدريس Science بالإنجليزية، تجهيز CV وPortfolio، إتقان Demo Lesson، والاستعداد لمقابلات المدارس الدولية والخليجية.",
  keywords: [
    "معلم علوم",
    "Science Teacher",
    "تدريس العلوم بالإنجليزية",
    "Scientific English",
    "Classroom English",
    "Demo Lesson",
    "CV معلم علوم",
    "Portfolio معلم",
    "مدارس دولية",
    "مدارس الخليج",
  ],
  authors: [{ name: "محمد عبد الرحمن حفينة" }],
  creator: "أسرة العلوم",
  publisher: "أسرة العلوم",
  alternates: { canonical: "/" },
  openGraph: {
    title: "من معلم علوم إلى Science Teacher",
    description:
      "30 فصل تدريبي + 1000 Scientific Terms + 500 Classroom English + 100 Interview Q&A + خطة 90 يوم.",
    url: "/",
    siteName: "Science Teacher Guide",
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "من معلم علوم إلى Science Teacher",
    description: "دليل عملي لمعلمي العلوم للانتقال إلى تدريس Science بالإنجليزية.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071b34",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
