# Music player visual mod
**This mod is only for Jellyfin servers!!!**

![Alt text](../images/Screenshot_of_mod.png "Mod Player for Jellyfin")


## How to apply the mod
- You need to add the content of file player_background_blur.js on your index.html
  - index file on Windows:
  ```
  C:\Program Files\Jellyfin\Server\jellyfin-web\index.html
  ```
  - index file on Linux:
  ```
  /usr/share/jellyfin/web/index.html
  ```
  - index file on Docker:
  ```
  /jellyfin/jellyfin-web/index.html
  ```

- Now search </body></html> and before paste the content of **player_background_blur.js**

- Refresh your browser and the mod is applied!

# Acknowledgments
- https://github.com/BobHasNoSoul/jellyfin-mods/tree/main
