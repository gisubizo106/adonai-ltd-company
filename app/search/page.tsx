// app/[locale]/search/page.tsx
'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-2xl font-bold mb-6">Search Results for: <span className="text-emerald-600">"{query}"</span></h1>
      <p className="text-slate-600">Showing results for your search. You can link this to your database or CMS later.</p>
    </div>
  );
}

export default function Page() {
  return <Suspense fallback={<div>Loading...</div>}><SearchResults /></Suspense>;
}