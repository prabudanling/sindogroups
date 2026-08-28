<div align="center">

<img src="public/logo-sindo.png" alt="Logo SINDO GROUPS" width="140" />

# SINDO GROUPS

### *Ekosistem Korporasi Terintegrasi*

**Solusi Investasi untuk Indonesia Maju** 🇮🇩

*"Dari struktur yang jelas menuju pertumbuhan yang bernilai."*

[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Prisma 6](https://img.shields.io/badge/Prisma-6-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io)
[![Bun](https://img.shields.io/badge/⚡_Bun-runtime-f9f1e1?style=for-the-badge&logo=bun&logoColor=black)](https://bun.sh)

[Panduan Cepat](#-panduan-cepat) · [Fitur](#-fitur-unggulan) · [Struktur](#-struktur-proyek) · [API](#-dokumentasi-api) · [Deployment](#-deployment)

</div>

---

> 🏛️ **PT Solusi Investasi Indonesia (PT SINDO)**
> Didirikan 13 Juli 2026 di Jakarta · NIB 1707260172236
> Strategi · Hukum · Teknologi · Operasi · Kemitraan · Investasi
> Horizon Strategis **2026–2030**

Website company profile resmi **SINDO GROUPS** — dibangun dengan teknologi web modern, responsif penuh dari iPhone lawas 320px hingga desktop lebar, didukung asisten AI bilingual dan formulir kontak yang tersimpan di database.

---

## 📑 Daftar Isi

- [✨ Fitur Unggulan](#-fitur-unggulan)
- [🧭 Peta Halaman](#-peta-halaman)
- [🛠️ Teknologi](#️-teknologi)
- [🚀 Panduan Cepat](#-panduan-cepat)
- [📁 Struktur Proyek](#-struktur-proyek)
- [🔌 Dokumentasi API](#-dokumentasi-api)
- [🗄️ Basis Data](#️-basis-data)
- [🌍 Sistem Dwibahasa](#-sistem-dwibahasa-id--en)
- [📱 Responsivitas & iOS](#-responsivitas--ios)
- [🎨 Design System](#-design-system)
- [🧹 Pipeline Logo](#-pipeline-logo)
- [📜 Skrip NPM](#-skrip-npm)
- [🚢 Deployment](#-deployment)
- [🤝 Kontribusi](#-kontribusi)
- [📄 Lisensi](#-lisensi)
- [📞 Kontak](#-kontak)

---

## ✨ Fitur Unggulan

| | Fitur | Deskripsi |
|:---:|---|---|
| 🤖 | **Asisten AI "SINDO"** | Chatbot pintar berbasis LLM yang memahami seluruh profil perusahaan — layanan, Smart Port, mitra, roadmap — dan menjawab dalam Bahasa Indonesia atau Inggris sesuai bahasa aktif pengunjung. |
| 🌍 | **Dwibahasa Penuh (ID ⇄ EN)** | Satu klik untuk beralih bahasa. Pilihan tersimpan di `localStorage` dan seluruh 14 section diterjemahkan secara instan tanpa reload. |
| 📬 | **Formulir Kontak Pintar** | Validasi server-side, sanitasi input, tersimpan permanen ke SQLite melalui Prisma, dengan notifikasi toast yang elegan. |
| 📱 | **Responsif Sampai ke Piksel** | Diaudit di 320px · 360px · 390px · 768px · 844px landscape · 1280px — **nol** overflow horizontal, semua garis konektor orbital hero tetap tersambung di ukuran layar apa pun. |
| 🍎 | **Perisai iOS Safari** | Safe-area insets (notch & home indicator), `100svh/100dvh` anti-lompat URL bar, anti auto-zoom pada input, momentum scroll. |
| 🏗️ | **Diagram Radial Interaktif** | Struktur 5 fungsi perusahaan divisualisasikan sebagai diagram radial di desktop, dan otomatis berubah menjadi kartu grid yang rapi di ponsel. |
| ⚓ | **Smart Port GalaxyLink** | 12 solusi pelabuhan cerdas + arsitektur 5 langkah (Persepsi → Kognisi → Keputusan → Pelaksanaan → Evaluasi) dengan visual timeline. |
| 🗺️ | **Roadmap 2026–2030** | Timeline lima fase: Fondasi → Konsolidasi → Pengembangan Skala → Integrasi → Realisasi Nilai. |
| 🖼️ | **Logo Transparan Bersih** | Emblem emas diproses otomatis (script `sharp`) — tanpa kotak putih, tanpa halo, tajam di latar navy gelap maupun krem terang. |

<div align="right"><a href="#-daftar-isi">⬆️ kembali ke atas</a></div>

---

## 🧭 Peta Halaman

Halaman satu-rute (one-page) dengan navigasi smooth-scroll — 14 section dalam urutan berikut:

| # | Section | ID Anchor | Isi |
|:---:|---|---|---|
| 1 | **Hero** | `#beranda` | Judul, tagline, diagram orbital ekosistem 7 simpul |
| 2 | **Tentang Kami** | `#tentang` | Profil PT SINDO, motto, slogan, fakta legal |
| 3 | **Nilai Inti** | `#nilai` | INTEGRITAS · TEKNOLOGI · KEBERLANJUTAN |
| 4 | **Bidang Usaha** | `#bidang-usaha` | 7 simpul ekosistem digital + 6 bidang prioritas |
| 5 | **Layanan** | `#layanan` | Ruang lingkup: strategi, hukum, teknologi, operasi, kemitraan, investasi |
| 6 | **Smart Port** | `#smart-port` | 12 solusi GalaxyLink + arsitektur 5 langkah |
| 7 | **Struktur** | `#struktur` | 5 fungsi ekosistem (diagram radial / grid kartu) |
| 8 | **Proyek** | `#proyek` | Pengadaan alat pemadam modern, pilot Smart Port 2027–2029 |
| 9 | **Mitra** | `#mitra` | 21+ mitra strategis domestik & internasional |
| 10 | **Roadmap** | `#roadmap` | 2026–2030 dalam 5 fase |
| 11 | **Tata Kelola** | `#tata-kelola` | 6 dimensi + persamaan KEPERCAYAAN |
| 12 | **Kepemimpinan & Legal** | `#kepemimpinan` | Komisaris Utama & Direktur Utama, akta, NIB |
| 13 | **Kontak** | `#kontak` | Formulir + telepon + WhatsApp + email + alamat |
| 14 | **Footer** | — | Navigasi cepat, kontak, copyright |

> ➕ **Chatbot FAB** mengambang di kanan bawah pada semua section, dengan panel obrolan full-height di ponsel.

<div align="right"><a href="#-daftar-isi">⬆️ kembali ke atas</a></div>

---

## 🛠️ Teknologi

<div align="center">

| Lapisan | Teknologi |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev) |
| **Bahasa** | [TypeScript 5](https://www.typescriptlang.org) (strict) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) (New York) |
| **Komponen** | Radix UI · Lucide Icons · Framer Motion · Sonner (toast) |
| **Database** | SQLite + [Prisma ORM 6](https://www.prisma.io) |
| **AI** | `z-ai-web-dev-sdk` (LLM chat completions) |
| **Runtime** | [Bun](https://bun.sh) 🥟 |
| **Font** | Inter (UI) · Playfair Display (display serif) |

</div>

### Mengapa stack ini?

- ⚡ **Bun** — instalasi & menjalankan dev server jauh lebih cepat daripada npm/node
- 🔷 **App Router** — streaming, metadata SEO otomatis, dan `Viewport` export untuk `viewportFit: cover` (wajib untuk safe-area iOS)
- 🧩 **shadcn/ui** — komponen accessible (Radix) yang bisa dimodifikasi penuh, bukan black box
- 💾 **SQLite via Prisma** — nol konfigurasi, cocok untuk company profile; siap migrasi ke PostgreSQL hanya dengan ganti `provider`

<div align="right"><a href="#-daftar-isi">⬆️ kembali ke atas</a></div>

---

## 🚀 Panduan Cepat

### Prasyarat

| Alat | Versi Minimum | Catatan |
|---|---|---|
| [Bun](https://bun.sh) | ≥ 1.1 | *Rekomendasi utama* |
| Node.js *(alternatif)* | ≥ 20.9 | Bila tidak memakai Bun |
| Git | any | — |

### Instalasi

```bash
# 1️⃣ Clone repositori
git clone https://github.com/prabudanling/sindogroups.git
cd sindogroups

# 2️⃣ Install dependencies
bun install

# 3️⃣ Siapkan environment
echo 'DATABASE_URL=file:./db/custom.db' > .env

# 4️⃣ Generate Prisma Client + sinkronkan skema
bun run db:generate
bun run db:push

# 5️⃣ Jalankan dev server
bun run dev
```

🎉 Buka **http://localhost:3000** — website siap!

> 💡 **Tips:** Jalankan `bun run lint` untuk memeriksa kualitas kode sebelum commit.

<details>
<summary><b>🥖 Tanpa Bun (pakai Node.js)?</b></summary>

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

</details>

<div align="right"><a href="#-daftar-isi">⬆️ kembali ke atas</a></div>

---

## 📁 Struktur Proyek

```
sindogroups/
├── 📂 src/
│   ├── 📂 app/
│   │   ├── 📂 api/
│   │   │   ├── 📂 chat/          → 🤖 POST endpoint chatbot AI
│   │   │   ├── 📂 contact/       → 📬 POST endpoint formulir kontak
│   │   │   └── route.ts          → health check
│   │   ├── globals.css           → tema navy-gold, utilitas safe-area
│   │   ├── layout.tsx            → metadata SEO, font, providers
│   │   └── page.tsx              → komposisi 14 section
│   ├── 📂 components/
│   │   ├── 📂 chatbot/           → FAB mengambang + panel obrolan
│   │   ├── 📂 sections/          → 14 section halaman
│   │   │   ├── hero.tsx            → orbital ekosistem responsif
│   │   │   ├── about.tsx  values.tsx  services.tsx
│   │   │   ├── business-sectors.tsx  smart-port.tsx
│   │   │   ├── structure.tsx         → radial (desktop) / grid (mobile)
│   │   │   ├── projects.tsx  partners.tsx  roadmap.tsx
│   │   │   ├── governance.tsx  leadership-legal.tsx
│   │   │   └── contact.tsx  footer.tsx
│   │   ├── 📂 ui/                → komponen shadcn/ui
│   │   ├── navbar.tsx            → header fixed + menu mobile
│   │   ├── language-context.tsx  → state dwibahasa (localStorage)
│   │   └── section-heading.tsx   → judul section konsisten
│   ├── 📂 lib/
│   │   ├── db.ts                 → Prisma Client singleton
│   │   ├── sindo-data.ts         → 🌟 SEMUA konten bilingual (tipe `Bi`)
│   │   └── utils.ts              → cn() helper
│   └── 📂 hooks/                 → custom hooks
├── 📂 prisma/schema.prisma       → model ContactMessage & ChatLog
├── 📂 db/custom.db               → berkas SQLite
├── 📂 scripts/clean-logo.ts      → pipeline transparansi logo (sharp)
├── 📂 public/                    → logo transparan, gambar, robots.txt
├── next.config.ts · tailwind.config.ts · tsconfig.json
└── package.json
```

> 🌟 **Kunci pengeditan konten:** hampir semua teks halaman hidup di **`src/lib/sindo-data.ts`** dengan tipe `Bi = { id: string; en: string }`. Ubah satu file, seluruh situs ikut berubah dalam dua bahasa.

<div align="right"><a href="#-daftar-isi">⬆️ kembali ke atas</a></div>

---

## 🔌 Dokumentasi API

### `POST /api/chat` — Asisten AI

Chatbot conversational dengan *system prompt* korporat lengkap (ID & EN).

```ts
// Request
{
  "messages": [
    { "role": "user", "content": "Apa itu Smart Port GalaxyLink?" }
  ],
  "lang": "id"          // "id" | "en"
}

// Response 200
{
  "ok": true,
  "reply": "Smart Port GalaxyLink adalah 12 solusi pelabuhan cerdas ...",
  "sessionId": "cuid..."
}
```

**Cara kerja:**
1. Pesan pengguna disimpan ke tabel `ChatLog`
2. *System prompt* dipilih sesuai `lang` (memuat fakta perusahaan, larangan mengarang data, batas format markdown)
3. LLM menghasilkan jawaban → disimpan ke `ChatLog` → dikirim balik
4. Jawaban dirender sebagai markdown ringkas di panel chat

| Error | Arti |
|---|---|
| `400` | `messages` kosong / format salah |
| `500` | kegagalan LLM / database |

---

### `POST /api/contact` — Formulir Kontak

```ts
// Request
{
  "name": "Budi Santoso",              // wajib
  "email": "budi@contoh.id",           // wajib
  "message": "Saya tertarik kolaborasi...", // wajib
  "phone": "+6281234567890",           // opsional
  "organization": "PT Contoh",         // opsional
  "interest": "Smart Port",            // opsional
  "lang": "id"                         // "id" | "en"
}

// Response 200
{ "ok": true, "id": "cmxxxx..." }

// Response 400 (validasi)
{ "ok": false, "error": "name, email, and message are required" }
```

**Keamanan:** setiap field di-*sanitize* (`String(x).slice(0, N)`) untuk membatasi panjang, lalu disimpan ke tabel `ContactMessage` dengan status awal `new`.

<div align="right"><a href="#-daftar-isi">⬆️ kembali ke atas</a></div>

---

## 🗄️ Basis Data

SQLite — ringan, tanpa server, satu berkas di `db/custom.db`.

```prisma
model ContactMessage {
  id           String   @id @default(cuid())
  name         String
  email        String
  phone        String?
  organization String?
  interest     String?
  message      String
  lang         String   @default("id")
  status       String   @default("new")   // new | read | replied
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
  @@index([status])
  @@index([createdAt])
}

model ChatLog {
  id        String   @id @default(cuid())
  sessionId String
  role      String   // user | assistant
  content   String
  lang      String   @default("id")
  createdAt DateTime @default(now())
  @@index([sessionId])
  @@index([createdAt])
}
```

### Perintah database

```bash
bun run db:generate   # regenerate Prisma Client setelah edit schema
bun run db:push       # sinkronkan schema → database
bun run db:migrate    # migration mode (riwayat perubahan)
bun run db:reset      # ⚠️ hapus semua data
```

### Melihat pesan masuk

```bash
sqlite3 db/custom.db "SELECT name, email, substr(message,1,60) FROM ContactMessage ORDER BY createdAt DESC;"
```

> 🚀 **Migrasi ke PostgreSQL/MySQL?** Cukup ubah `provider` di `prisma/schema.prisma`, perbarui `DATABASE_URL`, jalankan `bun run db:push`. Tidak ada perubahan kode aplikasi.

<div align="right"><a href="#-daftar-isi">⬆️ kembali ke atas</a></div>

---

## 🌍 Sistem Dwibahasa (ID ⇄ EN)

Arsitektur terjemahan tanpa library i18n eksternal — sederhana, cepat, type-safe:

```ts
// src/lib/sindo-data.ts
export type Bi = { id: string; en: string };

export const HERO_TITLE: Bi = {
  id: "Ekosistem Korporasi Terintegrasi",
  en: "Integrated Corporate Ecosystem",
};
```

```tsx
// Di komponen mana pun
const { lang, setLang, toggle, t } = useLang();
<h1>{t(HERO_TITLE)}</h1>        // otomatis sesuai bahasa aktif
<button onClick={toggle}>ID ⇄ EN</button>
```

- 💾 Pilihan bahasa **tersimpan** di `localStorage` (key: `sindo-lang`)
- 🔄 `t()` fallback ke `id` bila terjemahan kosong
- 🤖 Chatbot otomatis ikut berbahasa sesuai pilihan pengunjung

<details>
<summary><b>➕ Menambah bahasa ketiga (mis. 中文)?</b></summary>

1. Ubah `type Lang = "id" | "en"` menjadi `"id" | "en" | "zh"` di `src/lib/sindo-data.ts`
2. Ubah `type Bi = { id: string; en: string; zh: string }` dan lengkapi semua entri
3. Perbarui `LanguageContext` agar menyimpan & memvalidasi `"zh"`
4. Tambah tombol **中** di navbar
5. Duplikasi `SYSTEM_PROMPT` ketiga di `src/app/api/chat/route.ts`

</details>

<div align="right"><a href="#-daftar-isi">⬆️ kembali ke atas</a></div>

---

## 📱 Responsivitas & iOS

Website ini lolos audit di **6 profil viewport**: `320 · 360 · 390 · 768 · 844 (landscape) · 1280` dengan **nol overflow horizontal**.

### Perisai khusus iOS Safari 🍎

| Masalah Klasik | Solusi di Repo |
|---|---|
| Konten tertutup notch / home indicator | `viewportFit: cover` + utilitas `.pt-safe` `.pb-safe` `.px-safe` (env safe-area-inset) |
| URL bar menyusut → lompatan `100vh` | `.min-h-hero` → `100svh`, panel chat → `100dvh` dengan fallback |
| Input otomatis **zoom** saat fokus | `pointer:coarse` → semua input/textarea/select dipaksa `16px` |
| Scroll tanpa inersia | `.touch-scroll` → `-webkit-overflow-scrolling: touch` + `overscroll-behavior: contain` |
| Tap berkedip biru | `-webkit-tap-highlight-color: transparent` |
| Teks melebar otomatis saat rotate | `-webkit-text-size-adjust: 100%` |

### Strategi adaptif per komponen

| Komponen | ≥ `md` (768px) | < `md` (ponsel) |
|---|---|---|
| **Hero** | Diagram orbital dengan posisi **persentase** (`viewBox 0 0 100 100`) — garis konektor selalu tepat menyambung ke node | Ukuran container 300px, node & font diskalakan turun |
| **Struktur** | Diagram radial 5 fungsi | Banner identitas + grid kartu 1–2 kolom |
| **Chatbot** | Panel 400px mengambang | Panel **full-screen** dengan safe-area |
| **Navbar** | Menu horizontal lengkap | Hamburger + panel gulir penuh |

> 🧪 **Verifikasi ulang sendiri:**
> `DevTools → Toggle device toolbar` → coba 320px (iPhone SE lama) hingga 1280px.
> Yang wajib dicek: tidak ada scrollbar horizontal, garis orbital hero tersambung semua, menu hamburger membuka/menutup mulus, panel chat tidak tertutup home indicator.

<div align="right"><a href="#-daftar-isi">⬆️ kembali ke atas</a></div>

---

## 🎨 Design System

### Palet warna — *Navy Maritim & Emas Prestise*

| Token | Hex | Peran |
|---|:---:|---|
| `navy-deep` | `#081728` | Latar utama (hero, footer, navbar) |
| `navy` | `#0f2540` | Latar kartu & panel |
| `navy-light` | `#1b3a5c` | Border, elemen aktif |
| `gold` | `#d4af37` | Aksen utama, CTA, logo |
| `gold-light` | `#e6c75a` | Hover & highlight |
| `cream` | `#f5f1e6` | Teks di latar gelap |

### Tipografi

| Font | Peran | Contoh |
|---|---|---|
| **Playfair Display** | Judul display (serif elegan) | Judul hero, heading section |
| **Inter** | Body & UI (sans modern) | Paragraf, tombol, form |

### Utilitas kustom (`globals.css`)

```css
.min-h-hero   /* tinggi hero: 100svh anti-lompat URL bar */
.chat-panel-h /* tinggi panel chat: 100dvh */
.pt-safe / .pb-safe / .px-safe  /* safe-area iOS */
.touch-scroll /* momentum scroll + contain */
```

<div align="right"><a href="#-daftar-isi">⬆️ kembali ke atas</a></div>

---

## 🧹 Pipeline Logo

Logo asli berlatar putih kotak — jelek di navbar navy gelap. Script reproducible memperbaikinya secara otomatis:

```bash
bunx tsx scripts/clean-logo.ts
```

**Yang dilakukan script (`scripts/clean-logo.ts`, berbasis `sharp`):**

1. 🔍 **Deteksi bounding box emblem** otomatis (scan piksel non-latar)
2. ✂️ **Hapus latar mendekati putih** dengan *graded alpha* (bukan hard cut → tepi alami)
3. 🧴 **Dekontaminasi tepi** (*un-blend from white*) → piksel anti-alias tidak meninggalkan **halo putih** di latar gelap
4. 📤 Ekspor 3 varian:

| Berkas | Ukuran | Peran |
|---|---|---|
| `public/logo-sindo.png` | 320×320 | Emblem transparan utama (navbar, hero, favicon) |
| `public/logo-sindo-sm.png` | 180×180 | Varian kecil |
| `public/logo-sindo-full.png` | 320×320 | Emblem + wordmark (cadangan) |

<div align="right"><a href="#-daftar-isi">⬆️ kembali ke atas</a></div>

---

## 📜 Skrip NPM

| Perintah | Fungsi |
|---|---|
| `bun run dev` | 🔥 Dev server di port **3000** (log → `dev.log`) |
| `bun run build` | 📦 Build produksi (standalone + salin static/public) |
| `bun run start` | 🚀 Jalankan server produksi |
| `bun run lint` | 🧪 ESLint (Next.js + TypeScript) |
| `bun run db:generate` | ⚙️ Generate Prisma Client |
| `bun run db:push` | 💾 Sinkron schema → database |
| `bun run db:migrate` | 🗃️ Migrasi dengan riwayat |
| `bun run db:reset` | ⚠️ Reset database (hapus data!) |

<div align="right"><a href="#-daftar-isi">⬆️ kembali ke atas</a></div>

---

## 🚢 Deployment

### Vercel (paling mudah)

1. Push repo ini ke GitHub
2. [vercel.com/new](https://vercel.com/new) → import repo
3. Tambahkan Environment Variable: `DATABASE_URL=file:./db/custom.db`
   > ⚠️ Vercel *serverless* = filesystem read-only. Untuk produksi, migrasikan ke **PostgreSQL** (Vercel Postgres / Neon / Supabase): ganti `provider = "postgresql"` di `prisma/schema.prisma` lalu `bun run db:push`
4. Deploy 🚀

### VPS / Dedicated (pm2 + nginx)

```bash
# Build & jalankan
bun run build
pm2 start "bun .next/standalone/server.js" --name sindo-groups

# Reverse proxy nginx
location / {
  proxy_pass http://127.0.0.1:3000;
  proxy_set_header Host $host;
  proxy_set_header X-Forwarded-Proto $scheme;
}
```

> 💾 Di VPS, SQLite aman dipakai langsung (filesystem persisten) — backup rutin `db/custom.db` sudah cukup.

<div align="right"><a href="#-daftar-isi">⬆️ kembali ke atas</a></div>

---

## 🤝 Kontribusi

1. 🔱 Fork repositori
2. 🌿 Buat branch fitur: `git checkout -b fitur/keajaiban-baru`
3. ✏️ Commit: `git commit -m "feat: tambah keajaiban baru"`
4. 📤 Push: `git push origin fitur/keajaiban-baru`
5. 🔃 Buka Pull Request

**Konvensi commit:** `feat:` · `fix:` · `style:` · `refactor:` · `docs:` · `chore:`

<div align="right"><a href="#-daftar-isi">⬆️ kembali ke atas</a></div>

---

## 📄 Lisensi

© 2026 **PT Solusi Investasi Indonesia (PT SINDO)** — SINDO GROUPS.
Seluruh hak cipta atas konten, brand, dan materi perusahaan dilindungi.

<div align="right"><a href="#-daftar-isi">⬆️ kembali ke atas</a></div>

---

## 📞 Kontak

<div align="center">

**PT Solusi Investasi Indonesia — SINDO GROUPS**

📍 Apartemen Regatta Tower Dubai #11C, Pantai Mutiara, Pluit, Penjaringan, Jakarta Utara 14450

☎️ (021) 29196545 · +62 813-8575-6922 · +62 813-8575-6924

✉️ ptsolusiinvestasiindonesia@gmail.com

💬 WhatsApp +62 813-8575-6922

---

*TERPERCAYA · BERBASIS TEKNOLOGI · EFISIEN · SIAP INVESTASI*

**⭐ Bintangi repositori ini bila bermanfaat!**

</div>
