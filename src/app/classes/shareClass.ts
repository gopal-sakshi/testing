export class shareClass {

    constructor() {}

    init() {
        window.onload = function() {
            const shareData = {
                title: 'MDN',
                text: 'Learn web development on MDN!',
                url: 'https://developer.mozilla.org'
            }
  
        const btn = document.querySelector('#btn');
        const resultPara = document.querySelector('.result');
  
        if (resultPara) {
            console.log("rP is okay")
        } else 
            console.log("rP is null");
  
        if(btn) {
            btn.addEventListener('click', async () => {
                console.log("clicked");
                try {
                    if(navigator.share) console.log("navigator.share works")
                    else console.log("navigator.share doesnt work");
                    await navigator.share(shareData)
                    resultPara.textContent = 'MDN shared successfully'
                } catch(err) {
                    resultPara.textContent = 'Error: ' + err
                }
            });
        } else
            console.log("btn is null");
        }
    }
}