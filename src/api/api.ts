import axios from "axios";

const instance = axios.create({
    // @ts-ignore
    // proxy: "https://api.codetabs.com/v1/proxy?quest=https://video-bloggers.vercel.app/",
    // baseURL: 'https://video-bloggers.vercel.app/',
    baseURL: "https://api.codetabs.com/v1/proxy?quest=https://video-bloggers.vercel.app/",
})
//


export const blogsAPI = {
    getBlogs(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<BlogsResponseType>(`blogs?pageNumber=${currentPage}&pageSize=${pageSize}`)

    }
}

export type BlogsResponseType = {
    "pagesCount": number
    "page": number
    "pageSize": number
    "totalCount": number
    "items": BlogType[]
}
export type BlogType = {
    id: string
    name: string
    description: string
    websiteUrl: string
    createdAt: string
}