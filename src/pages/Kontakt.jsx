import { useState } from 'react'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Annotation from '../components/Annotation'

// ─── dane ─────────────────────────────────────────────────────────────────────

const VOIVODESHIPS = [
  'dolnośląskie','kujawsko-pomorskie','lubelskie','lubuskie','łódzkie',
  'małopolskie','mazowieckie','opolskie','podkarpackie','podlaskie',
  'pomorskie','śląskie','świętokrzyskie','warmińsko-mazurskie',
  'wielkopolskie','zachodniopomorskie',
]

const POWER_OPTIONS = [
  'do 50 kWp','50–500 kWp','500 kWp – 1 MW','1–10 MW','10+ MW','nie wiem',
]


const FAQ = [
  {
    q: 'Jak wygląda proces EPC?',
    a: 'Realizacja przebiega w 5 etapach: (1) Analiza i koncepcja, (2) Projektowanie i pozwolenia, (3) Zakupy i logistyka, (4) Budowa i montaż, (5) Uruchomienie i odbiory. Harmonogram jest ustalany indywidualnie dla każdego projektu.',
  },
  {
    q: 'Jaki jest minimalny rozmiar projektu?',
    a: '[Do ustalenia z klientem — zakres oferty EPC Solar]',
  },
  {
    q: 'Czy realizujecie projekty poza Polską?',
    a: 'Tak — realizowaliśmy projekty m.in. w Czechach i jesteśmy otwarci na projekty na 10+ rynkach europejskich. Skontaktuj się z nami, aby omówić szczegóły lokalizacji.',
  },
  {
    q: 'Czy pomagacie w finansowaniu inwestycji?',
    a: 'Tak — oferujemy wsparcie w przygotowaniu dokumentacji bankowej i due diligence technicznego dla instytucji finansujących projekty OZE.',
  },
  {
    q: 'Jaki jest typowy czas realizacji?',
    a: '[Do uzupełnienia przez klienta na podstawie doświadczeń z dotychczasowych projektów]',
  },
]

const INPUT_CLS = 'w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white'
const LABEL_CLS = 'block text-xs font-semibold text-gray-700 mb-1'

// ─── main ─────────────────────────────────────────────────────────────────────

