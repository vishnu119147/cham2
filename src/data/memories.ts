const BASE = import.meta.env.BASE_URL;
const photoPath = (name: string) => `${BASE}photos/${name}`;

export type Memory = {
  id: string;
  title: string;
  date: string;
  place: string;
  blurb: string;
  photo: string;
  accent: 'rose' | 'gold' | 'sage';
};

export const memories: Memory[] = [
  {
    id: 'first-meet',
    title: 'The Day We Met',
    date: 'August 2019',
    place: 'College Corridor',
    blurb:
      'Two strangers bumped into each other outside the library. You laughed at your own clumsy spill of books — and just like that, I had a favourite person.',
    photo: photoPath('8.JPEG'),
    accent: 'rose',
  },
  {
    id: 'college-fest',
    title: 'College Fest Chaos',
    date: 'March 2020',
    place: 'The Main Stage',
    blurb:
      'We danced like nobody was watching (everyone was). You lip-synced the wrong lyrics the whole night and I have never loved a duet more.',
    photo: photoPath('20.JPEG'),
    accent: 'gold',
  },
  {
    id: 'late-night-calls',
    title: 'My favorite view wasn\'t outside the window',
    date: 'The Whole Semester',
    place: 'Two Ends of a Phone Call',
    blurb:
      'A memorable bus journey, assignments we never finished, secrets we never kept, and a friendship that quietly became the best part of every single day.',
    photo: photoPath('5.JPG'),
    accent: 'sage',
  },
  {
    id: 'farewell',
    title: 'The Farewell',
    date: 'May 2022',
    place: 'The Campus Gates',
    blurb:
      'Tissues, tears, and a hundred promises to never drift. We did not. We will not. Some chapters end only on paper.',
    photo: photoPath('13.JPEG'),
    accent: 'rose',
  },
  {
    id: 'last-birthday',
    title: 'Her Last Birthday — The kundvada kere',
    date: 'July 2024',
    place: 'The Shore at Dusk',
    blurb:
      'The sea at golden hour, waves rushing in, and the two of us just standing there — shoes off, plans abandoned, nowhere else to be. Nobody said a word for a while. We didn\'t need to.',
    photo: photoPath('19.JPEG'),
    accent: 'gold',
  },
  {
    id: 'everyday-magic',
    title: 'The In-Between Days',
    date: 'All Along',
    place: 'Every Road We Walked',
    blurb:
      'Three of us on that mud path by the lake — no plan, no destination, every direction was the right one. These are the days that sneak up on you and become your favourite ones.',
    photo: photoPath('6.JPG'),
    accent: 'sage',
  },
];

export type GalleryShot = { src: string; caption: string; span?: boolean };

export const gallery: GalleryShot[] = [
  {
    src: photoPath('us.JPEG'),
    caption: 'us, always',
    span: true,
  },
  {
    src: photoPath('ethnic_day.jpg'),
    caption: 'A colorful festival day',
    span: true,
  },
  {
    src: photoPath('redsea.jpg'),
    caption: 'Golden hour by the red sea',
    span: true,
  },
  {
    src: photoPath('1.JPG'),
    caption: 'First photo from our adventure',
  },
  {
    src: photoPath('2.JPG'),
    caption: 'The road that felt endless',
  },
  {
    src: photoPath('3.JPG'),
    caption: 'Laughing under open skies',
  },
  {
    src: photoPath('4.JPG'),
    caption: 'Street-side smiles',
  },
  {
    src: photoPath('5.JPG'),
    caption: 'When every moment was a snapshot',
  },
  {
    src: photoPath('6.JPG'),
    caption: 'Sunlight in every frame',
  },
  {
    src: photoPath('7.JPG'),
    caption: 'The one where we stopped for coffee',
  },
  {
    src: photoPath('8.JPEG'),
    caption: 'A quiet sunset pause',
  },
  {
    src: photoPath('9.JPEG'),
    caption: 'Hands together, always',
  },
  {
    src: photoPath('16.JPEG'),
    caption: 'A warm evening on the beach',
  },
  {
    src: photoPath('11.JPEG'),
    caption: 'The world seems softer with you',
  },
  {
    src: photoPath('12.JPEG'),
    caption: 'That laugh you can never hide',
  },
  {
    src: photoPath('13.JPEG'),
    caption: 'A spontaneous shimmy',
  },
  {
    src: photoPath('22.jpg'),
    caption: 'The sky that matched your dress',
  },
  {
    src: photoPath('15.jpg'),
    caption: 'Simply us',
  },
  {
    src: photoPath('16.JPEG'),
    caption: 'The memory of that road',
  },
  {
    src: photoPath('17.JPEG'),
    caption: 'The way we leaned into the moment',
  },
  {
    src: photoPath('18.JPEG'),
    caption: 'Birthday cakee',
  },
  {
    src: photoPath('19.JPEG'),
    caption: 'A calm, golden memory',
  },
  {
    src: photoPath('20.JPEG'),
    caption: 'The best day, framed',
  },
];

export type Reason = { front: string; back: string };

export const reasons: Reason[] = [
  {
    front: 'You laugh at your own jokes first',
    back: 'and somehow that makes mine land better. The world is funnier with you in it.',
  },
  {
    front: 'You remember the tiny things',
    back: 'my coffee order, the song I had on loop, the day I was dreading. You make me feel seen.',
  },
  {
    front: 'You show up. Every. Single. Time.',
    back: 'Rain, exams, bad days, worse nights. You are the first call and the safest place.',
  },
  {
    front: 'You dream out loud',
    back: 'and somehow make me believe my dreams are reasonable too. Your belief is contagious.',
  },
  {
    front: 'You are unapologetically you',
    back: 'weird, warm, fierce, tender. Thank you for never shrinking to fit a room.',
  },
  {
    front: 'You make ordinary days feel like keepsakes',
    back: "a Tuesday with you hits harder than most people's holidays. That is a rare gift.",
  },
];
