# How Change Position Player (only music player)

Values:
- [Default] inline-end: player on right
- inline-start: player on left

## Jellyfin
Only copy this code and apply on Dashboard > general settings add on Custom CSS code:
```
@import url("https://cdn.jsdelivr.net/gh/djmanri3/emby-jellyfin-theme-startlight@master/Jellyfin.css");

:root{
  --position-player: <POSITION>;
}
```
