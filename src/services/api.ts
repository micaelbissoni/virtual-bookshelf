export default class Api {
  static *get(args: any) {
    try {
      const key = args.key ? args.key : args;
      const serializedData = JSON.parse(localStorage.getItem(key) || "[]");

      if (args.data) {
        const searchedBook = serializedData.filter(
          (b: any) => b.id === args.data
        );
        return yield Promise.resolve(searchedBook[0]);
      }

      return yield Promise.resolve(serializedData);
    } catch (err) {
      console.warn(err);
      return yield Promise.resolve(args.data ? {} : []);
    }
  }

  static *post(args: any) {
    try {
      let list = JSON.parse(localStorage.getItem(args.key) || "[]");
      list.push(args.data);

      const serializedData = JSON.stringify(list);
      localStorage.setItem(args.key, serializedData);

      const serializedResponse = localStorage.getItem(args.key);
      if (serializedResponse === null) {
        return undefined;
      }
      return yield Promise.resolve(JSON.parse(serializedResponse));
    } catch (err) {
      console.warn(err);
    }
  }
}
