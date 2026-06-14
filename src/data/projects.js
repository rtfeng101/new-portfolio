export const projects = [
  {
    id: "oct",
    title: "OCT Retinal Disease Classifier",
    date: "Apr 2026 - May 2026",
    metadata: "Python • TensorFlow • CNN • Image Processing",
    thumbnail: "/images/projects/oct-classifier.png",
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
    ]
  },



  {
    id: "computer-networks",
    title: "Computer Networks: Virtual Switch, Router & TCP",
    date: "Oct 2025 - Dec 2025",
    metadata: "Java • Mininet • UDP • TCP • Routing • Networking",
    thumbnail: "/images/projects/networks.png",
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
    date: "Feb 2025 - Apr 2025",
    metadata: "React • JavaScript • Spring Boot • Java • Maven • JDBC • phpMyAdmin • REST",
    thumbnail: "/images/projects/asteroids.png",
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
];