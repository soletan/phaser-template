# How To Start

1. Archiv in Projektordner entpacken ... was im Archiv ist, ist dann der gesamte Inhalt deines Projekts.
2. Terminal im Webstorm öffnen
3. Eingabe: npm install
4. Eingabe: bower install
5. Im Webstorm:
   * Shift+Alt+F11 drücken (wenn das nicht geht, dann weil der Fokus auf dem Terminal noch ist, einmal in den Editor klicken, dann erneut versuchen)
   * _oder:_ Rechts-Klick auf die Datei Gruntfile.js im Projekt-Verzeichnis und "Show Grunt Tasks" wählen
6. Im Popup (Variante 1) oder im neuen Teilfenster dann den Eintrag "default" doppelt klicken.

Damit
* läuft ein Webserver,
* dein Browser wird geöffnet und lädt die Datei index.html, welche
  * einen leeren DIV definiert mit der ID "gameview"
  * phaser.js lädt und
  * game.js lädt.

In game.js kannst du dann den Phaser-Code platzieren.
Im Ordner assets kannst du Bilder etc. platzieren, die geladen werden können.
Im Ordner bower_components/phaser-examples sollten Beispiele vorhanden sein.