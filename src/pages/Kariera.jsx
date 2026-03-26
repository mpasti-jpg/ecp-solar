import { useState } from 'react'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Annotation from '../components/Annotation'

// ─── dane ofert ───────────────────────────────────────────────────────────────

const JOBS = [
  {
    id: 1,
    title: 'Kierownik budowy — farmy PV',
    dept: 'Realizacja',
    loc: 'Polska (delegacje)',
    type: 'Pełny etat',
    desc: 'Odpowiadasz za kompleksowe zarządzanie placem budowy instalacji fotowoltaicznych — od przejęcia terenu po odbiór końcowy. Koordynujesz podwykonawców, pilnujesz harmonogramu, budżetu i standardów BHP.',
    requirements: [
      'Min. 3 lata doświadczenia w prowadzeniu budów (preferowane PV lub branża budowlana)',
      'Uprawnienia budowlane lub elektryczne mile widziane',
      'Prawo jazdy kat. B',
      'Gotowość do pracy w delegacjach (ok. 80% czasu)',
      'Znajomość MS Project lub podobnych narzędzi',
    ],
  },
  {
    id: 2,
    title: 'Inżynier projektu PV',
    dept: 'Projektowy',
    loc: 'Zgierz / hybrid',
    type: 'Pełny etat',
    desc: 'Projektujesz instalacje fotowoltaiczne — dachowe i gruntowe. Przygotowujesz projekty budowlane, symulacje produkcji i dokumentację techniczną. Współpracujesz z działem realizacji i klientami.',
    requirements: [
      'Wykształcenie techniczne (elektryczne, energetyczne, budowlane)',
      'Znajomość PVsyst, AutoCAD lub AUTOCAD Electrical',
      'Min. 2 lata doświadczenia w projektowaniu PV',
      'Angielski B2+ (dokumentacja techniczna)',
      'Znajomość norm i przepisów budowlanych',
    ],
  },
  {
    id: 3,
    title: 'Specjalista ds. wycen',
    dept: 'Handlowy',
    loc: 'Zgierz / hybrid',
    type: 'Pełny etat',
    desc: 'Przygotowujesz kosztorysy inwestorskie i oferty handlowe dla projektów PV. Analizujesz zapytania klientów, dobierasz komponenty, wyceniasz prace budowlane i elektryczne.',
    requirements: [
      'Doświadczenie w kosztorysowaniu (budowlane lub elektryczne)',
      'Znajomość rynku PV mile widziana',
      'Bardzo dobra znajomość Excel',
      'Umiejętność pracy pod presją czasu',
      'Dokładność i analityczne myślenie',
    ],
  },
  {
    id: 4,
    title: 'Elektryk / Monter PV',
    dept: 'Realizacja',
    loc: 'Polska (delegacje)',
    type: 'Pełny etat',
    desc: 'Montujesz i uruchamiasz instalacje fotowoltaiczne w terenie — instalacje dachowe i gruntowe. Wykonujesz okablowanie DC/AC, podłączasz falowniki i rozdzielnice, przeprowadzasz pomiary.',
    requirements: [
      'Świadectwo kwalifikacyjne SEP E do 1 kV',
      'Doświadczenie w montażu instalacji PV (min. 1 rok)',
      'Gotowość do pracy w terenie i delegacjach',
      'Prawo jazdy kat. B',
      'Umiejętność czytania schematów elektrycznych',
    ],
  },
]

const DEPT_FILTERS = ['Wszystkie', 'Realizacja', 'Projektowy', 'Handlowy', 'Administracja']

