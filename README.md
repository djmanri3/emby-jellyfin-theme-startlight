# Theme **STARLIGHT**
![Alt text](images/Screenshot_of_mod.png "Home Screen")

This is my theme of Jellyfin and Emby servers, this theme will be tried on Jellyfin 10.10.7.

## CHANGES
- [21/02/2025] Add mod for Jellyfin for music player
- [22/02/2025] Add more blur for white covers and fix brightness and more top space
- [22/02/2025] Add variable position-player values:
  - Inline-end: Player on the right
  - Inline-start: Player on the left
 - [22/02/2025] Add new UI for music player in a phone app
 - [26/02/2025] Fix position of the playlist on phone app, add blur on playlist and buttons of playlist background
 - [27/02/2025] Add style for tablet app, change playlist position on phone app, fix some paddins, fix color for box-check
 - [04/03/2025] More define blur, fix padding playlist on player, fix box when click on time line song, add blur on time song hover, add enfasis color of álbum on player and add blur on volumen control overlay
 - [06/03/2025]
    - Add more easy tutorial to change primary color
    - Add how change wallpaper
    - Add how change position of music player (left or right)
    - Add more responsive UI resize
    - Add music player on landscape for phone app
    - Fix timeline color of mini player and video player
    - Fix size of album image when not image album cover
    - Fix album blur background when not image of album cover
    - Fix tablet format when change position of player
    - Fix tablet format bottons playlist (save playlist and more options)
    - Fix mobile format bottons playlist (save playlist and more options)
- [10/03/2025] Fixed transition to landscape UI to portrait UI, more adjust resize UI and improved landscape mode interface on mobile phones
- [06/04/2025] Fixed background album blur on 10.10.7
- [24/04/2025] Fix when pause song restore original background

![Alt text](images/resize-demo.gif)

## How Install
>[!IMPORTANT]
>If you want background album cover with blur, you need apply [this mod](https://github.com/djmanri3/emby-jellyfin-theme-startlight/tree/main/jellyfin-mods/Player%20Background%20Blur)

Access to **Dashboard**, open **general** settings and add on **Custom CSS code**:
- Jellyfin
  ```
  @import url("https://cdn.jsdelivr.net/gh/djmanri3/emby-jellyfin-theme-startlight@master/Jellyfin.css");
  ```
- Emby
  ```
  @import url("https://cdn.jsdelivr.net/gh/djmanri3/emby-jellyfin-theme-startlight@master/Emby.css");
  ```

More info if you want to install Javascript mod on folder **jellyfin-mods**

## Jellyfin STARLIGHT Mods
- [Player Background With Album Cover](https://github.com/djmanri3/emby-jellyfin-theme-startlight/tree/main/jellyfin-mods/Player%20Background%20Blur)
- [Change Primary Color](https://github.com/djmanri3/emby-jellyfin-theme-startlight/tree/main/jellyfin-mods/Change%20Primary%20Color)
- [Change Position Of Music Player](https://github.com/djmanri3/emby-jellyfin-theme-startlight/tree/main/jellyfin-mods/Change%20Position%20Of%20Player)
- [Change Wallpaper](https://github.com/djmanri3/emby-jellyfin-theme-startlight/tree/main/jellyfin-mods/Change%20Wallpaper)


## Screenshots

### Home Screen
#### Desktop
![Alt text](images/1.png "Home Screen Desktop")
#### Phone App
<img src="images/1_phone.jpg" alt="Home Screen Phone" width="200" height="400">

### Album Screen
#### Desktop
![Alt text](images/2.png "Album Screen")
#### Phone App
<img src="images/2_phone.jpg" alt="Home Screen Phone" width="200" height="400">

### Player Screen
#### Jellyfin
#### Desktop
###### 1. Default
![Alt text](images/3.png "Player Screen Jellyfin Default")

###### 2. With mod
![Alt text](images/Screenshot_of_mod.png "Player Screen Jellyfin Mod")
#### Phone App
##### portrait
<img src="images/3_phone.jpg" alt="Home Screen Phone" width="200" height="400"> <img src="images/4_phone.jpg" alt="Home Screen Phone" width="200" height="400">

##### Landscape
<img src="images/5_phone.jpg" alt="Home Screen Phone">

#### Tablet App
<img src="images/1_tablet.jpg" alt="Home Screen Phone">

#### Emby
![Alt text](images/4.png "Player Screen Jellyfin")
