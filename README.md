# Lojiper Web Uygulama

Bu proje, otobüs bilet satış uygulamasının temel özelliklerini içerir. Kullanıcılar bu uygulama üzerinden bilet arayışlarını sorgulayabilir, bilet satın alabilir ve ödemelerini gerçekleştirebilirler.

## Teknik Detaylar

- Proje Next.js kullanılarak geliştirilmiştir ve güncel Next.js sürümü ile uyumludur.
- TypeScript ve Context API kullanılarak yazılmıştır.
- Sefer verileri statik bir JSON dosyasından ve Next.js API Routes kullanılarak alınmıştır.

```bash
npm install
```

## Sayfalar

Proje içinde aşağıdaki sayfalar bulunur:

- **Login Sayfası:** Kullanıcıların giriş yapabileceği sayfadır. Kullanıcı adı ve şifre ile giriş yapabilirler. İlk defa giriş yapan kullanıcılar için kayıt ol sayfasına yönlendirme yapılır.

- **Kayıt Ol Sayfası:** Kullanıcıların kayıt olabileceği sayfadır. E-posta, şifre, ad, soyad, cinsiyet, doğum tarihi gibi bilgileri girmeleri gerekir.

- **Anasayfa:** Kullanıcılar bu sayfada sefer ile ilgili bilgiler girebilirler. Sayfada kalkış yeri, varış yeri ve tarih seçimi yapabilirler. Ardından "Ara" butonu ile seferler listelenir.

- **Sorgu Sonuçları Sayfası:** Anasayfada girilen bilgilere göre listelenen seferlerin bilgileri burada görüntülenir. Seferlere tıklanarak bilet satış sayfasına yönlendirme yapılabilir.

- **Bilet Satış Sayfası:** Seçilen seferin detayları ve fiyatı gösterilir. Koltuk seçimi yapılabilir. Otobüs düzeni 2 sıra çift koltuk şeklinde olup, koltuklar dolu veya boş olabilir. Kullanıcı koltuk seçimlerini yaparken ücret alanı güncellenir.

- **Ödeme Sayfası:** Kullanıcı bu sayfada ödeme formunu doldurur ve onayladığında ödeme işlemi gerçekleştirilir.

## Seferler

Proje içinde İstanbul ve Ankara'dan Bursa ve İzmir'e sefer verisi bulunur. Bu seferlerin detayları proje dökümantasyonunda yer almaktadır.
Ankara-İzmir Seferler:
1- 2023-10-13
2- 2023-10-14

Ankara-Bursa Seferler:
1- 2023-10-14
2-2023-10-15

İstanbul-İzmir Seferler:
1- 2023-10-13
2- 2023-10-14

İstanbul-Bursa Seferler:
1- 2023-10-14
2- 2023-10-15

## Proje Dökümantasyonu

Proje ile ilgili daha fazla detay ve seferlerin detaylı bilgileri proje dökümantasyonunda bulunur. Dökümantasyonu okuyarak proje ile ilgili tüm bilgilere ulaşabilirsiniz.

## Lisans

Bu proje [MIT lisansı](LICENSE) ile lisanslanmıştır.
