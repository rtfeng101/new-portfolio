export const projects = [
  {
    id: "portfolio",

    title: "Minecraft Portfolio",

    date: "Jun 2026",

    metadata:
      "React • Spring Boot • PostgreSQL",

    thumbnail: "/images/portfolio.png",

    description:
      "Minecraft-inspired portfolio.",

    sections: [
      { type: "image-center", src: "/images/portfolio.png", caption: "Home screen" },
      { type: "image-left", src: "/images/detail.png", caption: "Detail view", text: "Built with React and Spring Boot..." },
      { type: "image-right", src: "/images/detail.png", caption: "Detail view", text: "Built with React and Spring Boot..." },
      { type: "text", content: "A full description of the project..." },
      { type: "bullets", heading: "Key Features", items: ["Feature one", "Feature two"] },
    ]
  },

  {
    id: "oct",

    title: "OCT Classifier",

    date: "May 2026",

    metadata:
      "PyTorch • CNN • Medical Imaging",

    thumbnail: "/images/oct.png",

    description:
      "Retinal disease classification.",

    sections: [
      { type: "image-center", src: "/images/portfolio.png", caption: "Home screen" },
      { type: "image-left", src: "/images/detail.png", caption: "Detail view", text: "Built with React and Spring Boot..." },
      { type: "text", content: "A full description of the project..." },
      { type: "bullets", heading: "Key Features", items: ["Feature one", "Feature two"] },
    ]
  },
];