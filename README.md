# Lojiper Web Uygulama

## Gif:

![](https://github.com/yusufyunuskaymaz/bus-ticket/blob/ui/bus.gif)

Bu proje, otobüs bilet satış uygulamasının temel özelliklerini içerir. Kullanıcılar bu uygulama üzerinden bilet arayışlarını sorgulayabilir, bilet satın alabilir ve ödemelerini gerçekleştirebilirler.

## Proje Detayları

- Proje Next.js 13.5.4, TypeScript 5 ve TailwindCss 3 sürümü kullanılarak geliştirilmiştir.
- Sefer verileri statik bir dosyadan alınır ve Next.js API Routes ile POST isteklerinde döndürülür.
- State Management için Context API kullanılmıştır.
- Kayıt yapan kullanıcı bilgileri localStorage da depolanır ve başka bir veritabanı kullanılmamıştır.
- Mobil ekranlar için breakpoint 640px dir.


## Başlangıç

Projenin yerel bir ortamda çalıştırılması için aşağıdaki adımları izleyin:

1. Proje deposunu bilgisayarınıza klonlayın.

```bash
git clone https://github.com/yusufyunuskaymaz/bus-ticket.git
```
2. Proje dizinine gidin.

```bash
cd bus-ticket
```
3. Gerekli bağımlılıkları yükleyin.

```bash
npm install
```
4. Uygulamayı başlatın.

```bash
npm run dev
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

Proje içinde İstanbul ve Ankara'dan Bursa ve İzmir'e sefer verisi bulunur. Bu seferler statik bir dosyadan alınıp Next Router API ile kullanılır.
Ankara-İzmir Seferler:
1- 2023-10-13 <br />
2- 2023-10-14

Ankara-Bursa Seferler: <br />
1- 2023-10-14 <br />
2-2023-10-15

İstanbul-İzmir Seferler: <br />
1- 2023-10-13 <br />
2- 2023-10-14

İstanbul-Bursa Seferler: <br />
1- 2023-10-14 <br />
2- 2023-10-15

## Proje Dökümantasyonu

Proje ile ilgili daha fazla detay ve seferlerin detaylı bilgileri proje dökümantasyonunda bulunur. Dökümantasyonu okuyarak proje ile ilgili tüm bilgilere ulaşabilirsiniz.

## Kullanılan Kütüphaneler

- **Teknolojiler:** Next.js, TypeScript, React
- **Bağımlılıklar:** Aşağıdaki paketlerin belirli sürümlerine ihtiyaç duyulur:
  - @headlessui/react: ^1.7.17
  - @heroicons/react: ^2.0.18
  - @popperjs/core: ^2.11.8
  - clsx: ^2.0.0
  - date-fns: ^2.30.0
  - next: ^13.5.4
  - react: ^18
  - react-confirm-alert: ^3.0.6
  - react-day-picker: ^8.8.2
  - react-dom: ^18
  - react-select: ^5.7.7
  - react-toastify: ^9.1.3
- **Dev Bağımlılıklar:** Aşağıdaki dev bağımlılıklara ihtiyaç duyulur:
  - @types/node: ^20
  - @types/react: ^18
  - @types/react-credit-cards: ^0.8.1
  - @types/react-datepicker: ^4.19.0
  - @types/react-dom: ^18
  - eslint-config-next: 13.5.4
  - autoprefixer: ^10
  - postcss: ^8
  - tailwindcss: ^3
  - typescript: ^5

## Lisans

