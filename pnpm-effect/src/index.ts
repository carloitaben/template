import * as Effect from "effect/Effect"

export const greet = (name: string) => Effect.succeed(`Hello, ${name}!`)
