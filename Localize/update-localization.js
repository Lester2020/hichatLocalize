const Localize = require("localize-gsheet-pro");
const transformer = Localize.fromGoogleSpreadsheet("1oiG4i2ZGoK3AcyJWdgecEfO-06UiTNQZwImzmXekGbc", 'HiChat-iOS', function (lines) {
  const projectPath = "/Users/edy/Documents/work/hichat-ios/HiChat/Localization/";
  transformer.setKeyCol('Key');

transformer.save(projectPath + "en.lproj/Localizable.strings", { valueCol: "en", format: "iOS" }); // 美国
transformer.save(projectPath + "fr.lproj/Localizable.strings", { valueCol: "fr", format: "iOS" }); // 法国
transformer.save(projectPath + "pt.lproj/Localizable.strings", { valueCol: "pt", format: "iOS" }); // 葡萄牙
transformer.save(projectPath + "es.lproj/Localizable.strings", { valueCol: "es", format: "iOS" }); // 西班牙
transformer.save(projectPath + "ru.lproj/Localizable.strings", { valueCol: "ru", format: "iOS" }); // 俄罗斯
transformer.save(projectPath + "de.lproj/Localizable.strings", { valueCol: "de", format: "iOS" }); // 德国  
transformer.save(projectPath + "it.lproj/Localizable.strings", { valueCol: "it", format: "iOS" }); // 意大利
transformer.save(projectPath + "tr.lproj/Localizable.strings", { valueCol: "tr", format: "iOS" }); // 土耳其
transformer.save(projectPath + "ar.lproj/Localizable.strings", { valueCol: "ar", format: "iOS" }); // 阿根廷 
transformer.save(projectPath + "pt-PT.lproj/Localizable.strings", { valueCol: "pt", format: "iOS" }); // 葡萄牙
});

