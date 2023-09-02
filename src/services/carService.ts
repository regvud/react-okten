import {apiService, TRes} from "./apiService";
import {ICar} from "../interfaces/carInterface";
import {urls} from "../constants/urls";
import {IPagination} from "../interfaces/paginationInterface";
import {ICarPhoto} from "../interfaces/carPhoto";

const carService = {
    getAll: (page: number): TRes<IPagination<ICar>> => apiService.get(urls.cars.base, {params: {page}}),
    insertPhotoByID: (id: number, photo: string) => apiService.put<ICarPhoto>(urls.cars.photoByID(id, photo)),
    create: (data: ICar) => apiService.post<ICar>(urls.cars.base, data),
    deleteByID: (id: number) => apiService.delete<ICar>(urls.cars.byID(id)),
    updateByID: (data: ICar, id: number) => apiService.put<ICar>(urls.cars.byID(id), data)
}

export {
    carService
}