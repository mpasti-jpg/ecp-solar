import { useState } from 'react'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Annotation from '../components/Annotation'

// ─── dane ─────────────────────────────────────────────────────────────────────

const FEATURED = {
  category: 'Realizacje',
  title: 'Zakończenie budowy farmy PV Krzucz — 1,4 MWp',
  excerpt:
    'EPC Solar zakończyła budowę farmy gruntowej Krzucz o mocy 1,4 MWp. Projekt obejmował kompleksową realizację EPC — od projektu budowlanego po przyłączenie do sieci i przekazanie inwestorowi.',
  date: '15.03.2026',
}

const POSTS = [
  {
    id: 1,
    category: 'Targi i wydarzenia',
    title: 'EPC Solar na targach Intersolar Europe 2026',
    excerpt: 'Nasz zespół weźmie udział w największych targach fotowoltaiki i magazynowania energii w Europie. Zapraszamy do odwiedzenia stoiska.',
    date: '28.02.2026',
  },
  {
    id: 2,
    category: 'Kariera',
    title: 'Szukamy kierownika budowy — dołącz do zespołu',
    excerpt: 'Poszukujemy doświadczonego Kierownika Budowy do realizacji projektów fotowoltaicznych w Polsce i zagranicą. Aplikuj teraz.',
    date: '20.02.2026',
  },
  {
    id: 3,
    category: 'Branża OZE',
    title: 'Carporty solarne — rosnący trend w Polsce i Europie',
    excerpt: 'Instalacje fotowoltaiczne na parkingach zyskują na popularności. Jakie korzyści dają inwestorom i jakie wyzwania techniczne wiążą się z ich budową?',
    date: '10.02.2026',
  },
  {
    id: 4,
    category: 'Realizacje',
    title: 'Case study CLM Park Lućmierz Las — 1,7 MWp',
    excerpt: 'Opisujemy kulisy realizacji instalacji dachowej i gruntowej dla centrum logistycznego. Zastosowane rozwiązania, wyzwania i efekty.',
    date: '05.01.2026',
  },
  {
    id: 5,
    category: 'Branża OZE',
    title: 'Magazyny energii BESS — przyszłość sieci energetycznych',
    excerpt: 'Systemy BESS stają się kluczowym elementem transformacji energetycznej. Jakie technologie dominują i co zmieniają w projektach OZE?',
    date: '18.12.2025',
  },
]

const CATEGORIES = ['Wszystkie', 'Realizacje', 'Targi i wydarzenia', 'Branża OZE', 'Kariera']

const CATEGORY_COLORS = {
  'Realizacje':        'bg-blue-50 text-blue-700',
  'Targi i wydarzenia':'bg-purple-50 text-purple-700',
  'Branża OZE':        'bg-green-50 text-green-700',
  'Kariera':           'bg-amber-50 text-amber-700',
}

function CategoryBadge({ category }) {
  const cls = CATEGORY_COLORS[category] ?? 'bg-gray-100 text-gray-600'
  return (
    <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded ${cls}`}>
      {category}
    </span>
  )
}

// ─── main ─────────────────────────────────────────────────────────────────────

export default function Aktualnosci() {
  const [activeCategory, setActiveCategory] = useState('Wszystkie')
  const [email, setEmail] = useState('')

  const filtered = activeCategory === 'Wszystkie'
    ? POSTS
    : POSTS.filter(p => p.category === activeCategory)

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-gray-900 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">Aktualności</h1>
          <p className="text-gray-300 text-base max-w-xl">
            Realizacje, wydarzenia branżowe, trendy w energetyce odnawialnej i życie firmy.
          </p>
        </div>
      </section>

      {/* ── WYRÓŻNIONY ARTYKUŁ ────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-10 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <ImagePlaceholder label={`Zdjęcie: ${FEATURED.title}`} aspectRatio="16/9" />
          <div>
            <CategoryBadge category={FEATURED.category} />
            <h2 className="text-2xl font-semibold text-gray-900 mt-3 mb-3 leading-snug">
              {FEATURED.title}
            </h2>
            <p className="text-base text-gray-600 mb-4">{FEATURED.excerpt}</p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-400">{FEATURED.date}</span>
              <button className="text-sm font-semibold text-blue-600 hover:underline">
                Czytaj więcej →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTRY (sticky) ───────────────────────────────────────────────── */}
      <div className="sticky top-[57px] z-10 bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2">
          <span className="text-xs text-gray-500 mr-1">Kategoria:</span>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
                activeCategory === cat
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white border-gray-300 text-gray-600 hover:border-gray-500'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-xs text-gray-400 whitespace-nowrap">
            {filtered.length} artykuł{filtered.length === 1 ? '' : filtered.length < 5 ? 'y' : 'ów'}
          </span>
        </div>
      </div>

      {/* ── GRID ARTYKUŁÓW ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-sm">
            Brak artykułów w tej kategorii.
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map(post => (
              <article
                key={post.id}
                className="border border-gray-200 rounded overflow-hidden hover:border-gray-400 transition-colors flex flex-col"
              >
                <ImagePlaceholder
                  label={`Zdjęcie: ${post.title}`}
                  aspectRatio="16/9"
                  className="rounded-none border-0"
                />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <CategoryBadge category={post.category} />
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4 flex-1">{post.excerpt}</p>
                  <button className="text-xs font-semibold text-blue-600 hover:underline self-start">
                    Czytaj więcej →
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* ── PAGINACJA ─────────────────────────────────────────────────── */}
        <div className="mt-10 flex justify-center items-center gap-1">
          <Annotation>Paginacja — placeholder (aktualnie 1 strona z danymi testowymi)</Annotation>
          {[1, 2, 3].map(n => (
            <button
              key={n}
              className={`w-9 h-9 text-sm rounded border transition-colors ${
                n === 1
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {n}
            </button>
          ))}
          <button className="w-9 h-9 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
            →
          </button>
        </div>
      </section>

      {/* ── NEWSLETTER ────────────────────────────────────────────────────── */}
      <section className="bg-gray-900 py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-3">Bądź na bieżąco</h2>
          <p className="text-gray-400 text-sm mb-8">
            Otrzymuj najnowsze informacje o projektach EPC Solar, trendach w OZE i wydarzeniach branżowych.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Twój adres e-mail"
              className="flex-1 px-4 py-2.5 text-sm rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm font-semibold rounded transition-colors whitespace-nowrap">
              Zapisz się
            </button>
          </div>
          <p className="text-xs text-gray-600 mt-3 italic">
            [Opcjonalne — formularz do podłączenia z systemem mailingowym]
          </p>
        </div>
      </section>

    </div>
  )
}
