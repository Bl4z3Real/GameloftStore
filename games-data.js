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
    desc: "•IMPORTANT• Modern Combat 5 requires an Internet connection and a touch input device.  > “It plays as good as it looks.” – IGN > “Amps everything up to the next level.” – 148Apps > “Sharp controls, impressive graphics.” – Pocket Gamer  Step into the action as the latest installment in the best FPS series raises the bar for shooter games once more! Create a squad, add your friends and test your individual and team skills against other squads!  Is single player your thing? Then step into a world on the brink of anarchy and shoot your way out of one dire situation after another to expose a lunatic who's trying to tear the world to shreds.   CHOOSE YOUR FAVORITE CLASS > 4 customizable classes that you can level up across single- and multiplayer > Find the play style the suits you: Assault, Heavy, Recon, or Sniper > Activate class-specific skills by earning and spending Skill Points  HIGH-POWERED MULTIPLAYER > Epic team clashes in Squad vs. Squad matches > Talk to other players in Global and Squad Chat > Individual and Squad leaderboards > Win cool rewards in the limited-time events  UNIFIED PROGRESSION > Accumulate XP and level up by playing both single-player missions and multiplayer matches > Unlock higher-tier weapons by mastering lower-tier ones > Customize the perfect weapon using a host of attachments  INTENSE SOLO CAMPAIGN > Fast-paced story missions with various challenges taking you from Tokyo to Venice > Play the new Spec-Ops missions for a real adrenaline rush > Flawless graphics, music and voice performances with seamlessly integrated cutscenes  HIGHLY CUSTOMIZABLE CONTROLS > Intuitive, highly customizable controls so you can play just the way you want",
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
    name: "Modern Combat 2: Black Pegasus",
    dev: "Gameloft",
    icon: "https://web.archive.org/web/20140611053801im_/https://lh5.ggpht.com/e7UJXt5PjxlqYmUbXPXRtPjdarX_RUnHbHjg9eb_yJJ7SD6pKQ70DGMtLlhsQf4N_A=w124",
    color: "#c0392b",
    rating: 5,
    price: "€6.99",
    category: "games",
    size: "11 MB",
    version: "1.0.5",
    genre: "Sparatutto",
    desc: "Finish what you started. Complete the mission unveiled in the first opus of one of the most acclaimed FPS games on Android, this time on fronts all over the globe. Modern Combat 2: Black Pegasus further improves the exemplary gameplay of the first Modern Combat game for an astounding immersion in a modern war experience.  Contact us at android.support@gameloft.com for any problems you may have with this application.",
    screenshots: [
      "https://web.archive.org/web/20140611053802im_/https://lh5.ggpht.com/Uz62eBvUZLU0G2JB8OTZWddKo39kZy0iQQRVzzo-PyzJmwdiPO0xYKIUWk6sBYq5XQ=h230",
      "https://web.archive.org/web/20140611053802im_/https://lh5.ggpht.com/5tj7zdj4ovmOz8R0SxXNxG5pZwXTOWMceugDp3DfAG45CPosbXrUh6CgswWxwT_96g=h230",
      "https://web.archive.org/web/20140611053802im_/https://lh5.ggpht.com/uoXhZENj6Yf6W1WxeiQypkNHMnl4_EuO8Ke8ppmWotW3F5KJ80O8hDmwpM1k2T8SQSE=h230",
      "https://web.archive.org/web/20140611053802im_/https://lh3.ggpht.com/x2fxhYwkyhWIqpPlb4q-nfOOa1sig-QOZLN9B1hOyM9BJsXSLMNJSkh8NMIzPJPmkIo=h230"
    ],
    link: "https://archive.org/download/modern-combat-2-black-pegasus-v-1.0.5/Modern%20Combat%202%20-%20Black%20Pegasus%20v1.0.5.apk",
    trailer: "fM0E6QL2_rA"
  },

  {
    name: "Modern Combat 3: Fallen Nation",
    dev: "Gameloft",
    icon: "https://web.archive.org/web/20121111115650im_/https://lh6.ggpht.com/pC8T732QNYuqMzGDhpZHsiWRvSJCXX9LtAS_JakYm6AR5OQNGVCTKSuIfc-VMDjFjs8=w124",
    color: "#c0392b",
    rating: 5,
    price: "€6.99",
    category: "games",
    size: "18 MB",
    version: "1.1.7g",
    genre: "Sparatutto",
    desc: "When war arrives, there is no time to be afraid. ** This game requires 1.37 GB of free storage space. **Permission added to view account information. We use this permission to set up push notifications, allowing us to inform you of important game-related news. Your Gmail account is checked only locally and is NOT sent to any server. We are working on a way to do this without requiring this permission. The best smartphone FPS series returns with even more intense, apocalyptic battles. **PocketGamer: \"A brilliant combination of graphics, gripping action, and a solid multiplayer mode.\" The best and most realistic mobile FPS series returns with an intense, apocalyptic battle for America's freedom, in both single-player and multiplayer modes. PLAY THE HERO IN AN IMMERSIVE SOLO CAMPAIGN • Fight through 13 campaign missions, from Los Angeles to Pakistan. • Experience numerous memorable moments thanks to a top-notch script. • Diverse mission types: escort, sabotage, helicopter, off-road vehicle chase... A REALISTIC AND IMMERSIVE WAR EXPERIENCE • The most immersive and intuitive mobile FPS experience has been further improved with a sprint-and-slide feature. • Experience next-gen graphics and unprecedented environmental rendering. • Enhanced sound effects and crystal-clear voice acting enrich the apocalyptic experience. ENJOY THE BEST MULTIPLAYER MODE ON MOBILE • Battle against up to 12 players across 6 exclusive maps in 7 different modes. • Use customized weapons to climb the leaderboards—which go beyond simple scoring.",
    screenshots: [
      "https://web.archive.org/web/20121113094313im_/https://lh3.ggpht.com/-UvEh90Wq1cUF-JSfpgeEoS0p9EoYXG2ZYV784RFXDi2EEgFJbiU8Y_w-IQ-htNPLeY=h230",
      "https://web.archive.org/web/20121113095606im_/https://lh6.ggpht.com/HyUOt-Er7WpDROO7tlP7d4TckdVKHo9ifAifG3V7d9zianvgd22oY0ZirlHI5EoF4sbP=h230"
    ],
    link: "https://archive.org/download/modern-combat-3-fallen-nation-v-1-1-6b-cache/Modern-Combat-3-Fallen-Nation-v1-1-7g.apk",
    trailer: "mdF0EvDwH-Y"
  },

  {
    name: "Modern Combat 4: Zero Hour",
    dev: "Gameloft",
    icon: "https://web.archive.org/web/20130114212517im_/https://lh5.ggpht.com/E2RoZJUZmOAnrKN1A_qXVobeIugNAuWGwo3hBEzBiI3cf74tVMDzIxZ5CSQ-ag0Hxzd0=w124",
    color: "#c0392b",
    rating: 5,
    price: "€6.99",
    category: "games",
    size: "27 MB",
    version: "1.2.3e",
    genre: "Sparatutto",
    desc: "Gear up and jump into the ultimate FPS experience! Experience top-tier first-person shooter action on your smartphone, with a brand-new chapter that takes mobile gaming to the next level. In the wake of a nuclear disaster, the only chance to save the world lies in the hands of a few elite soldiers. These warriors must track down world leaders and rescue them from a terrifying terrorist organization. Immerse yourself in unforgettable action-packed gameplay ☢ Experience a gripping storyline and play as the antagonist, Edward Page—seeing the conflict from both sides. ☢ Dominate the battlefield with a tactical movement system! ☢ Wage war across the globe, from Antarctica to Barcelona! Experience console-quality graphics and sound ☢ Enjoy console-quality graphics, lifelike animations, and dynamic objects. ☢ The first Gameloft title powered by the Havok engine, featuring amazing ragdoll effects and realistic vehicle physics. ☢ High-quality sound and voice acting provided by a renowned film industry studio. Experience a redesigned multiplayer mode ☢ Combine your online profile with a revamped loadout system featuring over 20,000 weapon configurations! ☢ A new specialization system with redesigned skills. ☢ Lead your character to the top of the new online leaderboards!",
    screenshots: [
      "https://web.archive.org/web/20140115143338im_/https://lh3.ggpht.com/3tzdvmRhxivLjkYbEcdclBHJwmmAS-Y_JkCooLtOrh9MS-twE-gzMM6OBjWgWgEIAQ=h900",
      "https://web.archive.org/web/20140115143339im_/https://lh3.ggpht.com/jAfaR4iKD_PwlWjKokfjqZIDQbL1awRx8Wig9m3555SXoT2gn3UXKARTALEEx75L5A=h900",
      "https://web.archive.org/web/20140115143340im_/https://lh3.ggpht.com/bmVb87WR38mGVuQ4jXqg5kmbvYgi5irRfc5nMfhxXOggu8rycaEIk4d8ExL2KBPalMY=h900",
      "https://web.archive.org/web/20140115143341im_/https://lh3.ggpht.com/hCHvPtqBx0TXB8guXjLRpzRpgC3nnbtmOEAZzunQzLu9CNMcSt_v1-p58M5z0WiBeFk=h900",
      "https://web.archive.org/web/20140115143332im_/https://lh6.ggpht.com/8Qy1VPLjhCok0e7oKh_ybxLrrorSFEdE4pnRvTWYAaD96A87zTnCeL5CyLevh2vBqg=h900"
    ],
    link: "https://dl.apkvision.org/modern-combat-4-zero-hour/modern-combat-4-zero-hour-1.2.3e.apk",
    trailer: "XlIuh_Iu6vw"
  },

  {
    name: "N.O.V.A. Legacy",
    dev: "Gameloft",
    icon: "https://web.archive.org/web/20170223085520im_/https://lh3.googleusercontent.com/0GuE81ngktAI4vUopxV9qUgxGt_bpyDNcnPrNVFolh0d98qVMoGu9b2JBJxZAC239iA=w300",
    color: "#c0392b",
    rating: 3,
    price: "FREE",
    category: "games",
    size: "45 MB",
    version: "5.8.3c",
    genre: "Sparatutto",
    desc: "THE LEGEND REBORN & REMASTERED  N.O.V.A. Legacy brings you the best sci-fi FPS experience from the epic first episode of the critically acclaimed N.O.V.A. saga -- all in a compact 20 MB version.  Kal Wardin, our hero, is a retired N.O.V.A. veteran summoned once again to don his Mobile Armor Suit in defense of the Colonial Administration forces.  Helped by Yelena, his personal AI Agent, Kal must protect humanity's destiny by entering the battlefield against alien invaders while uncovering the mystery behind their sudden attack.  A CONSOLE-LIKE EXPERIENCE ON MOBILE: - An immersive shooter experience based on a renowned Gameloft FPS series in the same vein as Modern Combat. - Craft and upgrade weapons, from powerful assault rifles to devastating plasma guns. - Enjoy the original N.O.V.A. shooter experience with enhanced graphics and gameplay.  DEFEAT ALIEN FORCES IN VARIOUS GAME MODES: - Story Mode: Delve into the plot and fight to uncover the truth about these alien invaders. - Shadow Events: Defeat the aliens' Special Forces in challenging limited-time events. - Special Ops: Launch a strategic strike on unique alien formations.  TEST YOUR SKILLS IN MULTIPLAYER ARENAS: - Deathmatch: Be the last one standing in a 6-player firefight. - Customize your character with a variety of Marine and alien skins. - Leaderboards and 3rd-person Death Cam replays.",
    screenshots: [
      "https://web.archive.org/web/20171010235625im_/https://lh3.googleusercontent.com/HxpbpICHxr034it127qjASgqVGXhsxQqTCq-NUEFIQbxalaBrWSPl0RqJ7EwhVsMQ6w=h310",
      "https://web.archive.org/web/20171011003809im_/https://lh3.googleusercontent.com/btOcKOTV7h-ChiF_sZaWjPuMSTgWyrW6MwoFLL8WUPSoc2jVGoWKHDp-d_BE_K0GWmo=h310",
      "https://web.archive.org/web/20171010231942im_/https://lh3.googleusercontent.com/YgXJ2RQtqzsZndlWi0eRH4QAZ19YrrO6Lz79yx3IiLl4dzKaT0HbirYhnKIGc9OfSw=h310",
      "https://web.archive.org/web/20171010235828im_/https://lh3.googleusercontent.com/r0EEvcdxLv76LGndlQ9ABx_MGuV2y6nx7ERTSSyC-iqqmP4yMycdGSgpM6QbUxs6kQ8=h310",
      "https://web.archive.org/web/20171011001135im_/https://lh3.googleusercontent.com/MGG8wf9dwtLiqHP-oF2UPTDP61ufOFP_1G7OJGu3SI1DVbXTu-X7OIqrImz4KMvtPRoF=h310",
      "https://web.archive.org/web/20171011000226im_/https://lh3.googleusercontent.com/U5W6RNwKrd38Ccfa70p6qPkUD21MBKV0hPa_0iLebXM1c3eeduFlhi6_Kx2WJiwL3jsP=h310"
    ],
    link: "https://dl.apkvision.org/nova-legacy/N.O.V.A-v5-8-3c.apk",
    trailer: "RRViSISYi2g"
  },

  {
    name: "N.O.V.A. 2",
    dev: "Gameloft",
    icon: "https://web.archive.org/web/20190128150426im_/https://lh5.ggpht.com/TwhLviPhN5OnExtq7w6NS0-fGojbcBpjk6NmSytQlZ7063R0IZ3TLktpTcX9A8UqypQ=w124",
    color: "#c0392b",
    rating: 5,
    price: "FREE",
    category: "games",
    size: "5 MB",
    version: "1.0.5",
    genre: "Sparatutto",
    desc: "The Best Sci-Fi FPS Game Is Back! Immerse Yourself in a Whole New Dimension of Gaming!  The best sci-fi FPS game is back! Immerse yourself in a whole new dimension of gaming!  Pocket Gamer — 9/10 + Gold Award: “It surpasses its predecessor with faster-paced action, fantastic graphics, and the best multiplayer yet.”  IGN — 8.5/10 + Editor’s Choice: “Smooth controls are a great help during the intense action.”  The AppEra: “N.O.V.A. 2 is without a doubt the best FPS game.”  TouchGen: “Its intense gameplay is absolutely impossible to put down.”  148apps: “N.O.V.A. 2 is a game that rivals console titles.”  App Advice: “It provides the ultimate online multiplayer experience, with fast connections and battles for up to 10 players.”  ---  The Ultimate Game, Faster and More Powerful Than Ever!  - Encounter new enemies equipped with improved artificial intelligence! - Master countless different weapons and powers. - Enjoy ever-changing gameplay: running, shooting, falling, riding a motorbike, controlling a giant mech, firing lasers, and much more. - The more, the merrier! Up to 10 players can play together across 10 multiplayer maps. - Build a legendary career on the multiplayer leaderboards. - Explore locations reborn with stunning graphics. - If you previously enjoyed N.O.V.A. HD, receive an additional bonus.  Six years have passed since the first story.  Humanity has been thrown into a bloody civil war between the Earth Orbit Government and a mysterious new organization known as the Human-Alien Alliance. Our protagonist, Kal Wardin, left the N.O.V.A. forces of Earth Orbit years ago and had been living with farmers in a local colony on the planet Scorpius.  But even this most peaceful of places could not escape the flames of a merciless war...  An Unparalleled Single-Player Campaign:  - 12 chapters featuring countless enemies and spectacular environments across a variety of locations. - Dozens of weapons, including dual pistols, assault rifles, shotguns, automatic shotguns, sniper rifles, rocket launchers, grenade launchers, alien plasma guns, alien lightning guns, alien laser guns, turrets, kill grenades, mines, and more. - 3 special powers: Freeze, Time Delay, and the melee attack Disc. - Intense battles against enemies equipped with greatly improved artificial intelligence.  Intense Multiplayer Modes:  - Online or local play for 1–10 players. - 5 modes: Free-for-All, Team Deathmatch, Capture the Flag, Capture the Point, and One-Shot Kill. - Ranking and perk systems. - 10 maps featuring thrilling battles. - Exciting matches against friends or players from around the world through Gameloft LIVE! - Global leaderboards available in the game and on the official website (www.near-orbit-vangua
  {
    name: "Asphalt 7: Heat",
    dev: "Gameloft",
    icon: "https://asphalt.fandom.com/wiki/Winter_Update_(Asphalt_7)?file=A7_v1.11.png",
    color: "#c0392b",
    rating: 5,
    price: "FREE",
    category: "games",
    size: "19.8MB",
    version: "1.1.1",
    genre: "Racing",
    desc: "\"Hit the speed of heat in the newest, fastest, most visually stunning edition of the famed Asphalt series.\"",
    screenshots: [
      "https://cdn.mobygames.com/screenshots/2839035-asphalt-7-heat-windows-apps-title-screen.jpg|",
      "https://cdn.mobygames.com/screenshots/2841415-asphalt-7-heat-windows-apps-i-wrecked-my-car.jpg",
      "https://cdn.mobygames.com/screenshots/2840558-asphalt-7-heat-windows-apps-main-menu-demo-version.jpg",
      "https://cdn.mobygames.com/screenshots/2840717-asphalt-7-heat-windows-apps-select-a-game-mode-a-location-and-a-.jpg",
      "https://cdn.mobygames.com/screenshots/2841838-asphalt-7-heat-windows-apps-a-closer-look-at-a-tier-1-car.jpg",
      "https://cdn.mobygames.com/screenshots/2840326-asphalt-7-heat-windows-apps-loading-screen.jpg",
      "https://cdn.mobygames.com/screenshots/2839724-asphalt-7-heat-windows-apps-an-early-part-of-a-race-set-in-miami.jpg",
      "https://cdn.mobygames.com/screenshots/2842022-asphalt-7-heat-windows-apps-the-maximum-nitro-in-effect.jpg",
      "https://cdn.mobygames.com/screenshots/2841668-asphalt-7-heat-windows-apps-los-angeles-is-introduced.jpg",
      "https://cdn.mobygames.com/screenshots/2841211-asphalt-7-heat-windows-apps-racing-through-water.jpg",
      "https://cdn.mobygames.com/screenshots/2841410-asphalt-7-heat-windows-apps-there-is-a-nitro-pick-up-ahead.jpg",
      "https://cdn.mobygames.com/screenshots/2839559-asphalt-7-heat-windows-apps-you-can-take-out-other-cars.jpg"
    ],
    link: "https://archive.org/download/com.gameloft.android.ANMP.GloftA7HM_v1.1.1-1110_Android-2.3.2/com.gameloft.android.ANMP.GloftA7HM_v1.1.1-1110_Android-2.3.2.apk",
    trailer: "OXP9Rcr7OLQ"
  },
  {
    name: "Asphalt 6: Adrenaline",
    dev: "Gameloft",
    icon: "https://dn721701.ca.archive.org/0/items/asphalt6_202201/m_asphalt-6-adrenaline.png",
    color: "#c0392b",
    rating: 5,
    price: "FREE",
    category: "games",
    size: "6.4MB",
    version: "1.3.3",
    genre: "Racing",
    desc: "\"FEEL THE ADRENALINE RUSH\" Discover the latest entry in the benchmark arcade racing series. Get your adrenaline pumping with the brand-new Adrenaline mode!",
    screenshots: [
      "http://cdn.mobygames.com/screenshots/16415645-asphalt-6-adrenaline-android-title-screen.png",
      "https://cdn.mobygames.com/screenshots/16415648-asphalt-6-adrenaline-android-intro-movie.png",
      "https://cdn.mobygames.com/screenshots/16415651-asphalt-6-adrenaline-android-main-menu.png",
      "https://cdn.mobygames.com/screenshots/16415654-asphalt-6-adrenaline-android-the-garage.png",
      "https://cdn.mobygames.com/screenshots/16415657-asphalt-6-adrenaline-android-level-selection.png",
      "https://cdn.mobygames.com/screenshots/16415660-asphalt-6-adrenaline-android-car-selection.png",
      "https://cdn.mobygames.com/screenshots/16415663-asphalt-6-adrenaline-android-loading-screen.png",
      "https://cdn.mobygames.com/screenshots/16415666-asphalt-6-adrenaline-android-pre-race-cutscene.png",
      "https://cdn.mobygames.com/screenshots/16415669-asphalt-6-adrenaline-android-about-to-race.png",
      "https://cdn.mobygames.com/screenshots/16415579-asphalt-6-adrenaline-android-nitro-collectibles.png",
      "https://cdn.mobygames.com/screenshots/16415582-asphalt-6-adrenaline-android-using-nitro-to-boost.png",
      "https://cdn.mobygames.com/screenshots/16415585-asphalt-6-adrenaline-android-bumping-into-an-opponent.png",
      "https://cdn.mobygames.com/screenshots/16415588-asphalt-6-adrenaline-android-getting-wrecked.png",
      "https://cdn.mobygames.com/screenshots/16415591-asphalt-6-adrenaline-android-racing-through-an-underwater-tunnel.png",
      "https://cdn.mobygames.com/screenshots/16415825-asphalt-6-adrenaline-android-race-completed.png",
      "https://cdn.mobygames.com/screenshots/16415828-asphalt-6-adrenaline-android-results.png",
      "https://cdn.mobygames.com/screenshots/16415687-asphalt-6-adrenaline-android-new-car-unlocked.png",
      "https://cdn.mobygames.com/screenshots/16415684-asphalt-6-adrenaline-android-second-race-is-in-cape-town.png",
      "https://cdn.mobygames.com/screenshots/16415690-asphalt-6-adrenaline-android-car-upgrades.png",
      "https://cdn.mobygames.com/screenshots/16415675-asphalt-6-adrenaline-android-driving-the-ford-shelby.png",
      "https://cdn.mobygames.com/screenshots/16415693-asphalt-6-adrenaline-android-opponent-getting-eliminated.png",
      "https://cdn.mobygames.com/screenshots/16415696-asphalt-6-adrenaline-android-driving-up-the-hill-in-chamonix.png",
      "https://cdn.mobygames.com/screenshots/16415699-asphalt-6-adrenaline-android-entering-adrenalin-mode.png",
      "https://cdn.mobygames.com/screenshots/16415702-asphalt-6-adrenaline-android-hood-view.png",
      "https://cdn.mobygames.com/screenshots/16415678-asphalt-6-adrenaline-android-driving-the-ktm-x-bow.png",
      "https://cdn.mobygames.com/screenshots/16415681-asphalt-6-adrenaline-android-getting-an-achievement.png",
      "https://cdn.mobygames.com/screenshots/16415705-asphalt-6-adrenaline-android-finding-a-shortcut-through-a-castle.png",
      "https://cdn.mobygames.com/screenshots/16415708-asphalt-6-adrenaline-android-tokyo-at-night.png"
    ],
    link: "https://archive.org/download/asphalt6_202201/Asphalt-6-Adrenaline.apk",
    trailer: "UgDDNIHPb2Q"
  },
  {
    name: "Asphalt Nitro",
    dev: "Gameloft",
    icon: "https://cdn2.steamgriddb.com/icon/bb2825b78d37fef9ecabb1b91a8a6b88/32/256x256.png",
    color: "#c0392b",
    rating: 5,
    price: "FREE",
    category: "games",
    size: "37.4MB",
    version: "1.7.2g",
    genre: "Racing",
    desc: "Take the wheel of licensed luxury cars and push them to the absolute limit! Hit the ramps, pull off stunts, and maneuver in mid-air. Challenge rivals across various game modes and leave them in the dust! Catch mode returns for the first time since the series' earliest installments! Enjoy breathtaking locations inspired by the most spectacular places on Earth! Discover plenty of hidden shortcuts and cross the finish line first!",
    screenshots: [
      "https://cdn.mobygames.com/screenshots/2420243-asphalt-nitro-android-title-loading-screen.jpg",
      "https://cdn.mobygames.com/screenshots/2410746-asphalt-nitro-android-main-menu.jpg",
      "https://cdn.mobygames.com/screenshots/2410415-asphalt-nitro-android-an-interactive-tutorial-race.jpg",
      "https://cdn.mobygames.com/screenshots/2421207-asphalt-nitro-android-welcome-gift.jpg",
      "https://cdn.mobygames.com/screenshots/2419975-asphalt-nitro-android-approaching-a-jump-with-my-mini-cooper-s-r.jpg",
      "https://cdn.mobygames.com/screenshots/2420427-asphalt-nitro-android-race-results-and-rewards.jpg",
      "https://cdn.mobygames.com/screenshots/2408401-asphalt-nitro-android-the-lobby-of-a-multiplayer-race.jpg",
      "https://cdn.mobygames.com/screenshots/2408240-asphalt-nitro-android-the-booster-you-can-buy-and-equip-before-s.jpg",
      "https://cdn.mobygames.com/screenshots/2410644-asphalt-nitro-android-the-countdown-before-starting-a-race.jpg",
      "https://cdn.mobygames.com/screenshots/2422791-asphalt-nitro-android-racing-through-a-giant-pipe-high-above-the.jpg",
      "https://cdn.mobygames.com/screenshots/2408085-asphalt-nitro-android-race-results.jpg",
      "https://cdn.mobygames.com/screenshots/2423334-asphalt-nitro-android-my-car-has-become-infected-in-the-infected.jpg",
      "https://cdn.mobygames.com/screenshots/2712065-asphalt-nitro-android-take-down-other-cars-to-extend-the-infecti.jpg",
      "https://cdn.mobygames.com/screenshots/2409461-asphalt-nitro-android-limited-events-require-fuel-as-a-currency.jpg",
      "https://cdn.mobygames.com/screenshots/2423040-asphalt-nitro-android-the-lancer-evo-x-in-the-garage-screen.jpg",
      "https://cdn.mobygames.com/screenshots/2409694-asphalt-nitro-android-in-app-purchases-for-tokens.jpg",
      "https://cdn.mobygames.com/screenshots/2423576-asphalt-nitro-android-the-rewards-of-the-highest-vip-level.jpg",
      "https://cdn.mobygames.com/screenshots/2420586-asphalt-nitro-android-you-can-paint-the-cars.jpg",
      "https://cdn.mobygames.com/screenshots/2414526-asphalt-nitro-android-upgrade-screen.jpg",
      "https://cdn.mobygames.com/screenshots/2415384-asphalt-nitro-android-in-pursuit-on-a-track-with-mountains.jpg",
      "https://cdn.mobygames.com/screenshots/2634364-asphalt-nitro-android-in-the-catch-mode-you-get-to-drive-a-cop-c.jpg",
      "https://cdn.mobygames.com/screenshots/2415148-asphalt-nitro-android-progress-through-the-events-of-the-first-s.jpg",
      "https://cdn.mobygames.com/screenshots/2415614-asphalt-nitro-android-approaching-the-finish-line-with-maximum-b.jpg",
      "https://cdn.mobygames.com/screenshots/2415804-asphalt-nitro-android-buy-pro-kits-to-receive-additional-cards.jpg",
      "https://cdn.mobygames.com/screenshots/2416212-asphalt-nitro-android-the-inventory.jpg",
      "https://cdn.mobygames.com/screenshots/2414986-asphalt-nitro-android-racing-from-the-first-person-perspective-i.jpg",
      "https://cdn.mobygames.com/screenshots/2415985-asphalt-nitro-android-global-leaderboard.jpg"
    ],
    link: "https://archive.org/download/asphalt-nitro-android-releases/Asphalt_Nitro_v1.7.2g.apk",
    trailer: "RJZHGvsDnyg"
  },