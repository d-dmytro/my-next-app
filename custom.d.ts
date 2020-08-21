declare namespace NodeJS {
  interface ProcessEnv {
    MYSQL_ROOT_PASSWORD: string;
    MYSQL_USER: string;
    MYSQL_PASSWORD: string;
    MYSQL_DATABASE: string;
  }
}
