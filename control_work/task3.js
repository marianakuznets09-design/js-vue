const pin = 2026;
let pinUser;
for(let i = 1; i <= 3; i++) {
    while (pin !== pinUser) {
        pinUser = +prompt("який пін-код?");



        if (pin == pinUser) {
            alert(`PIN: ${pinUser} 
            Доступ дозволено`);
            break;
        } else if (pin !== pinUser){
            console.log(`PIN: ${pinUser}
            код неправильний залишилось ${3-(i++)} спроб`);
        }else{
            console.log(`PIN: ${pinUser}
            доступ заблоковано`);
        }

        // if (pin == pinUser) {
        //     alert(`PIN: ${pinUser}
        //     Доступ дозволено`);
        //     break;
        // } else {
        //     console.log(`PIN: ${pinUser}
        //     код неправильний залишилось ${3 - (i++)} спроб`);
        //     if (pin == pinUser) {
        //         alert(`PIN: ${pinUser}
        //     Доступ дозволено`);
        //         break;
        //     }
        //     else {
        //             if (pin !== pinUser && i >= 1) {
        //                 console.log(`PIN: ${pinUser}
        //     код неправильний залишилось ${3 - (i++)} спроб`);
        //             } else {
        //                 console.log(`PIN: ${pinUser}
        //     доступ заблоковано`);
        //             }
        //         }
        //
        //
        // }
    }
}
