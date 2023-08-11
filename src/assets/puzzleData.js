const emojiPuzzleData = [
    {
      emojiPuzzle: '📱📧📅',
      solution: 'Smartphone Calendar (Mobile Calendar App)',
      description: 'Manage appointments and events on your phone.',
      projects: [
        'Mobile Calendar App with Reminders',
        'Event Scheduling and Notification App',
        'Appointment Management System',
      ],
    },
    {
      emojiPuzzle: '📡🌍🛰️',
      solution: 'Global Satellite Communication',
      description: 'Communication using satellites around the world.',
      projects: [
        'Satellite Data Communication Network',
        'Global Satellite Internet Connectivity',
        'Emergency Communication System',
      ],
    },
    {
      emojiPuzzle: '💬🤖🧠',
      solution: 'Chatbot Artificial Intelligence',
      description: 'AI-powered virtual assistant for conversations.',
      projects: [
        'Customizable Chatbot Development',
        'Natural Language Processing (NLP) Chatbot',
        'Customer Support Chatbot',
      ],
    },
    {
      emojiPuzzle: '🌐🔍📄',
      solution: 'Internet Search Engine',
      description: 'Online tool to find information on the web.',
      projects: [
        'Custom Search Engine Development',
        'Enhanced Web Crawlers for Indexing',
        'Semantic Search Engine Implementation',
      ],
    },
    {
      emojiPuzzle: '📸📷🖼️',
      solution: 'Digital Photography',
      description: 'Capturing images using electronic devices.',
      projects: [
        'Image Editing and Enhancement App',
        'Photo Sharing Platform',
        'AI-based Photo Filters and Effects',
      ],
    },
    {
      emojiPuzzle: '💾🔒🗄️',
      solution: 'Data Encryption',
      description: 'Protecting information with coded security.',
      projects: [
        'End-to-End Encryption Messaging App',
        'File Encryption and Decryption Tool',
        'Blockchain-based Data Privacy Solution',
      ],
    },
    {
      emojiPuzzle: '🕹️🎮🌌',
      solution: 'Video Game Universe',
      description: 'Expansive virtual world for gaming adventures.',
      projects: [
        'Open World RPG Game Development',
        'Multiplayer Online Battle Arena (MOBA) Game',
        'Procedural Content Generation for Games',
      ],
    },
    {
      emojiPuzzle: '📈💹📊',
      solution: 'Financial Analytics',
      description: 'Analyzing data to make informed financial decisions.',
      projects: [
        'Stock Market Prediction Algorithm',
        'Personal Finance Tracking App',
        'Cryptocurrency Price Analysis Dashboard',
      ],
    },
    {
      emojiPuzzle: '🛒💳📦',
      solution: 'Online Shopping Cart',
      description: 'Digital cart for purchasing products on the web.',
      projects: [
        'E-commerce Website Development',
        'AI-powered Product Recommendation System',
        'Secure Online Payment Gateway',
      ],
    },
    {
      emojiPuzzle: '🌐👥🌍',
      solution: 'Global Online Community',
      description: 'Connected network of people worldwide.',
      projects: [
        'Social Networking Platform Development',
        'Niche Community Forum Website',
        'Language Learning Community App',
      ],
    },
    {
      emojiPuzzle: '🤖🚗🛣️',
      solution: 'Self-Driving Car Technology',
      description: 'Cars that drive autonomously using technology.',
      projects: [
        'Autonomous Vehicle Control System',
        'Obstacle Detection and Avoidance System',
        'Connected and Intelligent Transportation',
      ],
    },
    {
      emojiPuzzle: '🧑‍💻🌐🔐',
      solution: 'Web Developer Security',
      description: 'Ensuring safety in web development.',
      projects: [
        'Website Vulnerability Scanning Tool',
        'Secure Authentication and Authorization System',
        'Cross-Site Scripting (XSS) Protection Mechanism',
      ],
    },
    {
      emojiPuzzle: '🖥️💻⚡',
      solution: 'Computer Hardware Acceleration',
      description: 'Boosting computer performance with hardware.',
      projects: [
        'Hardware Accelerated Graphics Rendering',
        'Neural Network Inference on GPUs',
        'FPGA-based Hardware Acceleration',
      ],
    },
    {
      emojiPuzzle: '🤖🧠🤝',
      solution: 'Human-Machine Interaction',
      description: 'Interaction between humans and machines.',
      projects: [
        'Gesture Recognition System',
        'Voice Command Integration for Devices',
        'Brain-Computer Interface for Accessibility',
      ],
    },
    {
      emojiPuzzle: '🏢🏭🌿',
      solution: 'Sustainable Infrastructure',
      description: 'Creating eco-friendly and lasting structures.',
      projects: [
        'Green Building Management System',
        'Renewable Energy Integration in Buildings',
        'Smart Water Management for Cities',
      ],
    },
    {
      emojiPuzzle: '📦🚚📍',
      solution: 'GPS Tracking for Deliveries',
      description: 'Tracking packages using GPS technology.',
      projects: [
        'Real-Time Parcel Tracking App',
        'Route Optimization for Delivery Services',
        'IoT-based Logistics Tracking System',
      ],
    },
    {
      emojiPuzzle: '📚🎓🌐',
      solution: 'Online Education',
      description: 'Learning through virtual platforms.',
      projects: [
        'Learning Management System (LMS)',
        'Interactive Online Course Platform',
        'AI-driven Personalized Learning Assistant',
      ],
    },
    {
      emojiPuzzle: '📲🔊🎶',
      solution: 'Mobile Music Streaming',
      description: 'Streaming music on mobile devices.',
      projects: [
        'Music Streaming App with Offline Mode',
        'Music Recommendation and Discovery Platform',
        'Live Concert Streaming Application',
      ],
    },
    {
      emojiPuzzle: '📺🌆🌙',
      solution: 'Nighttime Television (TV Shows at Night)',
      description: 'TV shows aired during the night.',
      projects: [
        'Late-Night TV Show Recommendation System',
        'Streaming Platform for Nighttime Content',
        'Interactive Nighttime TV Show App',
      ],
    },
    {
      emojiPuzzle: '📦💡👷‍♂️',
      solution: 'Package Tracking and Delivery',
      description: 'Tracking and delivering packages.',
      projects: [
        'Smart Parcel Locker System',
        'Automated Drone Package Delivery',
        'Smart Package Routing Algorithm',
      ],
    },
    {
      emojiPuzzle: '🖥️🎮🌍',
      solution: 'Gaming on the Internet',
      description: 'Playing games with others worldwide.',
      projects: [
        'Online Multiplayer Game Server Development',
        'E-sports Tournament Platform',
        'Cloud Gaming Service Implementation',
      ],
    },
    {
      emojiPuzzle: '🌐🔒🌍',
      solution: 'Secure Internet Connection',
      description: 'Safe online communication and data transfer.',
      projects: [
        'Virtual Private Network (VPN) Solution',
        'Encrypted Communication Protocol Development',
        'Secure Web Browser Plugin',
      ],
    },
    {
      emojiPuzzle: '🤖🏠🏡',
      solution: 'Smart Home Automation',
      description: 'Automating home tasks using technology.',
      projects: [
        'Home Automation System with Voice Control',
        'Energy-efficient Smart Home Solutions',
        'IoT-based Home Security and Monitoring',
      ],
    },
    {
      emojiPuzzle: '📚📖🌐',
      solution: 'Digital Literature',
      description: 'Books and texts available online.',
      projects: [
        'E-book Reader Application',
        'Digital Library Management System',
        'Collaborative Online Writing Platform',
      ],
    },
    {
      emojiPuzzle: '📊📈🗂️',
      solution: 'Data Visualization',
      description: 'Presenting data in graphical formats.',
      projects: [
        'Interactive Data Visualization Dashboard',
        'Real-time Analytics and Charting Tool',
        '3D Data Visualization Platform',
      ],
    },
    {
      emojiPuzzle: '🌐🗺️📍',
      solution: 'Global Positioning System (GPS)',
      description: 'Satellite-based navigation and location system.',
      projects: [
        'GPS-based Navigation App',
        'Geocaching and Location-based Game',
        'Indoor Positioning System for Buildings',
      ],
    },
    {
      emojiPuzzle: '💬🗣️🌐',
      solution: 'Online Communication',
      description: 'Interacting and talking through the web.',
      projects: [
        'Real-time Chat Application',
        'Voice and Video Calling Platform',
        'Discussion Forum for Online Communities',
      ],
    },
    {
      emojiPuzzle: '🔐🌐🛡️',
      solution: 'Internet Security Measures',
      description: 'Protecting online information and data.',
      projects: [
        'Cybersecurity Training and Awareness Platform',
        'Phishing Detection and Prevention System',
        'Secure Password Management Application',
      ],
    },
    {
      emojiPuzzle: '🖥️🎨🌐',
      solution: 'Web Design and Development',
      description: 'Creating and building websites for the internet.',
      projects: [
        'Responsive Website Design Portfolio',
        'E-commerce Website with User-friendly UI',
        'Web-Based Content Management System (CMS)',
      ],
    },
    {
      emojiPuzzle: '📷🌆🌇',
      solution: 'City Photography',
      description: 'Capturing urban scenes through a camera lens.',
      projects: [
        'Cityscape Photography Blog',
        'City Photography Social Media Platform',
        'Urban Photo Exhibition Website',
      ],
    },
    {
      emojiPuzzle: '🔊🎵🎶',
      solution: 'Audio Streaming Services',
      description: 'Listening to music and audio online.',
      projects: [
        'Personalized Music Playlist Generator',
        'Audio Podcast Streaming Platform',
        'Live Music Streaming and Concert App',
      ],
    },
    {
      emojiPuzzle: '🌐💼💻',
      solution: 'Remote Work Technology',
      description: 'Tools for working from different locations.',
      projects: [
        'Virtual Remote Team Collaboration Suite',
        'Remote Work Productivity Tracker',
        'Video Conferencing and Meeting Platform',
      ],
    },
    {
      emojiPuzzle: '🤖👾🕹️',
      solution: 'Video Game AI',
      description: 'Artificial intelligence in video games.',
      projects: [
        'NPC Behavior and Decision-making AI',
        'Dynamic Enemy AI for Games',
        'Procedural Level Generation with AI',
      ],
    },
    {
      emojiPuzzle: '📦🛒🛍️',
      solution: 'Online Shopping Experience',
      description: 'Purchasing goods over the internet.',
      projects: [
        'Personalized Shopping Recommendation App',
        'Virtual Try-on for Fashion E-commerce',
        'Augmented Reality Shopping Experience',
      ],
    },
    {
      emojiPuzzle: '🎓🌐🧑‍🎓',
      solution: 'Virtual Graduation Ceremony',
      description: 'Online celebration of academic achievements.',
      projects: [
        'Virtual Graduation Platform with Avatar',
        'Digital Yearbook and Graduation Memories',
        'Online Alumni Network and Portal',
      ],
    },
    {
      emojiPuzzle: '🧪🔬🌐',
      solution: 'Virtual Science Labs',
      description: 'Laboratory experiments conducted online.',
      projects: [
        'Virtual Chemistry Lab Simulation',
        'Physics Experiment Simulation Platform',
        'Biology Lab Practical Simulator',
      ],
    },
    {
      emojiPuzzle: '🏙️🌆🌉',
      solution: 'Urban Landscape Photography',
      description: 'Capturing cityscapes in photographs.',
      projects: [
        'Cityscape Photography Gallery Website',
        'Urban Photography Exhibition App',
        'Virtual City Tour through Photos',
      ],
    },
    {
      emojiPuzzle: '🎥🌐🎬',
      solution: 'Online Video Streaming',
      description: 'Watching videos and movies on the web.',
      projects: [
        'Niche Video Streaming Platform',
        'User-generated Content Streaming Website',
        'AI-based Video Recommendation Engine',
      ],
    },
    {
      emojiPuzzle: '🔍📚🌐',
      solution: 'Online Research',
      description: 'Gathering information from the internet.',
      projects: [
        'Research Paper Database and Search Engine',
        'Citation and Reference Management Tool',
        'Virtual Research Collaboration Platform',
      ],
    },
    {
      emojiPuzzle: '🌐🚀🛰️',
      solution: 'Satellite Internet Connectivity',
      description: 'Using satellites for internet access.',
      projects: [
        'Satellite Broadband Internet Service',
        'Remote Area Internet Access Solution',
        'Global Internet Coverage via Satellites',
      ],
    },
    {
      emojiPuzzle: '🧑‍🎤🎶🌐',
      solution: 'Virtual Concerts',
      description: 'Music performances streamed online.',
      projects: [
        'Virtual Concert Streaming Platform',
        'Concert Ticket Booking and Streaming App',
        'Music Festival Experience in VR',
      ],
    },
    {
      emojiPuzzle: '🔌🔋🌐',
      solution: 'Wireless Charging Technology',
      description: 'Charging devices without cables.',
      projects: [
        'Wireless Charging Pad Development',
        'IoT-enabled Wireless Charging Stations',
        'Solar-powered Wireless Charging Solution',
      ],
    },
    {
      emojiPuzzle: '👁️🌐🌍',
      solution: 'Virtual Reality Exploration',
      description: 'Exploring places through VR technology.',
      projects: [
        'Virtual Travel Experience in VR',
        'Historical Site VR Tour Application',
        'Virtual Reality Nature Exploration',
      ],
    },
    {
      emojiPuzzle: '🌐🏛️🏰',
      solution: 'Virtual Museum Tours',
      description: 'Touring museums online.',
      projects: [
        'Art and History Museum VR Tours',
        'Interactive Museum Exhibit Platform',
        'Virtual Science Museum Exploration',
      ],
    },
    {
      emojiPuzzle: '👥🤝🌐',
      solution: 'Online Networking',
      description: 'Connecting with others through the web.',
      projects: [
        'Professional Networking Platform',
        'Interest-based Social Networking App',
        'Online Mentorship and Collaboration Portal',
      ],
    },
    {
      emojiPuzzle: '🚀🛰️🌌',
      solution: 'Space Exploration',
      description: 'Journeying into outer space.',
      projects: [
        'Satellite Launch Simulation Game',
        'Educational Space Exploration Platform',
        'Real-time Space Observation Application',
      ],
    },
    {
      emojiPuzzle: '🌆🌙🎥',
      solution: 'Nighttime Cinematography',
      description: 'Filming scenes during the night.',
      projects: [
        'Low-light Video Recording Enhancement',
        'Nighttime Cinematic Short Film Project',
        'Night Sky Timelapse Photography App',
      ],
    },
    {
      emojiPuzzle: '🌐📰🗞️',
      solution: 'Digital News Media',
      description: 'News outlets available on the internet.',
      projects: [
        'AI-powered News Aggregator',
        'Collaborative Citizen Journalism Platform',
        'Personalized News Subscription Service',
      ],
    },
    {
      emojiPuzzle: '🎓📚🌐',
      solution: 'E-Learning',
      description: 'Learning through online platforms.',
      projects: [
        'Interactive E-learning Modules',
        'Skill-focused Online Learning Platform',
        'Gamified Educational App',
      ],
    },
    {
      emojiPuzzle: '🤳🌐📸',
      solution: 'Virtual Photo Sharing',
      description: 'Sharing photos on the internet.',
      projects: [
        'Augmented Reality Photo Sharing App',
        'Interactive Photo Storytelling Platform',
        'AI-curated Photo Albums and Memories',
      ],
    },
    {
      emojiPuzzle: '📼📺🌐',
      solution: 'Online Streaming Platforms',
      description: 'Platforms for streaming videos and shows.',
      projects: [
        'Niche Video Streaming Service',
        'Live Streaming Platform for Events',
        'Online Movie Screening Community',
      ],
    },
    {
      emojiPuzzle: '🌍📫📦',
      solution: 'International Shipping',
      description: 'Shipping parcels across the globe.',
      projects: [
        'Cross-border E-commerce Shipping Solution',
        'International Freight Booking Platform',
        'Global Parcel Tracking System',
      ],
    },
    {
      emojiPuzzle: '🌐🏡🏢',
      solution: 'Remote Property Management',
      description: 'Managing properties from afar.',
      projects: [
        'Remote Building Maintenance and Monitoring',
        'Smart Property Management Dashboard',
        'Virtual Property Tours for Buyers',
      ],
    },
    {
      emojiPuzzle: '🌐🚶‍♂️🌍',
      solution: 'Virtual Walking Tours',
      description: 'Exploring places through virtual tours.',
      projects: [
        'Historical City Walking Tours in VR',
        'Outdoor Adventure Virtual Guided Tours',
        'Self-guided Nature Walks in Virtual Reality',
      ],
    },
  ];
  export default emojiPuzzleData;
  