import { describe, expect, it } from "@effect/vitest"
import * as Effect from "effect"
import { greet } from "#src/index"

describe("greet", () => {
  it.effect("returns a greeting", () =>
    Effect.Effect.gen(function* () {
      expect(yield* greet("world")).toBe("Hello, world!")
    }),
  )
})
