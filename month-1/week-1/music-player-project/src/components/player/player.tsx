import { useRef, useState } from 'react';
import { Share, Heart, Play } from 'lucide-react';
import musicList, { MusicListType } from '../../constants/music-list';

type MusicPlayListType = {
  musicList: MusicListType[];
  currentMusicIndex: number;
};

export default function Player() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [playList, setPlayList] = useState<MusicPlayListType>({
    musicList: musicList,
    currentMusicIndex: 0,
  });

  const audioRef = useRef<HTMLAudioElement>(null);
  const currentMusic: MusicListType =
    playList.musicList[playList.currentMusicIndex];

  console.log('currentMusic', currentMusic);

  return (
    <div className="w-full px-5 py-11 flex flex-col gap-7">
      <div className="flex flex-col items-center w-full h-full gap-16">
        <div className="border-4 border-yellow-400 rounded-full">
          <img
            src={currentMusic.cover}
            alt=""
            className="rounded-full block "
          />
        </div>
        <div className="w-full flex justify-between">
          <h2 className="text-base font-medium relative block z-30">
            {currentMusic.title}
            {/* <span className="absolute w-full h-4 bg-yellow-400 top-3 left-0 -z-10"></span> */}
          </h2>
          <div className="flex items-center gap-4">
            <Share size={22} />
            <Heart size={22} />
          </div>
        </div>
        <div className="w-full">
          <input type="range" className="w-full" />
        </div>
        <div>
          <button className="w-[70px] h-[70px] bg-white rounded-full flex justify-center items-center">
            <Play color="black" size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
