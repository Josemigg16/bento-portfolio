import { defineAction } from "astro:actions"
import { z } from "astro:schema"

export const server = {
  setTheme: defineAction({
    input: z.string(),
    handler: async (input, context) => {
      context.cookies.set("theme", input, {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 365, // 1 year
      })
      return true
    },
  }),
  getTheme: defineAction({
    handler: async (input, context) => {
      return context.cookies.get("theme")?.value
    },
  }),
}
