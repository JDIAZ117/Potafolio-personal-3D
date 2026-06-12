export const social = [
  { url: "mailto:jppena555@gmail.com", name: "mail" },
  { url: "https://github.com/JDIAZ117", name: "github" },
  { url: "https://www.linkedin.com/in/juan-pena-024711167/", name: "linkedin" },
  //{ url: "https://x.com/DavidHckh", name: "x" },
  { url: "https://www.instagram.com/el.rider.j/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
