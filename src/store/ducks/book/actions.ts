import { action } from "typesafe-actions";
import { BookTypes, Book } from "./types";

export const loadRequest = (data: string) => action(BookTypes.REQUEST, data);

export const success = (data: Book) => action(BookTypes.SUCCCES, { data });

export const failure = () => action(BookTypes.FAILURE);
