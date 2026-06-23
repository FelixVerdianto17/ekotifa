export interface Program {
  id: string;
  title: string;
  slug: string;
  category: string;
  subtitle: string;
  tagline: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  outcomes: string[];
  benefits: string[];
  suitableDestinations?: string[];
  suitableActivities?: string[];
  itinerarySummary?: any;
  location?: string;
  duration?: string;
  capacity?: string;
  price?: string;
  mainActivities?: any;
  participantJourney?: string[];
  include?: string[];
  exclude?: string[];
  uniqueSellingPoints?: string[];
  sustainabilityImpact?: string[];
  safetyAndOperation?: string[];
  teamSupport?: string[];
  outputs?: string[];
  rules?: string[];
  seoMetadata?: {
    title: string;
    description: string;
  };
  imageUrl: string;
  ctaLabel: string;
  ctaHref: string;
  isFeatured: boolean;
  isActive: boolean;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  audience: string;
  headline: string;
  description: string;
  programs: Program[];
}

export const programCategories: Category[] = [
  {
    id: "meaningful-journeys",
    title: "Meaningful Journeys",
    slug: "meaningful-journeys",
    audience: "Individu, keluarga, komunitas, dan travelers",
    headline: "Immersive experiences that blend local wisdom, sustainability, culture, mindfulness, and meaningful exploration.",
    description: "Nikmati perjalanan mendalam yang menggabungkan kearifan lokal, keberlanjutan, budaya, kesadaran penuh, dan eksplorasi yang bermakna bagi diri dan lingkungan.",
    programs: [
      {
        id: "swasana",
        title: "Swasana",
        slug: "swasana",
        category: "Meaningful Journeys",
        subtitle: "Harmonizing Mind and Local Heritage",
        tagline: "Reconnect with your inner self through the peaceful rhythm of local traditions.",
        shortDescription: "A mindful escape designed to immerse you in local culture and serene environments, fostering deep inner peace.",
        description: "Swasana is an immersive wellness journey that blends local healing wisdom, yoga, meditation, and cultural exploration. Set in tranquil natural locations, this program helps you disconnect from urban noise and reconnect with yourself and the cultural heritage of local communities.",
        highlights: [
          "Morning meditation in nature",
          "Cultural immersion workshops",
          "Local organic dining experiences"
        ],
        outcomes: [
          "Restored mental clarity and energy",
          "Deep appreciation of local traditions",
          "Practical stress-management techniques"
        ],
        benefits: [
          "All-inclusive accommodation in eco-resort",
          "Guided by professional wellness instructors",
          "Contribution to local economy"
        ],
        suitableDestinations: ["Bali Rural Area", "Yogyakarta Village"],
        suitableActivities: ["Meditation", "Local Craft Workshop", "Yoga Sessions"],
        imageUrl: "/images/programs/swasana.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: true,
        isActive: true
      },
      {
        id: "forest-healing",
        title: "Forest Healing",
        slug: "forest-healing",
        category: "Meaningful Journeys",
        subtitle: "Shinrin-yoku with a Tropical Touch",
        tagline: "Immerse yourself in the healing energy of the forest.",
        shortDescription: "Experience the scientifically proven benefits of forest bathing under the guidance of conservation experts.",
        description: "Forest Healing is designed to reduce stress, lower blood pressure, and boost immune function by immersing participants in lush forests. Combining natural therapy with ecological education, it provides a unique pathway to peace and conservation awareness.",
        highlights: [
          "Guided forest bathing (Shinrin-yoku)",
          "Sensory awareness exercises",
          "Ecological conservation talks"
        ],
        outcomes: [
          "Reduced stress levels",
          "Increased mindfulness",
          "Greater connection to forest ecosystems"
        ],
        benefits: [
          "Expert ecologist guidance",
          "Organic local meals",
          "Planting a symbolic native tree"
        ],
        suitableDestinations: ["Mount Merapi Forest", "West Bali National Park"],
        suitableActivities: ["Forest Bathing", "Nature Walking", "Tree Planting"],
        imageUrl: "/images/programs/forest-healing.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      },
      {
        id: "discoffeery",
        title: "Discoffeery",
        slug: "discoffeery",
        category: "Meaningful Journeys",
        subtitle: "A Journey from Bean to Cup",
        tagline: "Explore the sustainable stories behind your morning cup.",
        shortDescription: "Discover the rich heritage of local coffee cultivation, sustainable farming, and roasting rituals.",
        description: "Discoffeery takes you on a sensory exploration of local coffee plantations. Learn about agroforestry practices, hand-pick coffee cherries, witness the roasting process, and appreciate the lives of sustainable coffee farmers.",
        highlights: [
          "Agroforestry plantation tour",
          "Interactive roasting session",
          "Professional coffee cupping"
        ],
        outcomes: [
          "Deep understanding of coffee value chain",
          "Skills in basic coffee brewing",
          "Support for fair-trade farming"
        ],
        benefits: [
          "Take-home custom roasted coffee bag",
          "Direct interaction with farmers",
          "Scenic plantation picnic"
        ],
        suitableDestinations: ["Kintamani Highland", "Temanggung Ridge"],
        suitableActivities: ["Coffee Tasting", "Farming Experience", "Roasting Workshop"],
        imageUrl: "/images/programs/discoffeery.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: true,
        isActive: true
      },
      {
        id: "bike-heritage",
        title: "Bike Heritage",
        slug: "bike-heritage",
        category: "Meaningful Journeys",
        subtitle: "Pedaling Through History",
        tagline: "Cycle along historical routes and discover hidden cultural stories.",
        shortDescription: "An active, low-carbon journey exploring local heritage sites and villages on two wheels.",
        description: "Bike Heritage combines eco-friendly travel with history. Ride through scenic rural paths, visit historical landmarks, interact with local artisans, and explore the preservation of heritage.",
        highlights: [
          "Scenic rural bike routes",
          "Visits to historical landmarks",
          "Artisan workshop visits"
        ],
        outcomes: [
          "Active physical exercise",
          "Appreciation of historic heritage",
          "Eco-friendly sightseeing experience"
        ],
        benefits: [
          "Premium bike and safety gear rental",
          "Local historian guide",
          "Traditional snacks refreshment"
        ],
        suitableDestinations: ["Borobudur Village", "Yogyakarta Heritage Area"],
        suitableActivities: ["Cycling", "Sightseeing", "Artisanal Crafting"],
        imageUrl: "/images/programs/bike-hertiage.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      },
      {
        id: "couple-journey",
        title: "Couple Journey",
        slug: "couple-journey",
        category: "Meaningful Journeys",
        subtitle: "Shared Moments of Purpose",
        tagline: "Strengthen your bond while contributing to community development.",
        shortDescription: "A romantic and meaningful getaway focusing on mutual growth, sustainability, and shared impact.",
        description: "Couple Journey is an intimate experience designed for partners to connect on a deeper level. Participate together in local empowerment activities, enjoy private eco-dinners, and reflect on shared values of sustainability.",
        highlights: [
          "Co-creative community workshops",
          "Private candlelight farm-to-table dinner",
          "Guided couples' reflection sessions"
        ],
        outcomes: [
          "Stronger relationship bond",
          "Shared memories of social contribution",
          "Renewed sense of purpose"
        ],
        benefits: [
          "Private premium cottage",
          "Personalized itinerary",
          "Professional couples photographer"
        ],
        suitableDestinations: ["Lombok Coast", "Ubud Village"],
        suitableActivities: ["Mindful Walking", "Coral Reef Restoration", "Private Dining"],
        imageUrl: "/images/programs/couple-journey.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      },
      {
        id: "adrenaline-junkie",
        title: "Adrenaline Junkie",
        slug: "adrenaline-junkie",
        category: "Meaningful Journeys",
        subtitle: "Adventure with Responsibility",
        tagline: "Get your heart racing while respecting the natural environment.",
        shortDescription: "Thrilling outdoor adventures designed to challenge you and support eco-conservation.",
        description: "Adrenaline Junkie is for those who seek high-energy thrills in wild terrains. From white-water rafting to volcano trekking, all adventures are conducted with strict Leave No Trace principles and support local guides.",
        highlights: [
          "Volcano trekking or rafting",
          "Leave No Trace training",
          "Survival skills workshop"
        ],
        outcomes: [
          "Boosted physical endurance",
          "Outdoor survival confidence",
          "Adrenaline and thrill under safe supervision"
        ],
        benefits: [
          "Certified adventure guides",
          "Safety assurance and insurance",
          "High-quality gear provided"
        ],
        suitableDestinations: ["Citarik River", "Mount Batur"],
        suitableActivities: ["White-water Rafting", "Volcano Trekking", "Camping"],
        imageUrl: "/images/programs/ardenaline-junkie.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      },
      {
        id: "trip-in-tribe",
        title: "Trip In Tribe",
        slug: "trip-in-tribe",
        category: "Meaningful Journeys",
        subtitle: "Connecting with Indigenous Wisdom",
        tagline: "Immerse yourself in the authentic lifestyle of traditional tribes.",
        shortDescription: "Learn ancient sustainable practices and social structures directly from indigenous communities.",
        description: "Trip In Tribe is a profound cultural journey where you live alongside indigenous people. Learn their traditional agricultural methods, art form, and sustainable way of living that has protected the ecosystem for centuries.",
        highlights: [
          "Staying in traditional community housing",
          "Indigenous farm participation",
          "Traditional music and storytelling night"
        ],
        outcomes: [
          "Broadened cultural perspective",
          "Understanding of ancestral ecology",
          "Support to indigenous cultural preservation"
        ],
        benefits: [
          "Respectful local hosts",
          "Experienced native interpreter",
          "Authentic traditional meals"
        ],
        suitableDestinations: ["Baduy Village", "Wae Rebo Flores"],
        suitableActivities: ["Cultural Exchange", "Traditional Farming", "Storytelling"],
        imageUrl: "/images/programs/trip-in-tribe.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      },
      {
        id: "teroka",
        title: "TEROKA",
        slug: "teroka",
        category: "Meaningful Journeys",
        subtitle: "Share, Care and Respect",
        tagline: "A living expedition to reconnect with nature, self, and collective responsibility.",
        shortDescription: "TEROKA is a living expedition program that transforms mountain trekking into a reflective journey of self-awareness, discipline, teamwork, and deeper connection with nature.",
        description: "TEROKA adalah program living expedition yang menjadikan gunung bukan hanya sebagai destinasi, tetapi sebagai ruang belajar dan medium untuk mengembangkan kesadaran diri, ritme, kedisiplinan, dan kehadiran diri. Melalui pengalaman tinggal di alam bebas, peserta terlibat aktif dalam manajemen harian ekspedisi, refleksi, mindfulness, nature journaling, serta kolaborasi bersama tim pendukung.",
        highlights: [
          "Living Expedition Experience",
          "Mountain Trekking & Outdoor Immersion",
          "Mindfulness and Nature Journaling",
          "Team Collaboration & Expedition Management",
          "Self-Awareness and Discipline Practice",
          "Leave No Trace and Environmental Responsibility",
          "Reflective Journey and Gratitude Session"
        ],
        outcomes: [
          "Personal expedition logbook",
          "Nature journaling records",
          "Self-awareness reflection",
          "Expedition documentation",
          "Personal achievement certificate",
          "Zero waste awareness report",
          "Stronger relationship with nature and self"
        ],
        benefits: [
          "Membantu peserta membangun disiplin, ketahanan diri, dan kesadaran personal",
          "Memberikan pengalaman pendakian yang lebih reflektif dan bermakna",
          "Mengembangkan kemampuan adaptasi, kolaborasi, dan tanggung jawab di alam bebas",
          "Menumbuhkan hubungan baru dengan alam melalui mindfulness dan journaling",
          "Mendorong perilaku bertanggung jawab melalui prinsip leave no trace"
        ],
        suitableDestinations: [
          "Gunung Salak",
          "Gunung Gede Pangrango",
          "Gunung Ciremai",
          "Gunung Prau",
          "Gunung Merbabu",
          "Gunung Lawu",
          "Gunung Arjuno",
          "Gunung Argopuro"
        ],
        suitableActivities: [
          "Mindful Walking",
          "Nature Journaling",
          "Mountain Trekking",
          "Expedition Management"
        ],
        itinerarySummary: [
          { day: "Day 1", title: "The Transition", route: "Baderan to Sabana Kecil", activity: "Sensory Gate & Unplugging Ritual", journaling: "The Leaving" },
          { day: "Day 2", title: "The Observation & Connection", route: "Sabana Kecil to Cikasur", activity: "Wildlife Silent Watching & Deep Listening", journaling: "The Witness" },
          { day: "Day 3", title: "The Immersion & Solitude", route: "Cikasur to Sabana Lonceng", activity: "Mindful Walking & The Power of Solitude", journaling: "The Dialogue" },
          { day: "Day 4", title: "The Perspective & Gratitude", route: "Puncak Rengganis, Puncak Argopuro, Hutan Lumut, Danau Taman Hidup", activity: "Historical Reflection & Forest Bathing", journaling: "The Summit of Mind" },
          { day: "Day 5", title: "Integration & Anchoring", route: "Danau Taman Hidup to Basecamp Bremi", activity: "Morning Stillness & Future Mapping", journaling: "The Echo" }
        ],
        safetyAndOperation: [
          "Pre-departure health screening",
          "Regular physical condition monitoring",
          "Technical briefing before trekking",
          "Evacuation route planning",
          "Emergency pickup points",
          "First aid ready team",
          "Communication system with HT or emergency signal",
          "Bad weather protocol"
        ],
        teamSupport: [
          "Expedition Leader",
          "Expedition Facilitator",
          "Logistic Manager",
          "Medical Support",
          "Documentation Team",
          "Local Driver / Shuttle",
          "Local Transport Support",
          "SIMAKSI / permit coordination"
        ],
        outputs: [
          "Cinematic journey video",
          "High-quality photo bank",
          "Social media kit",
          "Expedition report",
          "Personal achievement certificate",
          "Logbook pendakian",
          "Zero waste report",
          "Local economic contribution report",
          "Educational transformation through post-trip reflection"
        ],
        rules: [
          "Respect the silence",
          "Carry your responsibility",
          "Leave no trace",
          "Stay present",
          "Walk together",
          "Listen before speaking"
        ],
        seoMetadata: {
          title: "TEROKA | Living Expedition Program | Ekotifa",
          description: "TEROKA is a living expedition program by Ekotifa that combines mountain trekking, mindfulness, nature journaling, teamwork, and environmental responsibility."
        },
        imageUrl: "/images/programs/teroka.webp",
        ctaLabel: "View Program Details",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      },
      {
        id: "offline-day",
        title: "OFFLINE DAY",
        slug: "offline-day",
        category: "Meaningful Journeys",
        subtitle: "Disconnect to Reconnect",
        tagline: "A one-day healing escape to pause from digital noise and reconnect with nature, people, and self.",
        shortDescription: "OFFLINE DAY is a one-day digital detox and mindful nature experience designed to help participants slow down, disconnect from screens, and reconnect with themselves, others, and the natural environment.",
        description: "OFFLINE DAY bukan sekadar kegiatan rekreasi, tetapi perjalanan singkat untuk berhenti dari ritme hidup yang serba cepat. Melalui pengalaman sehari penuh, peserta diajak meninggalkan notifikasi, timeline media sosial, dan distraksi digital sementara. Peserta akan menyimpan gadget ke dalam Digital Rest Box sebagai simbol memberi waktu istirahat untuk gadget dan pikiran. Program ini menggabungkan eksplorasi alam mindful, pengenalan tanaman herbal, jamu making experience, social connection, journaling, dan refleksi diri.",
        location: "Villa Botani",
        duration: "One Day Trip",
        capacity: "15 pax",
        price: "Rp 700.000/pax",
        highlights: [
          "Digital Detox Ritual",
          "Digital Rest Box Experience",
          "Mindfulness Experience",
          "Nature-Based Learning",
          "Forest Exploration",
          "Medicinal Plant Discovery",
          "Jamu Making Experience",
          "Slow Lunch Experience",
          "Nature Connection Challenge",
          "Tea & Reflection Session",
          "Journaling and Self Reflection"
        ],
        outcomes: [
          "Mini journal",
          "Friendship card",
          "Digital detox experience",
          "Herbal drink / jamu creation",
          "Reflection notes",
          "Stronger social connection",
          "Calmer and more mindful experience",
          "New insight after a screen-free day"
        ],
        benefits: [
          "Membantu peserta merasa lebih tenang",
          "Membantu peserta merasa lebih rileks",
          "Membantu peserta lebih hadir di momen saat ini",
          "Memberikan pengalaman belajar mindfulness",
          "Memberikan pengalaman membuat jamu",
          "Menghadirkan pengalaman healing yang terstruktur",
          "Mengurangi ketergantungan digital sementara",
          "Membangun interaksi sosial nyata",
          "Memperkuat koneksi dengan alam dan diri sendiri"
        ],
        mainActivities: [
          {
            title: "Detoks Digital",
            description: "Peserta melakukan gadget drop ceremony dengan menyimpan gadget ke dalam Digital Rest Box. Setelah itu peserta menerima mini journal dan friendship card."
          },
          {
            title: "Forest Exploration",
            description: "Peserta diajak masuk ke area hutan atau kebun alami di Villa Botani bersama edukator botani untuk mengenal berbagai tanaman lokal, terutama tanaman herbal dan tanaman obat."
          },
          {
            title: "Jamu Making Experience",
            description: "Peserta belajar membuat jamu tradisional menggunakan bahan alami dari sesi pengenalan tanaman."
          },
          {
            title: "Slow Lunch Experience",
            description: "Peserta menikmati makan siang bersama dengan konsep no gadget, no rushing, mindful eating, dan makanan lokal."
          },
          {
            title: "Nature Connection Challenge",
            description: "Peserta dibagi ke kelompok kecil dan mengikuti mini challenge berbasis alam dan interaksi sosial, seperti mencari tanaman unik, menemukan aroma favorit, dan menulis apresiasi ke teman baru."
          },
          {
            title: "Tea & Reflection Session",
            description: "Peserta menikmati teh herbal sambil journaling dan melakukan refleksi diri."
          }
        ],
        participantJourney: [
          "Disconnect",
          "Discover",
          "Learn",
          "Create",
          "Connect",
          "Reflect"
        ],
        itinerarySummary: [
          { time: "07.00 - 08.00", activity: "Perjalanan dari Perpustakaan Bogor ke lokasi tujuan." },
          { time: "08.00 - 08.30", activity: "Registrasi, welcome drink, dan digital detox ritual." },
          { time: "08.30 - 10.00", activity: "Forest Exploration & Medicinal Plant Discovery." },
          { time: "10.00 - 11.15", activity: "Traditional Herbal Drink Workshop / Membuat Jamu." },
          { time: "11.15 - 12.15", activity: "Slow Lunch Experience." },
          { time: "12.15 - 13.30", activity: "Nature Connection Challenge." },
          { time: "13.30 - 14.30", activity: "Tea & Reflection Session." },
          { time: "14.30 - 15.00", activity: "Closing Circle & Sharing Session." }
        ],
        include: [
          "Entrance ticket Villa Botani",
          "Rumah Balcony Nangka",
          "Digital Detox Kit: mini journal and friendship card",
          "Workshop Jamu Kit",
          "Transportasi PP dari Perpustakaan Bogor ke lokasi",
          "Lunch",
          "Snack",
          "Tea session",
          "Mindfulness facilitator",
          "Edukator botani",
          "Dokumentasi kegiatan"
        ],
        exclude: [
          "Pengeluaran pribadi",
          "Obat-obatan pribadi",
          "Tambahan makanan dan minuman di luar paket"
        ],
        uniqueSellingPoints: [
          "Digital Detox yang Terstruktur",
          "Tidak Bisa Dilakukan Sendiri",
          "Personalized Healing Souvenir"
        ],
        sustainabilityImpact: [
          "Penggunaan bahan alami pada workshop",
          "Mengurangi ketergantungan digital",
          "Membangun kepedulian terhadap alam",
          "Membangun interaksi sosial nyata",
          "Memperkuat koneksi antar peserta",
          "Membuka peluang kolaborasi dengan local facilitator",
          "Memperkenalkan konsep slow living",
          "Mendukung konsumsi makanan lokal",
          "Membangun budaya komunikasi langsung tanpa layar"
        ],
        seoMetadata: {
          title: "OFFLINE DAY | Digital Detox & Mindful Nature Experience | Ekotifa",
          description: "OFFLINE DAY is a one-day digital detox and mindful nature experience by Ekotifa, designed to help participants disconnect from screens and reconnect with nature, people, and self."
        },
        imageUrl: "/images/programs/offline-day.webp",
        ctaLabel: "View Program Details",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      }
    ]
  },
  {
    id: "learning-expeditions",
    title: "Learning Expeditions",
    slug: "learning-expeditions",
    audience: "Sekolah, kampus, dan youth development",
    headline: "Learning beyond the classroom.",
    description: "Experiential learning journeys designed to develop research skills, leadership, sustainability awareness, and real-world understanding.",
    programs: [
      {
        id: "life-cycle",
        title: "Life Cycle",
        slug: "life-cycle",
        category: "Learning Expeditions",
        subtitle: "Understanding the Ecosystem's Rhythm",
        tagline: "Explore the complex web of life from soil to forest.",
        shortDescription: "A scientific expedition analyzing ecological balance, life stages, and nature's cycles.",
        description: "Life Cycle is an educational program focusing on biodiversity, food webs, and nutrient cycling. Students analyze soil health, investigate aquatic ecosystems, and understand the cyclical interdependence of species.",
        highlights: [
          "Soil biodiversity analysis",
          "Microscopic water sampling",
          "Food chain mapping games"
        ],
        outcomes: [
          "Scientific research skills",
          "Clarity on ecological systems",
          "Ecosystem-thinking mindset"
        ],
        benefits: [
          "Access to portable lab kits",
          "Guided by science educators",
          "Report template for school assessment"
        ],
        suitableDestinations: ["Bogor Botanical Gardens", "Mangrove Conservation Area"],
        suitableActivities: ["Scientific Sampling", "Nature Observation", "Eco-Games"],
        imageUrl: "/images/programs/life-cycle.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      },
      {
        id: "ecocamp",
        title: "Ecocamp / Ecosystem Around Us",
        slug: "ecocamp",
        category: "Learning Expeditions",
        subtitle: "Camp for Future Conservationists",
        tagline: "Connect with nature and discover the ecosystem in your backyard.",
        shortDescription: "A classic outdoor camp focused on environmental sustainability, waste management, and nature connection.",
        description: "Ecocamp provides a hands-on experience in low-impact living. Students camp in eco-friendly facilities, practice zero-waste principles, map the surrounding flora and fauna, and participate in collaborative conservation activities.",
        highlights: [
          "Zero-waste camping experience",
          "Surrounding ecosystem mapping",
          "Night sky stargazing & reflection"
        ],
        outcomes: [
          "Stronger team collaboration",
          "Eco-friendly lifestyle habits",
          "Practical conservation knowledge"
        ],
        benefits: [
          "Eco-lodge camping facilities",
          "All-inclusive healthy food",
          "Certificate of Participation"
        ],
        suitableDestinations: ["Sentul Eco-Camp", "Lembang Hills"],
        suitableActivities: ["Camping", "Hiking", "Waste Upcycling"],
        imageUrl: "/images/programs/ecocamp.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: true,
        isActive: true
      },
      {
        id: "local-genius",
        title: "Local Genius",
        slug: "local-genius",
        category: "Learning Expeditions",
        subtitle: "Learning from Local Innovations",
        tagline: "Discover how rural wisdom solves global environmental challenges.",
        shortDescription: "Study traditional architectural, agricultural, and resource-management systems that are sustainable by design.",
        description: "Local Genius showcases indigenous innovations. From traditional terracing irrigation (Subak) to bamboo architecture, students learn how historical methods provide valuable answers to modern sustainable development issues.",
        highlights: [
          "Subak irrigation system study",
          "Traditional bamboo building analysis",
          "Meeting local community innovators"
        ],
        outcomes: [
          "Understanding sustainable systems",
          "Respect for traditional technology",
          "Inspiration for sustainable design"
        ],
        benefits: [
          "Guided architectural/agricultural tours",
          "Interaction with local elders",
          "Academic workbook provided"
        ],
        suitableDestinations: ["Jatiluwih Rice Terraces", "Penglipuran Bamboo Forest"],
        suitableActivities: ["Agricultural Mapping", "Traditional Workshop", "Interviews"],
        imageUrl: "/images/programs/local-genius.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      },
      {
        id: "human-uniqueness",
        title: "Human Uniqueness",
        slug: "human-uniqueness",
        category: "Learning Expeditions",
        subtitle: "Empathy, Diversity, and Social Dynamics",
        tagline: "Celebrate diversity and understand different human perspectives.",
        shortDescription: "A sociological and anthropological learning trip focusing on community values and human diversity.",
        description: "Human Uniqueness encourages empathy and global citizenship. Students explore diverse social settings, understand local belief systems, and reflect on the common human values that tie different cultures together.",
        highlights: [
          "Inter-cultural dialogues",
          "Sociological observation walks",
          "Empathy-building reflection circles"
        ],
        outcomes: [
          "Enhanced emotional intelligence",
          "Intercultural communication skills",
          "Self-awareness & global perspective"
        ],
        benefits: [
          "Facilitated by social anthropologists",
          "Safe environment for open discussion",
          "Structured reflection journal"
        ],
        suitableDestinations: ["Tana Toraja", "Yogyakarta Village"],
        suitableActivities: ["Dialogue Sessions", "Cultural Participation", "Journaling"],
        imageUrl: "/images/programs/human-qniqueness.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      },
      {
        id: "youth-research-camp",
        title: "Youth Research Camp / YRC",
        slug: "youth-research-camp",
        category: "Learning Expeditions",
        subtitle: "Inspiring Young Researchers",
        tagline: "Develop research skills to solve real-world sustainability issues.",
        shortDescription: "A rigorous project-based camp for youth to design and conduct scientific or social research.",
        description: "Youth Research Camp (YRC) transforms students into active researchers. Under the mentorship of academics and experts, participants formulate hypotheses, collect field data, write research papers, and present their findings.",
        highlights: [
          "Mentorship with research experts",
          "Field data collection methods",
          "Research symposium and presentation"
        ],
        outcomes: [
          "Completed research proposal or paper",
          "Data analysis & presentation skills",
          "Academic credential booster"
        ],
        benefits: [
          "Academic publication opportunities",
          "Peer network of young scholars",
          "Research tools and materials provided"
        ],
        suitableDestinations: ["Mount Gede National Park", "Karimunjawa Marine Station"],
        suitableActivities: ["Data Collection", "Data Analysis", "Research Presentation"],
        imageUrl: "/images/programs/youth-research-camp.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: true,
        isActive: true
      },
      {
        id: "live-in-story",
        title: "Live In Story",
        slug: "live-in-story",
        category: "Learning Expeditions",
        subtitle: "Immersion in Rural Life",
        tagline: "Live, work, and grow alongside rural families.",
        shortDescription: "A deep experiential program where students stay with foster families in traditional villages.",
        description: "Live In Story offers students a firsthand experience of rural livelihoods. By living with local foster parents, participating in daily chores, and adapting to rural rhythms, students learn gratitude, adaptability, and cultural humility.",
        highlights: [
          "Staying with local foster families",
          "Participating in daily household chores",
          "Community celebration night"
        ],
        outcomes: [
          "Enhanced adaptability and resilience",
          "Deep empathy for rural livelihoods",
          "Lifelong cross-cultural friendships"
        ],
        benefits: [
          "Vetted foster families",
          "24/7 coordinator supervision",
          "Immersion guidebook"
        ],
        suitableDestinations: ["Pentingsari Tourism Village", "Nglanggeran Village"],
        suitableActivities: ["Cooking Local Food", "Farming", "Village Activities"],
        imageUrl: "/images/programs/live-in-story.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      },
      {
        id: "feelocity",
        title: "Feelocity",
        slug: "feelocity",
        category: "Learning Expeditions",
        subtitle: "Mindfulness and Nature Connection",
        tagline: "Slow down and engage all your senses with the natural world.",
        shortDescription: "A mindful exploration program focused on mental wellness, sensory activation, and self-discovery.",
        description: "Feelocity is designed for teenagers to unplug from digital screens and manage stress. Through sensory walks, solo reflection time in nature, and guided mindfulness sessions, students build emotional resilience and self-awareness.",
        highlights: [
          "Silent walks in serene nature",
          "Solo reflection time (nature solo)",
          "Creative journaling and art workshops"
        ],
        outcomes: [
          "Digital detox and reduced anxiety",
          "Stronger emotional self-regulation",
          "Better self-understanding"
        ],
        benefits: [
          "Led by certified youth counselors",
          "Mindfulness toolkit provided",
          "Post-camp follow-up guide"
        ],
        suitableDestinations: ["Lembang Pine Forests", "Bedugul Lake Area"],
        suitableActivities: ["Sensory Walking", "Art Expression", "Nature Meditation"],
        imageUrl: "/images/programs/feelocity.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      },
      {
        id: "community-service",
        title: "Community Service",
        slug: "community-service",
        category: "Learning Expeditions",
        subtitle: "Action for Social Impact",
        tagline: "Contribute directly to local education, infrastructure, or conservation projects.",
        shortDescription: "A service-learning journey that addresses specific needs of partner communities.",
        description: "Community Service combines academic learning with hands-on service. Students collaborate with local villagers to build facilities, teach in village schools, set up waste management systems, or support local green businesses.",
        highlights: [
          "Co-designed community projects",
          "Interactive tutoring at village schools",
          "Local development workshops"
        ],
        outcomes: [
          "Tangible community impact",
          "Social project management experience",
          "Stronger sense of civic duty"
        ],
        benefits: [
          "Safety-assured project site",
          "Project materials provided",
          "Official Service Certificate"
        ],
        suitableDestinations: ["Remote villages in Sukabumi", "Garut Rural Areas"],
        suitableActivities: ["Teaching", "Eco-Construction", "Trash Clean-up"],
        imageUrl: "/images/programs/Comunity Service.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      },
      {
        id: "future-leader-camp",
        title: "Future Leader Camp",
        slug: "future-leader-camp",
        category: "Learning Expeditions",
        subtitle: "Nurturing Eco-Leadership",
        tagline: "Develop leadership skills through environmental advocacy and teamwork.",
        shortDescription: "A youth camp focused on communication, critical thinking, and social entrepreneurship.",
        description: "Future Leader Camp prepares the next generation of sustainability leaders. Through team challenges, design thinking workshops, and leadership simulations, students learn how to lead projects that balance profit, people, and planet.",
        highlights: [
          "Design Thinking for sustainability",
          "Leadership simulation games",
          "Project proposal pitching competition"
        ],
        outcomes: [
          "Leadership skills portfolio",
          "Project planning capability",
          "Public speaking confidence"
        ],
        benefits: [
          "Mentoring by social entrepreneurs",
          "Pitching feedback from experts",
          "Opportunity for project seed funding"
        ],
        suitableDestinations: ["Sentul Adventure Forest", "Bandung Outpost"],
        suitableActivities: ["Design Thinking", "Team Challenges", "Public Pitching"],
        imageUrl: "/images/programs/Future Leader Camp.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      },
      {
        id: "future-campus-program",
        title: "Future Campus Program",
        slug: "future-campus-program",
        category: "Learning Expeditions",
        subtitle: "Preparing for Academic Excellence",
        tagline: "Explore premier campuses and research centers in Indonesia.",
        shortDescription: "An exploratory study tour to universities, laboratories, and green research centers.",
        description: "Future Campus Program gives high school students a preview of higher education. Visit top campuses, meet university professors, tour research labs, and learn about academic programs in sustainability, ecology, and technology.",
        highlights: [
          "Top university campus tours",
          "Research laboratory visits",
          "Dialogues with university lecturers & students"
        ],
        outcomes: [
          "Clarity on college options",
          "Motivation for academic success",
          "Understanding of sustainability careers"
        ],
        benefits: [
          "Academic pathway counseling",
          "University admission handbook",
          "Comfortable university-bus transport"
        ],
        suitableDestinations: ["Jakarta Campus Route", "Yogyakarta University Circle"],
        suitableActivities: ["Campus Tour", "Academic Workshop", "Networking"],
        imageUrl: "/images/programs/Future Campus Program.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      },
      {
        id: "indoestrip",
        title: "IndoeStrip",
        slug: "indoestrip",
        category: "Learning Expeditions",
        subtitle: "Exploration of Indonesian Archipelago",
        tagline: "Discover the biological and cultural diversity of Indonesia.",
        shortDescription: "A long-distance geography and biology exploration across distinct regions of Indonesia.",
        description: "IndoeStrip is a comprehensive educational journey across different ecological and cultural landscapes of Indonesia. Students analyze variations in ecosystems, language, and social systems.",
        highlights: [
          "Multi-ecosystem exploration",
          "Comparative cultural studies",
          "Wildlife conservation site visits"
        ],
        outcomes: [
          "Comprehensive knowledge of Indonesian geography",
          "Inter-regional understanding",
          "Field observation report"
        ],
        benefits: [
          "Safe domestic travel arrangements",
          "Expert naturalists and guides",
          "Comprehensive travel booklet"
        ],
        suitableDestinations: ["Java-Bali Overland Route", "East Nusa Tenggara Route"],
        suitableActivities: ["Overland Journey", "Ecosystem Mapping", "Cultural Observation"],
        imageUrl: "/images/programs/IndoeStrip.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      },
      {
        id: "cultural-mission",
        title: "Cultural Mission / International Mission",
        slug: "cultural-mission",
        category: "Learning Expeditions",
        subtitle: "Global Cultural Ambassadors",
        tagline: "Represent and exchange Indonesian culture on global platforms.",
        shortDescription: "An international exchange program promoting cultural diplomacy and global sustainability issues.",
        description: "Cultural Mission / International Mission prepares youth to present Indonesian local wisdom on the international stage. Participants collaborate with global peers to discuss climate change, sustainability, and cultural preservation.",
        highlights: [
          "International peer collaboration",
          "Cultural performance presentations",
          "Global youth sustainability forums"
        ],
        outcomes: [
          "International exchange experience",
          "Global networking opportunities",
          "Intercultural leadership skills"
        ],
        benefits: [
          "Pre-departure training program",
          "International safety coordinators",
          "Ambassador certificate"
        ],
        suitableDestinations: ["Singapore Eco-Hub", "Malaysia Cultural Exchange Center"],
        suitableActivities: ["Cultural Performance", "Forum Discussion", "Study Tour"],
        imageUrl: "/images/programs/Cultural Mission.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      }
    ]
  },
  {
    id: "purposeful-vacations",
    title: "Purposeful Vacations",
    slug: "purposeful-vacations",
    audience: "Sekolah, perusahaan, komunitas",
    headline: "Recreation with greater purpose.",
    description: "Leisure experiences designed to strengthen relationships, inspire creativity, and create positive social and environmental impact.",
    programs: [
      {
        id: "school-vacation",
        title: "School Vacation",
        slug: "school-vacation",
        category: "Purposeful Vacations",
        subtitle: "Fun with a Sustainable Twist",
        tagline: "Enjoy your school break while making a difference.",
        shortDescription: "A leisure-focused vacation for students that integrates eco-awareness and community games.",
        description: "School Vacation is a premium holiday program that blends relaxation, outdoor fun, and soft sustainability learning. Students participate in fun challenges, village games, and nature walks.",
        highlights: [
          "Adventure theme parks & nature games",
          "Fun trash-sorting contests",
          "Campfire and talent nights"
        ],
        outcomes: [
          "Refreshed student minds",
          "Basic sustainable habits",
          "Stronger peer relationships"
        ],
        benefits: [
          "Highly engaging youth guides",
          "Safe and supervised environments",
          "Fun eco-souvenir packages"
        ],
        suitableDestinations: ["Bali Adventure Resort", "Lembang Eco-Park"],
        suitableActivities: ["Outdoor Games", "Campfire", "Sightseeing"],
        imageUrl: "/images/programs/School Vaction.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      },
      {
        id: "farewell-party",
        title: "Farewell Party",
        slug: "farewell-party",
        category: "Purposeful Vacations",
        subtitle: "Celebrating Transitions, Preserving Memories",
        tagline: "A meaningful farewell celebration close to nature.",
        shortDescription: "Say goodbye to your classmates or team with a sustainable and unforgettable celebration.",
        description: "Farewell Party takes the standard school graduation or corporate exit party to a green and beautiful setting. Combine celebration with symbolic tree planting, memory sharing, and natural dining.",
        highlights: [
          "Eco-friendly decoration & dining",
          "Symbolic memory tree planting",
          "Reflection and gratitude ceremonies"
        ],
        outcomes: [
          "Memorable farewell celebrations",
          "Renewed inspiration for the future",
          "Positive environmental impact"
        ],
        benefits: [
          "Exclusive outdoor venues",
          "Custom eco-invitations",
          "Live local music performances"
        ],
        suitableDestinations: ["Sentul River View Villa", "Bandung Ridge Eco-Lodge"],
        suitableActivities: ["Gratitude Ceremony", "Tree Planting", "Eco-Friendly Party"],
        imageUrl: "/images/programs/Farrewel Party.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      },
      {
        id: "corporate-vacation",
        title: "Corporate Vacation",
        slug: "corporate-vacation",
        category: "Purposeful Vacations",
        subtitle: "Recharge and Align Your Team",
        tagline: "Unplug your team from the office and plug them into nature.",
        shortDescription: "A premium corporate getaway designed to promote wellness, alignment, and eco-consciousness.",
        description: "Corporate Vacation provides high-performing teams a space to relax, recharge, and align. Combine luxurious eco-resort stays with wellness workshops, low-impact nature hikes, and discussions on corporate social responsibility.",
        highlights: [
          "Luxurious eco-lodge accommodations",
          "Team wellness & yoga sessions",
          "Corporate sustainability brainstorming"
        ],
        outcomes: [
          "Recharged team energy",
          "Enhanced alignment on company values",
          "Increased job satisfaction"
        ],
        benefits: [
          "Tailored corporate itineraries",
          "Premium facilities & meeting rooms",
          "CSR alignment support"
        ],
        suitableDestinations: ["Ubud Premium Eco-Resort", "Anyer Coastal Lodge"],
        suitableActivities: ["Wellness Session", "Strategic Meeting", "Eco-Hiking"],
        imageUrl: "/images/programs/Corporate Vaction.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: true,
        isActive: true
      },
      {
        id: "employee-gathering",
        title: "Employee Gathering",
        slug: "employee-gathering",
        category: "Purposeful Vacations",
        subtitle: "Connecting People and Purpose",
        tagline: "A fun gathering to celebrate your employee's hard work.",
        shortDescription: "A high-spirited, community-building event designed for large company teams.",
        description: "Employee Gathering is a fun and inclusive gathering designed to build unity across all levels of the organization. Engage in interactive games, enjoy local food bazaars, and participate in symbolic collective action.",
        highlights: [
          "Interactive village games",
          "Local culinary markets & bazaars",
          "Collective community action activities"
        ],
        outcomes: [
          "Stronger company culture",
          "Increased sense of belonging",
          "Shared positive memories"
        ],
        benefits: [
          "Professional event organizers",
          "Custom corporate merchandise",
          "Full event media documentation"
        ],
        suitableDestinations: ["Bogor Ranchlands", "Yogyakarta Palace Area"],
        suitableActivities: ["Fun Games", "Culinary Tour", "Group Action"],
        imageUrl: "/images/programs/Employee Gathering.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      },
      {
        id: "team-building",
        title: "Team Building",
        slug: "team-building",
        category: "Purposeful Vacations",
        subtitle: "Strengthening Collaboration for Impact",
        tagline: "Build trust, collaboration, and problem-solving through environmental challenges.",
        shortDescription: "Active experiential team building exercises set in natural environments.",
        description: "Team Building at Ekotifa uses nature as a canvas to build high-performing teams. Instead of generic trust falls, teams participate in eco-challenges, survival simulations, and local community-building tasks.",
        highlights: [
          "Eco-survival team challenges",
          "Community collaborative project simulations",
          "Debriefing sessions led by team psychologists"
        ],
        outcomes: [
          "Enhanced team problem-solving",
          "Deep trust and communication",
          "Improved collaboration efficiency"
        ],
        benefits: [
          "Led by certified corporate facilitators",
          "High-quality safety equipment",
          "Detailed team dynamic reports"
        ],
        suitableDestinations: ["Lembang Adventure Forest", "Sentul Ridge"],
        suitableActivities: ["Eco-Challenges", "Survival Simulation", "Team Building"],
        imageUrl: "/images/programs/Team Building.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: true,
        isActive: true
      },
      {
        id: "company-celebration",
        title: "Company Celebration",
        slug: "company-celebration",
        category: "Purposeful Vacations",
        subtitle: "Celebrating Milestones Ethically",
        tagline: "Celebrate your company’s success with a positive social impact.",
        shortDescription: "A milestone celebration event that honors company achievements and supports green initiatives.",
        description: "Company Celebration shifts standard corporate anniversaries to a sustainable model. Enjoy high-quality entertainment, farm-to-table catering, and launch a joint social/environmental project as part of the celebration.",
        highlights: [
          "Anniversary tree planting project launches",
          "Farm-to-table dining experiences",
          "Recognition ceremonies for eco-champions"
        ],
        outcomes: [
          "Reinforced corporate social responsibility",
          "Memorable anniversary celebrations",
          "Stronger brand images"
        ],
        benefits: [
          "Vetted carbon-neutral event services",
          "Customized corporate impact reports",
          "Professional PR and media coverage support"
        ],
        suitableDestinations: ["Jakarta Green Spaces", "Yogyakarta Eco-Villas"],
        suitableActivities: ["Celebration Ceremony", "Farm-to-Table Dinner", "CSR Launch"],
        imageUrl: "/images/programs/Company Celebration.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      },
      {
        id: "business-leisure",
        title: "Business Leisure",
        slug: "business-leisure",
        category: "Purposeful Vacations",
        subtitle: "Mixing Business with Nature",
        tagline: "Perform strategic business actions in peaceful environments.",
        shortDescription: "A quiet, high-end business retreat combining executive meetings and eco-tourism.",
        description: "Business Leisure is designed for executives and business partners who want to discuss high-level strategy without urban distractions. Enjoy private meetings in quiet settings, complemented by light cultural or nature tours.",
        highlights: [
          "Private executive boardrooms in nature",
          "Quiet, undisturbed meeting environments",
          "Private local cultural experiences"
        ],
        outcomes: [
          "Clear strategic decisions",
          "Stronger business partnerships",
          "Restored executive focus"
        ],
        benefits: [
          "Dedicated VIP event managers",
          "Premium confidential facilities",
          "Top-tier organic catering"
        ],
        suitableDestinations: ["Nusa Dua Bali Private Villas", "Bandung Highlands Private Estates"],
        suitableActivities: ["Board Meeting", "Cultural Tour", "Golf or Spa relaxation"],
        imageUrl: "/images/programs/Business Leisure.webp",
        ctaLabel: "Hubungi Kami",
        ctaHref: "https://wa.me/628123456789",
        isFeatured: false,
        isActive: true
      }
    ]
  }
];

// Helper functions for querying program data

/**
 * Get all program categories with nested programs.
 */
export function getProgramCategories(): Category[] {
  return programCategories;
}

/**
 * Get a flat list of all active programs across all categories.
 */
export function getAllPrograms(): Program[] {
  return programCategories.flatMap(category => category.programs).filter(program => program.isActive);
}

/**
 * Get active programs under a specific category slug.
 */
export function getProgramsByCategory(categorySlug: string): Program[] {
  const category = programCategories.find(cat => cat.slug === categorySlug);
  if (!category) return [];
  return category.programs.filter(program => program.isActive);
}

/**
 * Get a single active program by its unique slug.
 */
export function getProgramBySlug(slug: string): Program | undefined {
  const allPrograms = getAllPrograms();
  return allPrograms.find(program => program.slug === slug);
}

/**
 * Get a list of featured active programs.
 */
export function getFeaturedPrograms(): Program[] {
  return getAllPrograms().filter(program => program.isFeatured);
}

// --- Compatibility Layer for Legacy Components ---

export interface ProgramData {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  duration: string;
  impactGoal: string;
  location: string;
  date: string;
  details: string[];
}

export const programsData: ProgramData[] = programCategories.flatMap(category => 
  category.programs.map(p => ({
    id: p.slug,
    title: p.title,
    category: p.category,
    description: p.description,
    image: p.imageUrl,
    duration: "Flexible Program",
    impactGoal: p.tagline || "Empowering Communities",
    location: p.suitableDestinations?.[0] || "Indonesia",
    date: "Available Now",
    details: p.highlights
  }))
);
export const getAllProgramSlugs = () => {
  return programCategories.flatMap(category => category.programs.map(program => program.slug));
};