const EVP = [
  { icon: '🚀', title: 'Projekty z wpływem', desc: 'Budujesz infrastrukturę energetyczną, która realnie zmienia rynek OZE w Polsce i Europie.' },
  { icon: '📈', title: 'Szybki rozwój', desc: 'Dynamicznie rosnąca firma — awans i wzrost odpowiedzialności w oparciu o kompetencje.' },
  { icon: '🏗', title: 'Zaplecze Grupy Rexbud', desc: 'Dostęp do zasobów, sprzętu i wiedzy jednego z największych wykonawców w Polsce.' },
  { icon: '🌍', title: 'Projekty międzynarodowe', desc: 'Możliwość udziału w projektach w Czechach i innych krajach europejskich.' },
  { icon: '🎓', title: 'Rozwój i szkolenia', desc: 'Szkolenia techniczne, kursy, certyfikaty branżowe i udział w targach.' },
  { icon: '🤝', title: 'Zespół ekspertów', desc: 'Pracujesz z doświadczonymi inżynierami i specjalistami OZE z wieloletnią praktyką.' },
]

const GALLERY = [
  'Ekipa na budowie farmy PV',
  'Szkolenie techniczne — montaż modułów',
  'Targi branżowe — stoisko EPC Solar',
  'Integracja zespołu',
  'Montaż trackerów gruntowych',
  'Biuro projektowe Zgierz',
  'Inspekcja dronem — farma w realizacji',
  'Odbiór końcowy — przekazanie inwestorowi',
]

// ─── main ─────────────────────────────────────────────────────────────────────

