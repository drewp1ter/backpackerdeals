import humps from 'humps'

export interface IUri {
  country: string
  citySlug: string
  categorySlug: string
  slug: string
}

export interface IContextSearch {
  id: number | null
  name: string
  uri: IUri
}

export class ContextSearch implements IContextSearch {
  public static create(dto: {}): IContextSearch {
    const offer: any = humps.camelizeKeys(dto)
    return new ContextSearch(offer)
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
