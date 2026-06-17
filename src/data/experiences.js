export const experiences = [
  {
    id: "SoS",

    title: "Software Developer II @ Seeds of Success",
    important: true,
    date: "Jan 2026 - Present",
    metadata:
      "React • CSS • Node.js • Python • Opensearch • Docker",

    thumbnail: "./images/experiences/sos_logo.jpg",

    description:
      "Software developer at SoS, building search and analytics solutions for clients.",
    
    sections: [
      { 
        type: "bullets", 
        heading: "Overview", 
        items: [
          "Serve as the primary point of contact between Seeds of Success and Invisible Children's (KARA) development team, coordinating directly with their lead developer to align on technical decisions and accelerate full-stack feature delivery", 
          "Collaborated with KARA's lead developer on architecture decisions including component structure and routing to ensure a scalable, maintainable codebase",
          "Built full-stack research document retrieval features using OpenSearch, including API endpoints and a Jupyter notebook integration for efficient data access by policymakers and researchers",
          "Developed internal context-management systems to maintain live organizational knowledge, reducing LLM token usage and improving response quality",
        ] 
      },
      { type: "image-grid", images: [
        { src: "/images/experiences/sos_logo.jpg", caption: "Seeds of Success" },
        { src: "/images/experiences/kara_logo.jpg", caption: "Invisible Children Kids at Risk Action" },
      ]},
      { type: "text", 
        content: "Seeds of Success is a nonprofit that I volunteer with to build full stack applications for a client, InvisibleChildren KARA.\
          I also have minor roles in managing the development workflow and researching how AI can be integrated into our information systems, but mostly I work with KARA.\
          Seeds of Success is focused on providing advocacy and services to nonprofits aiming to help underserved communities with integrity.\
          KARA is a division of Invisible Children that focuses on providing support and resources to people, policies, and programs that improve the lives of abused and neglected children.\
          \n \
          \n \
          Over the past couple of months, I've developed a tool with the lead developer at KARA. \
          This tool aims to serve policy makers by aggregating research documents from an OpenSearch database and providing a user-friendly yet informational interface for accessing this information.\
          I owned most of the development responsibilities for this project and designed the overall architecture in collaboration.\
          I used React, CSS, and node.js with server-side rendering for the Frontend with standard CRUD calls. I used Python for the backend and OpenSearch and Docker for the database. \
          I learned a lot about how to build *proper* full stack applications.\
          Specifically, what an industry-standard backend looks like and how to create maintainable and debt-minimal code that is scalable and performant.\
          \n \
          \n \
          Over the next few weeks, I will be both polishing the research document retrieval tool. \
          I will also be creating a database retrieval tool aimed at data scientists to easily code and create analytics for policymakers. \
          This will have similar features to the research document retrieval tool as well as easy-access jupyter images and embedded Web IDEs down the line.\
          Adding on, I'll also create a user and admin portal to control user account tags/flags to compliment these two tools.\
          \n \
          \n \
          I'm really excited to show these full-stack apps off once they are fully launched. \
          I'll be able to put metrics and links to all of those once they are, so sit tight!"
      },
    ]
  },




  {
    id: "Senra",

    title: "Computer Science Capstone @ Senra Systems",
    important: true,
    date: "Feb 2026 - Apr 2026",
    metadata:
      "React • TypeScript • Flask • PostgreSQL • ChromaDB • Node.js • Claude AI",

    thumbnail: "./images/experiences/senra_logo.webp",

    description:
      "Built an AI-powered tool that automates initial workflows for wire harness manufacturing as a CS capstone project.",

    sections: [
      {
        type: "bullets",
        heading: "Overview",
        items: [
          "Designed and built a tool that automates initial workflows for wire harness manufacturing by extracting an iterable graph of connectors from visual schematics and utilizing RAGs for preliminary design review and manufacture instructions",
          "Architected and implemented a PostgreSQL database to support persistent data storage across the application, including schema design and integration with backend services and RAG data retrieval",
          "Built full stack features end-to-end, including user authentication and persistent project saving",
          "Turned 3 days of work into 30 minutes at ~$0.25 per harness table and ~$5 per Engineering Master with 40% part spec accuracy",
        ]
      },
      {
        type: "text",
        content: "Senra Systems was my CS capstone client a wire harness manufacturing company looking to automate the tedious, manual process of ingesting engineering documents into their systems.\
          Over 3 months, we interviewed, designed, and iterated until we finalized our product: an AI-powered snipping tool to generate a master design document that contained all the details that any engineer working on this harness would need.\
          \n \
          \n \
          The project is a pnpm monorepo with four components: a React + TypeScript frontend (Vite), a Flask backend, a PostgreSQL database, and a Node.js AMP integration adapter.\
          Users upload engineering images (BOMs, wire lists, RFQ pages, drawings) and JSON files through the frontend. \
          We then prompt the user to snip out relevant sections (like the snipping tool for screenshots) and pass this to the backend.\
          The backend uses Claude to extract raw JSON from each image, then runs a per-table fill pass against 17 canonical schemas and writes the results into PostgreSQL.\
          When working instructions are requested, the project data queries a ChromaDB RAG of past projects for few-shot examples, a draft is generated, and then refined against IPC-WHMA-A-620E compliance chunks from a second collection.\
          Final markdown instructions are persisted per project and rendered in the UI.\
          \n \
          \n \
          This was a great experience building a production-minded full-stack application with real client constraints and a tangible impact on manufacturing workflows. \
          In the end, we were able to deliver a product that reduced manual work time from 3 days to 30 minutes at a cost of ~$0.25 per harness table and ~$5 per Engineering Master with 40% part spec accuracy, which was a huge win for the team and Senra.\
          Photos not included for confidentiality reasons, but happy to discuss the project in more detail if you're interested!"
      },
    ]
  },
];