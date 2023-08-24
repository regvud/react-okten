import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {ICar} from "../interfaces/carInterface";

const carService = {
    getAll: () => apiService.get<ICar[]>(urls.cars.base),
    create: (car: ICar) => apiService.post<ICar>(urls.cars.base, car),
    deleteByID: (id: number) => apiService.delete<ICar>(urls.cars.byID(id)),
    updateByID: (car: ICar, id: number) => apiService.put<ICar>(urls.cars.byID(id), car)
}

export {
    carService
}