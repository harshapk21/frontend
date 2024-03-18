//Object.seal();

/**
 * As the name says , it seals(read: no further additions or deletions to obj) but can edit properties
 */
let obj = {id:1}
Object.seal(obj);
//Most of the imp object methods seems static in nature
Object.isSealed(obj);

/**
 * Issue:
 * But we cannot restrict the modification of nested objects with
    Object.seal().

    Solution:
    Deep seal the object by recursion. Remember you have to seal property with value as object
 */
    function deepSeal(object) {
        // Retrieve the property names defined on object
        let propNames = Object.getOwnPropertyNames(object);
        // Seal properties before Sealing self
        for (let name of propNames) {
        let value = object[name];
        object[name] = value && typeof value === "object" ?
        deepSeal(value) : value;
        }
        return Object.seal(object);
        }

        /**
         * 
         *  Object.freeze() = Object.seal() + cannot edit properties also
         * 
         *  it does not deepfreeze , so we will have to deepFreeze like deepSeal()
         */