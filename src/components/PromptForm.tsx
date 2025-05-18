"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { TinyWaveFormIcon } from "../../public/icon/TinyWaveFormIcon";
import { PlayButton } from "./ui/playButton";
import { LoaderCircle, Download } from "lucide-react";

export function PromptForm() {
  const [description, setDescription] = useState("");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!description) {
      alert("Please enter a description.");
      return;
    } else {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/generate`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ descriptions: [description] }),
          }
        );

        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          setAudioUrl(url);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          alert("Failed to generate audio. Please try again.");
        }
      } catch (error) {
        setIsLoading(false);
        alert("Failed to generate audio. Please try again.");
      }
    }
  };

  return (
    <div className="text-center lg:text-left w-[330px]">
      <div className="text-xl font-bold text-slate-900">
        <div className="flex flex-row items-center">
          <TinyWaveFormIcon
            colors={["fill-violet-300", "fill-pink-300"]}
            className="h-3 w-3 mt-1 mr-2"
          />
          <span>Describe the music you imagine</span>
        </div>
      </div>
      <p className="text-base py-2 text-slate-700">
        Create AI-generated music from your ideas or explore ready-made tracks.
      </p>
      <div className="mt-4 w-full">
        <Textarea
          className="resize-none overflow-y-auto h-40 text-base p-4"
          id="sound-description"
          placeholder="e.g. Dreamy lo-fi melody with soft piano and gentle beats."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          variant="secondary"
          className="mt-4 w-full"
          onClick={handleSubmit}
        >
          {isLoading ? (
            <div className="flex flex-row gap-1 items-center">
              Creating
              <LoaderCircle className="animate-spin text-pink-500 h-4 w-4" />
            </div>
          ) : (
            <div>Create my track</div>
          )}
        </Button>
        {audioUrl && (
          <div className="mt-4 flex flex-row items-center justify-center gap-x-8">
            <PlayButton id="prompt_button" audioUrl={audioUrl} />
            <a
              href={audioUrl}
              download="generated_track.wav"
              className="flex items-center gap-x-1 text-sm/6 font-bold text-pink-500 hover:text-pink-700 active:text-pink-900"
            >
              <Download className="h-4 w-4 " /> Download
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
