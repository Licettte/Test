declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        REACT_APP_BACKEND_URL: string;
    }
}

declare module "*.png";
declare module "*.svg";
