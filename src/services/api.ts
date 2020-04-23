export default class Api {
  static *get(args: any) {
    try {
      const serializedData = localStorage.getItem(args);

      if (serializedData === null) {
        return undefined;
      }

      return yield Promise.resolve(JSON.parse(serializedData));
    } catch (err) {
      console.warn(err);
      return yield Promise.resolve(undefined);
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
