interface Tag {
    name: string
    description: string
    slug: string
}

interface Author {
    name: string
    url: string
    profileImage: string
}

interface Post {
    title: string
    url: string
    content: string
    date: string // Could also use Date if you plan to parse it
    primaryAuthor: Author
    primaryTag: Tag
    tags: Tag[]
    featureImage: string
    songUrl: string
    publishedDate: string
}

export interface Posts {
    data: Post[]
}

export type About = {
    data: {
        title: string
        description: string
    }
}
