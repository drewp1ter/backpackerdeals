import { readFileSync } from 'fs'
import { memoize } from 'lodash'
import { Head } from 'next/document'
import { resolve } from 'path'

const doGetContent = memoize((file: string) => readFileSync(resolve(process.cwd(), '.next', file), 'utf8'))

export class InlineStylesHead extends Head {
  getCssLinks() {
    return this.__getInlineStyles()
  }

  __getInlineStyles() {
    const { assetPrefix, files } = this.context._documentProps
    if (!files || files.length === 0) {
      return null
    }

    return files
      .filter((file: string) => /\.css$/.test(file))
      .map((file: string) => (
        <style
          key={file}
          nonce={this.props.nonce}
          data-href={`${assetPrefix}/_next/${file}`}
          dangerouslySetInnerHTML={{
            __html: doGetContent(file),
          }}
        />
      ))
  }
}
