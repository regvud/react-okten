import axios from "axios";
import {baseURL} from "../constants/carConstants";

// http://owu.linkpc.net/carsAPI/v1/doc
//     Реалізувати створення, видалення та оновлення машин

export const apiService = axios.create({baseURL})