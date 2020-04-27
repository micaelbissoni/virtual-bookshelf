import { Book } from "../store/ducks/books/types";

export default class Api {
  static *get(args: any) {
    try {
      const key = args.key ? args.key : args;
      const serializedData = JSON.parse(localStorage.getItem(key) || "[]");

      if (args.data) {
        const searchedBook = serializedData.filter(
          (b: any) => b.id === args.data
        );
        if (searchedBook && searchedBook[0] && searchedBook[0].deleted) {
          return yield Promise.reject({});
        }
        return yield Promise.resolve(searchedBook[0]);
      }

      return yield Promise.resolve(
        serializedData.filter((b: Book) => !b.deleted)
      );
    } catch (err) {
      console.warn(err);
      return yield Promise.reject(args.data ? {} : []);
    }
  }

  static *post(args: any) {
    try {
      let list = JSON.parse(localStorage.getItem(args.key) || "[]");

      const searchedBook = list.filter((b: any) => b.id === args.data.id);

      if (searchedBook && searchedBook[0]) {
        list = list.map((b: any) => {
          if (b.id === args.data.id) {
            return args.data;
          }
          return b;
        });
      } else {
        list.push(args.data);
      }

      const serializedData = JSON.stringify(list);
      localStorage.setItem(args.key, serializedData);

      const serializedResponse = localStorage.getItem(args.key);
      if (serializedResponse === null) {
        return undefined;
      }

      if (args.data.deleted) {
        return yield Promise.reject({});
      }
      return yield Promise.resolve(args.data);
    } catch (err) {
      console.warn(err);
      return yield Promise.reject({});
    }
  }
}
