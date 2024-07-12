


class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    
    addScore(newScore) {
        this.scores.push(newScore);
        console.log(this.scores);
    }


    average() {
        let total = 0;
        for (let i = 0; i < this.scores.length; i++) {
            total += this.scores[i];
        }
        return total;
    }
}





let candidate1 = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let candidate2 = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let candidate3 = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

console.log(candidate1);
console.log(candidate2);
console.log(candidate3);


candidate1.addScore(93);
console.log(average.candidate1);









//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.