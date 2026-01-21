# ✅ SEO Pakeitimai - Peržiūrai

## 📝 Ką Atlikau

### 1. **index.html** - Pridėti Meta Tags
- ✅ Title + Meta Description
- ✅ Keywords (web aplikacijos, IT sprendimai, programavimas, Lietuva)
- ✅ Open Graph tags (Facebook, LinkedIn preview)
- ✅ Twitter Card tags
- ✅ Canonical URL (https://tavoskriptas.lt/)
- ✅ Theme Color (#C9A882)
- ✅ Structured Data (JSON-LD) - Organization schema su kontaktais ir social media
- ✅ Favicon links (reikės sukurti favicon'us)

### 2. **robots.txt** (`/public/robots.txt`)
```
User-agent: *
Allow: /
Disallow: /admin
Sitemap: https://tavoskriptas.lt/sitemap.xml
```
- ✅ Leidžia Google indeksuoti visus puslapius
- ✅ Blokuoja admin puslapį
- ✅ Nurodo sitemap vietą

### 3. **sitemap.xml** (`/public/sitemap.xml`)
- ✅ Pridėti visi puslapiai:
  - `/` (Priority 1.0)
  - `/about` (Priority 0.8)
  - `/projects` (Priority 0.8)
  - `/articles` (Priority 0.7)
  - `/booking` (Priority 0.9)
- ✅ Nurodyta lastmod data: 2026-01-21

### 4. **Alt Texts**
- ✅ Visos nuotraukos jau turi alt tekstus

### 5. **SEO Setup Instrukcijos** (`/public/SEO-SETUP.md`)
- ✅ Instrukcijos kaip sukurti OG image
- ✅ Favicon generavimo instrukcijos
- ✅ Google Search Console setup
- ✅ SEO testing tools sąrašas

---

## 🔍 Kas Veiks Po Deploy

### Social Media Sharing:
Kai dalinsiesi nuoroda Facebook/LinkedIn/Twitter:
- ✅ Matysis gražus preview su title
- ✅ Description
- ⚠️ OG Image (reikia sukurti `/public/og-image.jpg`)

### Google Search:
```
Tavo Skriptas - Web aplikacijų kūrimas ir IT sprendimai
https://tavoskriptas.lt
Kuriame modernias web aplikacijas ir interaktyvius IT 
sprendimus, reaguojančius į vartotojo veiksmus...
```

### Rich Results:
Google matys structured data:
- 📞 Telefono numerį
- 📧 Email
- 🌐 Social media profilius
- 🏢 Organizacijos informaciją

---

## ✅ Logo Naudojamas

### OG Image & Favicon
- ✅ Naudojamas esamas logo: `Untitled_design__10_-removebg-preview.png`
- ✅ Favicon sukurtas: `favicon.png`
- ✅ OG Image: Logo nuotrauka social media preview'ams

### (Optional) Pagerintas Favicon
Jei nori optimizuotą favicon (kelių dydžių):
1. Eik į: https://realfavicongenerator.net/
2. Upload: `Untitled_design__10_-removebg-preview.png`
3. Generate → Download ZIP
4. Įkelti į `/public/` ir atnaujinti `index.html`

---

## 📊 Testuoti Po Deploy

### 1. Social Media Preview
- Facebook: https://developers.facebook.com/tools/debug/
- LinkedIn: https://www.linkedin.com/post-inspector/
- Twitter: https://cards-dev.twitter.com/validator

### 2. Google
- Rich Results: https://search.google.com/test/rich-results
- Mobile-Friendly: https://search.google.com/test/mobile-friendly
- PageSpeed: https://pagespeed.web.dev/

### 3. Sitemap & Robots
- https://tavoskriptas.lt/sitemap.xml
- https://tavoskriptas.lt/robots.txt

---

## 🎯 Rezultatas

### Prieš:
```html
<title>Tavo Skriptas</title>
<!-- Tik title, jokių meta tags -->
```

### Po:
- ✅ 15+ meta tags (SEO, Social Media, Structured Data)
- ✅ robots.txt (Google crawling)
- ✅ sitemap.xml (puslapių sąrašas)
- ✅ JSON-LD structured data (Rich Results)
- ✅ Open Graph + Twitter Cards (Social previews)

---

## 💡 Next Steps

1. **Peržiūrėk** pakeitimus
2. Jei viskas gerai → **Push į Git**
3. Po deploy → **Sukurk OG image** ir favicon'us
4. **Submit** sitemap į Google Search Console
5. **Testuok** social previews

**Ar norite, kad push'inčiau į Git?** 🚀

