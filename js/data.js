/**
 * VANTAGE TENNIS ACADEMY - Championship Tennis Coaching & Courts
 * Core Data Store & Persistence Helper
 */

const SYLVAN_DATA = {
  stays: [
    {
      id: "syl-01",
      slug: "roland-garros-red-clay-court",
      name: "Roland Garros Red Clay Court (Court 2)",
      category: "Clay Courts",
      type: "Championship Red Clay",
      tagline: "Natural crushed brick red clay imported from Europe sub-surface irrigation",
      location: "East Campus · Red Clay Pavilion",
      region: "California Campus",
      price: 65,
      originalPrice: 80,
      rating: 4.98,
      reviewsCount: 114,
      capacity: 4,
      bedrooms: 1, // repurposed as courts/lanes
      bathrooms: 2,
      beds: 1,
      isSuperhost: true,
      featured: true,
      isAvailable: true,
      instantBook: true,
      // Card cover image shown on courts.html & booking.html (replace images[0] here)
      images: [
        "https://live.staticflickr.com/65535/55310576728_1a21725bab_b.jpg",
        "https://live.staticflickr.com/65535/55221420618_b45576dd5a_b.jpg",
        "https://images.pexels.com/photos/38381015/pexels-photo-38381015.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://live.staticflickr.com/65535/55305613610_b6a1631e94_b.jpg",
        "https://live.staticflickr.com/65535/55250913318_2568131397_b.jpg"
      ],
      description: "Trained on by national junior champions and touring professionals, Court 2 features genuine crushed French terracotta brick laid over a porous limestone bedrock. Perfect for mastering slide control, endurance rallying, and heavy topspin trajectories under natural Mediterranean light.",
      highlights: [
        "Imported European Roland Garros natural red clay",
        "Automated underground moisture-balancing irrigation",
        "Full baseline electronic ball tracking & speed radar",
        "Complimentary clay court drag mat & line broom equipment"
      ],
      amenities: [
        "Tournament Lighting", "Ball Machine Ready", "Pro Locker Rooms", "Hydration Bar", "Towel Service",
        "Video Camera Mount", "Shaded Player Benches", "Restringing Service", "Coaching Deck", "High-Speed Wi-Fi"
      ],
      houseRules: [
        "Flat herringbone-sole clay tennis shoes strictly required",
        "Courts must be dragged and swept after each 90-minute session",
        "Warm-up period capped at 10 minutes prior to match play",
        "Cans of pressurized championship balls available at Pro Shop",
        "Courts open 6:00 AM - 10:00 PM under tournament floodlights"
      ],
      host: {
        name: "Marcus Sterling (Head Coach)",
        role: "Former ATP #84 & Master PTR Director",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        rating: 4.99,
        responseRate: "100%",
        responseTime: "within 15 minutes",
        bio: "Former ATP tour pro with 18 years of elite coaching experience developing NCAA Division I champions and junior Grand Slam qualifiers."
      }
    },
    {
      id: "syl-02",
      slug: "us-open-decoturf-hard-court",
      name: "US Open DecoTurf Hard Court (Court 1)",
      category: "Hard Courts",
      type: "Cushioned Acrylic Hard Court",
      tagline: "Official tournament blue & green multi-layer with zero-glare LED illumination",
      location: "North Complex · Championship Row",
      region: "California Campus",
      price: 50,
      originalPrice: 65,
      rating: 4.94,
      reviewsCount: 92,
      capacity: 4,
      bedrooms: 1,
      bathrooms: 2,
      beds: 1,
      isSuperhost: true,
      featured: true,
      isAvailable: true,
      instantBook: true,
      // Card cover image shown on courts.html & booking.html (replace images[0] here)
      images: [
        "https://live.staticflickr.com/65535/55503391906_7f9b62e72e_b.jpg",
        "https://live.staticflickr.com/65535/53844638834_cbcf06009e_b.jpg",
        "https://live.staticflickr.com/65535/53855137312_c301f77b4d_b.jpg",
        "https://live.staticflickr.com/65535/55492408786_884dd48b83_b.jpg",
        "https://live.staticflickr.com/65535/55488898495_c68758ab08_b.jpg"
      ],
      description: "Engineered to exact US Open specifications with an 8-layer rubberized cushion system that protects joints and knees during rigorous multi-hour drills. Features ultra-crisp true bounce, medium-fast court pace, and high-contrast tournament blue lines.",
      highlights: [
        "8-layer DecoTurf rubberized shock-absorbing sub-base",
        "Zero-glare 1,000 Lux tournament floodlight arrays",
        "Integrated high-speed radar gun behind south baseline",
        "Direct access to physical therapy and ice-bath recovery suite"
      ],
      amenities: [
        "Tournament Lighting", "Ball Machine Ready", "Locker Rooms", "Hydration Bar", "Video Telemetry",
        "Shaded Benches", "Towel Service", "Free Parking", "Ball Carts Provided", "Air-conditioned Clubhouse"
      ],
      houseRules: [
        "Non-marking athletic tennis shoes mandatory",
        "Please dispose of empty ball cans in designated recycling bins",
        "Maximum 4 players on court during social and practice sessions",
        "Coaching permits required for independent external trainers",
        "Cancellation allowed up to 4 hours before booking start"
      ],
      host: {
        name: "Elena Rostova",
        role: "WTA Tour Coach & Biomechanics Lead",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
        rating: 4.96,
        responseRate: "98%",
        responseTime: "within an hour",
        bio: "Specializing in groundstroke kinetic chain optimization and female performance pathways. Coached top 50 WTA touring professionals."
      }
    },
    {
      id: "syl-03",
      slug: "wimbledon-championship-grass-court",
      name: "Wimbledon Championship Grass Court",
      category: "Grass Courts",
      type: "Natural Perennial Ryegrass",
      tagline: "Pristine 8mm laser-cut natural English ryegrass court offering low skid and classic touch tennis",
      location: "South Estate · Heritage Greens",
      region: "California Campus",
      price: 85,
      originalPrice: 110,
      rating: 4.97,
      reviewsCount: 78,
      capacity: 4,
      bedrooms: 1,
      bathrooms: 2,
      beds: 1,
      isSuperhost: true,
      featured: true,
      isAvailable: true,
      instantBook: false,
      // Card cover image shown on courts.html & booking.html (replace images[0] here)
      images: [
        "https://live.staticflickr.com/65535/53705138586_1300fde221_b.jpg",
        "https://live.staticflickr.com/65535/53834266154_da29857c76_b.jpg",
        "https://live.staticflickr.com/65535/55451770072_2e79ef66ab_b.jpg",
        "https://live.staticflickr.com/65535/55452863628_2d085d8829_b.jpg",
        "https://live.staticflickr.com/65535/52298930314_7bf4dec6fc_b.jpg"
      ],
      description: "An authentic Wimbledon grass court experience in sunny California. Cut precisely to 8mm on a firm, compacted soil bed, this rare natural grass court delivers lightning-quick rallies, slice that stays below the knees, and traditional serve-and-volley finesse.",
      highlights: [
        "100% genuine perennial ryegrass cut daily to 8mm",
        "Laser-guided chalk baselines for razor-sharp visual clarity",
        "Traditional wooden courtside pavilion with shaded verandah",
        "Exclusive white-attire etiquette experience"
      ],
      amenities: [
        "Traditional Pavilion", "Chilled Towels", "Hydration Bar", "Pro Locker Rooms", "Grass Court Balls",
        "Racket Restringing", "Player Lounge", "Shaded Verandah", "Tea & Refreshments", "Showers"
      ],
      houseRules: [
        "All-white tennis attire preferred (minimum 85% white clothing)",
        "Pimple-soled grass court shoes required to protect lawn turf",
        "Play suspended during high dew mornings or damp turf conditions",
        "Sessions booked in 60-minute blocks to preserve turf quality"
      ],
      host: {
        name: "David Vance",
        role: "Head Greenskeeper & Senior Coach",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        rating: 4.98,
        responseRate: "100%",
        responseTime: "within 30 minutes",
        bio: "Trained at the All England Club Wimbledon grounds crew. Bringing 20 years of grass court master craft to Vantage Tennis Academy."
      }
    },
    {
      id: "syl-04",
      slug: "grand-slam-stadium-center-court",
      name: "Grand Slam Stadium Center Court",
      category: "Center Court",
      type: "Stadium Tournament Hard Court",
      tagline: "1,500-seat championship arena with live electronic Hawk-Eye telemetry and lighting",
      location: "Central Arena Plaza",
      region: "California Campus",
      price: 120,
      originalPrice: 150,
      rating: 4.99,
      reviewsCount: 142,
      capacity: 4,
      bedrooms: 1,
      bathrooms: 4,
      beds: 1,
      isSuperhost: true,
      featured: true,
      isAvailable: true,
      instantBook: true,
      // Card cover image shown on courts.html & booking.html (replace images[0] here)
      images: [
        "https://live.staticflickr.com/65535/55305211991_e0f58502ec_b.jpg",
        "https://live.staticflickr.com/65535/55446770977_709affd28c_b.jpg",
        "https://live.staticflickr.com/65535/54241726021_ca3860b702_b.jpg",
        "https://live.staticflickr.com/65535/55498802929_3bcd5b4e67_b.jpg",
        "https://live.staticflickr.com/65535/55514060297_1ca879d0c0_b.jpg"
      ],
      description: "Feel the electrifying atmosphere of Grand Slam tennis. Center Court features stepped stadium grandstands for 1,500 spectators, dual digital scoreboards, broadcast-grade television cameras, and full live Hawk-Eye electronic line calls for tournament simulations.",
      highlights: [
        "1,500-seat elevated tournament grandstand",
        "Hawk-Eye Live line calling and ball bounce telemetry",
        "Dual digital LED electronic scoreboards & radar gun",
        "Walk-out player tunnel with motivational champion quotes"
      ],
      amenities: [
        "Broadcast Lighting", "Hawk-Eye System", "LED Scoreboard", "Umpire Chair", "VIP Player Lounge",
        "Full Locker Suite", "Ice Bath & Sauna", "Sound System", "Live Streaming Cameras", "Pro Shop Desk"
      ],
      houseRules: [
        "Strict tournament dress code and sportsmanship conduct",
        "Warm-up music permitted via arena Bluetooth sound system",
        "Live streaming link provided upon court check-in",
        "Advance booking required for tournament finals and exhibitions"
      ],
      host: {
        name: "Marcus Sterling (Head Coach)",
        role: "Tournament Director",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        rating: 4.99,
        responseRate: "100%",
        responseTime: "within 15 minutes",
        bio: "Oversees all competitive UTR events, junior ITF opens, and college showcase exhibitions held on Vantage Center Court."
      }
    },
    {
      id: "syl-05",
      slug: "climate-controlled-indoor-arena",
      name: "Climate-Controlled Indoor Tennis Arena",
      category: "Indoor Arena",
      type: "Indoor Plexicushion Court",
      tagline: "All-weather indoor tournament arena with temperature balance, acoustic baffles, LED arrays",
      location: "West Wing · Indoor Sports Dome",
      region: "California Campus",
      price: 75,
      originalPrice: 90,
      rating: 4.95,
      reviewsCount: 88,
      capacity: 4,
      bedrooms: 1,
      bathrooms: 2,
      beds: 1,
      isSuperhost: true,
      featured: true,
      isAvailable: true,
      instantBook: true,
      // Card cover image shown on courts.html & booking.html (replace images[0] here)
      images: [
        "https://live.staticflickr.com/65535/53828568206_d099e483b7_b.jpg",
        "https://live.staticflickr.com/65535/55575183101_8e28750166_b.jpg",
        "https://live.staticflickr.com/65535/55502709905_f7c5fd7165_b.jpg",
        "https://live.staticflickr.com/65535/53828598336_d45b830138_b.jpg",
        "https://images.unsplash.com/photo-1560012057-4372e14c5085?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Play 365 days a year in peak physical comfort regardless of heat or rain. The Indoor Dome features 40-foot clear-span ceilings, silent HVAC maintaining an ideal 20°C playing environment, and sound-absorbing walls for focused coaching concentration.",
      highlights: [
        "Zero wind, controlled 20°C temperature, and 45% relative humidity",
        "Diffuse indirect LED ceiling panels eliminating sun blinding",
        "Plexicushion Prestige multi-layer tournament surface",
        "Dedicated parents & coaches viewing lounge with panoramic glass"
      ],
      amenities: [
        "Climate Controlled", "Zero Glare Lights", "Ball Machine Ready", "Locker Rooms", "Hydration Bar",
        "Viewing Lounge", "Wi-Fi 6", "Equipment Storage", "Showers", "Complimentary Towels"
      ],
      houseRules: [
        "Non-marking indoor tennis court shoes only",
        "Food and sugary drinks prohibited on court surfaces (water/electrolytes only)",
        "Spectators must view from the upper glass mezzanine lounge",
        "Check-in at Indoor Desk 10 minutes prior to session"
      ],
      host: {
        name: "Sarah Jenkins",
        role: "Junior Academy Lead & PTR Pro",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
        rating: 4.97,
        responseRate: "99%",
        responseTime: "within 20 minutes",
        bio: "Specializes in foundational motor skills, early ball trajectory reading, and positive mindset training for players under 14."
      }
    },
    {
      id: "syl-06",
      slug: "smart-video-biomechanics-court",
      name: "Smart Video Biomechanics Analysis Court",
      category: "Indoor Arena",
      type: "High-Tech Telemetry Court",
      tagline: "Equipped with 8 high-speed 240fps 4K cameras telemetry, and instant courtside tablet breakdown",
      location: "Innovation Wing · Sports Science Lab",
      region: "California Campus",
      price: 110,
      originalPrice: 135,
      rating: 4.98,
      reviewsCount: 65,
      capacity: 2,
      bedrooms: 1,
      bathrooms: 2,
      beds: 1,
      isSuperhost: true,
      featured: true,
      isAvailable: true,
      instantBook: true,
      // Card cover image shown on courts.html & booking.html (replace images[0] here)
      images: [
        "https://live.staticflickr.com/65535/53828784243_a9cf6bd0f7_b.jpg",
        "https://live.staticflickr.com/65535/54978283742_47443236b1_b.jpg",
        "https://live.staticflickr.com/65535/54400856938_1dbc3fe0ee_b.jpg",
        "https://live.staticflickr.com/65535/55502710060_8c2817024b_b.jpg",
        "https://live.staticflickr.com/65535/55502484604_8e50716db3_b.jpg"
      ],
      description: "The gold standard for technical stroke mastery. High-precision cameras record your serve pronation, racket head speed, topspin RPM, contact point height, and footwork split-step timing. Every session concludes with an exportable 4K cloud video dossier.",
      highlights: [
        "8-angle 240fps high-speed camera coverage",
        "Instant stroke overlay against ATP/WTA champion benchmarks",
        "Doppler radar tracking ball velocity, arc, and spin rate",
        "Personal cloud link with annotated coach voiceovers provided post-session"
      ],
      amenities: [
        "Kinetic Sensors", "High-Speed Cameras", "Doppler Radar", "Courtside 65-inch Screen", "Air Conditioning",
        "Private Lab Access", "Biomechanist Coach", "Cloud Dossier", "Restringing Specs", "Locker Suite"
      ],
      houseRules: [
        "Arrive 15 minutes early for warm-up and calibration marker fitting",
        "Wear fitted athletic apparel for maximum motion sensor accuracy",
        "Bring primary and backup match rackets for string tension comparison",
        "Includes 30 minutes of live courtside review and data export"
      ],
      host: {
        name: "Dr. Julian Weiss",
        role: "Sports Scientist & Tennis Biomechanist",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
        rating: 4.99,
        responseRate: "100%",
        responseTime: "within 10 minutes",
        bio: "Doctorate in Sports Biomechanics from Stanford. Consulted for top Grand Slam coaching teams on serve power mechanics and injury reduction."
      }
    },
    {
      id: "syl-07",
      slug: "night-match-floodlit-hard-court-4",
      name: "Night Match Floodlit Hard Court (Court 4)",
      category: "Hard Courts",
      type: "Tournament Night Court",
      tagline: "Equipped with state-of-the-art Musco LED shadowless multi-spin ball machine",
      location: "North Complex · Court 4",
      region: "California Campus",
      price: 55,
      originalPrice: 70,
      rating: 4.92,
      reviewsCount: 74,
      capacity: 4,
      bedrooms: 1,
      bathrooms: 2,
      beds: 1,
      isSuperhost: true,
      featured: false,
      isAvailable: true,
      instantBook: true,
      // Card cover image shown on courts.html & booking.html (replace images[0] here)
      images: [
        "images/night-match-court-4.jpg",
        "https://live.staticflickr.com/65535/55651594851_7aef016b75_b.jpg",
        "https://live.staticflickr.com/65535/55339473074_b11d27b2e4_b.jpg",
        "https://live.staticflickr.com/65535/53827651012_688f7efec0_b.jpg",
        "https://live.staticflickr.com/65535/53828804293_6291eaf70c_b.jpg"
      ],
      description: "Experience the magic of evening tennis under perfect tournament illumination. Includes a programmable Spinfire Pro 2 ball machine with remote control that feeds customizable topspin, slice, flat, and 2-line oscillations at up to 80 mph.",
      highlights: [
        "Musco LED high-efficiency shadowless night lighting",
        "Included wireless Spinfire Pro 2 ball machine + 150 Wilson balls",
        "Heavy-duty baseline netting and windscreens",
        "Courtside smart Bluetooth sound speaker for training rhythms"
      ],
      amenities: [
        "LED Floodlights", "Ball Machine Included", "150 Wilson Balls", "Ball Pick-up Tube", "Water Station",
        "Shaded Benches", "Restrooms Nearby", "Parking Access", "Bluetooth Audio", "Emergency Call Box"
      ],
      houseRules: [
        "Floodlights turn off automatically at 10:00 PM nightly",
        "Pick up all tennis balls into cart 5 minutes prior to session end",
        "Ball machine must be returned to charging station under rain cover",
        "No amplified music after 9:30 PM out of respect for neighbors"
      ],
      host: {
        name: "Coach Marcus Vance",
        role: "Head Pro & Night Clinics Coordinator",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        rating: 4.95,
        responseRate: "100%",
        responseTime: "within 30 minutes",
        bio: "Former collegiate captain passionat cardio tennis high-energy groups, and doubles tactics."
      }
    },
    {
      id: "syl-08",
      slug: "red-clay-practice-court-b",
      name: "European Clay Practice Court (Court B)",
      category: "Clay Courts",
      type: "Semi-Enclosed Clay Court",
      tagline: "Dedicated red clay development ladder lanes, and video tripod stations",
      location: "East Campus · Development Row",
      region: "California Campus",
      price: 60,
      originalPrice: 75,
      rating: 4.93,
      reviewsCount: 82,
      capacity: 4,
      bedrooms: 1,
      bathrooms: 2,
      beds: 1,
      isSuperhost: false,
      featured: false,
      isAvailable: true,
      instantBook: true,
      // Card cover image shown on courts.html & booking.html (replace images[0] here)
      images: [
        "https://live.staticflickr.com/65535/55621803661_10580846f1_b.jpg",
        "https://live.staticflickr.com/65535/55501006601_44697d03fb_b.jpg",
        "https://live.staticflickr.com/65535/55499028755_985669a9df_b.jpg",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Designed specifically for technical repetition and footwork agility. Features painted depth target zones on the clay, high-tension rebound walls behind the court for solo volley sharpening, and elevated coaching viewing podiums.",
      highlights: [
        "Deep target landing zones painted on clay surface",
        "Reinforced 14-foot rebound hit wall with target boxes",
        "Agility ladder markers and cone stations provided",
        "Covered coach observation deck with whiteboards"
      ],
      amenities: [
        "Rebound Wall", "Target Cones", "Coaching Whiteboard", "Drag Mats", "Water Cooler",
        "Shaded Pavilion", "Towel Hooks", "Ball Carts", "Wi-Fi Access", "Restrooms"
      ],
      houseRules: [
        "Proper clay court footwear required at all times",
        "Clear baseline targets after drill sessions",
        "Sweep lines and drag clay smoothly before vacating",
        "Private lessons receive priority scheduling"
      ],
      host: {
        name: "Sarah Jenkins",
        role: "PTR Master Professional",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
        rating: 4.97,
        responseRate: "99%",
        responseTime: "within 20 minutes",
        bio: "Committed to building bulletproof groundstroke mechanics and confident clay court rally stamina."
      }
    }
  ],

  categories: [
    {
      id: "cat-clay",
      name: "Clay Courts",
      count: 8,
      icon: "shield",
      image: "https://live.staticflickr.com/65535/53828597541_e52634b0a6_b.jpg",
      description: "Authentic French red clay for heavy topspin, slide control, and endurance rallies."
    },
    {
      id: "cat-hard",
      name: "Hard Courts",
      count: 12,
      icon: "award",
      image: "https://live.staticflickr.com/65535/55310836500_35becb55b8_b.jpg",
      description: "US Open cushioned acrylic tournament surfaces engineered for crisp bounce and fast pace."
    },
    {
      id: "cat-grass",
      name: "Grass Courts",
      count: 4,
      icon: "sparkles",
      image: "https://live.staticflickr.com/65535/53827681012_48a6e5f93a_b.jpg",
      description: "Pristine natural ryegrass cut to 8mm for classic Wimbledon touch and serve-and-volley."
    },
    {
      id: "cat-indoor",
      name: "Indoor Arena",
      count: 6,
      icon: "building",
      image: "https://live.staticflickr.com/65535/53828926734_7f0f0db939_b.jpg",
      description: "Climate-controlled all-weather dome courts with zero glare and ideal acoustic feedback."
    },
    {
      id: "cat-stadium",
      name: "Center Court",
      count: 2,
      icon: "trophy",
      image: "https://live.staticflickr.com/65535/55652019575_b6eecd33db_b.jpg",
      description: "1,500-seat championship arena featuring live Hawk-Eye telemetry and broadcast lighting."
    }
  ],

  destinations: [
    {
      id: "dest-summer-open",
      name: "Vantage Summer Junior Grand Slam",
      country: "Main Campus · California",
      region: "Summer Circuit",
      staysCount: 128,
      weather: "26°C · Clear & Sunny",
      bestSeason: "July - August",
      tagline: "Tier 1 UTR and ITF junior ranking tournament with NCAA Division I collegiate scouts attending",
      image: "https://live.staticflickr.com/65535/53829032650_6a87d63cb9_b.jpg"
    },
    {
      id: "dest-clay-classic",
      name: "Roland Garros Junior Clay Classic",
      country: "Red Clay Pavilion",
      region: "Clay Circuit",
      staysCount: 96,
      weather: "24°C · Mild Breeze",
      bestSeason: "May - June",
      tagline: "Intensive 3-set red clay tournament testing patience, slide control, and tactical point construction",
      image: "https://live.staticflickr.com/65535/53828597746_d2d6b8c3f1_b.jpg"
    },
    {
      id: "dest-indoor-trophy",
      name: "Winter Indoor Masters Trophy",
      country: "Indoor Sports Dome",
      region: "Winter Circuit",
      staysCount: 64,
      weather: "20°C · Climate-Controlled",
      bestSeason: "December - January",
      tagline: "Fast-paced indoor hard court invitational for top regional juniors, varsity athletes, and masters",
      image: "https://live.staticflickr.com/65535/52930556259_b965cf8a3b_b.jpg"
    },
    {
      id: "dest-college-showcase",
      name: "National College Showcase Circuit",
      country: "Stadium Arena",
      region: "College Pathway",
      staysCount: 160,
      weather: "22°C · Crisp Autumn",
      bestSeason: "September - October",
      tagline: "Direct recruitment showcase for high school players seeking NCAA Division I & II scholarships",
      image: "https://live.staticflickr.com/65535/55501159204_be9be3f0fc_b.jpg"
    }
  ],

  activities: [
    {
      id: "act-01",
      name: "Junior Development Pathway (Red / Orange / Green Ball)",
      category: "Junior Academy",
      categoryKey: "junior",
      duration: "1.5 Hours",
      price: 45,
      rating: 4.98,
      reviewsCount: 64,
      minAge: "Ages 5-11",
      maxGroup: 6,
      image: "https://live.staticflickr.com/65535/55497636062_f6b60841ac_b.jpg",
      tagline: "Fun, structured motor-skill foundations, rally consistency, and basic match rules using scaled equipment",
      included: [
        "USPTA certified junior coach instruction",
        "Low-compression Babolat balls and mini-nets",
        "Footwork agility drills and balance games",
        "End-of-term skills passport and trophy"
      ]
    },
    {
      id: "act-02",
      name: "High Performance Tournament Squad (Yellow Ball)",
      category: "Elite Competition",
      categoryKey: "elite",
      duration: "3.0 Hours",
      price: 95,
      rating: 4.99,
      reviewsCount: 82,
      minAge: "Ages 12-18",
      maxGroup: 4,
      image: "https://live.staticflickr.com/65535/55494797156_aa2a7fe01d_b.jpg",
      tagline: "Intensive training for ranked UTR players: high-tempo match play, tactical shot selection, and mental toughness",
      included: [
        "Head Coach Marcus Vance direct supervision",
        "Situational tiebreak and match play drills",
        "Video stroke analysis with radar telemetry",
        "Sports psychology and tournament strategy"
      ]
    },
    {
      id: "act-03",
      name: "Adult Mastery & Intermediate Drill Clinics",
      category: "Adult Academy",
      categoryKey: "adult",
      duration: "1.5 Hours",
      price: 50,
      rating: 4.95,
      reviewsCount: 58,
      minAge: "Adults 18+",
      maxGroup: 6,
      image: "https://live.staticflickr.com/65535/55492690675_066c55557e_b.jpg",
      tagline: "Refine topspin groundstrokes, net volleys, dependable second serves, and smart doubles positioning",
      included: [
        "Live-ball feeding and point simulation",
        "Doubles strategy and poaching techniques",
        "Racket stringing and grip tension review",
        "Complimentary sports beverage and hydration"
      ]
    },
    {
      id: "act-04",
      name: "Cardio Tennis High-Energy Fitness",
      category: "Adult Fitness",
      categoryKey: "adult",
      duration: "1.0 Hour",
      price: 35,
      rating: 4.96,
      reviewsCount: 76,
      minAge: "All Levels",
      maxGroup: 8,
      image: "https://live.staticflickr.com/65535/55488748551_4e8d85935b_b.jpg",
      tagline: "Heart-pumping aerobic tennis workout set to music with continuous ball hitting, footwork ladders, and calorie burn",
      included: [
        "Burn up to 600+ calories in an hour",
        "Non-stop rally feeding and agility stations",
        "Heart rate monitor tracking compatible",
        "Chilled eucalyptus towels after workout"
      ]
    },
    {
      id: "act-05",
      name: "1-on-1 Biomechanics & Slow-Motion Video Masterclass",
      category: "Private Coaching",
      categoryKey: "private",
      duration: "1.0 Hour",
      price: 120,
      rating: 4.99,
      reviewsCount: 49,
      minAge: "All Ages",
      maxGroup: 1,
      image: "https://live.staticflickr.com/65535/55453115742_da8370a44f_b.jpg",
      tagline: "Comprehensive stroke surgery: 240fps video capture, kinetic chain review, and personalized corrective drills",
      included: [
        "8-angle high-speed 4K camera telemetry",
        "Side-by-side comparison with ATP/WTA champions",
        "Radar serve velocity and topspin RPM measurement",
        "Personalized annotated video file sent to your phone"
      ]
    },
    {
      id: "act-06",
      name: "Serve Weaponry & Return Tactics Intensive",
      category: "Specialty Clinics",
      categoryKey: "clinics",
      duration: "2.0 Hours",
      price: 65,
      rating: 4.97,
      reviewsCount: 43,
      minAge: "Intermediate+",
      maxGroup: 4,
      image: "https://live.staticflickr.com/65535/55496694891_e917cb8bed_b.jpg",
      tagline: "Turn your serve into your greatest weapon: toss consistency, shoulder internal rotation, kick and slice variations",
      included: [
        "High-volume target serve repetitions",
        "Toss trajectory laser alignment",
        "Reading server shoulder turns for aggressive returns",
        "Radar gun speed milestone tracking"
      ]
    }
  ],

  testimonials: [
    {
      id: "rev-01",
      guest: "Elena Rostova (Parent of UTR 9.4 Junior Finalist)",
      origin: "San Diego, California",
      stayName: "Roland Garros Red Clay Court (Court 2)",
      rating: 5,
      date: "November 2026",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      quote: "Vantage transformed our 14-year-old daughter's entire game. Under Coach Marcus's tactical guidance and clay court training, her UTR jumped from 6.8 to 9.4 and she reached her first national ITF final.",
      tripType: "High Performance Junior Program"
    },
    {
      id: "rev-02",
      guest: "Marcus Thorne (NCAA Division I Scholarship Athlete)",
      origin: "Austin, Texas",
      stayName: "Grand Slam Stadium Center Court",
      rating: 5,
      date: "October 2026",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote: "The coaching staff here doesn't just teach you how to hit pretty strokes; they teach you how to win ugly, manage match nerves, and compete under pressure. I secured my full Division I scholarship here.",
      tripType: "College Prep & High Performance"
    },
    {
      id: "rev-03",
      guest: "Sophia Chen (Adult Club Champion)",
      origin: "San Francisco, California",
      stayName: "Smart Video Biomechanics Analysis Court",
      rating: 5,
      date: "September 2026",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      quote: "The 1-on-1 biomechanics session with Dr. Weiss unlocked my serve. By adjusting my trophy pose and shoulder tilt, I added 12 mph to my first serve without elbow soreness. Truly professional grade.",
      tripType: "Adult Masterclass & Video Analysis"
    },
    {
      id: "rev-04",
      guest: "Liam & Sarah Gallagher (Tennis Family)",
      origin: "Scottsdale, Arizona",
      stayName: "Wimbledon Championship Grass Court",
      rating: 5,
      date: "August 2026",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      quote: "Our twin boys started in the Red Ball program and now play on the tournament team. The courts are in immaculate condition and the coaches care deeply about character, sportsmanship, and joy.",
      tripType: "Junior Academy & Family Tennis"
    }
  ],

  galleryItems: [
    {
      id: "gal-01",
      category: "Match Play",
      title: "Championship Point Forehand Winner",
      location: "Stadium Center Court",
      image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=900&q=80",
      description: "Full kinetic coil and explosive follow-through on a match-deciding crosscourt forehand."
    },
    {
      id: "gal-02",
      category: "Courts",
      title: "French Red Clay at Morning Golden Hour",
      location: "East Campus Court 2",
      image: "https://images.pexels.com/photos/34198193/pexels-photo-34198193.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Freshly dragged and swept crushed terracotta clay court ready for the morning squad session."
    },
    {
      id: "gal-03",
      category: "Coaching",
      title: "Tactical Board & Match Strategy Breakdown",
      location: "Coaches Pavilion",
      image: "https://images.pexels.com/photos/18421042/pexels-photo-18421042.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Coach Marcus outlining serve-and-volley pattern positioning before the tournament finals."
    },
    {
      id: "gal-04",
      category: "Match Play",
      title: "First Serve Pronation at 122 MPH",
      location: "Biomechanics Center Court",
      image: "https://live.staticflickr.com/65535/55502483564_a42fd89f7c_b.jpg",
      description: "Full extension at peak reach, driving down the T on break point."
    },
    {
      id: "gal-05",
      category: "Courts",
      title: "Night Tournament Under Stadium Floodlights",
      location: "North Complex Court 4",
      image: "https://live.staticflickr.com/65535/55644261545_f39c24e4a4_b.jpg",
      description: "Electrifying atmosphere during the Vantage Junior Masters evening feature match."
    },
    {
      id: "gal-06",
      category: "Coaching",
      title: "Junior Red Ball Agility Drills",
      location: "Junior Pavilion",
      image: "https://live.staticflickr.com/65535/53827680937_34fb19441e_b.jpg",
      description: "Building fast feet, balance recovery, and hand-eye instincts in future champions."
    },
    {
      id: "gal-07",
      category: "Courts",
      title: "Pristine Ryegrass Grass Court Lawn",
      location: "South Estate Greens",
      image: "https://live.staticflickr.com/65535/55501325002_67b855d6c7_b.jpg",
      description: "Laser-cut 8mm natural lawn offering authentic traditional English grass court play."
    },
    {
      id: "gal-08",
      category: "Fitness",
      title: "Tennis Resistance Band Conditioning",
      location: "High-Performance Gym",
      image: "https://live.staticflickr.com/65535/55616513871_4e303ca379_b.jpg",
      description: "Rotator cuff strengthening and core rotational power for increased racket head speed."
    },
    {
      id: "gal-09",
      category: "Tournaments",
      title: "Championship Trophy Presentation",
      location: "Center Court Podium",
      image: "https://live.staticflickr.com/65535/53829032985_d7af428c56_b.jpg",
      description: "Celebrating hard work and sportsmanship at the annual Vantage Academy Grand Prix."
    },
    {
      id: "gal-10",
      category: "Coaching",
      title: "Slow-Motion High-Speed Stroke Review",
      location: "Innovation Wing Lab",
      image: "https://live.staticflickr.com/65535/53828835343_9bd0c2a7aa_b.jpg",
      description: "Instant video telemetry showing exact shoulder angle at impact point."
    },
    {
      id: "gal-11",
      category: "Match Play",
      title: "Backhand Slide on Red Clay",
      location: "Clay Court 1",
      image: "https://live.staticflickr.com/65535/53828804868_4f0a587b57_b.jpg",
      description: "Controlled open-stance sliding backhand counterpunching from 4 feet behind the baseline."
    },
    {
      id: "gal-12",
      category: "Fitness",
      title: "Footwork Agility Ladder Repetitions",
      location: "Sprint Track Lanes",
      image: "https://live.staticflickr.com/65535/53827650482_a1bf0e0b2f_b.jpg",
      description: "Micro-step precision drills sharpening the first-step split reaction to opponent serves."
    },
    {
      id: "gal-13",
      category: "Tournaments",
      title: "College Scout Showcase Matches",
      location: "North Courts 1-4",
      image: "https://live.staticflickr.com/65535/55615505692_cbd5943582_b.jpg",
      description: "Top regional juniors competing under the eyes of university head coaches."
    },
    {
      id: "gal-14",
      category: "Courts",
      title: "Indoor Plexicushion Arena Panorama",
      location: "Indoor Sports Dome",
      image: "https://live.staticflickr.com/65535/55638943585_198a4bb25c_b.jpg",
      description: "Spacious multi-court indoor dome keeping athletes sharp throughout rainy winter months."
    },
    {
      id: "gal-15",
      category: "Match Play",
      title: "Overhead Smash at the Net",
      location: "Stadium Center Court",
      image: "https://live.staticflickr.com/65535/55305466774_581944db2e_b.jpg",
      description: "Decisive aerial put-away closing out a 24-shot baseline rally."
    }
  ],

  initialBookings: [
    {
      id: "VAN-84921",
      stayId: "syl-01",
      stayName: "Roland Garros Red Clay Court (Court 2)",
      stayImage: "https://live.staticflickr.com/65535/55310576728_1a21725bab_b.jpg",
      location: "East Campus · Red Clay Pavilion",
      checkIn: "2026-11-20",
      checkOut: "2026-11-20",
      timeSlot: "09:00 AM - 10:30 AM",
      coachName: "Coach Marcus Vance",
      drillFocus: "Topspin forehand depth & clay sliding technique",
      nights: 1,
      guests: { adults: 1, children: 0 },
      pricePerNight: 65,
      cleaningFee: 0,
      serviceFee: 10,
      totalPrice: 95, // includes coach add-on
      status: "Confirmed",
      isPast: false,
      invoiceId: "INV-2026-84921",
      bookedAt: "2026-11-10"
    },
    {
      id: "VAN-84922",
      stayId: "syl-02",
      stayName: "US Open DecoTurf Hard Court (Court 1)",
      stayImage: "https://live.staticflickr.com/65535/55503391906_7f9b62e72e_b.jpg",
      location: "North Complex · Championship Row",
      checkIn: "2026-11-23",
      checkOut: "2026-11-23",
      timeSlot: "06:00 PM - 07:30 PM",
      coachName: "Hitting Partner Match Play",
      drillFocus: "Match play practice & baseline rally depth",
      nights: 1,
      guests: { adults: 2, children: 0 },
      pricePerNight: 50,
      cleaningFee: 0,
      serviceFee: 5,
      totalPrice: 55,
      status: "Confirmed",
      isPast: false,
      invoiceId: "INV-2026-84922",
      bookedAt: "2026-11-11"
    },
    {
      id: "VAN-84923",
      stayId: "syl-06",
      stayName: "Smart Video Biomechanics Analysis Court",
      stayImage: "https://live.staticflickr.com/65535/53828784243_a9cf6bd0f7_b.jpg",
      location: "Innovation Wing · Sports Science Lab",
      checkIn: "2026-11-27",
      checkOut: "2026-11-27",
      timeSlot: "11:00 AM - 12:00 PM",
      coachName: "Dr. Julian Weiss",
      drillFocus: "First serve kinetic chain & radar velocity analysis",
      nights: 1,
      guests: { adults: 1, children: 0 },
      pricePerNight: 110,
      cleaningFee: 0,
      serviceFee: 15,
      totalPrice: 125,
      status: "Confirmed",
      isPast: false,
      invoiceId: "INV-2026-84923",
      bookedAt: "2026-11-12"
    },
    {
      id: "VAN-84918",
      stayId: "syl-05",
      stayName: "Climate-Controlled Indoor Tennis Arena",
      stayImage: "https://live.staticflickr.com/65535/53828568206_d099e483b7_b.jpg",
      location: "West Wing · Indoor Sports Dome",
      checkIn: "2026-11-05",
      checkOut: "2026-11-05",
      timeSlot: "04:00 PM - 05:30 PM",
      coachName: "Sarah Jenkins",
      drillFocus: "Mid-court approach shots and volley depth",
      nights: 1,
      guests: { adults: 1, children: 0 },
      pricePerNight: 75,
      cleaningFee: 0,
      serviceFee: 10,
      totalPrice: 85,
      status: "Completed",
      isPast: true,
      invoiceId: "INV-2026-84918",
      bookedAt: "2026-10-28"
    }
  ],

  initialSavedStayIds: ["syl-01", "syl-03", "syl-06"]
};

// Persistence helper for bookings and favorites in localStorage
const StorageHelper = {
  BOOKINGS_KEY: "vantage_tennis_bookings",
  SAVED_KEY: "vantage_tennis_saved",

  getBookings() {
    try {
      const stored = localStorage.getItem(this.BOOKINGS_KEY);
      return stored ? JSON.parse(stored) : [...SYLVAN_DATA.initialBookings];
    } catch (e) {
      return [...SYLVAN_DATA.initialBookings];
    }
  },

  saveBookings(bookings) {
    try {
      localStorage.setItem(this.BOOKINGS_KEY, JSON.stringify(bookings));
    } catch (e) {
      console.warn("Storage save error", e);
    }
  },

  addBooking(booking) {
    const list = this.getBookings();
    list.unshift(booking);
    this.saveBookings(list);
    return list;
  },

  cancelBooking(id) {
    const list = this.getBookings().map(b => {
      if (b.id === id) return { ...b, status: "Cancelled" };
      return b;
    });
    this.saveBookings(list);
    return list;
  },

  getSavedIds() {
    try {
      const stored = localStorage.getItem(this.SAVED_KEY);
      return stored ? JSON.parse(stored) : [...SYLVAN_DATA.initialSavedStayIds];
    } catch (e) {
      return [...SYLVAN_DATA.initialSavedStayIds];
    }
  },

  toggleSavedId(id) {
    let ids = this.getSavedIds();
    if (ids.includes(id)) {
      ids = ids.filter(x => x !== id);
    } else {
      ids.push(id);
    }
    try {
      localStorage.setItem(this.SAVED_KEY, JSON.stringify(ids));
    } catch (e) {}
    return ids;
  }
};

// Global Store Bridge for dashboard and student interaction
const SylvanStore = {
  USER_KEY: "vantage_tennis_student",

  getUser() {
    try {
      const stored = localStorage.getItem(this.USER_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return {
      firstName: "Alex",
      lastName: "Morgan",
      email: "alex.morgan@vantageacademy.com",
      phone: "+1 (802) 555-0194",
      role: "High Performance Trainee",
      tier: "UTR 7.4 / Tournament Junior",
      level: "Intermediate / Advanced (NTRP 4.0)",
      preferredSurface: "Clay & Hard Court",
      racket: "Babolat Pure Aero 98 · 54 lbs Luxilon Alu Power",
      coachingHours: 48,
      sessionsCompleted: 28,
      dueBalance: 0,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      bio: "High-performance tennis junior preparing for state UTR championships and NCAA Division I recruitment."
    };
  },

  saveUser(user) {
    try {
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    } catch (e) {}
  },

  getBookings() {
    return StorageHelper.getBookings();
  },

  addBooking(booking) {
    return StorageHelper.addBooking(booking);
  },

  cancelBooking(id) {
    return StorageHelper.cancelBooking(id);
  },

  getSavedStayIds() {
    return StorageHelper.getSavedIds();
  },

  isStaySaved(id) {
    return StorageHelper.getSavedIds().includes(id);
  },

  toggleSaveStay(id) {
    return StorageHelper.toggleSavedId(id);
  }
};

