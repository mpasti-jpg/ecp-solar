import { useState } from 'react'
import { Link } from 'react-router-dom'
import CoRobiamyNav from '../components/CoRobiamyNav'
import Annotation from '../components/Annotation'
import ImagePlaceholder from '../components/ImagePlaceholder'

// ─── dane ─────────────────────────────────────────────────────────────────────

const EPC_STEPS = [
  {
    n: '01', title: 'Analiza i koncepcja',
    desc: 'Analiza lokalizacji, nasłonecznienia, warunków gruntowych i przyłączeniowych. Ocena opłacalności inwestycji.',
    deliverable: 'Raport feasibility',
  },
  {
    n: '02', title: 'Projektowanie',
    desc: 'Projekt budowlany i wykonawczy, symulacje produkcji, dobór technologii, uzyskanie decyzji administracyjnych.',
    deliverable: 'Projekt budowlany + pozwolenie na budowę',
  },
  {
    n: '03', title: 'Zakupy',
    desc: 'Sourcing modułów, falowników, konstrukcji i pozostałych komponentów. Zarządzanie łańcuchem dostaw.',
    deliverable: 'Zamówienia + harmonogram dostaw',
  },
  {
    n: '04', title: 'Budowa',
    desc: 'Roboty ziemne, fundamenty, montaż konstrukcji i modułów, okablowanie DC/AC, stacja transformatorowa.',
    deliverable: 'Instalacja gotowa do uruchomienia',
  },
  {
    n: '05', title: 'Uruchomienie',
    desc: 'Pomiary elektryczne, testy wydajności, przyłączenie do sieci, odbiory URE, przekazanie inwestorowi.',
    deliverable: 'Dokumentacja powykonawcza + protokół odbioru',
  },
  {
    n: '06', title: 'Serwis O&M',
    desc: 'Monitoring produkcji, przeglądy prewencyjne, usuwanie usterek, raportowanie do inwestora.',
    deliverable: 'Umowa O&M + cykliczne raporty',
  },
]

const FAQ = [
  { q: 'Jak długo trwa realizacja farmy PV?', a: 'Czas realizacji zależy od skali projektu — instalacje dachowe do 500 kWp realizujemy w 4–8 tygodni, farmy gruntowe od 1 MWp wymagają zazwyczaj 6–18 miesięcy od podpisania umowy EPC.' },
  { q: 'Jakie konstrukcje stosujecie?', a: 'Stosujemy własne konstrukcje RBT Solar (system zgrzewany E-W na dachy) oraz trackery jednoosiowe na gruncie. Dobór zależy od lokalizacji, rodzaju dachu/terenu i oczekiwanego uzysku.' },
  { q: 'Czy realizujecie projekty za granicą?', a: 'Tak — realizowaliśmy projekty m.in. w Czechach. Działamy na rynkach CEE i jesteśmy otwarci na projekty w całej Europie.' },
  { q: 'Czy pomagacie w finansowaniu inwestycji?', a: 'Oferujemy wsparcie w zakresie przygotowania dokumentacji dla banków i funduszy. Współpracujemy z instytucjami finansowymi aktywnie finansującymi OZE.' },
  { q: 'Jakich producentów paneli używacie?', a: 'Współpracujemy z wiodącymi producentami paneli Tier 1 (m.in. Jinko Solar, LONGi, Canadian Solar). Dobór jest uzależniony od specyfiki projektu i wymagań inwestora.' },
  { q: 'Czy oferujecie serwis po zakończeniu budowy?', a: 'Tak — świadczymy usługi O&M obejmujące monitoring online, przeglądy prewencyjne, czyszczenie modułów, usuwanie usterek i raportowanie kwartalnie/rocznie.' },
]

// ─── helpers ──────────────────────────────────────────────────────────────────

function InstallationCard({ label, scale, example, imgLabel }) {
  return (
    <div className="border border-gray-200 rounded overflow-hidden">
      <ImagePlaceholder label={imgLabel} aspectRatio="4/3" className="rounded-none border-0" />
      <div className="p-5">
        <h3 className="text-base font-semibold text-gray-900 mb-2">{label}</h3>
        <div className="text-xs text-gray-500 mb-1"><span className="font-medium text-gray-700">Skala:</span> {scale}</div>
        <div className="text-xs text-gray-500"><span className="font-medium text-gray-700">Przykład:</span> {example}</div>
      </div>
    </div>
  )
}

// ─── main ─────────────────────────────────────────────────────────────────────

