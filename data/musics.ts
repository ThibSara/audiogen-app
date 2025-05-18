export const musics = [
  {
    id: "midnight_train",
    title: "Midnight Train",
    description: "Lo-fi jazz with soft drums and vintage keys – calm, night-time vibe.",
    audioUrl: "/audio/midnight_train.wav",
  },
  {
    id: "christmas_bells",
    title: "Christmas Bells",
    description: "Folk guitar with Christmas bells and a festive mood. – cheerful, warm.",
    audioUrl: "/audio/christmas_bells.wav",
  },
    {
    id: "Slow_Jazz",
    title: "Slow Jazz",
    description: "Slow jazz with a deep blues feel – mysterious, coffee vibe.",
    audioUrl: "/audio/slow_jazz.wav",
  },
    {
    id: "country_guitar",
    title: "Country Guitar",
    description: "Country guitar with a cowboy Western feel – upbeat, cheerful.",
    audioUrl: "/audio/country_guitar.wav",
  },
  {
    id: "neon_city",
    title: "Neon City",
    description: "Synthwave beat with retro bass and leads – upbeat, neon-style.",
    audioUrl: "/audio/beat.wav",
  },
  {
    id: "harp_cello",
    title: "Harp and Cello",
    description: "Harp and cello with a dreamy, ethereal feel – calm, relaxing.",
    audioUrl: "/audio/harp_cello.wav",},
  {
    id: "ticking_hithat",
    title: "Ticking Hithat",
    description: "Heavy 808s with dark piano and ticking hi-hats. – dark, mysterious.",
    audioUrl: "/audio/ticking_hithat.wav",
  },
  {
    id : "rainy_piano",
    title: "Rainy Piano",
    description: "Rainy day piano with mellow beats and soft synths.",
    audioUrl: "/audio/rainy_piano.wav",
  }

];



export type Music = {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
};