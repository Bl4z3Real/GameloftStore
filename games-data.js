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
    name: "Modern Combat 5: Blackout",
    dev: "Gameloft",
    icon: "https://jetta.vgmtreasurechest.com/soundtracks/modern-combat-5-blackout-android-ios-mobile-switch-windows-gamerip-2014/icon_big.png",
    color: "#c0392b",
    rating: 4,
    price: "FREE",
    category: "games",
    size: "46 MB",
    version: "1.2.0o",
    genre: "Sparatutto",
    desc: "•IMPORTANT• Modern Combat 5 requires an Internet connection and a touch input device.  > “It plays as good as it looks.” – IGN > “Amps everything up to the next level.” – 148Apps > “Sharp controls, impressive graphics.” – Pocket Gamer  Step into the action as the latest installment in the best FPS series raises the bar for shooter games once more! Create a squad, add your friends and test your individual and team skills against other squads!  Is single player your thing? Then step into a world on the brink of anarchy and shoot your way out of one dire situation after another to expose a lunatic who’s trying to tear the world to shreds.   CHOOSE YOUR FAVORITE CLASS > 4 customizable classes that you can level up across single- and multiplayer > Find the play style the suits you: Assault, Heavy, Recon, or Sniper > Activate class-specific skills by earning and spending Skill Points  HIGH-POWERED MULTIPLAYER > Epic team clashes in Squad vs. Squad matches > Talk to other players in Global and Squad Chat > Individual and Squad leaderboards > Win cool rewards in the limited-time events  UNIFIED PROGRESSION > Accumulate XP and level up by playing both single-player missions and multiplayer matches > Unlock higher-tier weapons by mastering lower-tier ones > Customize the perfect weapon using a host of attachments  INTENSE SOLO CAMPAIGN > Fast-paced story missions with various challenges taking you from Tokyo to Venice > Play the new Spec-Ops missions for a real adrenaline rush > Flawless graphics, music and voice performances with seamlessly integrated cutscenes  HIGHLY CUSTOMIZABLE CONTROLS > Intuitive, highly customizable controls so you can play just the way you want",
    screenshots: [
      "https://play-lh.googleusercontent.com/S08HjFQ3aW_MHWd1o1p0J0BamKsvn9Ls7BWgK9-C2aWMZGM_MlFUcooejxxM4MEw3GBgdlJvuT-SsjU_qeXcpQ=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/Z8CeWd_ILyFEzMm0jltEPw5_Zfc82V4zRJUi-XvJWKLRJjBmQ_IDUsnmJqgy1uG2iH8LWBVwyknutysO1yCuJw=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/f0QkpXmTWe7e2zISdwXSxqTaLEdswmWTzT1LfWtYhA4nmKnowpyR0PAvQVISg1Yhlro35d1Tj9TkB2MlDfyn=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/k-IGxmihc1nfYBZdurS5DUYxc7wE4LZ-MhoP5_Hgfhp01iIRMOOItFO1k_HGagZtNL3WJ2uJVEo-oySAqow4kg=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/5cYwRiEhaI0-OyNVdNivE_q2s6FR00R62rgrxdWyUqzXaPbmFq1J9EkOlQyVlCM_UA2im2N4ZTmtbfeCG778Pw=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/x4qdz2h5lrDw-wuN4pGY5jneoPAYX_3fds3OPd8zbQrPIiKy7DMkxnPXNI6OVOXdezOuzN6tQ68w53IaFfFYmQ=w1052-h592-rw"
    ],
    link: "https://archive.org/download/ModernCombat5V1.2.0oOfflineAPKLOCK.com/Modern%20Combat%205%20v1.2.0o%20%5BOffline%5D%20APKLOCK.com.apk",
    trailer: "Bmuzjul8wS4"
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
