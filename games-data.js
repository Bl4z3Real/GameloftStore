/* ============================================================
   AGGIUNGI QUI I TUOI GIOCHI (usato sia da index.html che da desktop.html)
   - icon: emoji/lettera, oppure un link http a un'immagine (verrà mostrata come icona)
   - color: colore di sfondo dell'icona (hex) - ignorato se icon è un link immagine
   - price: "FREE" oppure un prezzo tipo "€2,99" (mostra badge rosso se non FREE)
   - link: link diretto al file (Google Drive, archive.org, ecc.) - se lasci "#" il pulsante risulta disabilitato
   - trailer: ID del video YouTube del trailer (la parte dopo "v=" nell'URL) - lascia "" se non disponibile
   - screenshots: array di link immagine mostrati nella galleria della scheda di dettaglio - lascia [] se non disponibili
   - size: dimensione del file (es. "38 MB") - controlla anche quanto dura la finta barra di download
   - category: lascia sempre "games" (il sito mostra solo giochi, niente app)
   ============================================================ */
const APPS = [
  {
    name: "Asphalt 8: Airborne",
    dev: "Gameloft",
    icon: "https://web.archive.org/web/20250716215220/https://static.wikia.nocookie.net/asphalt/images/5/5b/A8_v2.0_icon.png/revision/latest?cb=20200704065107",
    color: "#1a1a1a",
    rating: 5,
    price: "FREE",
    category: "games",
    size: "38 MB",
    version: "2.0",
    genre: "Corse",
    desc: "LEAVE GRAVITY IN THE DUST The best arcade racing game series reaches a new turning point! Perform dynamic, high-speed aerial stunts in an intense driving experience powered by a brand-new physics engine! LUXURY DREAM CARS • More than 95 high-performance cars (80% NEW!) • Top licensed manufacturers and models like the Lamborghini Veneno, Bugatti Veyron, Ferrari FXX, Lamborghini Aventador and Pagani Zonda R • Newly recorded high-fidelity car motor sounds for realistic audio immersion GET AIRBORNE • Hit the ramps and take the race above • Perform barrel rolls and wild 360º jumps • Maneuver through the air, pulling stunts while racing NEW EXOTIC LOCATIONS • Race in 13 different settings like Venice, French Guiana, Iceland, the Nevada Desert, Dubai and other exciting locations! • All tracks available in original and mirror variations in Career mode • Discover plenty of hidden shortcuts NEW FEATURES FOR SPEED FREAKS • 9 seasons & more than 300 events in Career mode • Stunning visuals thanks to next-gen shaders, real-time geometry reflection & other amazing effects for a new simulation of speed! • A detailed damage system like nothing you've seen before • Check out the new Infected and Drift Gate game modes SIMULTANEOUS MULTIPLAYER & GHOST CHALLENGES • Simultaneous multiplayer action for up to 12 real opponents! • Dare friends to asynchronous races in your favorite cars • Compare scores on the new leaderboards with friends and drivers around the world • Share your racing achievements and prove that you're the ultimate speed machine MUSIC TO REV YOUR SOUL • A heart-thumping mix of amazing licensed music for your game • Featuring real tracks from Bloc Party, Mutemath & The Crystal Method! A game for fans of extreme arcade racing, with real dream cars and phenomenal graphics that will also please racing simulation enthusiasts.",
    screenshots: [
      "https://web.archive.org/web/20151022214342im_/https://store-images.microsoft.com/image/apps.11182.9007199266242715.6955419d-1916-4572-bbd0-e623f8b00789.10e8ed5b-b04f-4d0d-950a-9ac972e3d856?w=712&h=400&mode=letterbox&background=black",
      "https://web.archive.org/web/20151022214342im_/https://store-images.microsoft.com/image/apps.51606.9007199266242715.a9fc72ba-6594-49b6-b54d-155b4162ff0d.6f7367e3-92ad-4402-953d-20d2482507f9?w=712&h=400&mode=letterbox&background=black",
      "https://web.archive.org/web/20151022214344im_/https://store-images.microsoft.com/image/apps.1539.9007199266242715.36363ed4-0436-4d62-b95a-169b0f908a78.281f3449-0ba1-417d-a677-af43ecf9a144?w=712&h=400&mode=letterbox&background=black",
      "https://web.archive.org/web/20151022214345im_/https://store-images.microsoft.com/image/apps.45546.9007199266242715.0080bc67-a61c-4842-80e7-1fb1bd18ad31.ed46c6b4-37bd-4904-b98a-870c0dced13f?w=712&h=400&mode=letterbox&background=black"
    ],
    link: "https://archive.org/download/asphalt-8-v-2.0.0e.apk/Asphalt_8_v2.0.0e.apk.zip/Asphalt_8_v2.0.0e.apk",
    trailer: ""
  },
  {
    name: "Bonsai Blast",
    dev: "Glu Mobile",
    icon: "🌳",
    color: "#4caf50",
    rating: 5,
    price: "FREE",
    category: "games",
    size: "2.1 MB",
    version: "1.4.2",
    genre: "Arcade",
    desc: "Fai esplodere le sfere colorate in questo classico puzzle arcade. Punta, mira e libera il bonsai!",
    link: "#",
    trailer: ""
  },
  {
    name: "Asphalt 6: Adrenaline HD",
    dev: "Gameloft",
    icon: "🏎️",
    color: "#c0392b",
    rating: 5,
    price: "FREE",
    category: "games",
    size: "24 MB",
    version: "1.0.0",
    genre: "Corse",
    desc: "Corse ad alta velocità su supercar in quindici città reali di tutto il mondo.",
    link: "#",
    trailer: ""
  },
  {
    name: "The Oregon Trail HD",
    dev: "Gameloft",
    icon: "🐎",
    color: "#8d6e63",
    rating: 4,
    price: "FREE",
    category: "games",
    size: "18 MB",
    version: "1.0.3",
    genre: "Avventura",
    desc: "Guida la tua carovana lungo lo storico Oregon Trail affrontando ogni pericolo del viaggio.",
    link: "#",
    trailer: ""
  },
  {
    name: "Modern Combat 3: Fallen Nation",
    dev: "Gameloft",
    icon: "🔫",
    color: "#37474f",
    rating: 4,
    price: "FREE",
    category: "games",
    size: "29 MB",
    version: "1.1.0",
    genre: "Sparatutto",
    desc: "Combatti sul campo di battaglia globale in questo sparatutto in prima persona.",
    link: "#",
    trailer: ""
  }
];
