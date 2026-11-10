import { describe, expect, it } from "@effect/vitest"
import * as Effect from "effect/Effect"
import { greet } from "#src/index"

describe("greet", () => {
  it.effect("returns a greeting", () =>
    Effect.gen(function* () {
      const greeting = yield* greet("world")
      expect(greeting).toBe("Hello, world!")
    }),
  )
})
