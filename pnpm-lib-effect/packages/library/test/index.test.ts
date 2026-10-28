import { describe, expect, it } from "@effect/vitest"
import * as Effect from "effect/Effect"
import { greet } from "#src/index"

describe("greet", () => {
  it.effect("returns a greeting", () =>
    Effect.gen(function* () {
      expect(yield* greet("world")).toBe("Hello, world!")
    }),
  )
})
