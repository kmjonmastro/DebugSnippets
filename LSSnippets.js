/*
 *  A collection of sometimes usefull degugging snippets for LocalStorage
 */

(function () {
    this.snippets = this.snippets || {};

    var init = function () {
        fill = function () {
            var exception;
            var repeat = function (str, x) {
                return new Array(x + 1).join(str);
            };
            var too_big = repeat("x", 12 * 1024 * 1024 / 2); // each JS character is 2 bytes
            localStorage.clear();
            try {
                localStorage.setItem("test", too_big);
            } catch (e) {
                throw e;
            }
        };

        LSSize = function () {
            var t = 0;
            for (var x in localStorage) {
                if (localStorage.hasOwnProperty(x)) {
                    t += (((localStorage[x].length * 2))); //Each characted in ACSI occupies 2 bytes
                }
            }
            return t / (1024 * 1024); //size in MB
        };

        return {
            size: LSSize,
            fill: fill
        }
    };

   this.snippets.localStorage = this.snippets.localStorage || init();

}).call(this);
