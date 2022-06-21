window.onload = () => {
    const date = document.getElementById("date");

    date.addEventListener("submit", function (event) {
        event.preventDefault();

        const date1 = new FormData(this);

        fetch("car_rent.php", {
            method: "post",
            body: date1
        })
        .then(response => { return response.text() })
        .then(text => { document.getElementById("content").innerHTML = text })
    })

    const vendor = document.getElementById("vendor");

    vendor.addEventListener("submit", function (event) {
        event.preventDefault();

        const vendor1 = new FormData(this);
        fetch("car_rent.php", {
            method: "post",
            body: vendor1
        })
        .then(response => { return response.json() })
        .then(json => { document.getElementById("content").innerHTML = json })
    })

    const freeCar = document.getElementById("free_car");

    freeCar.addEventListener("submit", function (event) {
        event.preventDefault();

        const freeCar1 = new FormData(this);
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "car_rent.php");
        xhr.responseType = 'document';
        xhr.send(freeCar1);

        xhr.onload = () => {
            document.getElementById("content").innerHTML = xhr.responseXML.body.innerHTML;
        }
    })
}


