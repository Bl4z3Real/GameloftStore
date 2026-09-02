/* ============================================================
   FILE CONDIVISO: traduzioni + funzioni helper usate sia dalla
   versione mobile (index.html) che da quella desktop (desktop.html).
   Includilo sempre PRIMA di games-data.js e dello script della pagina.

   NOTA SULLA COMPATIBILITÀ: questo file è scritto volutamente in
   JavaScript "vecchio stile" (ES5: var, function, niente arrow
   function/template literal/let/const/Set) così da funzionare anche
   sui browser di Android meno recenti (a partire da Android 4.4
   KitKat), che hanno un motore JavaScript molto più limitato dei
   browser moderni.
   ============================================================ */

var translations = {
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

var detectedLang = ((navigator.language || 'it').slice(0, 2)).toLowerCase();
var LANG = translations[detectedLang] ? detectedLang : 'en';
var T = translations[LANG];
document.documentElement.lang = LANG;

/* piccola utility al posto di String.prototype.startsWith (non disponibile
   nei motori JS più vecchi, es. WebView di Android 4.4) */
function startsWithHttp(str) {
  return !!str && str.indexOf('http') === 0;
}

/* piccola utility al posto di String.prototype.includes */
function stringContains(haystack, needle) {
  return String(haystack).toLowerCase().indexOf(String(needle).toLowerCase()) !== -1;
}

function starMarkup(n) {
  var s = '';
  for (var i = 0; i < 5; i++) s += i < n ? '\u2605' : '<span class="empty">\u2605</span>';
  return s;
}

function escHtml(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function iconMarkup(app) {
  if (app.icon && startsWithHttp(app.icon)) {
    return '<img src="' + escHtml(app.icon) + '" alt="' + escHtml(app.name) + '">';
  }
  return app.icon;
}
function iconBg(app) {
  if (app.icon && startsWithHttp(app.icon)) return '#e6e6e6';
  return app.color === '#ffffff' ? '#ffffff' : app.color;
}
function iconFg(app) {
  return app.color === '#ffffff' ? '#4caf50' : '#fff';
}

/* estrae il nome del file da un URL senza usare l'oggetto URL
   (non disponibile in alcuni WebView datati) */
function guessFilename(url) {
  try {
    var clean = url.split('?')[0].split('#')[0];
    var parts = clean.split('/');
    var last = '';
    for (var i = 0; i < parts.length; i++) {
      if (parts[i]) last = parts[i];
    }
    return decodeURIComponent(last || 'file.apk');
  } catch (e) { return 'file.apk'; }
}

/* estrae il dominio da un URL senza usare l'oggetto URL nativo */
function guessDomain(url) {
  try {
    var rest = url.replace(/^https?:\/\//i, '');
    var slashIndex = rest.indexOf('/');
    if (slashIndex !== -1) rest = rest.substring(0, slashIndex);
    return rest || url;
  } catch (e) { return url; }
}

function fmtBytes(n) {
  if (!n || n <= 0) return '0 KB';
  if (n < 1024 * 1024) return (n / 1024).toFixed(0) + ' KB';
  return (n / (1024 * 1024)).toFixed(1) + ' MB';
}

function parseSizeToBytes(str) {
  if (!str) return 0;
  var m = String(str).match(/([\d.]+)\s*(KB|MB|GB)/i);
  if (!m) return 0;
  var num = parseFloat(m[1]);
  var unit = m[2].toUpperCase();
  var mult = unit === 'GB' ? (1024 * 1024 * 1024) : unit === 'MB' ? (1024 * 1024) : 1024;
  return Math.round(num * mult);
}

/* utility al posto di String.prototype.padStart (non disponibile nei
   motori JS più vecchi, es. WebView di Android 4.4) */
function padZero(n) {
  n = String(n);
  return n.length < 2 ? '0' + n : n;
}

/* converte una NodeList in array "vero" senza usare Array.from o
   NodeList.prototype.forEach (non disponibili in browser datati) */
function toArray(nodeList) {
  var arr = [];
  for (var i = 0; i < nodeList.length; i++) arr.push(nodeList[i]);
  return arr;
}

/* equivalente di Element.prototype.closest (non disponibile prima
   di Chrome 41 / vecchi WebView Android) */
function closestByClass(el, className) {
  while (el && el !== document) {
    if (el.className && (' ' + el.className + ' ').indexOf(' ' + className + ' ') !== -1) return el;
    el = el.parentNode;
  }
  return null;
}

/* rimuove un nodo dal DOM senza usare Element.prototype.remove()
   (supporto limitato sui browser datati) */
function removeNode(el) {
  if (el && el.parentNode) el.parentNode.removeChild(el);
}
