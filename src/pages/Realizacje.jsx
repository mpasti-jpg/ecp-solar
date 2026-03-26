import { useState } from 'react'
import { Link } from 'react-router-dom'
import Annotation from '../components/Annotation'
import ImagePlaceholder from '../components/ImagePlaceholder'

// ─── dane projektów ───────────────────────────────────────────────────────────

const PROJECTS = [
  {
    slug: 'clm-park',
    name: 'CLM Park Lućmierz Las',
    power: '1,7 MWp',
    type: 'Dachowa + trackery',
    industry: 'Logistyka',
    country: 'Polska',
    status: 'done',
    year: '2024',
    hasCase: true,
  },
  {
    slug: 'chodova-plana',
    name: 'Chodova Plana',
    power: '4 MW',
    type: 'Gruntowa',
    industry: 'Energia',
    country: 'Czechy',
    status: 'done',
    year: '2024',
  },
  {
    slug: 'allegro-zabrze',
    name: 'Allegro Zabrze',
    power: '150 kWp',
    type: 'Dachowa',
    industry: 'Logistyka',
    country: 'Polska',
    status: 'done',
    year: '2023',
  },
  {
    slug: 'hilti-wroclaw',
    name: 'HILTI Wrocław',
    power: '300 kWp',
    type: 'Dachowa',
    industry: 'Przemysł',
    country: 'Polska',
    status: 'done',
    year: '2023',
  },
  {
    slug: '3w',
    name: '3W Warszawa i Gliwice',
    power: '100 kWp',
    type: 'Dachowa',
    industry: 'Retail',
    country: 'Polska',
    status: 'done',
    year: '2023',
  },
  {
    slug: 'galeria-twierdza',
    name: 'Galeria Twierdza Kłodzko',
    power: '160 kWp',
    type: 'Dachowa',
    industry: 'Retail',
    country: 'Polska',
    status: 'done',
    year: '2023',
  },
  {
    slug: 'pasaz-grunwaldzki',
    name: 'Pasaż Grunwaldzki Wrocław',
    power: '185 kWp',
    type: 'Dachowa',
    industry: 'Retail',
    country: 'Polska',
    status: 'done',
    year: '2023',
  },
  {
    slug: 'farma-krzucz',
    name: 'Farma Krzucz',
    power: '1,4 MWp',
    type: 'Gruntowa',
    industry: 'Energia',
    country: 'Polska',
    status: 'progress',
    year: '2025',
  },
  {
    slug: 'farma-jozefowo',
    name: 'Farma Józefowo',
    power: '700 kWp',
    type: 'Gruntowa',
    industry: 'Energia',
    country: 'Polska',
    status: 'progress',
    year: '2025',
  },
  {
    slug: 'braniewo',
    name: 'Braniewo',
    power: '[XX] MWp',
    type: 'Gruntowa',
    industry: 'Energia',
    country: 'Polska',
    status: 'progress',
    year: '2025',
  },
  {
    slug: 'solventum-carporty',
    name: 'Solventum Carporty',
    power: '[XX] kWp',
    type: 'Carport',
    industry: 'Przemysł',
    country: 'Polska',
    status: 'progress',
    year: '2025',
  },
]

const STATUS_FILTERS = ['Wszystkie', 'Zrealizowane', 'W realizacji']
const INDUSTRY_FILTERS = ['Wszystkie', 'Logistyka', 'Przemysł', 'Retail', 'Energia']

// ─── karta projektu ───────────────────────────────────────────────────────────

