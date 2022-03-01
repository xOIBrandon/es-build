import capitalize from "lodash.capitalize"

export function greet(name = "WORLD") {
    const greeting = `Hello, ${capitalize(name)}`

    console.log(greeting)

    return greeting
}