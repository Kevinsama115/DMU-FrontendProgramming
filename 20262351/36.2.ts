type IsActive = true | false;

function toggle(active: IsActive) {
    if (active) {
        console.log("불켜짐");
    } else {
        console.log("불꺼짐");
    }
}

toggle(true);
toggle(false);