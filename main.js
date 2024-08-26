#! /usr/bin/env node
import { input, select } from "@inquirer/prompts";
class Player {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
    healthIncrease() {
        this.health = 100;
    }
}
class Opponent {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
}
console.log("\nWelcome to DeadZone!\n");
const PlayerName = await input({
    message: "Please enter your name",
});
const OpponentName = await select({
    message: `${PlayerName}, Select your opponent`,
    choices: [
        { name: "Zombie", value: "zombie" },
        { name: "Warrior", value: "warrior" },
        { name: "Assasin", value: "assasin" },
    ],
});
const p1 = new Player(PlayerName);
const o1 = new Opponent(OpponentName);
console.log(`\n${PlayerName} v/s ${OpponentName}\n`);
console.log(`${PlayerName},Your health is ${p1.health}\n`);
console.log(`${OpponentName},health is ${o1.health}\n`);
do {
    if (OpponentName === "zombie") {
        const attackInfo = await select({
            message: "What would you like to do?",
            choices: [
                { name: "Attack", value: "attack" },
                { name: "Drink Health Potion", value: "drink health potion" },
                { name: "Run For Your Life..", value: "run for your life.." },
            ],
        });
        if (attackInfo === "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.healthDecrease();
                console.log(`${PlayerName},Your health is ${p1.health}\n`);
                console.log(`${OpponentName},health is ${o1.health}\n`);
                if (p1.health <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            else if (num <= 0) {
                o1.healthDecrease();
                console.log(`${PlayerName},Your health is ${p1.health}\n`);
                console.log(`${OpponentName},health is ${o1.health}\n`);
                if (o1.health <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        else if (attackInfo === "drink health potion") {
            p1.healthIncrease();
            console.log(`\n${PlayerName},You drink health potion your health is ${p1.health}\n`);
        }
        else {
            console.log("You Loose, Better Luck Next Time");
            process.exit();
        }
    }
    if (OpponentName === "warrior") {
        const attackInfo = await select({
            message: "What would you like to do?",
            choices: [
                { name: "Attack", value: "attack" },
                { name: "Drink Health Potion", value: "drink health potion" },
                { name: "Run For Your Life..", value: "run for your life.." },
            ],
        });
        if (attackInfo === "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.healthDecrease();
                console.log(`${PlayerName},Your health is ${p1.health}\n`);
                console.log(`${OpponentName},health is ${o1.health}\n`);
                if (p1.health <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            else if (num <= 0) {
                o1.healthDecrease();
                console.log(`${PlayerName},Your health is ${p1.health}\n`);
                console.log(`${OpponentName},health is ${o1.health}\n`);
                if (o1.health <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        else if (attackInfo === "drink health potion") {
            p1.healthIncrease();
            console.log(`\n${PlayerName},You drink health potion your health is ${p1.health}\n`);
        }
        else {
            console.log("You Loose, Better Luck Next Time");
            process.exit();
        }
    }
    if (OpponentName === "assasin") {
        const attackInfo = await select({
            message: "What would you like to do?",
            choices: [
                { name: "Attack", value: "attack" },
                { name: "Drink Health Potion", value: "drink health potion" },
                { name: "Run For Your Life..", value: "run for your life.." },
            ],
        });
        if (attackInfo === "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.healthDecrease();
                console.log(`${PlayerName},Your health is ${p1.health}\n`);
                console.log(`${OpponentName},health is ${o1.health}\n`);
                if (p1.health <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            else if (num <= 0) {
                o1.healthDecrease();
                console.log(`${PlayerName},Your health is ${p1.health}\n`);
                console.log(`${OpponentName},health is ${o1.health}\n`);
                if (o1.health <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        else if (attackInfo === "drink health potion") {
            p1.healthIncrease();
            console.log(`\n${PlayerName},You drink health potion your health is ${p1.health}\n`);
        }
        else {
            console.log("You Loose, Better Luck Next Time");
            process.exit();
        }
    }
} while (true);
