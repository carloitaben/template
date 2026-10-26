import * as Effect from "effect"

export const greet = (name: string) => Effect.Effect.succeed(`Hello, ${name}!`)
