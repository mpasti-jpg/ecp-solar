import { useState } from 'react'
import { Link } from 'react-router-dom'
import Annotation from '../components/Annotation'
import ImagePlaceholder from '../components/ImagePlaceholder'

// ─── small helpers ────────────────────────────────────────────────────────────

function CheckItem({ children }) {
  return (
    <div className="flex items-start gap-2 text-sm text-gray-700">
      <span className="text-green-600 font-bold mt-0.5">✓</span>
      <span>{children}</span>
    </div>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  )
}

function IndustryCard({ icon, title, desc }) {
  return (
    <div className="border border-gray-200 rounded p-5 bg-white">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  )
}

function ProjectCard({ name, power, country, badge }) {
  return (
    <div className="border border-gray-200 rounded overflow-hidden">
      <ImagePlaceholder label={`Zdjęcie: ${name}`} aspectRatio="4/3" />
      <div className="p-4">
        {badge && (
          <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded mb-2">
            {badge}
          </span>
        )}
        <div className="text-sm font-semibold text-gray-900">{name}</div>
        <div className="text-xs text-gray-500 mt-1">{power} · {country}</div>
      </div>
    </div>
  )
}

function MgmtCard({ icon, title, desc }) {
  return (
    <div className="bg-gray-800 rounded p-5">
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="text-base font-semibold text-white mb-1">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  )
}

function NewsCard({ category, title, date }) {
  return (
    <div className="border border-gray-200 rounded overflow-hidden">
      <ImagePlaceholder label={`Zdjęcie: ${title}`} aspectRatio="16/9" />
      <div className="p-4">
        <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-0.5 rounded mb-2 uppercase tracking-wide">
          {category}
        </span>
        <div className="text-sm font-semibold text-gray-900 mb-1">{title}</div>
        <div className="text-xs text-gray-400">{date}</div>
      </div>
    </div>
  )
}

// ─── tab content ──────────────────────────────────────────────────────────────

