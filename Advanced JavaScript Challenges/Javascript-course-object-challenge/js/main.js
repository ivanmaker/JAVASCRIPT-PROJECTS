class Dog {

    constructor(breed, color, height, weight) {
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.weight = weight;
    }

    Shake() {
        return 'Shake! Good job!';
    }

    Sit() {
        return 'Sit. Good job!';
    }

    LayDown() {
        return 'Laydown. Good job!';
    }
}


let bestDog = new Dog('Hound', 'Brown', '2 feet', '60 pounds');
console.log(bestDog.Shake() + ' ' + bestDog.Sit() + ' ' + bestDog.LayDown());



