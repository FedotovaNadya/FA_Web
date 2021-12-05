function deepEqual(a,b) {
    if ((a==null) && b==null) return true
    if ((typeof(a) == 'object') && (typeof(b) == 'object')) {
        for (key in a){
            keyres=false
            for (keyb in b){
                if (deepEqual(key,keyb)){
                    keyres=true
                }
            }
            if (keyres == false) return false
        }
        for (key in b){
            keyres=false
            for (keya in a){
                if (deepEqual(key,keya)){
                    keyres=true
                }
            }
            if (keyres == false) return false
        }
        return true
    } else {
        if (a===b) return true
        else return false
    }
}
a=null
b=null

let user = {     // объект
    name: "John",  // под ключом "name" хранится значение "John"
    age: 30        // под ключом "age" хранится значение 30
  };
  let ad = {     // объект
    name: "John",  // под ключом "name" хранится значение "John"
    age: 30        // под ключом "age" хранится значение 30
  };
console.log(deepEqual(user, ad))
