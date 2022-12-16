//const createTranspileModulesPlugin = require("next-transpile-modules");

//const withTranspileModules = createTranspileModulesPlugin(["@cakepop/react"]);

///** @type {import('next').NextConfig} */
//module.exports = withTranspileModules({
//    reactStrictMode: true,
//    swcMinify: true,
//});
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const createTranspileModulesPlugin = require("next-transpile-modules");

const withVanillaExtract = createVanillaExtractPlugin();

const withTranspileModules = createTranspileModulesPlugin(["@cakepop/react"]);


////** @type {import('next').NextConfig} */
//module.exports = withTranspileModules(withVanillaExtract({
//    reactStrictMode: true,
//   swcMinify: true,
//}));

module.exports = () => {
    const plugins = [withTranspileModules, withVanillaExtract];
    return plugins.reduce((acc, next) => next(acc), {
        reactStrictMode: true,
        swcMinify: true,
        i18n: {
            locales: ["en-US", "nl-BE", "pl-PL"],
            defaultLocale: "en-US",
        },
        resolve: {
            // Add `.ts` and `.tsx` as a resolvable extension.
            extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
        },
    });
};

