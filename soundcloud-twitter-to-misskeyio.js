let a = document.querySelector("a.sc-social-logo-twitter").href.replace(
    /twitter.com\/intent\/tweet?/, 'misskey.io/share?text=').replace(
        /\?url=/,'').replace(/&text=/,'%'+'0D'+'%'+'0A').replace(
            /&related=soundcloud/,'').replace(
                /\/\//g,'%'+'2F'+'%'+'2F').replace(
                    new RegExp('%' + '2F'+'%'+'2F'),'//').replace(new RegExp('%'+'3Fsi.+_sharing'),'');
console.log(a);
window.open(a);