class ExampleClass<T> {
  private _data: T;

  set data(arg: T) {
    if (arg) {
      this._data = arg;
    } else {
      throw new Error('Invalid argument: arg must not be null or undefined');
    }
  }

  get data(): T {
    return this._data;
  }
}
