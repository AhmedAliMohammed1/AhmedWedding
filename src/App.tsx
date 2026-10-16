import { useRef, useState } from 'react';
import { ArrowDown, ArrowUpLeft, CalendarDays, Heart, MapPin } from 'lucide-react';
import { invitation as wedding } from './config/invitation';
import { MusicPlayer, type MusicPlayerHandle } from './components/common/MusicPlayer';
import { Countdown } from './components/sections/Countdown';
import { GuestNotesSection } from './components/sections/GuestNotesSection';
import { PhotoGallery } from './components/gallery/PhotoGallery';

export function App() {
  const music = useRef<MusicPlayerHandle>(null);
  const [opened, setOpened] = useState(false);
  return <>
    <a className="skip-link" href="#details">انتقل إلى تفاصيل الحفل</a>
    <nav className="topbar" aria-label="التنقل الرئيسي">
      <a className="brand" href="#home">احمد <span>و</span> الاء</a>
      <div><a href="#details">الموعد</a><a href="#gallery">حكايتنا</a><a href="#venue">المكان</a><a href="#guest-notes">التهاني</a></div>
      <span className="nav-date">٢٢ أكتوبر ٢٠٢٦</span>
    </nav>
    <main>
      <section className="hero" id="home" aria-labelledby="couple-heading">
        <div className="hero-copy">
          <p className="eyebrow"><span /> دعوة لحضور حفل زفاف <span /></p>
          <p className="bismillah">{wedding.blessing}</p>
          <h1 id="couple-heading">احمد <span>و</span> الاء</h1>
          <p className="hero-verse">{wedding.introduction}</p>
          <div className="hero-date"><span>الخميس</span><strong>٢٢</strong><span>أكتوبر<br />٢٠٢٦</span></div>
          <p className="hero-place">قاعه فيلا باريس <span>·</span> التاسعة مساءً</p>
          <a className="button button-dark" href="#details" onClick={() => { if (!opened) { setOpened(true); void music.current?.start(); } }}>اكتشفوا دعوتنا <ArrowDown size={16} /></a>
          <small className="sound-hint">تبدأ الموسيقى عند فتح تفاصيل الدعوة</small>
        </div>
        <div className="hero-art">
          <span className="orbit orbit-one" aria-hidden="true" /><span className="orbit orbit-two" aria-hidden="true" />
          <div className="portrait-frame"><img src={wedding.images.hero} alt={wedding.gallery[0]?.alt} width="853" height="1280" fetchPriority="high" /></div>
          <div className="love-seal" aria-hidden="true">بكل<Heart size={22} />الحب</div>
          <p className="portrait-caption">حكايةٌ كتبها الله… ونكملها معًا</p>
        </div>
      </section>
      <div className="ribbon" aria-hidden="true"><span>قلبان</span> ✧ <span>حكاية واحدة</span> ✧ <span>وعمر من المحبة</span></div>
      <section className="date-section section-shell" id="details">
        <p className="eyebrow">موعدنا مع الفرح</p><h2>ليلة من العمر، وأنتم أجمل حضور</h2>
        <div className="event-details"><p><CalendarDays />{wedding.displayDate}</p><p>الساعة ٩ مساءً <span>بتوقيت القاهرة</span></p><p><MapPin />{wedding.venue.name}</p></div>
        <Countdown weddingDate={wedding.weddingDate} timezone={wedding.timezone} />
      </section>
      <PhotoGallery gallery={wedding.gallery} />
      <section className="paris-section" id="venue" aria-labelledby="venue-heading">
        <div className="section-shell venue-layout">
          <div className="venue-copy"><p className="eyebrow">هنا نجتمع على المحبة</p><h2 id="venue-heading">قاعه<br /><em>فيلا باريس</em></h2><p className="venue-address"><MapPin size={20} />{wedding.venue.address}</p><p>في انتظاركم لنشارككم فرحتنا، ونصنع معًا ذكرى لا تُنسى.</p><a className="button button-dark" href={wedding.venue.directionsUrl} target="_blank" rel="noreferrer">الطريق إلى فرحتنا <ArrowUpLeft size={18} /></a></div>
          <figure className="venue-logo"><img src={wedding.venue.image} alt="شعار قاعه فيلا باريس" width="807" height="817" loading="lazy" /><figcaption>قاعه فيلا باريس · ههيا</figcaption></figure>
          <div className="map-frame"><iframe src={wedding.venue.mapEmbedUrl} title="موقع قاعه فيلا باريس على خرائط جوجل" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
        </div>
      </section>
      <GuestNotesSection coupleNames="احمد و الاء" title={wedding.guestNotes.title} description={wedding.guestNotes.description} />
      <section className="closing"><Heart size={28} strokeWidth={1} /><p className="eyebrow">وأنتم جزء من حكايتنا</p><h2>بكم تكتمل الفرحة</h2><p>{wedding.closingMessage}</p><div className="closing-names">احمد <span>و</span> الاء</div><a href="#home">العودة إلى البداية ↑</a></section>
    </main>
    <footer className="footer"><span>بكل الحب · احمد و الاء</span><span>٢٢ أكتوبر ٢٠٢٦</span></footer>
    <MusicPlayer ref={music} src={wedding.music.src} title={wedding.music.title} visible />
  </>;
}