export default function FarmyPV() {
  const [activeStep, setActiveStep] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div>
      <CoRobiamyNav />

      {/* ── BREADCRUMBS ───────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 px-4 py-2.5">
        <div className="max-w-7xl mx-auto text-xs text-gray-500 flex items-center gap-1.5">
          <Link to="/" className="hover:text-gray-800">Strona główna</Link>
          <span>›</span>
          <span>Co robimy</span>
          <span>›</span>
          <span className="text-gray-900 font-medium">Farmy fotowoltaiczne</span>
        </div>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 block">Model EPC</span>
            <h1 className="text-3xl font-bold leading-snug mb-4">
              Budowa farm fotowoltaicznych — od projektu do uruchomienia
            </h1>
            <p className="text-gray-300 text-base mb-6">
              Realizujemy instalacje PV w modelu EPC (Engineering, Procurement, Construction) —
              kompleksowo, terminowo i z pełną odpowiedzialnością kontraktową.
            </p>
            <div className="space-y-2 mb-6">
              {[
                'Projekty od 100 kWp do 100+ MWp',
                'Realizacje w Polsce i Europie',
                'Własne biuro projektowe i konstruktorskie RBT Solar',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-blue-400">✓</span> {item}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/kontakt"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm font-semibold rounded transition-colors"
              >
                Wyślij zapytanie
              </Link>
              <button
                disabled
                className="border-2 border-gray-600 text-gray-400 px-5 py-2.5 text-sm font-semibold rounded cursor-not-allowed"
                title="Dokument w przygotowaniu"
              >
                📄 Pobierz ofertę PDF
              </button>
            </div>
          </div>
          <ImagePlaceholder label="Farma fotowoltaiczna — ujęcie dronowe" aspectRatio="4/3" className="opacity-80" />
        </div>
      </section>

      {/* ── TYPY INSTALACJI ───────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Typy instalacji</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            <InstallationCard
              label="Farmy gruntowe"
              scale="od 1 MWp do 100+ MWp"
              example="Chodova Plana 4 MW"
              imgLabel="Farma gruntowa — rzędy paneli na polu"
            />
            <InstallationCard
              label="Instalacje dachowe"
              scale="od 50 kWp do 2+ MWp"
              example="CLM Park 1,7 MWp"
              imgLabel="Instalacja dachowa — panele na hali logistycznej"
            />
            <InstallationCard
              label="Trackery jednoosiowe"
              scale="+15–25% uzysku vs. stała konstrukcja"
              example="CLM Park — 221 modułów"
              imgLabel="Trackery jednoosiowe — sekcja gruntowa"
            />
            <InstallationCard
              label="Carporty solarne"
              scale="Wielostanowiskowe konstrukcje"
              example="Solventum (w realizacji)"
              imgLabel="Carport solarny — wiata nad parkingiem"
            />
          </div>
        </div>
      </section>

      {/* ── PROCES EPC ────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-14 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Nasz proces EPC</h2>
          <p className="text-base text-gray-500 mb-8">
            Engineering, Procurement, Construction — każdy etap pod jednym dachem.
          </p>

          <div className="grid md:grid-cols-6 gap-2 mb-6">
            {EPC_STEPS.map((step, i) => (
              <button
                key={step.n}
                onClick={() => setActiveStep(i)}
                className={`rounded p-3 text-left border transition-all ${
                  activeStep === i
                    ? 'border-blue-600 bg-white shadow-sm'
                    : 'border-gray-200 bg-white hover:border-gray-400'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mb-2 ${
                    activeStep === i ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step.n}
                </div>
                <div className="text-xs font-semibold text-gray-800">{step.title}</div>
              </button>
            ))}
          </div>

          {/* aktywny krok */}
          <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                {EPC_STEPS[activeStep].n}
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{EPC_STEPS[activeStep].title}</h3>
                <p className="text-sm text-gray-700 mb-3">{EPC_STEPS[activeStep].desc}</p>
                <div className="text-xs text-blue-700 font-medium">
                  📋 Deliverable: {EPC_STEPS[activeStep].deliverable}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 text-white rounded p-4 text-center text-sm font-semibold">
            Jeden partner na każdym etapie — od pierwszej analizy po wieloletni serwis
          </div>
        </div>
      </section>

      {/* ── ZAKRES TECHNICZNY ─────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Zakres techniczny</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: 'E — Engineering',
                color: 'border-blue-200 bg-blue-50',
                head: 'text-blue-700',
                items: [
                  'Analizy techniczne i środowiskowe',
                  'Projekty budowlane i wykonawcze',
                  'Symulacje produkcji (PVsyst)',
                  'Optymalizacja CAPEX',
                  'Pozwolenia i uzgodnienia',
                  'Warunki przyłączeniowe',
                  'Nadzory autorskie',
                ],
              },
              {
                label: 'P+C — Procurement & Construction',
                color: 'border-gray-200 bg-gray-50',
                head: 'text-gray-700',
                items: [
                  'Roboty ziemne i fundamenty',
                  'Konstrukcje stalowe (RBT Solar)',
                  'Montaż modułów PV',
                  'Instalacje DC i AC',
                  'Stacje transformatorowe',
                  'Przyłączenia do sieci',
                  'Pomiary i odbiory',
                ],
              },
              {
                label: 'O&M — Serwis',
                color: 'border-green-200 bg-green-50',
                head: 'text-green-700',
                items: [
                  'Monitoring online 24/7',
                  'Przeglądy prewencyjne',
                  'Usuwanie usterek',
                  'Czyszczenie modułów',
                  'Ekspertyzy i audyty',
                  'Raportowanie do inwestora',
                  'Zarządzanie gwarancjami',
                ],
              },
            ].map(({ label, color, head, items }) => (
              <div key={label} className={`border rounded p-5 ${color}`}>
                <h3 className={`text-sm font-bold mb-4 pb-2 border-b border-current/20 ${head}`}>{label}</h3>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5 shrink-0">—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DLACZEGO EPC SOLAR ────────────────────────────────────────────── */}
      <section className="bg-gray-900 py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-8">Dlaczego EPC Solar?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: '🏗', title: 'Siła Grupy Rexbud', desc: '30 lat doświadczenia w budownictwie, własna baza sprzętu i ekipy.' },
              { icon: '🔧', title: 'Własne konstrukcje RBT Solar', desc: 'Projektujemy i produkujemy własne konstrukcje wsporcze, zoptymalizowane pod każdy typ dachu i terenu.' },
              { icon: '📐', title: 'Własne biuro projektowe', desc: 'Certyfikowane biuro konstrukcyjne — projekty budowlane i wykonawcze in-house.' },
              { icon: '🌍', title: 'Doświadczenie międzynarodowe', desc: 'Realizacje w Polsce, Czechach i innych rynkach europejskich.' },
              { icon: '💰', title: 'Optymalizacja CAPEX', desc: 'Dzięki własnym zasobom i sieci dostawców oferujemy konkurencyjne koszty realizacji.' },
              { icon: '📊', title: 'Wsparcie w finansowaniu', desc: 'Pomagamy przygotować dokumentację dla banków i funduszy inwestujących w OZE.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-gray-800 rounded p-5">
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
                <p className="text-xs text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WYBRANE REALIZACJE ────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Wybrane realizacje</h2>
          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {[
              { name: 'CLM Park Lućmierz Las', power: '1,7 MWp', type: 'Dach + trackery', slug: 'clm-park', link: true },
              { name: 'Chodova Plana', power: '4 MW', type: 'Gruntowa', slug: 'chodova-plana', link: false },
              { name: 'Farma Krzucz', power: '1,4 MWp', type: 'Gruntowa', slug: 'farma-krzucz', link: false, progress: true },
            ].map(({ name, power, type, slug, link, progress }) => (
              <div key={slug} className="border border-gray-200 rounded overflow-hidden hover:border-gray-400 transition-colors">
                <ImagePlaceholder label={`Zdjęcie: ${name}`} aspectRatio="16/9" className="rounded-none border-0" />
                <div className="p-4">
                  {progress && (
                    <span className="inline-block text-xs bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded-full mb-2">⏳ W realizacji</span>
                  )}
                  <div className="text-sm font-semibold text-gray-900 mb-1">{name}</div>
                  <div className="text-sm font-bold text-blue-600 mb-2">{power}</div>
                  <div className="text-xs text-gray-400 mb-3">{type}</div>
                  {link
                    ? <Link to="/realizacje/clm-park" className="text-sm font-semibold text-blue-600 hover:underline">Zobacz case study →</Link>
                    : <span className="text-xs text-gray-400 italic">Szczegóły wkrótce</span>
                  }
                </div>
              </div>
            ))}
          </div>
          <Link to="/realizacje" className="text-sm font-semibold text-blue-600 hover:underline">
            Wszystkie realizacje →
          </Link>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-14 px-4 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Często zadawane pytania</h2>
          <div className="space-y-2">
            {FAQ.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded bg-white overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors text-left"
                >
                  <span>{item.q}</span>
                  <span className="text-gray-400 ml-4 shrink-0">{openFaq === i ? '▲' : '▼'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-blue-600 py-14 px-4 text-center">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Planujesz budowę farmy fotowoltaicznej?
        </h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/kontakt"
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-sm font-semibold rounded transition-colors"
          >
            Wyślij zapytanie ofertowe
          </Link>
          <a
            href="tel:+48725451607"
            className="border-2 border-white text-white hover:bg-blue-700 px-6 py-3 text-sm font-semibold rounded transition-colors"
          >
            📞 +48 725 451 607
          </a>
        </div>
      </section>

      {/* ── POWIĄZANE USŁUGI ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-900 mb-5">Powiązane usługi</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/co-robimy/magazyny-energii"
              className="border border-gray-200 rounded p-5 bg-white hover:border-gray-400 transition-colors flex items-start gap-4"
            >
              <span className="text-3xl">🔋</span>
              <div>
                <div className="text-sm font-semibold text-gray-900 mb-1">Magazyny energii (BESS)</div>
                <div className="text-xs text-gray-500">Systemy bateryjne zwiększające efektywność i stabilność instalacji PV.</div>
              </div>
            </Link>
            <Link
              to="/co-robimy/farmy-wiatrowe"
              className="border border-gray-200 rounded p-5 bg-white hover:border-gray-400 transition-colors flex items-start gap-4"
            >
              <span className="text-3xl">🌀</span>
              <div>
                <div className="text-sm font-semibold text-gray-900 mb-1">Farmy wiatrowe</div>
                <div className="text-xs text-gray-500">Kompleksowa realizacja projektów wiatrowych na lądzie.</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
