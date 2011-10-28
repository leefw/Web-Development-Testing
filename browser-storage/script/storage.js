$(document).ready(function() {
    initSessionStorage();
    
    initGlobalStorage();

    initLocalStorage();
});

function initSessionStorage() {
    var s = window.sessionStorage;
}

function initGlobalStorage() {
    var s = window.globalStorage;
}

function initLocalStorage() {
    var s = window.localStorage;
}

function writeToContainer(container, msg) {
    $(container).append(msg);
}
