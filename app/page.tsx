import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Kisa&apos;s 40th Birthday Quiz
        </h1>
        <p className="text-center text-lg mb-8">
          A fun quiz to celebrate Kisa&apos;s 40th birthday!
        </p>
        <div className="text-center">
          <Link
            href="/quiz"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </main>
  );
}

