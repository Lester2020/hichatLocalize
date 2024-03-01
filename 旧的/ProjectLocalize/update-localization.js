var Localize = require("localize-spreadsheet-bot");
var transformer = Localize.fromGoogleSpreadsheet("1J3LcsSrlaVYd6tW0K6aOjzSxOU2O0RhzlIadplUiDkQ", 'permission');
var projectPath = "/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization";
transformer.setKeyCol('Key');

transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/en.lproj/InfoPlist.strings", { valueCol: "en", format: "ios" });
transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/fr.lproj/InfoPlist.strings", { valueCol: "fr", format: "ios" });
transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/de.lproj/InfoPlist.strings", { valueCol: "de", format: "ios" });
transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/ar.lproj/InfoPlist.strings", { valueCol: "ar", format: "ios" });
transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/pt-PT.lproj/InfoPlist.strings", { valueCol: "pt", format: "ios" });
transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/es.lproj/InfoPlist.strings", { valueCol: "es", format: "ios" });
transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/ar.lproj/InfoPlist.strings", { valueCol: "ar", format: "ios" });
transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/it.lproj/InfoPlist.strings", { valueCol: "it", format: "ios" });

transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/ru.lproj/InfoPlist.strings", { valueCol: "ru", format: "ios" });

transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/tr.lproj/InfoPlist.strings", { valueCol: "tr", format: "ios" });

transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/ta.lproj/InfoPlist.strings", { valueCol: "ta", format: "ios" });
transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/mr.lproj/InfoPlist.strings", { valueCol: "mr", format: "ios" });
transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/te.lproj/InfoPlist.strings", { valueCol: "te", format: "ios" });
transformer.save("/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization/bn.lproj/InfoPlist.strings", { valueCol: "bn", format: "ios" });

