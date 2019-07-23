import humps from 'humps'

export interface IUri {
  country: string
  citySlug: string
  categorySlug: string
  slug: string
}

export interface IContextSearchResult {
  id: number | null
  name: string
  uri: IUri
}

export class ContextSearchResult implements IContextSearchResult {
  public static create(dto: {}): IContextSearchResult {
    const offer: any = humps.camelizeKeys(dto)
    return new ContextSearchResult(offer)
  }

  public id: number | null
  public name: string
  public uri: IUri
  constructor(props: any = {}) {
    this.id = props.id || null
    this.name = props.name
    this.uri = props.uri
  }
}
