export { };

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            "BROWSER": "chrome" | "firefox" | "webkit",
            "ENV": "prod" | "qa" | "staging",
            BASEURL: string,
            HEAD: true | false
        }
    }
}
