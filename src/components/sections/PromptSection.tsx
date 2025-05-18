import { MusicEntry } from "../MusicEntry";
import { PromptForm } from "../PromptForm";
import { musics } from "../../../data/musics";

export default async function PromptSection() {
  return (
    <div className="flex max-w-6xl mx-auto mt-8 h-[calc(48vh)] overflow-hidden">
      {/* Left */}
      <div className="w-full md:w-1/3 p-6 flex flex-col items-start border-r border-slate-200 ">
        <PromptForm />
      </div>

      {/* Right */}
      <div className="w-full md:w-2/3 p-6 overflow-y-auto max-h-[calc(100vh-4rem)] bg-[#fdfdfd]">
        <main className="space-y-4">
          {musics.map((music) => (
            <div key={music.id}>
              <MusicEntry music={music} />
              <div className="relative divide-y divide-slate-100 pb-4 lg:border-t lg:border-slate-100" />
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
