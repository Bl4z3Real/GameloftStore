/* ============================================================
   FILE CONDIVISO: traduzioni + funzioni helper usate sia dalla
   versione mobile (index.html) che da quella desktop (desktop.html).
   Includilo sempre PRIMA di games-data.js e dello script della pagina.
   ============================================================ */

const translations = {
  it: {
    storeWord: "store", searchPlaceholder: "Cerca giochi...",
    tabGames: "Giochi", tabTrailer: "Trailer", tabDownloads: "Download",
    sectionGames: "Featured", sectionTrailer: "Guarda i trailer", sectionDownloads: "Tutti i download",
    back: "store", install: "INSTALL", noLink: "LINK NON DISPONIBILE", trailerBtn: "TRAILER",
    infoTitle: "Info", descTitle: "Descrizione", sizeLabel: "Dimensione", versionLabel: "Versione", categoryLabel: "Categoria",
    free: "GRATIS", installed: "Installato",
    noGames: "Nessun gioco trovato", noTrailers: "Nessun trailer disponibile",
    trailerOfficial: "Trailer ufficiale", trailerMissing: "trailer non ancora aggiunto",
    downloadHistory: "Cronologia download", downloading: "Download in corso...", completed: "Download completato",
    connecting: "Connessione al server...", fallbackMsg: "Download avviato nel browser",
    footerNote: "Il file verrà scaricato dal tuo browser. Controlla la barra delle notifiche per aprirlo al termine.",
    close: "Chiudi"
  },
  en: {
    storeWord: "store", searchPlaceholder: "Search games...",
    tabGames: "Games", tabTrailer: "Trailers", tabDownloads: "Downloads",
    sectionGames: "Featured", sectionTrailer: "Watch trailers", sectionDownloads: "All downloads",
    back: "store", install: "INSTALL", noLink: "LINK UNAVAILABLE", trailerBtn: "TRAILER",
    infoTitle: "Info", descTitle: "Description", sizeLabel: "Size", versionLabel: "Version", categoryLabel: "Category",
    free: "FREE", installed: "Installed",
    noGames: "No games found", noTrailers: "No trailers available",
    trailerOfficial: "Official trailer", trailerMissing: "trailer not added yet",
    downloadHistory: "Download history", downloading: "Downloading...", completed: "Download complete",
    connecting: "Connecting to server...", fallbackMsg: "Download started in browser",
    footerNote: "The file will be downloaded by your browser. Check your notification bar to open it once finished.",
    close: "Close"
  },
  es: {
    storeWord: "store", searchPlaceholder: "Buscar juegos...",
    tabGames: "Juegos", tabTrailer: "Tráilers", tabDownloads: "Descargas",
    sectionGames: "Destacados", sectionTrailer: "Ver tráilers", sectionDownloads: "Todas las descargas",
    back: "store", install: "INSTALAR", noLink: "ENLACE NO DISPONIBLE", trailerBtn: "TRÁILER",
    infoTitle: "Info", descTitle: "Descripción", sizeLabel: "Tamaño", versionLabel: "Versión", categoryLabel: "Categoría",
    free: "GRATIS", installed: "Instalado",
    noGames: "No se encontraron juegos", noTrailers: "No hay tráilers disponibles",
    trailerOfficial: "Tráiler oficial", trailerMissing: "tráiler aún no añadido",
    downloadHistory: "Historial de descargas", downloading: "Descargando...", completed: "Descarga completada",
    connecting: "Conectando con el servidor...", fallbackMsg: "Descarga iniciada en el navegador",
    footerNote: "El archivo se descargará con tu navegador. Revisa la barra de notificaciones para abrirlo al terminar.",
    close: "Cerrar"
  },
  fr: {
    storeWord: "store", searchPlaceholder: "Rechercher des jeux...",
    tabGames: "Jeux", tabTrailer: "Bandes-annonces", tabDownloads: "Téléchargements",
    sectionGames: "En vedette", sectionTrailer: "Voir les bandes-annonces", sectionDownloads: "Tous les téléchargements",
    back: "store", install: "INSTALLER", noLink: "LIEN INDISPONIBLE", trailerBtn: "BANDE-ANNONCE",
    infoTitle: "Infos", descTitle: "Description", sizeLabel: "Taille", versionLabel: "Version", categoryLabel: "Catégorie",
    free: "GRATUIT", installed: "Installé",
    noGames: "Aucun jeu trouvé", noTrailers: "Aucune bande-annonce disponible",
    trailerOfficial: "Bande-annonce officielle", trailerMissing: "bande-annonce pas encore ajoutée",
    downloadHistory: "Historique des téléchargements", downloading: "Téléchargement en cours...", completed: "Téléchargement terminé",
    connecting: "Connexion au serveur...", fallbackMsg: "Téléchargement démarré dans le navigateur",
    footerNote: "Le fichier sera téléchargé par votre navigateur. Consultez la barre de notifications pour l'ouvrir une fois terminé.",
    close: "Fermer"
  },
  de: {
    storeWord: "store", searchPlaceholder: "Spiele suchen...",
    tabGames: "Spiele", tabTrailer: "Trailer", tabDownloads: "Downloads",
    sectionGames: "Empfohlen", sectionTrailer: "Trailer ansehen", sectionDownloads: "Alle Downloads",
    back: "store", install: "INSTALLIEREN", noLink: "LINK NICHT VERFÜGBAR", trailerBtn: "TRAILER",
    infoTitle: "Info", descTitle: "Beschreibung", sizeLabel: "Größe", versionLabel: "Version", categoryLabel: "Kategorie",
    free: "KOSTENLOS", installed: "Installiert",
    noGames: "Keine Spiele gefunden", noTrailers: "Keine Trailer verfügbar",
    trailerOfficial: "Offizieller Trailer", trailerMissing: "Trailer noch nicht hinzugefügt",
    downloadHistory: "Downloadverlauf", downloading: "Wird heruntergeladen...", completed: "Download abgeschlossen",
    connecting: "Verbindung zum Server...", fallbackMsg: "Download im Browser gestartet",
    footerNote: "Die Datei wird von deinem Browser heruntergeladen. Prüfe die Benachrichtigungsleiste, um sie zu öffnen.",
    close: "Schließen"
  },
  pt: {
    storeWord: "store", searchPlaceholder: "Buscar jogos...",
    tabGames: "Jogos", tabTrailer: "Trailers", tabDownloads: "Downloads",
    sectionGames: "Em destaque", sectionTrailer: "Ver trailers", sectionDownloads: "Todos os downloads",
    back: "store", install: "INSTALAR", noLink: "LINK INDISPONÍVEL", trailerBtn: "TRAILER",
    infoTitle: "Info", descTitle: "Descrição", sizeLabel: "Tamanho", versionLabel: "Versão", categoryLabel: "Categoria",
    free: "GRÁTIS", installed: "Instalado",
    noGames: "Nenhum jogo encontrado", noTrailers: "Nenhum trailer disponível",
    trailerOfficial: "Trailer oficial", trailerMissing: "trailer ainda não adicionado",
    downloadHistory: "Histórico de downloads", downloading: "Baixando...", completed: "Download concluído",
    connecting: "Conectando ao servidor...", fallbackMsg: "Download iniciado no navegador",
    footerNote: "O arquivo será baixado pelo seu navegador. Verifique a barra de notificações para abri-lo ao terminar.",
    close: "Fechar"
  }
};

