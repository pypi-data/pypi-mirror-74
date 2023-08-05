

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=n != 1;
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "(one more date)": [
      "(un'altra data)",
      "({num} altre date)"
    ],
    "Add condition": "Aggiungi condizione",
    "All": "Tutto",
    "All of the conditions below (AND)": "Tutte le condizioni sottostanti (e)",
    "An error has occurred.": "Abbiamo riscontrato un errore.",
    "An error of type {code} occurred.": "Si \u00e8 verificato un errore {code}.",
    "April": "Aprile",
    "At least one of the conditions below (OR)": "Almeno una delle condizioni sottostanti (oppure)",
    "August": "Agosto",
    "Barcode area": "Area codice a barra",
    "Calculating default price\u2026": "Calcolando il prezzo di default\u2026",
    "Cart expired": "Carrello scaduto",
    "Check-in QR": "Check-in con QR",
    "Click to close": "Clicca per chiudere",
    "Close message": "Messaggio di chiusura",
    "Comment:": "Commento:",
    "Confirming your payment \u2026": "Stiamo processando il tuo pagamento...",
    "Contacting Stripe \u2026": "Sto contattando Stripe \u2026",
    "Contacting your bank \u2026": "Sto contattando la tua banca \u2026",
    "Copied!": "Copiato!",
    "Count": "Conteggio",
    "Current date and time": "Data e orario corrente",
    "December": "Dicembre",
    "Do you really want to leave the editor without saving your changes?": "Vuoi davvero abbandonare l'editor senza salvare le modifiche?",
    "Error while uploading your PDF file, please try again.": "Errore durante il caricamento del tuo file PDF, prova di nuovo.",
    "Event admission": "Ammissione all'evento",
    "Event end": "Evento termina",
    "Event start": "Evento inizia",
    "February": "Febbraio",
    "Fr": "Ve",
    "Generating messages \u2026": "Stiamo generando i messaggi \u2026",
    "Group of objects": "Gruppo di oggetti",
    "January": "Gennaio",
    "July": "Luglio",
    "June": "Giugno",
    "Lead Scan QR": "Scansiona QR del lead",
    "March": "Marzo",
    "Marked as paid": "Segna come pagato",
    "May": "Maggio",
    "Mo": "Lu",
    "No": "No",
    "None": "Nessuno",
    "November": "Novembre",
    "Number of days with a previous entry": "Nunmero di giorni con un inserimento precedente",
    "Number of previous entries": "Numero di inserimenti precedenti",
    "Number of previous entries since midnight": "Numero di inserimenti precedenti fino a mezzanotte",
    "Object": "Oggetto",
    "October": "Ottobre",
    "Others": "Altri",
    "Paid orders": "Ordini pagati",
    "Placed orders": "Ordini effettuati",
    "Please enter a quantity for one of the ticket types.": "Inserisci la quantit\u00e0 per una tipologia di biglietto.",
    "Please enter the amount the organizer can keep.": "Inserisci l'importo che l'organizzatore pu\u00f2 trattenere.",
    "Powered by pretix": "Powered by Pretix",
    "Press Ctrl-C to copy!": "Usa i tasti Ctrl-C per copiare!",
    "Product": "Prodotto",
    "Product variation": "Varianti prodotto",
    "Sa": "Sa",
    "Saving failed.": "Salvataggio fallito.",
    "September": "Settembre",
    "Su": "Do",
    "Text object": "Oggetto testo",
    "Th": "Gio",
    "The PDF background file could not be loaded for the following reason:": "Il file PDF di sfondo non pu\u00f2 essere caricato per le seguenti ragioni:",
    "The items in your cart are no longer reserved for you.": "I prodotti nel tuo carrello non sono pi\u00f9 disponibili.",
    "The items in your cart are reserved for you for one minute.": [
      "Gli elementi nel tuo carrello sono riservati per 1 minuto.",
      "Gli elementi nel tuo carrello sono riservati per {num} minuti."
    ],
    "The organizer keeps %(currency)s %(amount)s": "L'organizzatore trattiene %(currency)s %(amount)s",
    "The request took too long. Please try again.": "La richiesta ha impiegato troppo tempo. Si prega di riprovare.",
    "Ticket design": "Design biglietto",
    "Tolerance (minutes)": "Tolleranza (minuti)",
    "Total": "Totale",
    "Total revenue": "Ricavi totali",
    "Tu": "Ma",
    "Unknown error.": "Errore sconosciuto.",
    "Use a different name internally": "Utilizza un nome diverso internamente",
    "We": "Me",
    "We are currently sending your request to the server. If this takes longer than one minute, please check your internet connection and then reload this page and try again.": "Stiamo inviando la tua richiesta al server. Se questa operazione richiede pi\u00f9 di un minuto si prega di verificare la connessione internet e ricaricare la pagina per riprovare l'invio.",
    "We are processing your request \u2026": "Stiamo elaborando la tua richiesta \u2026",
    "We currently cannot reach the server, but we keep trying. Last error code: {code}": "Al momento il server non \u00e8 raggiungibile, ma continueremo a provare. Codice dell'ultimo errore: {code}",
    "We currently cannot reach the server. Please try again. Error code: {code}": "Al momento il server non \u00e8 raggiungibile. Si prega di riprovare. Codice dell'errore: {code}",
    "Yes": "Si",
    "You get %(currency)s %(amount)s back": "Ricevi indietro %(currency)s %(amount)s",
    "You have unsaved changes!": "Hai cambiamenti non salvati!",
    "Your color has bad contrast for text on white background, please choose a darker shade.": "Il colore scelto non ha un buon contrasto, per favore scegline uno pi\u00f9 scuro.",
    "Your color has decent contrast and is probably good-enough to read!": "Il colore scelto ha un buon contrasto e probabilmente \u00e8 abbastanza leggibile!",
    "Your color has great contrast and is very easy to read!": "Il colore scelto ha un ottimo contrasto ed \u00e8 molto leggibile!",
    "Your request arrived on the server but we still wait for it to be processed. If this takes longer than two minutes, please contact us or go back in your browser and try again.": "La tua richiesta \u00e8 stata accettata dal server ma \u00e8 ancora in attesa di elaborazione. Se l'attesa dura pi\u00f9 a lungo di due minuti di ti invitiamo a contattarci o di tornare al browser e riprovare.",
    "Your request has been queued on the server and will now be processed. Depending on the size of your event, this might take up to a few minutes.": "La tua richiesta \u00e8 stata inviata al server e verr\u00e0 ora elaborata. A seconda della dimensione del tuo evento questo passaggio pu\u00f2 durare fino ad alcuni minuti.",
    "custom time": "Orario personalizzato",
    "is after": "\u00e8 dopo",
    "is before": "\u00e8 prima",
    "is one of": "\u00e8 uno di",
    "widget\u0004Back": "Indietro",
    "widget\u0004Buy": "Compra",
    "widget\u0004Choose a different date": "Scegli una data diversa",
    "widget\u0004Choose a different event": "Scegli un altro evento",
    "widget\u0004Close": "Chiudi",
    "widget\u0004Close ticket shop": "Chiudi la biglietteria",
    "widget\u0004Continue": "Continua",
    "widget\u0004FREE": "GRATIS",
    "widget\u0004Next month": "Mese successivo",
    "widget\u0004Next week": "Settimana successiva",
    "widget\u0004Only available with a voucher": "Disponibile solo con voucher",
    "widget\u0004Open seat selection": "Apri la selezione dei posti",
    "widget\u0004Previous month": "Mese precedente",
    "widget\u0004Previous week": "Settimana precedente",
    "widget\u0004Redeem": "Riscatta",
    "widget\u0004Redeem a voucher": "Riscatta un voucher",
    "widget\u0004Register": "Registrati",
    "widget\u0004Reserved": "Riservato",
    "widget\u0004Resume checkout": "Ricarica checkout",
    "widget\u0004See variations": "Mostra varianti",
    "widget\u0004Sold out": "Tutto esaurito",
    "widget\u0004The cart could not be created. Please try again later": "Il carrello non pu\u00f2 essere creato. Prova di nuovo dopo",
    "widget\u0004The ticket shop could not be loaded.": "Il negozio non pu\u00f2 essere caricato.",
    "widget\u0004Voucher code": "Codice voucher",
    "widget\u0004Waiting list": "Lista d'attesa",
    "widget\u0004You currently have an active cart for this event. If you select more products, they will be added to your existing cart.": "Al momento hai un carello attivo per questo evento. Se scegli altri prodotti verranno aggiunti al carrello.",
    "widget\u0004currently available: %s": "attualmente disponibile: %s",
    "widget\u0004from %(currency)s %(price)s": "da %(currency)s %(price)s",
    "widget\u0004incl. %(rate)s% %(taxname)s": "%(rate)s% %(taxname)s incluso",
    "widget\u0004incl. taxes": "tasse incluse",
    "widget\u0004minimum amount to order: %s": "quantit\u00e0 minima ordine: %s",
    "widget\u0004plus %(rate)s% %(taxname)s": "pi\u00f9 %(rate)s% %(taxname)s",
    "widget\u0004plus taxes": "pi\u00f9 tasse"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "l d F Y H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%Y %H:%M:%S.%f",
      "%d/%m/%Y %H:%M",
      "%d/%m/%Y",
      "%d/%m/%y %H:%M:%S",
      "%d/%m/%y %H:%M:%S.%f",
      "%d/%m/%y %H:%M",
      "%d/%m/%y",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d",
      "%d-%m-%Y %H:%M:%S",
      "%d-%m-%Y %H:%M:%S.%f",
      "%d-%m-%Y %H:%M",
      "%d-%m-%Y",
      "%d-%m-%y %H:%M:%S",
      "%d-%m-%y %H:%M:%S.%f",
      "%d-%m-%y %H:%M",
      "%d-%m-%y"
    ],
    "DATE_FORMAT": "d F Y",
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y",
      "%Y/%m/%d",
      "%d-%m-%Y",
      "%Y-%m-%d",
      "%d-%m-%y",
      "%d/%m/%y"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d/m/Y H:i",
    "SHORT_DATE_FORMAT": "d/m/Y",
    "THOUSAND_SEPARATOR": ".",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

