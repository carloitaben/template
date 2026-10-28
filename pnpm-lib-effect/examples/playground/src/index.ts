import * as Effect from "effect/Effect"
import { greet } from "hello-world"

console.log(Effect.runSync(greet("world")))
