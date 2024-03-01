var Localize = require("localize-gsheet-pro");
var transformer = Localize.fromGoogleSpreadsheet("1J3LcsSrlaVYd6tW0K6aOjzSxOU2O0RhzlIadplUiDkQ", 'Mitu',function (lines) {
var projectPath = "/Users/gaoshiyue/Downloads/app/mitu/Mitu/Resources/Localization";
transformer.setKeyCol('Key');

transformer.save(projectPath + "en.lproj/Localizable.strings", { valueCol: "en", format: "ios" });
transformer.save(projectPath + "fr.lproj/Localizable.strings", { valueCol: "fr", format: "ios" });
transformer.save(projectPath + "de.lproj/Localizable.strings", { valueCol: "de", format: "ios" });
transformer.save(projectPath + "ar.lproj/Localizable.strings", { valueCol: "ar", format: "ios" });
transformer.save(projectPath + "pt.lproj/Localizable.strings", { valueCol: "pt", format: "ios" });
transformer.save(projectPath + "es.lproj/Localizable.strings", { valueCol: "es", format: "ios" });
transformer.save(projectPath + "it.lproj/Localizable.strings", { valueCol: "it", format: "ios" });
transformer.save(projectPath + "ru.lproj/Localizable.strings", { valueCol: "ru", format: "ios" });
transformer.save(projectPath + "tr.lproj/Localizable.strings", { valueCol: "tr", format: "ios" });
transformer.save(projectPath + "ta.lproj/Localizable.strings", { valueCol: "ta", format: "ios" });
transformer.save(projectPath + "mr.lproj/Localizable.strings", { valueCol: "mr", format: "ios" });
transformer.save(projectPath + "te.lproj/Localizable.strings", { valueCol: "te", format: "iOS" });
transformer.save(projectPath + "bn.lproj/Localizable.strings", { valueCol: "bn", format: "ios" });
});