# How Change Position Player (only music player)

Values:
- [Default] **inline-end**: player on right
- **inline-start**: player on left

## Jellyfin
Only copy this code and apply on Dashboard > general settings add on Custom CSS code:
```
@import url("https://cdn.jsdelivr.net/gh/djmanri3/emby-jellyfin-theme-startlight@master/Jellyfin.css");

:root{
  --position-player: <POSITION>;
}
```

## Left
```
@import url("https://cdn.jsdelivr.net/gh/djmanri3/emby-jellyfin-theme-startlight@master/Jellyfin.css");

:root{
  --position-player: inline-start;
}
```
![Alt text](./Left.png")

## Right
```
@import url("https://cdn.jsdelivr.net/gh/djmanri3/emby-jellyfin-theme-startlight@master/Jellyfin.css");

:root{
  --position-player: inline-end;
}
```
![Alt text](./Right.png")
