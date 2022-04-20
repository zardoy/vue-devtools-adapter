//@ts-check

/** @type{import('vscode-framework/build/config').UserConfig} */
const config = {
    esbuild: {
        mainFields: ['module', 'main'],
    },
}

module.exports = config
