import { Container } from "./Container";
import { PlayButton } from "./ui/playButton";
import { type Music } from "../../data/musics";

export function MusicEntry({ music }: { music: Music }) {
  return (
    <article aria-labelledby={`episode-${music.id}-title`}>
      <Container>
        <div className=" pb-4 gap-2 flex flex-col items-start">
          <p className="font-semibold">{music.title}</p>
          <p className=" text-slate-700">{music.description}</p>
          <div className=" flex items-center ">
            <PlayButton id={music.id} audioUrl={music.audioUrl} />
          </div>
        </div>
      </Container>
    </article>
  );
}
