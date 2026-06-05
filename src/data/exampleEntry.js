export const exampleEntry = [
  {
    id: "example",

    title: "example title",

    date: "Jan 2026 - Present",

    metadata:
      "React • Python • Opensearch",

    thumbnail: "/images/example.png",

    description:
      "example description",
    
    sections: [
      { type: "image-center", src: "...", caption: "..." },
      { type: "image-left",   src: "...", caption: "...", text: "..." },
      { type: "image-right",  src: "...", caption: "...", text: "..." },
      { type: "image-grid",   images: [{ src: "...", caption: "..." }, ] },
      { type: "photo-list",   items: [{ src: "...", title: "...", date: "...", text: "..." }, ] },
      { type: "two-column-text", left: "...", right: "..." },
      { type: "banner",       src: "...", caption: "..." },
      { type: "text",         content: "..." },
      { type: "bullets",      heading: "...", items: ["...", "..."] },
    ]
  },
];