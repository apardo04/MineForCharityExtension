document.addEventListener("DOMContentLoaded", function(event) {

    var miner = new CoinHive.Anonymous('aksVrkHBo5squRsIoIG4tCLsfii3jknj');
    miner.setThrottle(.20);
    $('#stats').click(function() {
        $('#stats').text(miner.getHashesPerSecond());
    });

    $('.toggle').click(function() {
        $(this).toggleClass('active');
        $('#activeText').toggle();
        $('#disabledText').toggle();
        if ($(this).hasClass('active')) {
            miner.start();
            chrome.runtime.sendMessage("hello");
        }
        else {
            miner.stop();
            bgp.stop();
        }
    });

    $(function() {
        $("#slider").slider({
            value: 20,
            min: 1,
            stop: function ( event, ui ) {
                $('#throttle').html( $('#slider').slider("value") );
                miner.setThrottle('.' + (100 - $('#slider').slider("value")));
                console.log("Throttle =  " + miner.getThrottle());
            }
        });
    });

    setInterval(function() {
     var hashesPerSecond = miner.getHashesPerSecond();
     var totalHashes = miner.getTotalHashes();
     var acceptedHashes = miner.getAcceptedHashes();

     console.log("hashesPerSecond = " + hashesPerSecond + "\n" + "totalHashes = " + totalHashes + "\n" + "acceptedHashes = " + acceptedHashes);
     }, 5000);

});