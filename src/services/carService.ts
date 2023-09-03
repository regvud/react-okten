import {apiService, TRes} from "./apiService";
import {urls} from "../constants/urls";
import {ICar, ICarPhoto, IPagination} from "../interfaces";

const carService = {
    getAll: (page: number): TRes<IPagination<ICar>> => apiService.get(urls.cars.base, {params: {page}}),
    insertPhotoByID: (id: number, photo: ICarPhoto) => apiService.put<ICarPhoto>(urls.cars.photoByID(id), photo, {}),
    create: (data: ICar) => apiService.post<ICar>(urls.cars.base, data),
    deleteByID: (id: number) => apiService.delete<ICar>(urls.cars.byID(id)),
    updateByID: (data: ICar, id: number) => apiService.put<ICar>(urls.cars.byID(id), data)
}

export {
    carService
}