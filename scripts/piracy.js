"use strict";

let interval;
let progress = 0;
let download = document.getElementById("download");
let progressBar = document.getElementById("progress-bar-progress");
let cancelledText = document.getElementById("download-cancelled");
let downloadDone = document.getElementById("download-done");
let showOnCancel = document.getElementById("show-only");

download.addEventListener("click", function (event) {
    if (!download.classList.contains("evil")) {
        download.innerHTML = "CANCEL";
        download.classList.add("evil");
        
        interval = setInterval(function() {
            progress++;
            progressBar.style.width = progress + "%";
            
            if (progress === 100) {
                clearInterval(interval);
                downloadDone.classList.remove("hidden");
            }
        }, 50);
    } else {
        if (progress < 100) {
            download.classList.remove("evil");
            download.classList.add("hidden");
            download.innerHTML = "DOWNLOAD";
            clearInterval(interval);
            
            progressBar.style.width = "0%";
            
            cancelledText.classList.remove("hidden");
            
            showOnCancel.classList.add("only-showing");
        }
    }
});