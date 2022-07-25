function showmoreheadertop() {
    let x = document.getElementById("d-more-to-show");
    if (x.style.top === "40px") {
        x.style.top = "-90px";
    } else {
        x.style.top = "40px";
    }
}

function showmoreheaderbottom() {
    let y = document.getElementById("slider-btns-to-show");
    let z = document.getElementById("i-header-bottom");

    if (y.style.left === "-1000px") {
        y.style.left = "40px";
        z.className = "fa fa-angle-left";
    } else {
        y.style.left = "-1000px";
        z.className = "fa fa-filter";
    }
}

function flashgreen() {
    let x = document.getElementById("p-flash");
    let y = document.getElementById("i-flash");
    if (x.style.color === "green") {
        x.style.color = "white";
    } else {
        x.style.color = "green";
    }

    if (y.style.color === "green") {
        y.style.color = "white";
    } else {
        y.style.color = "green";
    }
}

function showcounrty() {
    let x = document.getElementById("country");
    let y = document.getElementById("i-country");
    if (x.style.display === "inline") {
        x.style.display = "none";
        y.className = "fa fa-angle-down";
    } else {
        x.style.display = "inline";
        y.className = "fa fa-angle-up";
    }
}

function showmoresliderdive1() {
    let x = document.getElementById("more-Type");
    let y = document.getElementById("i1-slider")
    if (x.style.display === "flex") {
        x.style.display = "none";
        y.className = "fa fa-angle-down";
    } else {
        x.style.display = "flex";
        y.className = "fa fa-angle-up";
    }
}

function showmoresliderdive2() {
    let x = document.getElementById("performance");
    let y = document.getElementById("i2-slider")
    if (x.style.display === "flex") {
        x.style.display = "none";
        y.className = "fa fa-angle-down";
    } else {
        x.style.display = "flex";
        y.className = "fa fa-angle-up";
    }
}

function showmoresliderdive3() {
    let x = document.getElementById("gainers");
    let y = document.getElementById("i3-slider")
    if (x.style.display === "flex") {
        x.style.display = "none";
        y.className = "	fa fa-angle-down";
    } else {
        x.style.display = "flex";
        y.className = "	fa fa-angle-up";
    }
}

function showmoresliderdive4() {
    let x = document.getElementById("block-size");
    let y = document.getElementById("i4-slider")
    if (x.style.display === "flex") {
        x.style.display = "none";
        y.className = "	fa fa-angle-down";
    } else {
        x.style.display = "flex";
        y.className = "	fa fa-angle-up";
    }
}

function showmoresliderdive5() {
    let x = document.getElementById("m.cap-range");
    let y = document.getElementById("i5-slider")
    if (x.style.display === "flex") {
        x.style.display = "none";
        y.className = "	fa fa-angle-down";
    } else {
        x.style.display = "flex";
        y.className = "	fa fa-angle-up";
    }
}

function showmoresliderdive6() {
    let x = document.getElementById("hide");
    let y = document.getElementById("i6-slider")
    if (x.style.display === "flex") {
        x.style.display = "none";
        y.className = "	fa fa-angle-down";
    } else {
        x.style.display = "flex";
        y.className = "	fa fa-angle-up";
    }
}

function shownavitems() {
    let x = document.getElementById("navbar");
    let y = document.getElementsByTagName("main");
    if (x.style.left === "0px") {
        x.style.left = "-200px";
    } else {
        x.style.left = "0px";
    }

}

function moreitemabout() {
    let x = document.getElementById("items-about");
    let y = document.getElementById("i-about");
    if (x.style.display === "flex") {
        x.style.display = "none";
        y.className = "fa fa-angle-down";
    } else {
        x.style.display = "flex";
        y.className = "fa fa-angle-up";
    }
}

function showiteminput() {
    let x = document.getElementById("items-input");
    x.style.display = "flex";
    x.style.right = "130px";
    x.style.width = "296px";
}

