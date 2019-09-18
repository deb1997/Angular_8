// class class_one{}
// class class_two{}
// class class_three extends class_one,class_two{}
;
;
;
var obj = {
    mySQLData: function () { return "MySQL"; },
    mongodbData: function () { return "MongoDB"; },
    sqlServerData: function () { return "SQLServer"; }
};
document.write(obj.mySQLData() + "<br>" +
    obj.mongodbData() + "<br>" +
    obj.sqlServerData());
