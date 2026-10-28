import { definePlugin } from "@oxlint/plugins"

export default definePlugin({
  meta: {
    name: "pnpm-lib-effect",
  },
  rules: {
    "effect-namespace-imports": {
      meta: {
        fixable: "code",
      },
      create(context) {
        return {
          ImportDeclaration(node) {
            const [specifier] = node.specifiers

            if (
              node.source.value.startsWith("effect/") &&
              node.specifiers.some(
                (specifier) => specifier.type !== "ImportNamespaceSpecifier",
              )
            ) {
              context.report({
                message: "Import Effect modules with a namespace import.",
                node,
                fix:
                  specifier?.type === "ImportSpecifier" &&
                  node.specifiers.length === 1 &&
                  specifier.imported.type === "Identifier" &&
                  specifier.imported.name === specifier.local.name
                    ? (fixer) =>
                        fixer.replaceText(
                          node,
                          `import * as ${specifier.local.name} from ${
                            node.source.raw ?? JSON.stringify(node.source.value)
                          }`,
                        )
                    : undefined,
              })
            }
          },
        }
      },
    },
  },
})
