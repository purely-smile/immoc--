//通过Object.defineProperty方法来拷贝属性。

var extend = function (to, from) {
    for (var property in from) {
        var descriptor = Object.getOwnPropertyDescriptor(from, property);
        if (descriptor && (!descriptor.writable
            || !descriptor.configurable
            || !descriptor.enumerable
            || descriptor.get
            || descriptor.set)) {
            Object.defineProperty(to, property, descriptor);
        } else {
            to[property] = from[property];
        }
    }
    return to;
};