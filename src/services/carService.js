import {apiService} from "./apiService";
import {urls} from "../constants/carConstants";


export const carService = {
    getAll: () => (apiService.get(urls.cars.base)),
    createCar: (car) => (apiService.post(urls.cars.base, car)),
    updateCar: (id, car) => (apiService.put(urls.cars.byId(id), car)),
    deleteCar: (id) => (apiService.delete(urls.cars.byId(id)))
}
