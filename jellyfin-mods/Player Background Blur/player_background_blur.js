function loadBlur() {
        const imgElement2 = document.getElementsByClassName('nowPlayingImage')[0].attributes[1].nodeValue;
        const imgElement3 = imgElement2.replace('background-image: ', '');
        const imgElement = imgElement3.replace(';', '');


        if (imgElement === 'display: none') {
                console.log("Album cover is null");
        } else {
                console.log(imgElement);
                var styles = `
                    .backgroundContainer {
                      background: --var(wallpaper) center top no-repeat #033361;
                      -webkit-background-size: cover;
                      background-size: cover;
                      background-position: center !important;
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
        }

    // Call function when page is loaded
    window.onload = loadBlur;

    // Lisen change on the DOM  to update background with album image
    const observer = new MutationObserver(loadBlur);
    observer.observe(document.body, { childList: true, subtree: true });
