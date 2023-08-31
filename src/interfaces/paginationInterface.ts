export interface IPagination<DATA> {
    "total_items": number,
    "total_pages": number,
    "prev": { page: number },
    "next": { page: number },
    "items": DATA[]
}