/*jshint esversion: 6 */

function getCookie(cname, defaultValue="") {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return defaultValue;
}

function setCookie(cname, cvalue, exdays=365) {
    if (cname != "acceptCookies" && getCookie("acceptCookies") != 1) {
        return;
    }
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function clearCookies() {
    document.cookie = "acceptCookies=0;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
}

document.getElementById("cookie-consent").style.display = getCookie("acceptCookies") == "" ? "block" : "none";
document.getElementById("cookie-consent-accept").addEventListener("click", function() {
    setCookie("acceptCookies", 1);
    document.getElementById("cookie-consent").style.display = "none";
});
document.getElementById("cookie-consent-reject").addEventListener("click", function() {
    setCookie("acceptCookies", -1);
    document.getElementById("cookie-consent").style.display = "none";
});
