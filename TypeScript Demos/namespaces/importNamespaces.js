/// <reference path="namespaces.ts" />
var Primary;
(function (Primary) {
    var SecondNamespace = /** @class */ (function () {
        function SecondNamespace() {
        }
        SecondNamespace.prototype.isTrue = function (x) {
            if (x === "true") {
                return true;
            }
            return false;
        };
        return SecondNamespace;
    }());
    Primary.SecondNamespace = SecondNamespace;
})(Primary || (Primary = {}));
var sn = new Primary.SecondNamespace();
console.log(sn.isTrue("true"));
console.log(sn.isTrue("nope"));
