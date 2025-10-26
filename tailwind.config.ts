import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "var(--foreground)",
            h1: {
              color: "var(--foreground)",
              borderBottom: "2px solid var(--primary)",
              paddingBottom: "0.5rem",
            },
            h2: {
              color: "var(--foreground)",
            },
            h3: {
              color: "var(--foreground)",
            },
            h4: {
              color: "var(--foreground)",
            },
            p: {
              color: "var(--muted-foreground)",
            },
            strong: {
              color: "var(--foreground)",
            },
            code: {
              color: "var(--primary)",
              backgroundColor: "var(--muted)",
            },
            pre: {
              backgroundColor: "var(--muted)",
              border: "1px solid var(--border)",
            },
            "pre code": {
              backgroundColor: "transparent",
              color: "var(--foreground)",
            },
            blockquote: {
              borderLeftColor: "var(--primary)",
              color: "var(--muted-foreground)",
            },
            th: {
              backgroundColor: "var(--muted)",
              color: "var(--foreground)",
            },
            td: {
              color: "var(--muted-foreground)",
            },
            hr: {
              borderColor: "var(--border)",
            },
          },
        },
        dark: {
          css: {
            color: "var(--foreground)",
            h1: {
              color: "var(--foreground)",
            },
            h2: {
              color: "var(--foreground)",
            },
            h3: {
              color: "var(--foreground)",
            },
            h4: {
              color: "var(--foreground)",
            },
            p: {
              color: "var(--muted-foreground)",
            },
            strong: {
              color: "var(--foreground)",
            },
            code: {
              color: "var(--primary)",
              backgroundColor: "var(--muted)",
            },
            pre: {
              backgroundColor: "var(--muted)",
              border: "1px solid var(--border)",
            },
            "pre code": {
              backgroundColor: "transparent",
              color: "var(--foreground)",
            },
            blockquote: {
              borderLeftColor: "var(--primary)",
              color: "var(--muted-foreground)",
            },
            th: {
              backgroundColor: "var(--muted)",
              color: "var(--foreground)",
            },
            td: {
              color: "var(--muted-foreground)",
            },
            hr: {
              borderColor: "var(--border)",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
