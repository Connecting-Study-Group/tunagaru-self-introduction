declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_API_URL: string;
    readonly DISCORD_CLIENT_ID: string;
    readonly DISCORD_CLIENT_SECRET: string;
    readonly TSUNAGARU_DISCORD_ID: string;
  }
}