function ProjectCard({ project }) {
  const { slug, name, power, type, industry, country, status, year, hasCase } = project

  return (
    <div className="border border-gray-200 rounded overflow-hidden hover:border-gray-400 transition-colors flex flex-col">
      <div className="relative">
        <ImagePlaceholder
          label={`Zdjęcie: ${name}`}
          aspectRatio="16/9"
          className="rounded-none border-0"
        />
        {/* badge statusu */}
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-2 py-0.5 rounded-full ${
            status === 'done'
              ? 'bg-green-100 text-green-700'
              : 'bg-amber-100 text-amber-700'
          }`}
        >
          {status === 'done' ? '✓ Zrealizowany' : '⏳ W realizacji'}
        </span>
        {/* badge kraju */}
        <span className="absolute top-3 right-3 text-xs font-medium bg-white border border-gray-200 px-2 py-0.5 rounded-full text-gray-600">
          {country}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-gray-900 mb-1">{name}</h3>
        <div className="text-base font-bold text-blue-600 mb-2">{power}</div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{type}</span>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{industry}</span>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{year}</span>
        </div>

        <div className="mt-auto">
          {hasCase ? (
            <Link
              to={`/realizacje/${slug}`}
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              Zobacz szczegóły →
            </Link>
          ) : (
            <span className="text-sm text-gray-400 italic">Szczegóły wkrótce</span>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── main ─────────────────────────────────────────────────────────────────────

export default function Realizacje() {
  const [statusFilter, setStatusFilter] = useState('Wszystkie')
  const [industryFilter, setIndustryFilter] = useState('Wszystkie')

  const filtered = PROJECTS.filter((p) => {
    const matchStatus =
      statusFilter === 'Wszystkie' ||
      (statusFilter === 'Zrealizowane' && p.status === 'done') ||
      (statusFilter === 'W realizacji' && p.status === 'progress')
    const matchIndustry =
      industryFilter === 'Wszystkie' || p.industry === industryFilter
    return matchStatus && matchIndustry
  })

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl font-bold mb-4">Nasze realizacje</h1>
            <p className="text-gray-300 text-base mb-8 max-w-xl">
              Każda inwestycja to indywidualny projekt — od analizy i projektowania,
              przez zakupy i budowę, po uruchomienie i serwis.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">~8+ MWp</div>
                <div className="text-xs text-gray-400 mt-1">łączna moc</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">11+</div>
                <div className="text-xs text-gray-400 mt-1">projektów</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">3</div>
                <div className="text-xs text-gray-400 mt-1">kraje</div>
              </div>
            </div>
          </div>
          <ImagePlaceholder
            label="Mapa interaktywna z pinami realizacji (PL, CZ, …)"
            aspectRatio="4/3"
            className="opacity-80"
          />
        </div>
      </section>

      {/* ── FILTRY (sticky) ───────────────────────────────────────────────── */}
      <div className="sticky top-[57px] z-10 bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <Annotation>
            Filtry dynamiczne — kliknięcie odświeża grid poniżej (useState). Docelowo można rozbudować o filtr kraju i zakresu mocy.
          </Annotation>

          <div className="flex flex-wrap items-center gap-4">
            {/* status */}
            <div className="flex flex-wrap gap-1.5">
              <span className="text-xs text-gray-500 self-center mr-1">Status:</span>
              {STATUS_FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setStatusFilter(f)}
                  className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
                    statusFilter === f
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white border-gray-300 text-gray-600 hover:border-gray-500'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* industry */}
            <div className="flex flex-wrap gap-1.5">
              <span className="text-xs text-gray-500 self-center mr-1">Branża:</span>
              {INDUSTRY_FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setIndustryFilter(f)}
                  className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
                    industryFilter === f
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white border-gray-300 text-gray-600 hover:border-gray-500'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* licznik */}
            <span className="ml-auto text-xs text-gray-400 whitespace-nowrap">
              Wyświetlono {filtered.length} z {PROJECTS.length} projektów
            </span>
          </div>
        </div>
      </div>

      {/* ── GRID PROJEKTÓW ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-sm">
            Brak projektów spełniających wybrane kryteria.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        )}
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────────────── */}
      <section className="bg-blue-600 py-14 px-4 text-center">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Planujesz inwestycję OZE?
        </h2>
        <Link
          to="/kontakt"
          className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-sm font-semibold rounded transition-colors inline-block"
        >
          Skontaktuj się z nami
        </Link>
      </section>

    </div>
  )
}
