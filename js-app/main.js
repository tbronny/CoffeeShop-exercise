const beanVarietyUrl = "https://localhost:5001/api/beanvariety/";

const beanVarietyButton = document.querySelector("#run-beanVariety");
beanVarietyButton.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
});

function getAllBeanVarieties() {
    return fetch(beanVarietyUrl).then(resp => resp.json());
}

const coffeeUrl = "https://localhost:5001/api/coffee/";

const coffeeButton = document.querySelector("#run-coffee");
coffeeButton.addEventListener("click", () => {
    getAllCoffee()
        .then(coffee => {
            console.log(coffee);
        })
});

function getAllCoffee() {
    return fetch(coffeeUrl).then(resp => resp.json());
}