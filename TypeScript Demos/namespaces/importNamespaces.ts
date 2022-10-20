/// <reference path="namespaces.ts" />
namespace Primary {
    export class SecondNamespace implements PrimaryInterface {
        isTrue(x: string) {
            if(x === "true") {
                return true;
            }
            return false;
        }
    }
}

var sn = new Primary.SecondNamespace();
console.log(sn.isTrue("true"));
console.log(sn.isTrue("nope"));
