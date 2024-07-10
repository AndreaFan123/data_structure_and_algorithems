import {
  music_abstract_future_bass_upbeat_music,
  music_abstract_future_bass,
  music_for_future_bass,
  music_future_bass_modern,
  music_future_bass_oopa,
  music_in_slow_motion_inspiring_ambient_lounge,
  music_mellow_future_bass_bounce_on_it,
  music_powerful_beat,
  music_the_future_bass,
  music_upbeat_future_bass,
} from '../assets/musics/index';

import {
  img_abstract_future_bass_upbeat_music,
  img_abstract_future_bass,
  img_for_future_bass,
  img_future_bass_oopa,
  img_future_bass_modern,
  img_in_slow_motion_inspiring_ambient_lounge,
  img_mellow_future_bass_bounce_on_it,
  img_powerful_beat,
  img_the_future_bass,
  img_upbeat_future_bass,
} from '../assets/covers/index';

export type MusicListType = {
  id: number;
  title: string;
  cover?: string;
  src: string;
};

const musicList: MusicListType[] = [
  {
    id: 1,
    title: 'Abstract Future Bass Upbeat',
    cover: img_abstract_future_bass_upbeat_music,
    src: music_abstract_future_bass_upbeat_music,
  },
  {
    id: 2,
    title: 'Abstract Future Bass',
    cover: img_abstract_future_bass,
    src: music_abstract_future_bass,
  },
  {
    id: 3,
    title: 'Future Bass',
    cover: img_for_future_bass,
    src: music_for_future_bass,
  },
  {
    id: 4,
    title: 'Future Bass Modern',
    cover: img_future_bass_modern,
    src: music_future_bass_modern,
  },
  {
    id: 5,
    title: 'Future Bass Oopa',
    cover: img_future_bass_oopa,
    src: music_future_bass_oopa,
  },
  {
    id: 6,
    title: 'In Slow Motion Inspiring Ambient Lounge',
    cover: img_in_slow_motion_inspiring_ambient_lounge,
    src: music_in_slow_motion_inspiring_ambient_lounge,
  },
  {
    id: 7,
    title: 'Mellow Future Bass Bounce On It',
    cover: img_mellow_future_bass_bounce_on_it,
    src: music_mellow_future_bass_bounce_on_it,
  },
  {
    id: 8,
    title: 'Powerful Beat',
    cover: img_powerful_beat,
    src: music_powerful_beat,
  },
  {
    id: 9,
    title: 'The Future Bass',
    cover: img_the_future_bass,
    src: music_the_future_bass,
  },
  {
    id: 10,
    title: 'Upbeat Future Bass',
    cover: img_upbeat_future_bass,
    src: music_upbeat_future_bass,
  },
];

export default musicList;
