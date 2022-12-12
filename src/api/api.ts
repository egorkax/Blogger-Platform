import axios from "axios";

const instance = axios.create({
    baseURL: 'https://l1bloggers.vercel.app/',
})


export const blogsAPI = {
    getBlogs(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`blogs?pageNumber=${currentPage}&pageSize=${pageSize}`)

    }
}