export default function Kariera() {
  const [deptFilter, setDeptFilter] = useState('Wszystkie')
  const [expandedJob, setExpandedJob] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', dept: '', rodo: false })

  const filteredJobs = deptFilter === 'Wszystkie'
    ? JOBS
    : JOBS.filter(j => j.dept === deptFilter)

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 block">
              Kariera w EPC Solar
            </span>
            <h1 className="text-3xl font-bold leading-snug mb-4">
              Buduj przyszłość energetyki z nami
            </h1>
            <p className="text-gray-300 text-base mb-6">
              Dołącz do zespołu generalnego wykonawcy farm fotowoltaicznych i systemów
              magazynowania energii. Realizujemy projekty, które mają realny wpływ na
              transformację energetyczną Polski i Europy.
            </p>
            <div className="flex flex-wrap gap-5 text-sm text-gray-400">
              <span>📍 Zgierz (HQ) + cała Polska</span>
              <span>👥 &lt;200 pracowników</span>
            </div>
          </div>
          <ImagePlaceholder
            label="Ekipa na budowie farmy PV — zdjęcie zespołu w terenie"
            aspectRatio="4/3"
            className="opacity-80"
          />
        </div>
      </section>

      {/* ── DLACZEGO WARTO ────────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Dlaczego warto?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {EVP.map(({ icon, title, desc }) => (
              <div key={title} className="border border-gray-200 rounded p-5">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATYSTYKI ────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-10 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '<200', label: 'pracowników' },
            { value: '7', label: 'działów' },
            { value: '10+', label: 'rynków w Europie' },
            { value: '[XX]', label: 'ofert pracy' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-bold text-gray-900">{value}</div>
              <div className="text-xs text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OFERTY PRACY ──────────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <h2 className="text-2xl font-semibold text-gray-900">
              Aktualne oferty{' '}
              <span className="text-gray-400 font-normal text-lg">({filteredJobs.length})</span>
            </h2>
          </div>

          {/* filtry */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-xs text-gray-500 self-center mr-1">Dział:</span>
            {DEPT_FILTERS.map(f => (
              <button
                key={f}
                onClick={() => { setDeptFilter(f); setExpandedJob(null) }}
                className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
                  deptFilter === f
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white border-gray-300 text-gray-600 hover:border-gray-500'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* accordion ofert */}
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12 text-gray-400 text-sm">
              Brak ofert w tym dziale.
            </div>
          ) : (
            <div className="space-y-2">
              {filteredJobs.map(job => {
                const open = expandedJob === job.id
                return (
                  <div key={job.id} className="border border-gray-200 rounded overflow-hidden">
                    {/* nagłówek */}
                    <button
                      onClick={() => setExpandedJob(open ? null : job.id)}
                      className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors text-left"
                    >
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{job.title}</div>
                        <div className="flex flex-wrap gap-3 mt-1">
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{job.dept}</span>
                          <span className="text-xs text-gray-500">📍 {job.loc}</span>
                          <span className="text-xs text-gray-500">🕐 {job.type}</span>
                        </div>
                      </div>
                      <span className="text-gray-400 shrink-0 ml-4">{open ? '▲' : '▼'}</span>
                    </button>

                    {/* rozwinięta treść */}
                    {open && (
                      <div className="px-5 pb-6 border-t border-gray-100 pt-4">
                        <p className="text-sm text-gray-700 mb-4">{job.desc}</p>
                        <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Wymagania</h4>
                        <ul className="space-y-1.5 mb-6">
                          {job.requirements.map(req => (
                            <li key={req} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-blue-600 mt-0.5 shrink-0">✓</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap items-center gap-4">
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm font-semibold rounded transition-colors">
                            Aplikuj teraz
                          </button>
                          <a
                            href="mailto:kariera@epcsolar.eu"
                            className="text-sm text-blue-600 hover:underline"
                          >
                            ✉ Wyślij CV: kariera@epcsolar.eu
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── APLIKACJA SPEKULACYJNA ────────────────────────────────────────── */}
      <section className="bg-gray-50 py-14 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* tekst */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Nie widzisz pasującej oferty?
            </h2>
            <p className="text-base text-gray-600 mb-4">
              Zawsze jesteśmy otwarci na utalentowanych specjalistów. Wyślij nam swoje CV
              wraz z informacją, w jakiej roli chcesz się rozwijać — odezwiemy się,
              gdy pojawi się odpowiednia okazja.
            </p>
            <p className="text-sm text-gray-500">
              📧 Możesz też napisać bezpośrednio na{' '}
              <a href="mailto:kariera@epcsolar.eu" className="text-blue-600 hover:underline">
                kariera@epcsolar.eu
              </a>
            </p>
          </div>

          {/* formularz */}
          <div className="bg-white border border-gray-200 rounded p-6">
            <Annotation>Formularz do podłączenia z backendem / serwisem mailowym</Annotation>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Imię i nazwisko</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Jan Kowalski"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">E-mail</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="jan.kowalski@email.com"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Interesujący dział</label>
                <select
                  value={form.dept}
                  onChange={e => setForm(f => ({ ...f, dept: e.target.value }))}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white"
                >
                  <option value="">Wybierz dział…</option>
                  <option>Realizacja</option>
                  <option>Projektowy</option>
                  <option>Handlowy</option>
                  <option>Wycen i Kosztorysów</option>
                  <option>Administracyjny</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Załącz CV</label>
                <div className="border-2 border-dashed border-gray-300 rounded p-6 text-center text-xs text-gray-400 hover:border-gray-400 transition-colors cursor-pointer">
                  <div className="text-2xl mb-1">📎</div>
                  Przeciągnij plik lub kliknij, aby wybrać<br />
                  <span className="text-gray-300">(PDF, DOC, max 5 MB)</span>
                </div>
                <p className="text-xs text-gray-400 mt-1 italic">[Drag-drop — do podłączenia z backendem]</p>
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="rodo"
                  checked={form.rodo}
                  onChange={e => setForm(f => ({ ...f, rodo: e.target.checked }))}
                  className="mt-0.5"
                />
                <label htmlFor="rodo" className="text-xs text-gray-500">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celu rekrutacji
                  przez EPC Solar Sp. z o.o. zgodnie z RODO.
                </label>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 text-sm font-semibold rounded transition-colors">
                Wyślij CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── ŻYCIE W FIRMIE ────────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Życie w firmie</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY.map(label => (
              <ImagePlaceholder key={label} label={label} aspectRatio="4/3" />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
