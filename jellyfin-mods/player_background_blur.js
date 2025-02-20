    function loadBlur() {
        const imgElement2 = document.getElementsByClassName('nowPlayingImage')[0].attributes[1].nodeValue;
        const imgElement3 = imgElement2.replace('background-image: ', '');
        const imgElement = imgElement3.replace(';', '');
        //const start = imgElement.indexOf('url(') + 4; // Encuentra el índice donde comienza la URL
        //const end = imgElement.indexOf(')', start); // Encuentra el índice donde termina la URL
        //const imageUrl = imgElement.substring(start, end).replace(/['"]/g, ''); // Extrae y limpia las comillas

        var styles = `
            .backgroundContainer {
              background: --var(wallpaper) center top no-repeat #033361;
              -webkit-background-size: cover;
              background-size: cover;
              background-position: center;
              backdrop-filter: saturate(0.5) blur(50px) brightness(-1) !important;
              -webkit-filter: blur(50px) !important;
          }

          :root{
            --wallpaper: ` + imgElement + ` !important;}
        `
        var styleSheet = document.createElement("style")
        styleSheet.innerText = styles
        document.head.appendChild(styleSheet)

        return imgElement;
    }

    // load function loadBlur
    window.onload = loadBlur;

    // Listen for changes in the DOM to update the background if the song changes.
    const observer = new MutationObserver(loadBlur);i
    observer.observe(document.body, { childList: true, subtree: true });
