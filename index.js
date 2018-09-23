'use strict';

module.exports = function (seconds) {
    seconds = parseInt(seconds, 10);

    if (isNaN(seconds)) {
        throw new TypeError('Invalid value sent to convert-seconds');
    }
    var results = {};
    results.days = Math.floor(seconds / 60 / 60 / 24);
    results.hours = Math.floor((seconds / 60 / 60) % 24);
    results.minutes = Math.floor((seconds / 60) % 60);
    results.seconds = Math.floor(seconds % 60);

    return results;
};