const detectedLang = (navigator.language || 'it').slice(0, 2).toLowerCase();
const LANG = translations[detectedLang] ? detectedLang : 'en';
const T = translations[LANG];
document.documentElement.lang = LANG;

function starMarkup(n) {
  let s = '';
  for (let i = 0; i < 5; i++) s += i < n ? '★' : '<span class="empty">★</span>';
  return s;
}

function iconMarkup(app) {
  if (app.icon && app.icon.startsWith('http')) {
    return `<img src="${app.icon}" alt="${app.name}">`;
  }
  return app.icon;
}
function iconBg(app) {
  if (app.icon && app.icon.startsWith('http')) return '#e6e6e6';
  return app.color === '#ffffff' ? '#ffffff' : app.color;
}
function iconFg(app) {
  return app.color === '#ffffff' ? '#4caf50' : '#fff';
}

function guessFilename(url) {
  try {
    const clean = url.split('?')[0].split('#')[0];
    const parts = clean.split('/').filter(Boolean);
    return decodeURIComponent(parts[parts.length - 1] || 'file.apk');
  } catch (e) { return 'file.apk'; }
}
function guessDomain(url) {
  try { return new URL(url).hostname; } catch (e) { return url; }
}
function fmtBytes(n) {
  if (!n || n <= 0) return '0 KB';
  if (n < 1024 * 1024) return (n / 1024).toFixed(0) + ' KB';
  return (n / (1024 * 1024)).toFixed(1) + ' MB';
}
function parseSizeToBytes(str) {
  if (!str) return 0;
  const m = String(str).match(/([\d.]+)\s*(KB|MB|GB)/i);
  if (!m) return 0;
  const num = parseFloat(m[1]);
  const unit = m[2].toUpperCase();
  const mult = unit === 'GB' ? 1024 ** 3 : unit === 'MB' ? 1024 ** 2 : 1024;
  return Math.round(num * mult);
}
