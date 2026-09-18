'use client';

import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setShortUrl('');

    try {
      const res = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to shorten URL');
      }

      setShortUrl(data.shortUrl);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">Encurtador de URL</h1>
            <p className="mt-2 text-sm text-gray-600">Rápido e Escalável (Next.js + Supabase)</p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="url" className="sr-only">URL Original</label>
                <input
                  id="url"
                  name="url"
                  type="url"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="https://exemplo.com/sua-url-longa"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {loading ? 'Encurtando...' : 'Encurtar'}
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg">
              {error}
            </div>
          )}

          {shortUrl && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800 font-medium mb-2">URL Encurtada:</p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={shortUrl}
                  className="flex-1 p-2 text-sm bg-white border border-green-300 rounded focus:outline-none"
                />
                <button
                  onClick={() => navigator.clipboard.writeText(shortUrl)}
                  className="px-3 py-2 text-sm font-medium text-green-700 bg-green-100 rounded hover:bg-green-200"
                >
                  Copiar
                </button>
              </div>
              <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-indigo-600 hover:text-indigo-800">
                Testar Link &rarr;
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
