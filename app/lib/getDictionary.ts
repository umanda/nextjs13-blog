const dictionaries = {
  en: () =>
    import("./../dictinoaries/en.json").then((module) => module.default),
  fr: () =>
    import("./../dictinoaries/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (!locale || locale === undefined) {
    return dictionaries["en"]();
  } else {
    return dictionaries[locale as "en" | "fr"]();
  }
};
