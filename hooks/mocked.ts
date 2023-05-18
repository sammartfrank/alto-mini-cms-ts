import cuid from 'cuid';
import { PostType } from './useLocalStorage';

export enum PostMode {
  Blog = 'blog',
  Post = 'post',
}

export const postsList: PostType[] = [
  {
    id: cuid(),
    title: 'Led Zeppelin - Houses of the holy (album)',
    date: '3/28/1973',
    videoId: '97FpOlzPqFM',
    mode: PostMode.Post,
    description:
      'Houses of the Holy, the fifth studio album by Led Zeppelin, is a testament to the bands versatility and musical prowess. Released in 1973, the album showcases an eclectic mix of rock, reggae, funk, and progressive elements that highlight the groups creative evolution. With intricate guitar work by Jimmy Page, vocals from Robert Plant, a dynamic rhythm section featuring John Paul Jones and John Bonham, and the seamless blending of various musical styles, Houses of the Holy stands as a classic in Led Zeppelins discography and a shining example of their enduring musical legacy.',
  },
  {
    id: cuid(),
    title: 'Led Zeppelin - Physical Graffiti (album)',
    date: '2/24/1975',
    videoId: 'D2HC0G4T74Y',
    mode: PostMode.Post,
    description:
      'Physical Graffiti is the sixth studio album by the English rock band Led Zeppelin. It was released as a double album on 24 February 1975 by the groups new record label, Swan Song Records. The band wrote and recorded eight new songs for the album in early 1974 at Headley Grange, a country house in Hampshire, which gave them ample time to improvise arrangements and experiment with recording. The songs range in style from hard rock to folk rock and progressive rock, and they create a cohesive whole that emphasizes the bands dynamic musical style. The album was then mixed over summer 1974 and planned for an end-of-year release, but Led Zeppelins manager, Peter Grant, decided to delay it until early 1975 to avoid competition from the bands own singles.',
  },
  {
    id: cuid(),
    title: 'Led Zeppelin -  II (album)',
    date: '10/2/1969',
    videoId: 'W2bxOJX-E3M',
    mode: PostMode.Post,
    description:
      'Led Zeppelin II is the second album by the English rock band Led Zeppelin, released on 22 October 1969 in the United States and on 31 October 1969 in the United Kingdom by Atlantic Records. Recording sessions for the album took place at several locations in both the United Kingdom and North America from January to August 1969. The album was conceived after the bands manager Peter Grant expressed fears that the band were succumbing to the same pressures that almost caused the demise of the Who and the Yardbirds.',
  },
  {
    id: cuid(),
    title: 'Robert Plant Bio',
    date: '3/28/1973',
    mode: PostMode.Blog,
    videoId: null,
    description:
      'Robert Anthony Plant CBE (born 20 August 1948) is an English singer, songwriter and musician, best known as the lead singer and lyricist of the rock band Led Zeppelin.',
  },
  {
    id: cuid(),
    title: 'Jimmy Page Bio',
    date: '1/9/1944',
    mode: PostMode.Blog,
    videoId: null,
    description:
      'James Patrick Page OBE (born 9 January 1944) is an English musician, songwriter, multi-instrumentalist and record producer who achieved international success as the guitarist and founder of the rock band Led Zeppelin.',
  },
  {
    id: cuid(),
    title: 'John Paul Jones Bio',
    date: '1/3/1946',
    mode: PostMode.Blog,
    videoId: null,
    description:
      'John Richard Baldwin (born 3 January 1946), better known by his stage name John Paul Jones, is an English musician and record producer who was the bassist and keyboardist for the rock band Led Zeppelin.',
  },
  {
    id: cuid(),
    title: 'John Bonham Bio',
    date: '5/31/1948',
    mode: PostMode.Blog,
    videoId: null,
    description:
      'John Henry Bonham (31 May 1948 – 25 September 1980) was an English musician and songwriter, best known as the drummer for the English rock band Led Zeppelin.',
  },
  {
    id: cuid(),
    title: 'Led Zeppelin Bio',
    date: '2/2/1968',
    mode: PostMode.Blog,
    videoId: null,
    description:
      'Led Zeppelin were an English rock band formed in London in 1968. The group consisted of vocalist Robert Plant, guitarist Jimmy Page, bassist/keyboardist John Paul Jones, and drummer John Bonham. With a heavy, guitar-driven sound, they are cited as one of the progenitors of hard rock and heavy metal, although their style drew from a variety of influences, including blues and folk music.',
  },
];
