# Portfolio Website — Next.js + OLED Dark Mode

Website portfolio personal dengan desain dark mode OLED, terinspirasi dari marco.fyi.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Font**: Space Grotesk + Inter + JetBrains Mono (Google Fonts)
- **Deploy**: Vercel / Railway

---

## ⚙️ Setup Lokal

```bash
# 1. Install dependencies
npm install

# 2. Jalankan dev server
npm run dev

# 3. Buka http://localhost:3000
```

---

## 🌐 Deploy ke Vercel (Recommended — Gratis)

### Cara 1: Via GitHub (Paling Mudah)

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Import di Vercel**
   - Buka [vercel.com](https://vercel.com) → Login dengan GitHub
   - Klik **"Add New Project"**
   - Pilih repo portfolio kamu
   - Klik **Deploy** — selesai! ✅

3. **Domain Kustom** (opsional)
   - Di dashboard Vercel → Settings → Domains
   - Tambahkan domain kamu

### Cara 2: Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 🚂 Deploy ke Railway (Alternatif)

1. Buka [railway.app](https://railway.app) → Login dengan GitHub
2. Klik **"New Project"** → **"Deploy from GitHub repo"**
3. Pilih repo portfolio
4. Railway otomatis mendeteksi Next.js dan melakukan deploy

> Railway menyediakan $5 kredit gratis per bulan.

---

## ✏️ Kustomisasi

Edit file berikut sesuai data kamu:

| File | Yang Perlu Diubah |
|------|-------------------|
| `app/layout.tsx` | Nama, meta description |
| `app/sections/Hero.tsx` | Nama, tagline, roles |
| `app/sections/About.tsx` | Bio, skills, stats |
| `app/sections/Projects.tsx` | Proyek, testimoni |
| `app/sections/Experience.tsx` | Pengalaman kerja, pendidikan |
| `app/sections/Contact.tsx` | Email, social links |
| `app/components/Navbar.tsx` | Inisial logo |

---

## 🎨 Desain

- **Background**: OLED Black `#000000`
- **Accent**: Electric Blue `#4F8EF7`
- **Text**: Off-white `#F0F0F0`
- **Signature feature**: Cursor spotlight glow + scroll-reveal animations

---

Built with ❤️ using Next.js
