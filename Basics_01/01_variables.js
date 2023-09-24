const accountId=12345
let accountEmail="akv280501@gmail.com"
var accountPassword="12345"
accountCity="Mathura"
let accountState; /** It gives undefined */


// accountId=4  // not allowed



accountEmail="new@mail.com"
accountPassword="21212121"
accountCity="Noida"

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/