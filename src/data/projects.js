export const projects = [
  {
    id: "oct",
    title: "OCT Retinal Disease Classifier",
    important: true,
    date: "Apr 2026 - May 2026",
    metadata: "Python • TensorFlow • CNN • Image Processing",
    thumbnail: "/images/projects/oct_thumbnail.png",
    description:
      "Deep learning pipeline for classifying retinal diseases from OCT images.",
    sections: [
      {
        type: "bullets",
        heading: "Overview",
        items: [
          "Built deep learning pipeline achieving 95% accuracy in classifying retinal diseases from 109,000+ OCT images across 4 categories (CNV, DME, DRUSEN, Normal)",
          "Designed preprocessing pipeline with multi-scale Gaussian denoising and CLAHE contrast enhancement, improving DRUSEN detection precision by 6%",
          "Implemented class-weighted loss functions to handle 5:1 class imbalance, achieving clinical-grade performance (0.82 F1-score) on rare pathologies",
          "Authored research paper analyzing architecture depth vs. preprocessing trade-offs; published code and documentation on GitHub"
        ]
      },
      { 
        type: "text", 
        content: "This was a semester project and research paper for BMI/CS 567: Biomedical Image Analysis, a class which focused on image processing and machine learning for medical imaging. \
          \n \
          \n \
          I wanted to choose a dataset that used a form of optical coherence tomography (OCT), so I went with retinal scans. \
          Since I got to design the paper, I decided to explore the impact of preprocessing techniques and architecture depth on model performance, which ended up being a really interesting analysis. \
          \n \
          \n \
          What I found out was that smart preprocessing can actually be more effective than just adding more layers to a CNN. \
          This was the case even when the weakest class (DRUSEN) was defined by very small features that wer easily drowned out by data augmented noise and Gaussian blur. \
          These results show that preprocessing can have a significant impact on model performance, and the combination of the two is often more powerful than either alone. \
          \n \
          \n \
          This was a fun project to work on since I got to write a full paper which you can read below!"},
      { type: "image-left", src: "/images/projects/oct_image_pipeline.png", caption: "Sample images with preprocessing applied", 
        text: "Here you can see two sample images of classes NORMAL and CME respectively. Since the data augmentation was applied in the kaggle source dataset, the preprocessing steps were crucial for improving model performance. \
          You can read more about the pipeline itself in the paper, but it involves a multiblur fusion, CLAHE contrast, and object removal. \
          More examples can also be seen in the paper. " },
      { type: "image-right", src: "/images/projects/oct_cs_photo.jpg", caption: "Photo in the old CS building", 
        text: "Here's a photo I took of me and my friend who was also in BMI 567 in the old and deserted CS Building. \
          This is also the day I found out that the smallest of my models took 40 minutes to train on the 109,000+ image dataset, which was not a fun surprise. \
          The larger models with ~1M parameters took around 90 minutes to train. Luckily we went for pizza so I could leave my computer open. "}, 
      { type: "pdf", header: "Check out my research paper!", src: "/images/projects/OCT_Retinal_Scan_Research_Paper.pdf", caption: "Research paper", height: "1000px" },
      { type: "github", url: "https://github.com/rtfeng101/oct-retinal-classifier" }
    ]
  },



  {
    id: "computer-networks",
    title: "Computer Networks: Virtual Switch, Router & TCP",
    important: true,
    date: "Oct 2025 - Dec 2025",
    metadata: "Java • Mininet • UDP • TCP • Routing • Networking",
    thumbnail: "/images/projects/networks_thumbnail.png",
    description:
      "Implementations of a learning switch, virtual router, and TCP over UDP.",
    sections: [
      {
        type: "bullets",
        heading: "Overview",
        items: [
          "Implemented a learning Ethernet switch with MAC-based forwarding and timeout aging in Java using Mininet and POX",
          "Built a virtual IP router with longest-prefix-match route lookups, IPv4 checksum verification, TTL decrement, and ARP caching",
          "Extended the router with RIPv2 distance-vector routing, including heartbeats, triggered responses, and route expiry for dynamic topology convergence",
          "Implemented TCP Tahoe over UDP, including slow start, congestion avoidance, and fast retransmit"
        ]
      },
      { 
        type: "text",
        content: "This was a three-part semester project for CS 640: Introduction to Computer Networks, where each assignment built on the last to create a more complete networking stack from scratch.\
          \n \
          \n \
          The first two parts focused on the data and network layers. My team implemented a learning Ethernet switch that builds its own MAC address table by snooping on incoming frames, and times out stale entries after 15 seconds. \
          From there we built a virtual IP router on top of it, handling longest-prefix-match lookups, checksum verification, and TTL decrement. \
          The third assignment replaced the static route table with a live RIPv2 implementation, so routers could discover each other, share distance vectors every 10 seconds, and converge automatically when a link went down. \
          Testing failover on many different topology configurations with downed and cycled routers was a great way to see it actually working.\
          \n \
          \n \
          The final assignment was the most involved: implementing TCP from scratch on top of raw UDP sockets. \
          That meant writing the three-way handshake, sliding window flow control, retransmission timeouts using an exponentially weighted RTT estimate, and fast retransmit on three duplicate ACKs. \
          We tested it by transferring files across a Mininet topology with a router configured to randomly drop 5% of packets, and verified the received file matched the original byte-for-byte using sha256sum."
      },
    ]
  },




  {
    id: "asteroids",
    title: "Asteroids",
    important: true,
    date: "Feb 2025 - Apr 2025",
    metadata: "React • JavaScript • Spring Boot • Java • Maven • JDBC • phpMyAdmin • REST",
    thumbnail: "/images/projects/asteroids_thumbnail.png",
    description:
      "Full-stack Asteroids game with user accounts, stats, and leaderboards.",
    sections: [
      {
        type: "bullets",
        heading: "Overview",
        items: [
          "Collaborated in a team of 6 to build a full-stack Asteroids game with user accounts, stat tracking, and leaderboards",
          "Defined the full tech stack (React, REST, Spring Boot, JDBC, MySQL) and contributed to cross-layer architecture decisions",
          "Designed and implemented the gameplay interface in React and integrated real-time game state via REST APIs"
        ]
      },
      {
        type: "text",
        content: "This was a semester-long team project for CS 506, where a group of six of us \
          built a full-stack rogue-like Asteroids game across three agile sprints.\
          \n \
          \n \
          My biggest contribution in the early sprints was defining the tech stack. \
          I researched REST APIs alongside Elias who covered gRPC, and we went with my approach. \
          I put together a demo using React/Vite, Spring Boot, and MySQL with RESTful communication \
          that became the skeleton the whole team built on. \
          From there I owned the frontend API layer, wiring up all the HTTP calls to the backend \
          endpoints that the team were building.\
          \n \
          \n \
          The most interesting part of the project was figuring out how to actually run the game. \
          After a lot of discussion, we decided to treat the React frontend purely as a rendering layer, \
          driven by a singleton game manager one of my teammates built in Java. \
          It sent each object's coordinates, travel angle, and sprite info as JSON, \
          and I rendered it all in React. I also created sprites for every object in the game \
          and did a lot of bug fixing on score submission toward the end of the final sprint.\
          \n \
          \n \
          I also organized a team-wide code review at the start of sprint 3 that doubled as a \
          planning session — we wrote deliverables, played planning poker, and filed issues all in one \
          sitting, which kept the last sprint on track. \
          \n \
          \n \
          We also used Scrum and extensive GitLab which was a fun learning experience. I also designed all of our assets and art.\
          I learned a lot about the iterative process and how communication and collaboration work in a software development team. \
          Pivoting and adapting to changing requirements (and deadlines) was a crutial part of this project. \
          Grinding and scrambling at the last second was fun and stressful since I was scrum master, but we pulled through with one of the best projects in the class."
      },
      {
        type: "image-grid",
        images: [
          { src: "/images/projects/asteroids_gameplay.png", caption: "Gameplay screenshot" },
          { src: "/images/projects/asteroids_main_menu.png", caption: "Main menu" },
          { src: "/images/projects/asteroids_asteroid.png", caption: "My asteroid sprite" },
        ]
      }
    ]
  },


  {
    id: "card-scanner",
    title: "Pokemon Card Scanner",
    date: "June 2025 - July 2025",
    metadata: "TensorFlow • React • Node.js • Python • Computer Vision • API",
    thumbnail: "/images/projects/card_scanner_thumbnail.png",
    description:
      "Full-stack app that identifies Pokemon TCG cards using computer vision and live market data.",
    sections: [
      {
        type: "bullets",
        heading: "Overview",
        items: [
          "Developed a full-stack application that identifies Pokemon TCG cards using computer vision and machine learning",
          "Implemented client-side image processing with TensorFlow.js and matched predictions against the Pokemon TCG API",
          "Integrated external APIs to fetch card attributes including rarity, set, and market value",
          "Designed a batch training pipeline using Python and Node.js to incrementally update models while optimizing storage usage"
        ]
      },
      { 
        type: "text", 
        content: "I was in China visiting family when I started this project.\
        This was also a bit after I got back into collectiong. So when trying to catalog my cards, I found out you have to PAY for visual recongition on apps.\
        So I took it in my own hands to create my own. I used tensorflow for training models in batches since my Macbook didn't have enough memory to run the entire model at once.\
        \n \
        \n \
        While this was a pretty small project, I learned two important lessons about visual recognition.\
        First, there must be some image processing and card isolation techniques to ensure accurate detection.\
        Second, because I was doing batch training locally, I would have a different model for every set of cards.\
        What I should have done was host the models on a cloud platform for better scalability and management like gcp."
      },
    ]
  },


  {
    id: "old_portfolio",
    title: "Old Personal Portfolio Website",
    date: "Aug 2024 - Sept 2024",
    metadata: "React • Next.js • TypeScript • JavaScript • Netlify",
    thumbnail: "/images/projects/old_portfolio_thumbnail.png",
    description:
      "Personal portfolio website designed and built from scratch, deployed at richardfeng.dev.",
    sections: [
      {
        type: "bullets",
        heading: "Overview",
        items: [
          "Designed and developed a personal portfolio website using React, Next.js, and TypeScript; deployed on Netlify",
          "Integrated custom-designed visual assets and responsive layouts for a clean, professional presentation"
        ]
      },
      {
        type: "text",
        content: "This was my first and old portfolio website that I built from scratch watching tutorials. \
          It became very boilerplate-y and hard to maintain as I added more projects and pages, which is what motivated me to build this new one.\
          Because this was my first large React project, I learned that hardcoding is bad (surprise). \
          This led me to stop updating it because it was very frustrating to update, which also motivated me to create this new portfolio after I graduated."
      },
      {
        type: "image-left",
        src: "/images/projects/old_portfolio_1.jpeg",
        caption: "Poorly cropped hero section",
        text: "Here's an example of what my old portfolio looked like. \
          It was very plain and not a fraction as creative or asthetic as the current portfolio. \
          It's actually so plain that I chose to not include an image grid of it because I'm at a lost for words to describe how mid it looks."
      },
      { type: "github", url: "https://github.com/rtfeng101/website" }
    ]
  },


  {
    id: "portfolio",
    title: "Minecraft Portfolio",
    important: true,
    date: "Jun 2026 - Jun 2026",
    metadata: "React • JavaScript • Vite • CSS • Netlify",
    thumbnail: "/images/projects/portfolio_thumbnail.png",
    description: "A Minecraft-inspired developer portfolio featuring custom UI design, interactive animations, and responsive project showcases.",
    sections: [
      {
        type: "bullets",
        heading: "Overview",
        items: [
          "Designed and developed a fully custom Minecraft-themed portfolio from the ground up using React and Vite",
          "Created reusable data-driven project, experience, and about-page components to simplify content management and low technical debt",
          "Implemented animated backgrounds, custom UI elements, and game-inspired styling while maintaining responsive layouts",
          "Deployed and maintained the site through Netlify with a custom domain and Git-based updates"
        ]
      },
      {
        type: "text",
        content: "This portfolio serves as both a personal website and a limit test of my front-end development skills. \
        \n \
        \n \
        I spent a long time debating about how to make my portfolio stand out and I landed on a Minecraft theme since it has all the elements I wanted. \
        The project was built with React, Vite, and vanilla CSS. \
        Learning from my past mistakes with my first portfolio, I emphasized reusable components and a data-driven architecture. \
        Project entries, experience sections, and personal information are defined through structured data objects, allowing new content to be added without modifying page logic.\
        \n \
        \n \
        A major focus of the project was balancing visual creativity with usability. \
        Features such as animated backgrounds, custom navigation, responsive layouts, and interactive project pages were details to create a more immersive and custom experience. \
        The result is a portfolio that is fun to create and look at while being a showcase of my development skills and projects.\
        \n \
        \n \
        I won't add any images of the portfolio here since you're looking at it right now (no way) and you should go explore it yourself! \
        \n \
        \n \
        And the panorama is my Minecraft house, yes it's made of birch, yes it is nice."
      },
      { type: "github" , url: "https://github.com/rtfeng101/new-portfolio" }
    ]
  },


  {
    id: "croptails",
    title: "CropTails",
    date: "Jan 2026 - Feb 2026",
    metadata: "Godot • GDScript • Game Development",
    thumbnail: "/images/projects/croptails_thumbnail.png",
    description: "A 2D farming game developed with Godot and GDScript",
    sections: [
      {
        type: "bullets",
        heading: "Overview",
        items: [
          "Designed and implemented a modular game architecture in Godot using reusable state machines and component-based systems",
          "Built extensible entity behavior logic (player, NPCs, interactables) with minimal coupling between systems",
        ]
      },
      {
        type: "text",
        content: "I wanted to experiment with game dev since it was something I was always interested in.\
        I found a series of tutorials on Youtube that walked through building this game and follwowed along. \
        It was fun to work on and learning about game development was interesting because of how coupled and dependent the systems and scripts are.\
        \n \
        \n \
        I'm about half way through, and once I have less on the mental stack, I might return back to it. The code that I've got is on Github (somewhere)."
      },
      { type: "github", url: "https://github.com/rtfeng101/croptails"}
    ]
  },


  {
  id: "discord-bot",
  title: "Lobby Organizer Discord Bot",
  date: "June 2024 - July 2024",
  metadata: "Python • Discord API",
  thumbnail: "/images/projects/discord_thumbnail.png",
  description:
    "Discord bot that streamlines game lobby creation and player matchmaking.",
  sections: [
    {
      type: "bullets",
      heading: "Overview",
      items: [
        "Built a Discord bot that streamlines lobby creation for games, allowing users to create lobbies and find players via the Discord API",
        "Built commands that allow users to display and create lobbies with game title and starting time",
        "Increased ease of use through reactions and voice channel commands for a simple and clean UI",
      ]
    },
    { type: "text", content: "An old project. This exists only because it is on github." },
    { type: "github", url: "https://github.com/rtfeng101/lobby-assistant" }
  ]
},


{
  id: "minirel",
  title: "Minirel Database",
  date: "March 2024 - April 2024",
  metadata: "C++ • UNIX • DBMS • SQL",
  thumbnail: "/images/projects/minirel_thumbnail.png",
  description:
    "Single-user DBMS built in C++ capable of executing SQL queries over a custom storage engine.",
  sections: [
    {
      type: "bullets",
      heading: "Overview",
      items: [
        "Jointly designed and developed a single-user DBMS in C++ capable of executing SQL queries on remote UNIX machines",
        "Designed database architecture through relation tables and relational graphs in partnership with a peer",
        "Implemented a buffer manager, heapfile manager, and relational operators using pages, linked-list heapfile scanners, and SQL filter operations",
      ]
    },
    { type: "text", content: "An old project. It is a simple database management system built in C++." },
    ]
  },
];