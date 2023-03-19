// Aufgabe 1

type MyString = string

const sparta: MyString = "This is Sparta"

// Aufgabe 2

type stringNumber = string | number

const myNumber: stringNumber = 1
const myString: MyString = "Hallo World"
const peter: MyString = ""

// Aufgabe 3

function introduction(param: stringNumber): string {
    return ("Hallo " + param)
}


introduction("Hans")
introduction("")
introduction(31)

// Aufgabe 4

const showContent = (param: string | undefined): string => {
    if (typeof param === "undefined") {
        return "Halt Stop!"
    } else {
        return ("Hallo, mein Inhalt ist: " + param)
    }
}

showContent(undefined)
showContent("ICh rede jetzt")

// Aufgabe 5

const keepPlaying = (param: number | boolean) => {
    if (typeof param === "number" && param < 10) {
        return true
    } else if (param === true) {
        return true
    } else {
        return false
    }
}

keepPlaying(2)
keepPlaying(true)
keepPlaying(16)

// Aufgabe 6

const move = (move: string): number | undefined => {
    const moveLower = move.toLowerCase()
    switch (moveLower) {
        case "left": return 0;
            break
        case "right": return 1;
            break
        case "forward": return 2;
            break
        case "back": return 3;
            break
        default: undefined
    }
}

move("right")
move("left")
move("ich kan nicht tippen")

console.log("test")

// Aufgabe 7

const input = document.getElementById("input")
const output = document.getElementById("output")


input?.addEventListener("input", (event: Event) => {
    const { target } = event
    const getMove = move((target as HTMLInputElement).value)
    if (typeof getMove === "undefined") {
        output!.innerText = "Error"
        return
    } else {
        output!.innerText = getMove.toString()
    }
})



// Objekte
// Übung 1


/* type Player = {
    name: string;
    lastLogin: Date;
    id: number;
    email: string;
}; */

type PlayedGame = {
    GameName: string;
    Highscore: number
}

type Player = {
    name: string;
    lastLogin: Date
    id: number;
    email: string;
    playedGame: PlayedGame;
};

type Admin = {
    name: string;
    id: number;
    email: string;
    employeeId: number;
};

// Übung 2
function getEmail(player: Player): string {
    return player.email;
}
// Übung 3
function getEmail2({ email }: Player | Admin): string {
    return email;
}

//Übung4

/* type PlayedGame = {
    GameName: string;
    Highscore: number
}

type Player = {
    name: string;
    lastLogin: number
    id: number;
    email: string;
    playedGame: PlayedGame;
}; */

// Übung 5
const playerOne: Player = {
    name: "Peter",
    lastLogin: new Date(),
    id: 2,
    email: "peter31@gamil.com",
    playedGame: {
        GameName: "fifa23",
        Highscore: 123456
    }
};

const playerTwo: Player = {
    name: "Peter",
    lastLogin: new Date(),
    id: 1,
    email: "peter@gmail.com",
    playedGame: {
        GameName: "fifa23",
        Highscore: 20
    }
}


function evaluateWinner(game1: PlayedGame, game2: PlayedGame): number {
    if (game1.GameName === game2.GameName) {
        if (game1.Highscore > game2.Highscore) {
            return 1;
        } else if (game1.Highscore < game2.Highscore) {
            return -1;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}

//Aufgabe 6


