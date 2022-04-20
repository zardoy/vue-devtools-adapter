import * as vscode from 'vscode'
import { readPackageJsonFile } from 'typed-jsonfile'

export const activate = async () => {
    // TODO support multiroot
    // let hasVue = false
    // for (const workspaceFolder of vscode.workspace.workspaceFolders ?? []) {
    //     const packageJson = await readPackageJsonFile({ dir: workspaceFolder.uri.fsPath }).catch(() => null)
    //     if (!packageJson) continue
    //     if (Object.keys({ ...packageJson.devDependencies, ...packageJson.dependencies }).includes('vue')) {
    //         hasVue = true
    //         break
    //     }
    // }

    // if (!hasVue) return
    vscode.window.registerUriHandler({
        // vscode://zardoy.vue-devtools-adapter/open-vue?file=src/components/header-profile/index.vue
        async handleUri(uri) {
            if (uri.path !== '/open-vue') return
            const params = new URLSearchParams(uri.query)
            const file = params.get('file')
            if (!file) {
                console.warn('Missing required param file')
                return
            }

            await vscode.window.showTextDocument(vscode.Uri.joinPath(vscode.workspace.workspaceFolders![0]!.uri, file))
        },
    })
}
