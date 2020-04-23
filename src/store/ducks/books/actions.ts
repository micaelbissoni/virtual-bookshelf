import { action } from "typesafe-actions";
import { BooksTypes, Book } from "./types";

export const loadRequest = () => action(BooksTypes.REQUEST);

export const success = (data: Book[]) => action(BooksTypes.SUCCCES, { data });

export const failure = () => action(BooksTypes.FAILURE);

export const addItem = (data: Book) => action(BooksTypes.ADD_ITEM, data);

export const addItemSuccess = () => action(BooksTypes.ADD_ITEM_SUCCCES);
