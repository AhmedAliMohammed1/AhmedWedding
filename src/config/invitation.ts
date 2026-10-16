import type { InvitationConfig } from '../types/invitation';
export const invitation: InvitationConfig = {
  brideName: 'الاء', groomName: 'احمد', initials: 'ا · ا',
  weddingDate: '2026-10-22T21:00:00+03:00', endDate: '', timezone: 'Africa/Cairo',
  displayDate: 'الخميس، ٢٢ أكتوبر ٢٠٢٦', shortDate: '٢٢ · ١٠ · ٢٠٢٦',
  openingMessage: 'بكل الحب ندعوكم', blessing: '﴿ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ﴾',
  introductionHeading: 'بداية حكاية عمر',
  introduction: 'وفي ليلةٍ تُزهر فيها القلوب فرحًا، وتُكتب فيها بداية حكاية عمر، نجتمع لنحتفل بأجمل أقدارنا، وبداية حُبٍّ جمع الله بين قلبينا ❤️',
  closingMessage: 'بوجودكم تكتمل فرحتنا، وبقلوبكم الطيبة تبدأ أجمل حكاياتنا.',
  venue: {
    name: 'قاعه فيلا باريس', address: 'طريق البحر ههيا – الزقازيق، محافظة الشرقية، مصر',
    streetAddress: 'طريق البحر ههيا – الزقازيق', city: 'ههيا، محافظة الشرقية', countryName: 'مصر', countryCode: 'EG',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.93472640404!2d31.559109300000003!3d30.635797100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f571dcfb42a5%3A0x293cd92f15288192!2z2YLYp9i52Ycg2YHZitmE2Kcg2KjYp9ix2YrYsw!5e0!3m2!1sar!2sde!4v1792188488605!5m2!1sar!2sde',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=30.6357971%2C31.5591093',
    image: '/assets/images/villa-paris.png'
  },
  schedule: [{ time: '٩ مساءً', title: 'بداية الحفل', description: 'نلتقي لنحتفل معًا بأجمل بداية.', icon: 'arrival' }],
  guestNotes: { enabled: true, title: 'كلمات تبقى في القلب', description: 'دعوة من القلب، أمنية جميلة، أو كلمة محبة… اتركوا لنا ذكرى نعود إليها دائمًا.' },
  contact: { email: '', phone: '' },
  gallery: [
    { src: '/assets/images/ahmed-alaa-portrait.jpg', alt: 'احمد والاء مع باقة الورود في حفل الخطوبة', caption: 'جمع الله بين قلبينا', width: 853, height: 1280 },
    { src: '/assets/images/ahmed-alaa-celebration.jpg', alt: 'احمد والاء يحتفلان معًا بسعادة', caption: 'ومعك تحلو كل البدايات', width: 1066, height: 1599 }
  ],
  images: { hero: '/assets/images/ahmed-alaa-portrait.jpg', storyMain: '/assets/images/ahmed-alaa-portrait.jpg', storySecondary: '/assets/images/ahmed-alaa-celebration.jpg' },
  music: { src: '/assets/audio/divenire.mp3', title: 'موسيقى الدعوة' },
  social: { title: 'احمد و الاء | دعوة زفاف | ٢٢ أكتوبر ٢٠٢٦', description: 'بكل الحب ندعوكم لحفل زفاف احمد والاء في قاعه فيلا باريس، الخميس ٢٢ أكتوبر ٢٠٢٦، الساعة ٩ مساءً بتوقيت القاهرة.', siteUrl: '', image: '/assets/images/ahmed-alaa-celebration.jpg' }
};