export default function Kontakt() {
  const [types, setTypes] = useState({ pv: false, bess: false, dach: false, carport: false, inne: false })
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', voi: '', power: '', msg: '', rodo1: false, rodo2: false })

  const toggleType = key => setTypes(t => ({ ...t, [key]: !t[key] }))
  const setF = key => e => setForm(f => ({ ...f, [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-gray-900 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">Kontakt</h1>
          <p className="text-gray-300 text-base mb-8 max-w-xl">
            Porozmawiajmy o Twoim projekcie OZE. Odpowiadamy w ciągu 24 godzin.
          </p>

          {/* 3 karty kontaktowe */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: '📞',
                title: 'Telefon',
                val: '+48 725 451 607',
                sub: 'pon–pt 8:00–16:00',
                href: 'tel:+48725451607',
              },
              {
                icon: '✉️',
                title: 'E-mail',
                val: 'biuro@epcsolar.eu',
                sub: 'odpowiedź w 24h',
                href: 'mailto:biuro@epcsolar.eu',
              },
              {
                icon: '📍',
                title: 'Siedziba',
                val: 'ul. A. Struga 14, 95-100 Zgierz',
                sub: 'Otwórz w Google Maps →',
                href: '#',
              },
            ].map(({ icon, title, val, sub, href }) => (
              <a
                key={title}
                href={href}
                className="bg-gray-800 border border-gray-700 hover:border-blue-500 rounded p-5 transition-colors block"
              >
                <div className="text-2xl mb-3">{icon}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">{title}</div>
                <div className="text-sm font-semibold text-white mb-1">{val}</div>
                <div className="text-xs text-blue-400">{sub}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULARZ + MAPA ──────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12 items-start">

          {/* LEWA — formularz (3/5) */}
          <div className="md:col-span-3">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Wyślij zapytanie ofertowe</h2>

            <form onSubmit={e => e.preventDefault()} className="space-y-5">

              {/* typ inwestycji */}
              <div>
                <label className={LABEL_CLS}>Typ inwestycji</label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { key: 'pv', label: 'Farma PV' },
                    { key: 'bess', label: 'BESS' },
                    { key: 'dach', label: 'Dachowa' },
                    { key: 'carport', label: 'Carport' },
                    { key: 'inne', label: 'Inne' },
                  ].map(({ key, label }) => (
                    <label key={key} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={types[key]}
                        onChange={() => toggleType(key)}
                        className="rounded"
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </div>

              {/* imię + firma */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={LABEL_CLS}>Imię i nazwisko *</label>
                  <input type="text" placeholder="Jan Kowalski" value={form.name} onChange={setF('name')} className={INPUT_CLS} />
                </div>
                <div>
                  <label className={LABEL_CLS}>Firma</label>
                  <input type="text" placeholder="Nazwa firmy" value={form.company} onChange={setF('company')} className={INPUT_CLS} />
                </div>
              </div>

              {/* telefon + email */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={LABEL_CLS}>Telefon *</label>
                  <input type="tel" placeholder="+48 600 000 000" value={form.phone} onChange={setF('phone')} className={INPUT_CLS} />
                </div>
                <div>
                  <label className={LABEL_CLS}>E-mail *</label>
                  <input type="email" placeholder="jan@firma.pl" value={form.email} onChange={setF('email')} className={INPUT_CLS} />
                </div>
              </div>

              {/* województwo */}
              <div>
                <label className={LABEL_CLS}>Województwo</label>
                <select value={form.voi} onChange={setF('voi')} className={INPUT_CLS}>
                  <option value="">Wybierz województwo…</option>
                  {VOIVODESHIPS.map(v => <option key={v}>{v}</option>)}
                </select>
              </div>

              {/* moc */}
              <div>
                <label className={LABEL_CLS}>Szacunkowa moc instalacji</label>
                <select value={form.power} onChange={setF('power')} className={INPUT_CLS}>
                  <option value="">Wybierz przedział mocy…</option>
                  {POWER_OPTIONS.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>

              {/* wiadomość */}
              <div>
                <label className={LABEL_CLS}>Dodatkowe informacje</label>
                <textarea
                  rows={4}
                  placeholder="Opisz projekt, lokalizację, termin realizacji lub zadaj pytanie…"
                  value={form.msg}
                  onChange={setF('msg')}
                  className={`${INPUT_CLS} resize-none`}
                />
              </div>

              {/* RODO */}
              <div className="space-y-2">
                <label className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer">
                  <input type="checkbox" checked={form.rodo1} onChange={setF('rodo1')} className="mt-0.5 shrink-0" />
                  Wyrażam zgodę na przetwarzanie moich danych osobowych przez EPC Solar Sp. z o.o. w celu obsługi zapytania. *
                </label>
                <label className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer">
                  <input type="checkbox" checked={form.rodo2} onChange={setF('rodo2')} className="mt-0.5 shrink-0" />
                  Wyrażam zgodę na kontakt telefoniczny lub e-mailowy w celach handlowych.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-sm font-semibold rounded transition-colors"
              >
                Wyślij zapytanie ofertowe
              </button>

              <p className="text-xs text-gray-400 text-center">
                Odpowiadamy w ciągu 24 godzin w dni robocze.
              </p>
            </form>
          </div>

          {/* PRAWA — mapa + dane (2/5) */}
          <div className="md:col-span-2 space-y-5">
            <ImagePlaceholder
              label="Google Maps — siedziba EPC Solar, ul. A. Struga 14, Zgierz"
              aspectRatio="1/1"
            />

            {/* dane firmy */}
            <div className="border border-gray-200 rounded p-5 text-sm">
              <div className="font-semibold text-gray-900 mb-3">EPC Solar Sp. z o.o.</div>
              <dl className="space-y-2 text-xs">
                {[
                  ['Adres', 'ul. A. Struga 14, 95-100 Zgierz'],
                  ['NIP', '7322218004'],
                  ['Telefon', '+48 725 451 607'],
                  ['E-mail', 'biuro@epcsolar.eu'],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-3">
                    <dt className="text-gray-400 w-14 shrink-0">{k}</dt>
                    <dd className="text-gray-900 font-medium">{v}</dd>
                  </div>
                ))}
              </dl>

              {/* social */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex gap-2 flex-wrap">
                  {['LinkedIn', 'YouTube'].map(s => (
                    <span
                      key={s}
                      className="bg-gray-100 border border-gray-200 text-gray-500 text-xs px-3 py-1 rounded cursor-pointer hover:bg-gray-200 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                  <Annotation>Linki social do dodania przez klienta</Annotation>
                </div>
              </div>
            </div>
          </div>

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
                  <div className="px-5 pb-4 pt-3 text-sm text-gray-600 border-t border-gray-100">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
