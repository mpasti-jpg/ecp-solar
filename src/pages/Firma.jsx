import { Link } from 'react-router-dom'
import Annotation from '../components/Annotation'
import ImagePlaceholder from '../components/ImagePlaceholder'

// ─── helpers ──────────────────────────────────────────────────────────────────

function StatBox({ value, label, dark }) {
  return (
    <div className={`rounded p-4 text-center ${dark ? 'bg-gray-800' : 'bg-gray-50 border border-gray-200'}`}>
      <div className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>{value}</div>
      <div className={`text-xs mt-1 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{label}</div>
    </div>
  )
}

function AtutCard({ icon, title, desc }) {
  return (
    <div className="border border-gray-200 rounded p-5 flex items-start gap-4">
      <span className="text-2xl shrink-0">{icon}</span>
      <div>
        <div className="text-sm font-semibold text-gray-900 mb-1">{title}</div>
        {desc && <div className="text-xs text-gray-500">{desc}</div>}
      </div>
    </div>
  )
}

function DepartmentCard({ icon, name }) {
  return (
    <div className="bg-white border border-gray-200 rounded p-4 text-center">
      <div className="text-2xl mb-2">{icon}</div>
      <div className="text-xs font-medium text-gray-700">{name}</div>
    </div>
  )
}

// ─── main ─────────────────────────────────────────────────────────────────────

export default function Firma() {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-3xl">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">O firmie EPC Solar</p>
          <h1 className="text-3xl font-bold leading-snug mb-6 italic">
            "Czujemy się odpowiedzialni za jakość środowiska naturalnego oraz przyszłość kolejnych pokoleń."
          </h1>
          <p className="text-gray-300 text-base max-w-2xl">
            EPC Solar to generalny wykonawca inwestycji fotowoltaicznych i systemów magazynowania
            energii, działający w ramach Grupy Rexbud. Realizujemy projekty OZE w modelu EPC —
            od analizy i projektowania, przez budowę, po serwis i O&M — w Polsce i na rynkach
            europejskich.
          </p>
        </div>
      </section>

      {/* ── KIM JESTEŚMY ─────────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* tekst */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-5">Kim jesteśmy</h2>
            <div className="space-y-4 text-base text-gray-700">
              <p>
                EPC Solar jest częścią <strong>Grupy Rexbud</strong> — jednego z największych
                generalnych wykonawców w Polsce z ponad <strong>30-letnim doświadczeniem</strong>{' '}
                w budownictwie przemysłowym i komercyjnym.
              </p>
              <p>
                Od ponad <strong>15 lat</strong> specjalizujemy się w fotowoltaice —
                łączymy doświadczenie dużego wykonawcy budowlanego z głęboką wiedzą
                techniczną w zakresie systemów PV, BESS i farm wiatrowych.
              </p>
              <p>
                Działamy na rynkach Polski i Europy, realizując projekty zarówno
                dla inwestorów instytucjonalnych, jak i klientów korporacyjnych.
              </p>
            </div>
          </div>

          {/* statystyki */}
          <div>
            <div className="grid grid-cols-2 gap-3">
              <StatBox value="200 MW" label="zrealizowanych projektów" />
              <StatBox value="300+" label="inwestycji w portfolio" />
              <StatBox value="10+" label="rynków w Europie" />
              <StatBox value="15 lat" label="w fotowoltaice" />
              <StatBox value="<200" label="pracowników w Grupie" />
              <StatBox value="500–700 mln PLN" label="przychody Grupy Rexbud" />
            </div>
          </div>
        </div>
      </section>

      {/* ── STRUKTURA OPERACYJNA ──────────────────────────────────────────── */}
      <section className="bg-gray-50 py-14 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Struktura operacyjna</h2>
          <p className="text-base text-gray-600 mb-8 max-w-2xl">
            Nasze działy ściśle ze sobą współpracują, zapewniając spójność realizacji
            od pierwszego kontaktu z klientem po odbiór końcowy i serwis posprzedażowy.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <DepartmentCard icon="📊" name="Handlowy" />
            <DepartmentCard icon="💰" name="Wycen i Kosztorysów" />
            <DepartmentCard icon="📐" name="Projektowy" />
            <DepartmentCard icon="🏗" name="Realizacji" />
            <DepartmentCard icon="📣" name="Marketingu" />
            <DepartmentCard icon="📋" name="Księgowości i Kadr" />
            <DepartmentCard icon="🏢" name="Administracyjny" />
          </div>
        </div>
      </section>

      {/* ── NASZE ATUTY ───────────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Nasze atuty</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <AtutCard icon="🏗" title="Wykonawstwo i nadzór" desc="Kompleksowe zarządzanie placem budowy, podwykonawcami i harmonogramem." />
            <AtutCard icon="📊" title="Analiza techniczna i finansowa" desc="Modelowanie finansowe, analizy opłacalności, due diligence inwestycji." />
            <AtutCard icon="📐" title="Projekty budowlane" desc="Projekty budowlane i wykonawcze, nadzory autorskie, BIM." />
            <AtutCard icon="📄" title="Pozwolenia i warunki przyłączeniowe" desc="Kompletna obsługa administracyjna — od WZ po pozwolenie na użytkowanie." />
            <AtutCard icon="📈" title="Koncepcje i symulacje" desc="Symulacje produkcji, optymalizacja CAPEX/OPEX, dobór technologii." />
            <AtutCard icon="🔍" title="Ekspertyzy i opinie techniczne" desc="Audyty istniejących instalacji, opinie eksperckie, certyfikacje." />
            <AtutCard icon="💰" title="Kosztorysy inwestorskie" desc="Szczegółowe kosztorysy dla fazy projektowej i realizacji." />
            <AtutCard icon="🎓" title="Szkolenia i nadzory autorskie" desc="Szkolenia dla personelu technicznego, nadzory nad realizacją przez podwykonawców." />
          </div>
        </div>
      </section>

      {/* ── GRUPA REXBUD ──────────────────────────────────────────────────── */}
      <section className="bg-gray-900 py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-2">Grupa Rexbud</h2>
          <p className="text-gray-400 text-base italic mb-10">
            Synergia, która napędza nasz rozwój
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-start mb-10">
            {/* tekst */}
            <div className="text-gray-300 space-y-4 text-base">
              <p>
                Grupa Rexbud to jeden z największych generalnych wykonawców w Polsce,
                specjalizujący się w budownictwie przemysłowym, komercyjnym i energetycznym.
                EPC Solar działa jako wyspecjalizowana spółka Grupy odpowiedzialna za projekty OZE.
              </p>
              <p>
                Przynależność do Grupy daje nam dostęp do unikalnych zasobów: doświadczonej kadry
                inżynierskiej, bazy sprzętu budowlanego, sieci podwykonawców oraz stabilności
                finansowej dużej organizacji.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <StatBox value="TOP 35" label="GW w rankingu wykonawców" dark />
                <StatBox value="TOP 30" label="największych firm budowlanych" dark />
                <StatBox value="4. miejsce" label="Gazele Biznesu w kategorii" dark />
                <StatBox value="3 mln m²" label="zrealizowanych obiektów" dark />
                <StatBox value="8×" label="Diament Forbes" dark />
                <StatBox value="500–700 mln PLN" label="roczne przychody Grupy" dark />
              </div>
            </div>

            {/* zdjęcia */}
            <div className="space-y-4">
              <ImagePlaceholder label="Hala przemysłowa Rexbud — projekt Grupy" aspectRatio="16/9" className="opacity-80" />
              <ImagePlaceholder label="Budowa centrum logistycznego — Rexbud" aspectRatio="16/9" className="opacity-80" />
            </div>
          </div>

          {/* spółki grupy */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Spółki Grupy Rexbud</p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {[
                { name: '5ha', highlight: false },
                { name: 'Rexbud', highlight: false },
                { name: 'RBT', highlight: false },
                { name: 'RBT Solar', highlight: false },
                { name: 'EPC Solar', highlight: true },
                { name: 'RBT Power', highlight: false },
              ].map(({ name, highlight }) => (
                <div
                  key={name}
                  className={`rounded px-3 py-3 text-center text-sm font-semibold border ${
                    highlight
                      ? 'bg-blue-900 border-blue-700 text-white'
                      : 'bg-gray-800 border-gray-700 text-gray-300'
                  }`}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTYFIKATY ───────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-14 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Certyfikaty i wyróżnienia</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Gazele Biznesu', desc: 'Najszybciej rosnące firmy w Polsce', icon: '🦎' },
              { title: 'Diamenty Forbes', desc: '8× wyróżnienie dla Grupy Rexbud', icon: '💎' },
              { title: 'Biuro konstrukcyjne', desc: 'Certyfikowane biuro projektowe', icon: '📐' },
              { title: '[Do pozyskania]', desc: 'Certyfikat w trakcie uzyskiwania', icon: '⏳' },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="bg-white border border-gray-200 rounded p-6 text-center">
                <div className="text-4xl mb-3">{icon}</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{title}</div>
                <div className="text-xs text-gray-500">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZESPÓŁ ────────────────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Nasz zespół</h2>
          <Annotation>Zdjęcia i dane zespołu do ustalenia z klientem</Annotation>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
            {[
              { name: '[Imię Nazwisko]', role: 'Prezes / Dyrektor Zarządzający' },
              { name: '[Imię Nazwisko]', role: 'Dyrektor Techniczny' },
              { name: '[Imię Nazwisko]', role: 'Kierownik Projektów' },
              { name: '[Imię Nazwisko]', role: 'Dyrektor Handlowy' },
            ].map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs mx-auto mb-3">
                  👤
                </div>
                <div className="text-sm font-semibold text-gray-900">{p.name}</div>
                <div className="text-xs text-gray-500 mt-0.5">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-blue-600 py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-8">
            Zbudujmy Twój projekt razem
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/kontakt"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-sm font-semibold rounded transition-colors"
            >
              Wyślij zapytanie ofertowe
            </Link>
            <button
              disabled
              className="border-2 border-white text-white px-6 py-3 text-sm font-semibold rounded opacity-70 cursor-not-allowed"
              title="Dokument w przygotowaniu"
            >
              📄 Capability Statement
            </button>
          </div>
          <p className="text-blue-200 text-xs mt-4 italic">
            [Capability Statement — PDF do przygotowania przez klienta]
          </p>
        </div>
      </section>

    </div>
  )
}
