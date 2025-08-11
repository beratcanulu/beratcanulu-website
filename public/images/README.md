# Images Directory

Bu klasör website'de kullanılan tüm resim dosyalarını içerir.

## 📁 Gerekli Dosyalar

### profile.jpg
- **Boyut**: En az 400x400px (önerilen: 800x800px)
- **Format**: JPG, PNG veya WebP
- **Açıklama**: Berat Canulu'nun profil fotoğrafı
- **Kullanım**: Ana sayfa ve hakkımda sayfasında

## 🎨 Resim Optimizasyonu

Production için resimleri optimize edin:
- **WebP formatı** kullanın (modern tarayıcılar için)
- **Responsive images** ekleyin
- **Lazy loading** uygulayın
- **Compression** yapın

## 📱 Responsive Images

Farklı ekran boyutları için resimler:
```html
<img src="/images/profile.jpg" 
     srcset="/images/profile-small.jpg 300w,
             /images/profile-medium.jpg 600w,
             /images/profile-large.jpg 900w"
     sizes="(max-width: 600px) 300px,
            (max-width: 900px) 600px,
            900px"
     alt="Berat Canulu">
```

## 🔧 Resim Ekleme

1. Resim dosyasını bu klasöre kopyalayın
2. `profile.jpg` olarak adlandırın
3. Website'de otomatik olarak görünecektir

## 📊 Dosya Boyutları

- **Profil fotoğrafı**: < 200KB
- **Diğer resimler**: < 100KB
- **Format**: JPG (85% kalite) veya WebP

## 🚀 Performance

- Resimleri optimize edin
- CDN kullanın (production'da)
- Lazy loading uygulayın
- WebP formatını destekleyin 