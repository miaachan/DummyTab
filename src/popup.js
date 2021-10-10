const inputTitle = document.getElementById("input_title");

inputTitle.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        chrome.tabs.create({
            url: chrome.runtime.getURL(`index.html#${inputTitle.value}`),
        });
    }
});
