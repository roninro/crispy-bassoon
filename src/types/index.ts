export interface SiteContent {
  title: string
  subtitle: string
  menu: Menu[]
  social: IconLink[]
  giscus: {
    repo: `${string}/${string}`
    repoId: string
    category: string
    categoryId: string
    mapping: string
    reactionsEnabled: string
    emitMetadata: string
    theme: string
  }
}

export type Menus = Menu[]


export interface Menu {
  label: string
  path: string
  weight?: number
}

export interface IconLink {
  icon: string
  link: string
}


// graphql type
export interface Group {
  fieldValue: string
  totalCount: number
  nodes: Node[]
}

export type PageContext = {
  tag: string
  category: string
  currentPage: number
  prevPagePath: string
  nextPagePath: string
  hasPrevPage: boolean
  hasNextPage: boolean
  totalPages: number
}


export type Node = {
  fields: {
    slug: string
    categorySlug?: string[]
    tagSlugs?: string[]
  }
  frontmatter: {
    title: string
    date: string
    excerpt?: string
    categories?: string[]
    tags?: string[]
    featuredImage: any
    comment?: boolean
    images: any[]
  }
  excerpt: string
  body: string
  id: string
}

export type Edge = {
  node: Node
}

export type Edges = Edge[]
export type Groups = Group[]
export type Nodes = Node[]
export type AllMdx = {
  allMdx: {
    edges: Edges
    group: Groups
    nodes: Nodes
  }
}

export type Mdx = {
  mdx: Node
}