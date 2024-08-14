import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter' 
});

const imbPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif"
})


// Update the metadata for different location / language SEO optimization 
export const metadata: Metadata = {
  title: "Story of Words",
  description: "Learn and Practice Vocabulary from Beginner to Expert",
  keywords: "English, TOEFL, IELTS, vocabulary, vocab, best, study, free, exercise, practice",
  author: "Alphabetica Jooyoun Chong",
  robots: "index, follow",
    // 'og:title': "최고의 웹사이트 - 한국인을 위한 콘텐츠 | My Awesome Website",
    // 'og:description': "한국어로 된 최고의 콘텐츠를 제공하는 My Awesome Website에 오신 것을 환영합니다. 웹 개발, 기술 튜토리얼, 최신 트렌드 등을 한국어로 쉽게 배우세요.",
    // 'og:image': "https://example.com/korean-audience-image.jpg",
    // 'og:url': "https://example.com/ko",
    // 'og:locale': "ko_KR", Korean locale for South Korea
    // 'og:type': "website",
    // 'twitter:card': "summary_large_image",
    // 'twitter:title': "최고의 웹사이트 - 한국인을 위한 콘텐츠 | My Awesome Website",
    // 'twitter:description': "한국어로 된 최고의 콘텐츠를 제공하는 My Awesome Website에 오신 것을 환영합니다. 웹 개발, 기술 튜토리얼, 최신 트렌드 등을 한국어로 쉽게 배우세요.",
    // 'twitter:image': "https://example.com/korean-audience-twitter-image.jpg",
  icons: {
    icon: '/icons/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${imbPlexMono.variable}`}>{children}</body>
    </html>
  );
}