function showiteminput2() {
    let x = document.getElementById("items-input");
    let z = document.getElementById("i-close");
    let y = document.getElementById("d-1-sec-1300px");
    let r = document.getElementById("input-search");
    if (x.style.display === "flex") {
        x.style.display = "none";
        z.style.display = "none";
        y.style.display = "flex";
        r.style.display = "none";
    } else {
        x.style.display = "flex";
        x.style.right = "0px";
        x.style.top = "45px";
        x.style.width = "100vw";
        z.style.display = "flex";
        y.style.display = "none";
        r.style.display = "flex";
    }
}

function iwhite() {
    let x = document.getElementById("i-star");
    if (x.style.color === "gray") {
        x.style.color = "rgba(160, 160, 160, 0.2)";
    } else {
        x.style.color = "gray";
    }
}

window.onclick = function (e) {

    if (!e.target.matches('.form-more-to-show')) {
        let myDropdown = document.getElementById("items-input");
        let z = document.getElementById("i-close");
        let y = document.getElementById("d-1-sec-1300px");
        let r = document.getElementById("input-search");
        if (myDropdown.style.display === "flex") {
            myDropdown.style.display = "none";
            z.style.display = "none";
            y.style.display = "flex";
            r.style.display = "none";
        }
    }

    if (!e.target.matches('.btnmoretop')) {
        let myDropdown = document.getElementById("d-more-to-show");
        if (myDropdown.style.top === "40px") {
            myDropdown.style.top = "-90px";
        }
    }

    if (!e.target.matches('.btncountry') && !e.target.matches('#i-country')) {
        let myDropdown = document.getElementById("country");
        let y = document.getElementById("i-country");
        if (myDropdown.style.display === "inline") {
            myDropdown.style.display = "none";
            y.className = "fa fa-angle-down";
        }
    }

    if (!e.target.matches('.btnslider1') && !e.target.matches('#i1-slider')) {
        let myDropdown = document.getElementById("more-Type");
        let y = document.getElementById("i1-slider");
        if (myDropdown.style.display === "flex") {
            myDropdown.style.display = "none";
            y.className = "fa fa-angle-down";
        }
    }

    if (!e.target.matches('.btnslider2') && !e.target.matches('#i2-slider')) {
        let myDropdown = document.getElementById("performance");
        let y = document.getElementById("i2-slider");
        if (myDropdown.style.display === "flex") {
            myDropdown.style.display = "none";
            y.className = "fa fa-angle-down";
        }
    }

    if (!e.target.matches('.btnslider3') && !e.target.matches('#i3-slider')) {
        let myDropdown = document.getElementById("gainers");
        let y = document.getElementById("i3-slider");
        if (myDropdown.style.display === "flex") {
            myDropdown.style.display = "none";
            y.className = "fa fa-angle-down";
        }
    }

    if (!e.target.matches('.btnslider4') && !e.target.matches('#i4-slider')) {
        let myDropdown = document.getElementById("block-size");
        let y = document.getElementById("i4-slider");
        if (myDropdown.style.display === "flex") {
            myDropdown.style.display = "none";
            y.className = "fa fa-angle-down";
        }
    }

    if (!e.target.matches('.btnslider5') && !e.target.matches('#i5-slider')) {
        let myDropdown = document.getElementById("m.cap-range");
        let y = document.getElementById("i3-slider");
        if (myDropdown.style.display === "flex") {
            myDropdown.style.display = "none";
            y.className = "fa fa-angle-down";
        }
    }

    if (!e.target.matches('.btnslider6') && !e.target.matches('#i6-slider')) {
        let myDropdown = document.getElementById("hide");
        let y = document.getElementById("i4-slider");
        if (myDropdown.style.display === "flex") {
            myDropdown.style.display = "none";
            y.className = "fa fa-angle-down";
        }
    }

    if (!e.target.matches('.btnmoreitemsnav') && !e.target.matches('.itemnav') && !e.target.matches('#i-about')) {
        let myDropdown = document.getElementById("navbar");

        if (myDropdown.style.left === "0px") {
            myDropdown.style.left = "-200px";

        }
    }


}
