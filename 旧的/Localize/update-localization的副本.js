var Localize = require("localize-spreadsheet-bot");
var transformer = Localize.fromGoogleSpreadsheet("1J3LcsSrlaVYd6tW0K6aOjzSxOU2O0RhzlIadplUiDkQ", 'Mitu');
var projectPath = "/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization";
transformer.setKeyCol('Key');

transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/en.lproj/Localizable.strings", { valueCol: "en", format: "ios" });
transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/fr.lproj/Localizable.strings", { valueCol: "fr", format: "ios" });
transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/de.lproj/Localizable.strings", { valueCol: "de", format: "ios" });
transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/ar.lproj/Localizable.strings", { valueCol: "ar", format: "ios" });
transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/pt-PT.lproj/Localizable.strings", { valueCol: "pt", format: "ios" });
transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/es.lproj/Localizable.strings", { valueCol: "es", format: "ios" });
transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/ar.lproj/Localizable.strings", { valueCol: "ar", format: "ios" });
transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/it.lproj/Localizable.strings", { valueCol: "it", format: "ios" });

transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/ru.lproj/Localizable.strings", { valueCol: "ru", format: "ios" });

transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/tr.lproj/Localizable.strings", { valueCol: "tr", format: "ios" });

transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/ta.lproj/Localizable.strings", { valueCol: "ta", format: "ios" });
transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/mr.lproj/Localizable.strings", { valueCol: "mr", format: "ios" });
transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/te.lproj/Localizable.strings", { valueCol: "te", format: "ios" });
transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/bn.lproj/Localizable.strings", { valueCol: "bn", format: "ios" });

