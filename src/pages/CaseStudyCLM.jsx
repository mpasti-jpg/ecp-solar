import { useState } from 'react'
import { Link } from 'react-router-dom'
import Annotation from '../components/Annotation'
import ImagePlaceholder from '../components/ImagePlaceholder'

// ─── galeria ──────────────────────────────────────────────────────────────────

const GALLERY = [
  'Ujęcie dronowe — panorama całej instalacji CLM Park',
  'Montaż konstrukcji wsporczej E-W na dachu hali',
  'Tracker jednoosiowy — sekcja gruntowa',
  'Montaż modułów PV — widok z bliska',
  'Okablowanie AC/DC — trasy kablowe',
  'Falownik SUNGROW — montaż i podłączenie',
]

// ─── powiązane realizacje ─────────────────────────────────────────────────────

const RELATED = [
  { name: 'Allegro Zabrze', power: '150 kWp', type: 'Dachowa', industry: 'Logistyka', slug: 'allegro-zabrze' },
  { name: 'HILTI Wrocław', power: '300 kWp', type: 'Dachowa', industry: 'Przemysł', slug: 'hilti-wroclaw' },
  { name: 'Farma Krzucz', power: '1,4 MWp', type: 'Gruntowa', industry: 'Energia', slug: 'farma-krzucz', progress: true },
]

