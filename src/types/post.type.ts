export interface PostType {
    _id: string
    articleTypeId: string
    image: string
    createdAt: { toString: () => string } | string
    title: string
    description: string
    content: string
}
