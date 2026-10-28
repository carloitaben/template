import * as Effect from "effect/Effect"
import { greet } from "pnpm-lib-effect"

console.log(Effect.runSync(greet("world")))
