// src/create-error.ts
var createError = (code, message, status = 500) => {
  return class extends Error {
    name = "DirectusError";
    extensions;
    code = code.toUpperCase();
    status = status;
    constructor(extensions, options) {
      const msg = typeof message === "string" ? message : message(extensions);
      super(msg, options);
      this.extensions = extensions;
    }
    toString() {
      return `${this.name} [${this.code}]: ${this.message}`;
    }
  };
};

// src/is-directus-error.ts
var isDirectusError = (err, code) => {
  const isDirectusError2 = typeof err === "object" && err !== null && Array.isArray(err) === false && "name" in err && err.name === "DirectusError";
  if (code) {
    return isDirectusError2 && "code" in err && err.code === code.toUpperCase();
  }
  return isDirectusError2;
};
export {
  createError,
  isDirectusError
};
