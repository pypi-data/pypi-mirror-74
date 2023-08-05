

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
      "(ein weiterer Termin)",
      "({num} weitere Termine)"
    ],
    "Add condition": "Bedingung hinzuf\u00fcgen",
    "All": "Alle",
    "All of the conditions below (AND)": "Alle der folgenden Bedingungen (UND)",
    "An error has occurred.": "Ein Fehler ist aufgetreten.",
    "An error of type {code} occurred.": "Ein Fehler vom Typ {code} ist aufgetreten.",
    "April": "April",
    "At least one of the conditions below (OR)": "Mindestens eine der folgenden Bedingungen (ODER)",
    "August": "August",
    "Barcode area": "QR-Code-Bereich",
    "Calculating default price\u2026": "Berechne Standardpreis\u2026",
    "Cart expired": "Warenkorb abgelaufen",
    "Check-in QR": "Check-in-QR-Code",
    "Click to close": "Klicken zum Schlie\u00dfen",
    "Close message": "Schlie\u00dfen",
    "Comment:": "Kommentar:",
    "Confirming your payment \u2026": "Zahlung wird best\u00e4tigt \u2026",
    "Contacting Stripe \u2026": "Kontaktiere Stripe \u2026",
    "Contacting your bank \u2026": "Kontaktiere deine Bank \u2026",
    "Copied!": "Kopiert!",
    "Count": "Anzahl",
    "Current date and time": "Aktueller Zeitpunkt",
    "December": "Dezember",
    "Do you really want to leave the editor without saving your changes?": "M\u00f6chtest du den Editor wirklich schlie\u00dfen ohne Ihre \u00c4nderungen zu speichern?",
    "Error while uploading your PDF file, please try again.": "Es gab ein Problem beim Hochladen der PDF-Datei, bitte erneut versuchen.",
    "Event admission": "Einlass",
    "Event end": "Veranstaltungsende",
    "Event start": "Veranstaltungsbeginn",
    "February": "Februar",
    "Fr": "Fr",
    "Generating messages \u2026": "Generiere Nachrichten\u2026",
    "Group of objects": "Gruppe von Objekten",
    "January": "Januar",
    "July": "Juli",
    "June": "Juni",
    "Lead Scan QR": "Lead-Scanning-QR-Code",
    "March": "M\u00e4rz",
    "Marked as paid": "Als bezahlt markiert",
    "May": "Mai",
    "Mo": "Mo",
    "No": "Nein",
    "None": "Keine",
    "November": "November",
    "Number of days with a previous entry": "Anzahl an Tagen mit vorherigem Eintritt",
    "Number of previous entries": "Anzahl bisheriger Eintritte",
    "Number of previous entries since midnight": "Anzahl bisheriger Eintritte seit Mitternacht",
    "Object": "Objekt",
    "October": "Oktober",
    "Others": "Sonstige",
    "Paid orders": "Bezahlte Bestellungen",
    "Placed orders": "Get\u00e4tigte Bestellungen",
    "Please enter a quantity for one of the ticket types.": "Bitte trage eine Menge f\u00fcr eines der Produkte ein.",
    "Please enter the amount the organizer can keep.": "Bitte gib den Betrag ein, den der Veranstalter einbehalten darf.",
    "Powered by pretix": "Event-Ticketshop von pretix",
    "Press Ctrl-C to copy!": "Dr\u00fccke Strg+C zum kopieren!",
    "Product": "Produkt",
    "Product variation": "Variante",
    "Sa": "Sa",
    "Saving failed.": "Speichern fehlgeschlagen.",
    "September": "September",
    "Su": "So",
    "Text object": "Text-Objekt",
    "Th": "Do",
    "The PDF background file could not be loaded for the following reason:": "Die Hintergrund-PDF-Datei konnte nicht geladen werden:",
    "The items in your cart are no longer reserved for you.": "Die Produkte in deinem Warenkorb sind nicht mehr f\u00fcr dich reserviert.",
    "The items in your cart are reserved for you for one minute.": [
      "Die Produkte in deinem Warenkorb sind noch eine Minute f\u00fcr dich reserviert.",
      "Die Produkte in deinem Warenkorb sind noch {num} Minuten f\u00fcr dich reserviert."
    ],
    "The organizer keeps %(currency)s %(amount)s": "Der Veranstalter beh\u00e4lt %(currency)s %(amount)s ein",
    "The request took too long. Please try again.": "Diese Anfrage hat zu lange gedauert. Bitte erneut versuchen.",
    "Ticket design": "Ticket-Design",
    "Time zone:": "Zeitzone:",
    "Tolerance (minutes)": "Toleranz (Minuten)",
    "Total": "Gesamt",
    "Total revenue": "Gesamtumsatz",
    "Tu": "Di",
    "Unknown error.": "Unbekannter Fehler.",
    "Use a different name internally": "Intern einen anderen Namen verwenden",
    "We": "Mi",
    "We are currently sending your request to the server. If this takes longer than one minute, please check your internet connection and then reload this page and try again.": "Deine Anfrage wird an den Server gesendet. Wenn dies l\u00e4nger als eine Minute dauert, pr\u00fcfe bitte deine Internetverbindung. Danach kannst du diese Seite neu laden und es erneut versuchen.",
    "We are processing your request \u2026": "Wir verarbeiten deine Anfrage \u2026",
    "We currently cannot reach the server, but we keep trying. Last error code: {code}": "Wir k\u00f6nnen den Server aktuell nicht erreichen, versuchen es aber weiter. Letzter Fehlercode: {code}",
    "We currently cannot reach the server. Please try again. Error code: {code}": "Wir k\u00f6nnen den Server aktuell nicht erreichen. Bitte versuche es noch einmal. Fehlercode: {code}",
    "Yes": "Ja",
    "You get %(currency)s %(amount)s back": "Du erh\u00e4ltst %(currency)s %(amount)s zur\u00fcck",
    "You have unsaved changes!": "Du hast ungespeicherte \u00c4nderungen!",
    "Your color has bad contrast for text on white background, please choose a darker shade.": "Diese Farbe hat einen schlechten Kontrast f\u00fcr Text auf einem wei\u00dfen Hintergrund. Bitte w\u00e4hle eine dunklere Farbe.",
    "Your color has decent contrast and is probably good-enough to read!": "Diese Farbe hat einen ausreichenden Kontrast und wahrscheinlich gut zu lesen!",
    "Your color has great contrast and is very easy to read!": "Diese Farbe hat einen sehr guten Kontrast und ist sehr gut zu lesen!",
    "Your local time:": "Deine lokale Zeit:",
    "Your request arrived on the server but we still wait for it to be processed. If this takes longer than two minutes, please contact us or go back in your browser and try again.": "Deine Anfrage ist auf dem Server angekommen, aber wurde dort noch nicht verarbeitet. Wenn dies l\u00e4nger als zwei Minuten dauert, kontaktiere uns bitte oder gehe in deinem Browser einen Schritt zur\u00fcck und versuche es erneut.",
    "Your request has been queued on the server and will now be processed. Depending on the size of your event, this might take up to a few minutes.": "Deine Anfrage ist auf dem Server angekommen und wird nun verarbeitet. Je nach Gr\u00f6\u00dfe der Veranstaltung kann dies einige Minuten dauern.",
    "custom time": "Feste Uhrzeit",
    "is after": "ist nach",
    "is before": "ist vor",
    "is one of": "ist eines von",
    "widget\u0004Back": "Zur\u00fcck",
    "widget\u0004Buy": "In den Warenkorb",
    "widget\u0004Choose a different date": "Anderen Termin ausw\u00e4hlen",
    "widget\u0004Choose a different event": "Andere Veranstaltung ausw\u00e4hlen",
    "widget\u0004Close": "Schlie\u00dfen",
    "widget\u0004Close ticket shop": "Ticket-Shop schlie\u00dfen",
    "widget\u0004Continue": "Fortfahren",
    "widget\u0004FREE": "GRATIS",
    "widget\u0004Next month": "N\u00e4chster Monat",
    "widget\u0004Next week": "N\u00e4chste Woche",
    "widget\u0004Only available with a voucher": "Nur mit Gutschein verf\u00fcgbar",
    "widget\u0004Open seat selection": "Saalplan \u00f6ffnen",
    "widget\u0004Previous month": "Vorheriger Monat",
    "widget\u0004Previous week": "Vorherige Woche",
    "widget\u0004Redeem": "Einl\u00f6sen",
    "widget\u0004Redeem a voucher": "Gutschein einl\u00f6sen",
    "widget\u0004Register": "Anmelden",
    "widget\u0004Reserved": "Reserviert",
    "widget\u0004Resume checkout": "Kauf fortsetzen",
    "widget\u0004See variations": "Varianten zeigen",
    "widget\u0004Sold out": "Ausverkauft",
    "widget\u0004The cart could not be created. Please try again later": "Der Warenkorb konnte nicht erstellt werden. Bitte erneut versuchen.",
    "widget\u0004The ticket shop could not be loaded.": "Der Ticket-Shop konnte nicht geladen werden.",
    "widget\u0004Voucher code": "Gutscheincode",
    "widget\u0004Waiting list": "Warteliste",
    "widget\u0004You currently have an active cart for this event. If you select more products, they will be added to your existing cart.": "Du hast einen aktiven Warenkorb f\u00fcr diese Veranstaltung. Wenn du mehr Produkte ausw\u00e4hlst, werden diese zu deinem Warenkorb hinzugef\u00fcgt.",
    "widget\u0004currently available: %s": "aktuell verf\u00fcgbar: %s",
    "widget\u0004from %(currency)s %(price)s": "ab %(currency)s %(price)s",
    "widget\u0004incl. %(rate)s% %(taxname)s": "inkl. %(rate)s% %(taxname)s",
    "widget\u0004incl. taxes": "inkl. Steuern",
    "widget\u0004minimum amount to order: %s": "minimale Bestellmenge: %s",
    "widget\u0004plus %(rate)s% %(taxname)s": "zzgl. %(rate)s% %(taxname)s",
    "widget\u0004plus taxes": "zzgl. Steuern"
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
    "DATETIME_FORMAT": "j. F Y H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
      "%d.%m.%Y",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j. F Y",
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y",
      "%d.%m.%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j. F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d.m.Y H:i",
    "SHORT_DATE_FORMAT": "d.m.Y",
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

