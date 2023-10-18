const dictionaries = {
  en: () =>
    import("./../dictinoaries/en.json").then((module) => module.default),
  fr: () =>
    import("./../dictinoaries/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  //console.log("GD locale", locale);
  if (!locale || locale === undefined) {
    //console.error("GD Locale is not defined properly.");
    return 'en'; // or throw an error
  } else {
    const dictionaryFunc = dictionaries[locale as "en" | "fr"];
    if (!dictionaryFunc) {
      //console.error(`Dictionary function for ${locale} not found.`);
      return 'en'; // or throw an error
    }
    return dictionaryFunc();
  }
};

/* export const getDictionary = async (locale: string) => {

  console.log("locale", locale);

  if (!locale || locale === undefined) {
    return dictionaries["en"]();
  } else {
    return dictionaries[locale as "en" | "fr"]();
  }
}; */


//export const getDictionary = async (locale: string) => {
/* export const getDictionary = async (locale: "en" | "fr") => {
  if (!locale || locale === undefined) {
    return dictionaries["en"]();
  } else {
    //return dictionaries[locale as "en" | "fr"]();
    return dictionaries[locale]();
  }
};  */


/* interface Dictionary {
  locale : "en" | "fr"
}

const dictionaries: { [key: string]: () => Promise<Dictionary> } = {
  en: () =>
    import("./../dictinoaries/en.json").then((module) => module.default),
  fr: () =>
    import("./../dictinoaries/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  if (!locale || locale === undefined) {
    return dictionaries["en"]();
  } else {
    return dictionaries[locale as "en" | "fr"]();
  }
}; */