export default function CaseStudyCLM() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div>

      {/* ── BREADCRUMBS ───────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-200 px-4 py-2.5">
        <div className="max-w-7xl mx-auto text-xs text-gray-500 flex items-center gap-1.5">
          <Link to="/" className="hover:text-gray-800">Strona główna</Link>
          <span>›</span>
          <Link to="/realizacje" className="hover:text-gray-800">Realizacje</Link>
          <span>›</span>
          <span className="text-gray-900 font-medium">CLM Park Lućmierz Las</span>
        </div>
      </div>

      {/* ── HERO IMAGE ────────────────────────────────────────────────────── */}
      <div className="relative">
        <ImagePlaceholder
          label="Ujęcie dronowe CLM Park — panorama instalacji dach + trackery"
          aspectRatio="21/9"
          className="rounded-none border-0 border-x-0"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
            Realizacja EPC
          </span>
        </div>
      </div>

      {/* ── H1 + SUBTITLE ─────────────────────────────────────────────────── */}
      <div className="bg-gray-900 text-white px-4 py-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">
            CLM Park Lućmierz Las — instalacja PV 1,7 MWp
          </h1>
          <p className="text-gray-300 text-base">
            Kompleksowa realizacja instalacji dachowej i gruntowej dla centrum logistycznego
          </p>
        </div>
      </div>

      {/* ── KLUCZOWE DANE ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <Annotation>Kluczowe dane projektu — 6 boxów, dane do weryfikacji z klientem</Annotation>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[
            { label: 'Moc', value: '1,7 MWp' },
            { label: 'Lokalizacja', value: 'Polska' },
            { label: 'Typ', value: 'Dach + trackery' },
            { label: 'Zakres', value: 'EPC' },
            { label: 'Branża', value: 'Logistyka' },
            { label: 'Rok', value: '2024' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-gray-50 border border-gray-200 rounded p-4 text-center">
              <div className="text-xs text-gray-500 mb-1">{label}</div>
              <div className="text-sm font-bold text-gray-900">{value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OPIS PROJEKTU ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-8 border-t border-gray-200">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Opis projektu</h2>
            <p className="text-base text-gray-700 mb-4">
              Projekt obejmował kompleksową realizację instalacji fotowoltaicznej dla centrum
              logistycznego, łączącej system dachowy z trackerami gruntowymi. Celem inwestycji
              była redukcja kosztów energii oraz zwiększenie niezależności energetycznej obiektu.
            </p>
            <p className="text-base text-gray-700">
              Instalacja składa się z 3 090 modułów PV (w tym 221 zamontowanych na trackerze
              jednoosiowym), falowników SUNGROW oraz dedykowanego systemu zarządzania energią.
              Realizacja została wykonana w modelu EPC — od projektu budowlanego po dokumentację
              powykonawczą.
            </p>
          </div>
          <ImagePlaceholder
            label="Zdjęcie: CLM Park — hala logistyczna z instalacją dachową"
            aspectRatio="4/3"
          />
        </div>
      </section>

      {/* ── ZAKRES PRAC ───────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Zakres realizacji EPC</h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* lista */}
            <div className="space-y-3">
              {[
                'Montaż konstrukcji wsporczej RBT Solar na dachu (zgrzewana E-W) oraz tracker nadążny na gruncie',
                'Montaż i podłączenie modułów PV — 3 090 szt. (w tym 221 na trackerze)',
                'Wykonanie tras kablowych i ułożenie okablowania AC/DC',
                'Montaż i podłączenie rozdzielnic DC',
                'Montaż falowników SUNGROW',
                'Pomiary powykonawcze oraz przygotowanie dokumentacji',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white border border-gray-200 rounded p-4">
                  <span className="text-green-600 font-bold mt-0.5 shrink-0">✔</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            {/* zdjęcia */}
            <div className="space-y-4">
              <ImagePlaceholder label="Montaż konstrukcji E-W na dachu hali" aspectRatio="4/3" />
              <ImagePlaceholder label="Tracker jednoosiowy — sekcja gruntowa" aspectRatio="4/3" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WYZWANIA + ROZWIĄZANIA ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          {/* wyzwania */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">⚡ Wyzwania</h2>
            <div className="space-y-3">
              {[
                'Integracja dwóch systemów — dachowego E-W i trackerów gruntowych',
                'Optymalizacja produkcji przy zróżnicowanej ekspozycji połaci dachu',
                'Dopasowanie do istniejącej infrastruktury elektrycznej obiektu',
              ].map((item) => (
                <div key={item} className="bg-amber-50 border border-amber-200 rounded p-4 text-sm text-amber-900">
                  {item}
                </div>
              ))}
            </div>
          </div>
          {/* rozwiązania */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">✅ Rozwiązania</h2>
            <div className="space-y-3">
              {[
                'Dedykowana konstrukcja E-W RBT Solar zoptymalizowana pod kąt dachu hali',
                'Trackery jednoosiowe na gruncie zwiększające produkcję o 15–25%',
                'System EMS integrujący obie instalacje z infrastrukturą obiektu',
              ].map((item) => (
                <div key={item} className="bg-green-50 border border-green-200 rounded p-4 text-sm text-green-900">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EFEKTY ────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Efekty inwestycji</h2>
          <Annotation>Wartości do weryfikacji z klientem po pierwszym roku produkcji</Annotation>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: '💰', value: '[XX]%', label: 'redukcja kosztów energii' },
              { icon: '⚡', value: '[XX] MWh', label: 'roczna produkcja energii' },
              { icon: '🔋', value: '[XX]%', label: 'stopień autokonsumpcji' },
              { icon: '🌿', value: '[XX] t', label: 'ograniczenie emisji CO₂/rok' },
            ].map(({ icon, value, label }) => (
              <div key={label} className="bg-white border border-gray-200 rounded p-5 text-center">
                <div className="text-3xl mb-2">{icon}</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
                <div className="text-xs text-gray-500">{label}</div>
              </div>
            ))}
          </div>
          <div className="bg-white border border-gray-200 rounded p-5">
            <ul className="space-y-2">
              {[
                'Stabilność dostaw energii 24/7 niezależnie od warunków pogodowych',
                'Realizacja celów ESG inwestora — redukcja śladu węglowego',
                'Zwiększenie niezależności energetycznej centrum logistycznego',
              ].map((item) => (
                <li key={item} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── GALERIA ───────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Galeria</h2>
        <Annotation>Galeria interaktywna — kliknięcie w thumbnail przełącza główne zdjęcie (useState)</Annotation>

        {/* duże zdjęcie */}
        <div className="mb-4">
          <ImagePlaceholder
            label={GALLERY[activeIdx]}
            aspectRatio="16/7"
            className="rounded-lg"
          />
        </div>

        {/* thumbnails */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {GALLERY.map((label, i) => (
            <button
              key={label}
              onClick={() => setActiveIdx(i)}
              className={`rounded overflow-hidden transition-all ${
                activeIdx === i
                  ? 'ring-2 ring-blue-600 ring-offset-2'
                  : 'opacity-60 hover:opacity-90'
              }`}
            >
              <ImagePlaceholder
                label={label}
                aspectRatio="4/3"
                className="rounded-none border-0 text-xs"
              />
            </button>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-gray-900 py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Chcesz zrealizować podobny projekt?
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Skontaktuj się z naszym zespołem — przeprowadzimy bezpłatną konsultację i przygotujemy ofertę.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/kontakt"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold rounded transition-colors"
            >
              Umów konsultację
            </Link>
            <a
              href="tel:+48725451607"
              className="border-2 border-gray-500 text-gray-300 hover:border-gray-300 px-6 py-3 text-sm font-semibold rounded transition-colors"
            >
              📞 +48 725 451 607
            </a>
          </div>
        </div>
      </section>

      {/* ── POWIĄZANE REALIZACJE ──────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Powiązane realizacje</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {RELATED.map(({ name, power, type, industry, slug, progress }) => (
              <div key={slug} className="border border-gray-200 rounded overflow-hidden bg-white hover:border-gray-400 transition-colors">
                <div className="relative">
                  <ImagePlaceholder label={`Zdjęcie: ${name}`} aspectRatio="16/9" className="rounded-none border-0" />
                  {progress && (
                    <span className="absolute top-2 left-2 text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                      ⏳ W realizacji
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{name}</h3>
                  <div className="text-sm font-bold text-blue-600 mb-2">{power}</div>
                  <div className="flex gap-1.5 mb-3">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{type}</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{industry}</span>
                  </div>
                  <span className="text-xs text-gray-400 italic">Szczegóły wkrótce</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/realizacje" className="text-sm font-semibold text-blue-600 hover:underline">
              ← Wszystkie realizacje
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
