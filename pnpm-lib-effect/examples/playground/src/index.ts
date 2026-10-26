import * as Effect from "effect"
import { greet } from "hello-world"

console.log(Effect.Effect.runSync(greet("world")))