function TabPV() {
  const cols = [
    {
      title: 'Projektowanie',
      items: [
        'Analizy techniczne i środowiskowe',
        'Projekty budowlane i wykonawcze',
        'Optymalizacja CAPEX',
        'Symulacje produkcji energii',
        'Pozwolenia i uzgodnienia',
        'Warunki przyłączeniowe',
      ],
    },
    {
      title: 'Generalne wykonawstwo',
      items: [
        'Roboty ziemne i fundamenty',
        'Konstrukcje stalowe',
        'Instalacje DC i AC',
        'Stacje transformatorowe',
        'Przyłączenia do sieci',
        'Pomiary i odbiory',
      ],
    },
    {
      title: 'Serwis i O&M',
      items: [
        'Nadzór eksploatacyjny',
        'Ekspertyzy i audyty',
        'Kosztorysy i analizy',
        'Szkolenia personelu',
        'Nadzory autorskie',
        'Reporting do inwestora',
      ],
    },
  ]
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cols.map((col) => (
        <div key={col.title} className="border border-gray-200 rounded p-5">
          <h3 className="text-base font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-200">
            {col.title}
          </h3>
          <ul className="space-y-1.5">
            {col.items.map((item) => (
              <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">—</span> {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function TabBESS() {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <div className="border border-gray-200 rounded p-5">
        <h3 className="text-base font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-200">
          Zakres usług BESS
        </h3>
        <ul className="space-y-1.5">
          {[
            'Projekt systemu bateryjnego',
            'Integracja z siecią i instalacją PV',
            'System zarządzania energią (EMS)',
            'Testy i uruchomienie',
            'Monitoring i serwis',
            'Optymalizacja pracy systemu',
          ].map((item) => (
            <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
              <span className="text-gray-400 mt-0.5">—</span> {item}
            </li>
          ))}
        </ul>
      </div>
      <ImagePlaceholder label="Kontener BESS / system bateryjny" aspectRatio="4/3" />
    </div>
  )
}

function TabWiatrowe() {
  return (
    <div className="border border-dashed border-gray-300 rounded p-8 text-center text-gray-400">
      <div className="text-3xl mb-3">🌀</div>
      <p className="text-sm italic">[Treść do uzupełnienia przez klienta]</p>
    </div>
  )
}

// ─── hero expand boxes ────────────────────────────────────────────────────────

function HeroExpandBox({ label, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-600 rounded">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-200 hover:bg-gray-800 transition-colors"
      >
        <span>+ {label}</span>
        <span className="text-gray-400">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-gray-400 border-t border-gray-600 pt-3">
          {children}
        </div>
      )}
    </div>
  )
}

// ─── main component ───────────────────────────────────────────────────────────

export default function Home() {
  const [activeTab, setActiveTab] = useState('pv')

  const tabs = [
    { id: 'pv', label: 'Farmy fotowoltaiczne' },
    { id: 'bess', label: 'Magazyny energii (BESS)' },
    { id: 'wiatrowe', label: 'Farmy wiatrowe' },
  ]

  return (
    <div>

      {/* ── SEKCJA 1: HERO ───────────────────────────────────────────────── */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Annotation>
            CEL: Natychmiastowe zakomunikowanie pozycjonowania — duży wykonawca infrastruktury OZE, nie firma montażowa.
          </Annotation>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* left */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
                Grupa Rexbud · 30 lat doświadczenia
              </p>
              <h1 className="text-3xl font-bold leading-snug mb-4">
                Generalny wykonawca inwestycji fotowoltaicznych i systemów magazynowania energii
              </h1>
              <p className="text-gray-300 text-base mb-6">
                Realizujemy inwestycje energetyczne w modelu EPC w oparciu o doświadczenie Grupy Rexbud.
                Wykonawstwo pod klucz na terenie Polski i Europy.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Link
                  to="/realizacje"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm font-semibold rounded transition-colors"
                >
                  Zobacz realizacje
                </Link>
                <Link
                  to="/kontakt"
                  className="border-2 border-white text-white px-5 py-2.5 text-sm font-semibold rounded hover:bg-gray-700 transition-colors"
                >
                  Wyślij zapytanie ofertowe
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <span>📞 +48 725 451 607</span>
                <span>✉ biuro@epcsolar.eu</span>
              </div>
            </div>

            {/* right */}
            <ImagePlaceholder
              label="Film 15s w tle: budowa farmy PV / infrastruktura / podstacja transformatorowa"
              aspectRatio="16/9"
              className="opacity-80"
            />
          </div>

          {/* bottom expand boxes */}
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <HeroExpandBox label="Najnowsze realizacje">
              <ul className="space-y-1.5">
                <li>• CLM Park Lućmierz Las — 1,7 MWp</li>
                <li>• Chodova Plana — 4 MW, Czechy</li>
                <li>• Farma Krzucz — 1,4 MWp <span className="text-amber-400">[W realizacji]</span></li>
              </ul>
            </HeroExpandBox>
            <HeroExpandBox label="Aktualności">
              <ul className="space-y-1.5">
                <li>• EPC Solar na targach Enex 2025</li>
                <li>• Rekrutacja: Kierownik projektu PV</li>
                <li>• Oddanie farmy CLM Park — komunikat</li>
              </ul>
            </HeroExpandBox>
          </div>
        </div>
      </section>

      {/* ── SEKCJA 2: SKALA I STABILNOŚĆ ─────────────────────────────────── */}
      <section className="bg-gray-50 py-12 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value="200 MW" label="zrealizowanych projektów" />
            <StatCard value="300+" label="inwestycji" />
            <StatCard value="10+" label="rynków w Europie" />
            <StatCard value="30+" label="lat doświadczenia Grupy Rexbud" />
          </div>
          <p className="text-xs italic text-gray-400 mt-6 text-center">
            [Do weryfikacji z klientem — animacja countUp przy scroll]
          </p>
        </div>
      </section>

      {/* ── SEKCJA 3: WSTĘP ──────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Oferujemy pełen zakres usług techniczno-doradczych
            </h2>
            <p className="text-base text-gray-700 mb-4">
              Jako część Grupy Rexbud — jednego z największych generalnych wykonawców w Polsce —
              łączymy 30 lat doświadczenia w budownictwie z ponad 10-letnią specjalizacją
              w fotowoltaice.
            </p>
            <p className="text-base text-gray-700 font-semibold">
              Realizujemy wielkoskalowe projekty dotyczące instalacji fotowoltaicznych, magazynów
              energii oraz wykonawstwo pod klucz na terenie Polski i Europy.
            </p>
          </div>
          <div className="md:col-span-2">
            <ImagePlaceholder label="Infrastruktura EPC Solar — farma lub podstacja" aspectRatio="4/3" />
          </div>
        </div>
      </section>

      {/* ── SEKCJA 4: MODEL EPC ───────────────────────────────────────────── */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Budujemy w modelu EPC</h2>
          <p className="text-base text-gray-500 mb-8">
            Engineering, Procurement, Construction — kompleksowa realizacja inwestycji
            od projektu do uruchomienia.
          </p>

          {/* 5 kroków */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {[
              { n: '01', title: 'Projektowanie', desc: 'Analizy, projekty budowlane, pozwolenia, dobór technologii.' },
              { n: '02', title: 'Zakupy', desc: 'Sourcing komponentów, negocjacje z dostawcami, logistyka.' },
              { n: '03', title: 'Realizacja', desc: 'Roboty budowlane, montaż, przyłączenia, testy.' },
              { n: '04', title: 'Integracja', desc: 'Systemy SCADA, EMS, integracja z siecią i infrastrukturą.' },
              { n: '05', title: 'Uruchomienie', desc: 'Odbiory, dokumentacja powykonawcza, przekazanie inwestorowi.' },
            ].map((step) => (
              <div key={step.n} className="border border-gray-200 rounded p-4 bg-white">
                <div className="text-xs font-bold text-gray-400 mb-1">{step.n}</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{step.title}</div>
                <div className="text-xs text-gray-500">{step.desc}</div>
              </div>
            ))}
          </div>

          {/* dark banner */}
          <div className="bg-gray-800 rounded p-6 mb-8 text-white">
            <p className="text-base font-semibold mb-3">
              Odpowiadamy za harmonogram, budżet i jakość realizacji.
            </p>
            <p className="text-sm text-gray-300">
              Pełna odpowiedzialność kontraktowa w modelu EPC + O&M
            </p>
          </div>

          {/* 6 przewag */}
          <div className="grid md:grid-cols-3 gap-3">
            {[
              'Kompleksowa realizacja (EPC + O&M)',
              'Doświadczenie wielkoskalowe',
              'Gwarancja jakości i terminowości',
              'Optymalizacja kosztów',
              'Wsparcie w finansowaniu',
              'Międzynarodowe doświadczenie',
            ].map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEKCJA 5: ZAKRES KOMPETENCJI ─────────────────────────────────── */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Zakres kompetencji</h2>

          {/* tabs */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-semibold rounded border transition-colors ${
                  activeTab === tab.id
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-gray-500'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'pv' && <TabPV />}
          {activeTab === 'bess' && <TabBESS />}
          {activeTab === 'wiatrowe' && <TabWiatrowe />}

          <div className="mt-8">
            <Link
              to="/kontakt"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm font-semibold rounded transition-colors inline-block"
            >
              Zapytaj o szczegóły oferty
            </Link>
          </div>
        </div>
      </section>

      {/* ── SEKCJA 6: BRANŻE ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Wspieramy transformację energetyczną w kluczowych sektorach
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            <IndustryCard icon="🏭" title="Przemysł" desc="Redukcja kosztów energii i emisji CO₂" />
            <IndustryCard icon="🚚" title="Logistyka" desc="Optymalizacja zużycia energii w centrach dystrybucyjnych" />
            <IndustryCard icon="🛒" title="Retail" desc="Stabilne ceny energii dla sieci handlowych" />
            <IndustryCard icon="🖥️" title="Data centers" desc="Niezawodne i skalowalne źródła energii" />
          </div>
        </div>
      </section>

      {/* ── SEKCJA 7: REALIZACJE ─────────────────────────────────────────── */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Nasze realizacje</h2>

          {/* wyróżniona */}
          <div className="grid md:grid-cols-2 gap-8 items-start border border-gray-200 rounded p-6 mb-8">
            <ImagePlaceholder label="CLM Park Lućmierz Las — farma PV 1,7 MWp" aspectRatio="16/9" />
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Wyróżniona realizacja</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">CLM Park Lućmierz Las</h3>
              <div className="grid grid-cols-3 gap-2 text-xs mb-4">
                <div className="bg-gray-50 rounded p-2"><div className="text-gray-400">Moc</div><div className="font-semibold">1,7 MWp</div></div>
                <div className="bg-gray-50 rounded p-2"><div className="text-gray-400">Zakres</div><div className="font-semibold">EPC</div></div>
                <div className="bg-gray-50 rounded p-2"><div className="text-gray-400">Branża</div><div className="font-semibold">Komercyjny</div></div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Kompleksowa realizacja EPC obejmująca projekt budowlany, dostawę paneli i falowników,
                roboty ziemne, montaż konstrukcji, instalacje DC/AC oraz przyłączenie do sieci.
              </p>
              <Link
                to="/realizacje/clm-park"
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                Zobacz case study →
              </Link>
            </div>
          </div>

          {/* grid 5 kart */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8">
            <ProjectCard name="Chodova Plana" power="4 MW" country="Czechy" />
            <ProjectCard name="Farma Krzucz" power="1,4 MWp" country="Polska" badge="W realizacji" />
            <ProjectCard name="Allegro Zabrze" power="150 kWp" country="Polska" />
            <ProjectCard name="HILTI Wrocław" power="300 kWp" country="Polska" />
            <ProjectCard name="Pasaż Grunwaldzki" power="185 kWp" country="Polska" />
          </div>

          <Link
            to="/realizacje"
            className="border-2 border-gray-800 text-gray-900 px-5 py-2.5 text-sm font-semibold rounded hover:bg-gray-100 transition-colors inline-block"
          >
            Zobacz wszystkie realizacje
          </Link>
        </div>
      </section>

      {/* ── SEKCJA 8: ZARZĄDZANIE PROJEKTAMI ─────────────────────────────── */}
      <section className="bg-gray-900 py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Profesjonalne zarządzanie każdą inwestycją
          </h2>
          <p className="text-gray-400 text-base mb-8">Kontrolujemy każdy aspekt realizacji</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <MgmtCard icon="📅" title="Zarządzanie harmonogramem" desc="Planowanie etapów, milestones, raportowanie opóźnień i odchyleń." />
            <MgmtCard icon="💰" title="Kontrola budżetu" desc="Bieżący monitoring kosztów, zarządzanie zmianami zakresu." />
            <MgmtCard icon="⚠️" title="Zarządzanie ryzykiem" desc="Identyfikacja, ocena i mitygacja ryzyk projektowych." />
            <MgmtCard icon="📋" title="Compliance" desc="Zgodność z przepisami, normami i wymaganiami kontraktowymi." />
            <MgmtCard icon="🦺" title="BHP" desc="Plany BIOZ, nadzór na placu budowy, zero tolerancji dla wypadków." />
            <MgmtCard icon="✅" title="Kontrola jakości" desc="Procedury QA/QC, odbiory robót, dokumentacja powykonawcza." />
          </div>
        </div>
      </section>

      {/* ── SEKCJA 9: ZAUFALI NAM ─────────────────────────────────────────── */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Zaufali nam</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {['CLM', 'HILTI', 'Allegro', '3W', 'ECHO Polska', 'Solventum'].map((logo) => (
              <div
                key={logo}
                className="bg-gray-100 border-2 border-dashed border-gray-300 rounded aspect-video flex items-center justify-center text-xs text-gray-400 font-medium"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEKCJA 10: GRUPA REXBUD ───────────────────────────────────────── */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Grupa Rexbud — fundament stabilności
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start mb-10">
            <div>
              <p className="text-base text-gray-700 mb-4">
                Grupa Rexbud to jeden z największych generalnych wykonawców w Polsce z ponad
                30-letnim doświadczeniem w budownictwie przemysłowym, komercyjnym i infrastrukturalnym.
                EPC Solar działa jako wyspecjalizowana spółka Grupy odpowiedzialna za projekty OZE.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <StatCard value="TOP 35 GW" label="w rankingu wykonawców" />
                <StatCard value="3 mln m²" label="zrealizowanych obiektów" />
                <StatCard value="300+" label="projektów w portfolio" />
                <StatCard value="8×" label="Diament Forbes" />
              </div>
              <div className="flex flex-wrap gap-2">
                {['5ha', 'Rexbud', 'RBT', 'RBT Solar', 'EPC Solar', 'RBT Power'].map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded border border-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ImagePlaceholder label="Hala przemysłowa Rexbud — przykład realizacji Grupy" aspectRatio="4/3" />
          </div>
        </div>
      </section>

      {/* ── SEKCJA 11: CTA BAND ───────────────────────────────────────────── */}
      <section className="bg-blue-600 py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Chcesz zrealizować projekt OZE?
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/kontakt"
              className="bg-white text-blue-600 hover:bg-gray-100 px-5 py-2.5 text-sm font-semibold rounded transition-colors"
            >
              Wyślij zapytanie ofertowe
            </Link>
            <a
              href="tel:+48725451607"
              className="border-2 border-white text-white px-5 py-2.5 text-sm font-semibold rounded hover:bg-blue-700 transition-colors"
            >
              📞 +48 725 451 607
            </a>
          </div>
        </div>
      </section>

      {/* ── SEKCJA 12: AKTUALNOŚCI ────────────────────────────────────────── */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Aktualności</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <NewsCard category="Targi" title="EPC Solar na targach Enex 2025 — relacja" date="15 marca 2025" />
            <NewsCard category="Rekrutacja" title="Poszukujemy Kierownika Projektu PV" date="8 marca 2025" />
            <NewsCard category="Realizacje" title="Oddanie farmy CLM Park Lućmierz Las" date="1 marca 2025" />
          </div>
          <Link
            to="/aktualnosci"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            Wszystkie aktualności →
          </Link>
        </div>
      </section>

      {/* ── SEKCJA 13: KARIERA ────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Dołącz do zespołu EPC Solar
            </h2>
            <p className="text-base text-gray-600 mb-6">
              Rozwijamy się dynamicznie i szukamy specjalistów, którzy chcą współtworzyć
              przyszłość energetyki odnawialnej w Polsce i Europie.
            </p>
            <Link
              to="/kariera"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm font-semibold rounded transition-colors inline-block"
            >
              Zobacz oferty pracy
            </Link>
          </div>
          <ImagePlaceholder label="Zespół na budowie farmy PV — zdjęcie grupowe" aspectRatio="16/9" />
        </div>
      </section>

    </div>
  )
}
