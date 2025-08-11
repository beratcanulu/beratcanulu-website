# Berat Canulu - Personal Website

Modern, responsive ve dinamik kişisel website projesi. Node.js backend ve EJS templating engine kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Responsive Design**: Tüm cihazlarda mükemmel görünüm
- **Modern UI/UX**: Tailwind CSS ile şık tasarım
- **Dynamic Content**: EJS templating ile dinamik içerik
- **Contact Form**: Çalışan iletişim formu
- **SEO Optimized**: Arama motoru dostu yapı
- **Fast Loading**: Optimize edilmiş performans
- **Social Media Integration**: Sosyal medya linkleri
- **Portfolio Showcase**: Proje vitrin sayfası

## 🛠️ Teknolojiler

- **Backend**: Node.js, Express.js
- **Frontend**: EJS, Tailwind CSS, JavaScript
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter, JetBrains Mono)
- **Development**: Nodemon

## 📁 Proje Yapısı

```
beratcanulu-website/
├── views/                 # EJS template dosyaları
│   ├── layout.ejs        # Ana layout template
│   ├── index.ejs         # Ana sayfa
│   ├── about.ejs         # Hakkımda sayfası
│   ├── projects.ejs      # Projeler sayfası
│   └── contact.ejs       # İletişim sayfası
├── public/               # Statik dosyalar
│   ├── css/             # CSS dosyaları
│   │   ├── input.css    # Tailwind input
│   │   └── output.css   # Tailwind output (otomatik oluşur)
│   └── images/          # Resim dosyaları
├── server.js             # Ana server dosyası
├── package.json          # Proje bağımlılıkları
├── tailwind.config.js    # Tailwind konfigürasyonu
└── README.md             # Proje dokümantasyonu
```

## 🚀 Kurulum

1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/beratcanulu/beratcanulu-website.git
   cd beratcanulu-website
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Tailwind CSS'i build edin:**
   ```bash
   npm run build-css
   ```

4. **Development server'ı başlatın:**
   ```bash
   npm run dev
   ```

5. **Tarayıcıda açın:**
   ```
   http://localhost:3000
   ```

## 📝 Kullanım

### Development
```bash
npm run dev          # Development mode (nodemon ile)
npm run build-css    # Tailwind CSS build
```

### Production
```bash
npm start            # Production mode
```

## 🔧 Konfigürasyon

### Kişisel Bilgileri Güncelleme

`server.js` dosyasında aşağıdaki bilgileri güncelleyin:

```javascript
// Ana sayfa verileri
{
    name: 'Berat Canulu',
    role: 'Software Developer',
    description: 'Computer Engineer & Full Stack Developer',
    skills: ['JavaScript', 'Node.js', 'React', 'Python', 'Java', 'SQL', 'MongoDB', 'AWS'],
    experience: [...],
    education: {...}
}
```

### Sosyal Medya Linkleri

`views/layout.ejs` ve `views/contact.ejs` dosyalarında sosyal medya linklerini güncelleyin:

```html
<a href="https://github.com/beratcanulu" target="_blank">
    <i class="fab fa-github"></i>
</a>
```

### Profil Fotoğrafı

`public/images/` klasörüne `profile.jpg` adında profil fotoğrafınızı ekleyin.

## 🎨 Özelleştirme

### Renkler
`tailwind.config.js` dosyasında renk paletini özelleştirin:

```javascript
colors: {
    primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        // ... diğer tonlar
    }
}
```

### Fontlar
Google Fonts'tan yeni fontlar ekleyin ve `tailwind.config.js`'de tanımlayın.

### Animasyonlar
`public/css/input.css` dosyasında yeni animasyonlar ekleyin.

## 📱 Responsive Design

Website tüm cihazlarda optimize edilmiştir:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔒 Güvenlik

- Form validation
- XSS protection
- CSRF protection (production'da eklenebilir)
- Rate limiting (production'da eklenebilir)

## 🚀 Deployment

### Heroku
```bash
heroku create beratcanulu-website
git push heroku main
```

### Vercel
```bash
vercel --prod
```

### DigitalOcean
```bash
# App Platform kullanarak deploy edin
```

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **PageSpeed Insights**: 90+ Mobile & Desktop
- **Core Web Vitals**: Optimized

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 📞 İletişim

- **Website**: [beratcanulu.com](https://beratcanulu.com)
- **Email**: berat@example.com
- **LinkedIn**: [linkedin.com/in/berat-can-ulu-5a668428a/](https://www.linkedin.com/in/berat-can-ulu-5a668428a/)
- **GitHub**: [github.com/beratcanulu](https://github.com/beratcanulu)

## 🙏 Teşekkürler

- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Typography
- [Express.js](https://expressjs.com/) - Web framework

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın! 