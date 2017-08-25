/*
* @Author: anchen
* @Date:   2017-08-24 13:19:08
* @Last Modified by:   anchen
* @Last Modified time: 2017-08-25 16:56:16
*/
import 'isomorphic-fetch';
// import Promise from 'es6-promise';
function ojson() {
    this.action = "";
    this.status = 0;
    this.info = "";
    this.md5ver = "";
    this.sessid = "";
    this.paramcentcount = 0;
    this.param = new Array();
    this.datas = null;
};
function GetOjson(jos) {
    var sobj = jos;
    var os = new ojson();
    if(sobj.hasOwnProperty("action")) {
        os.action = sobj.action;
    }
    if(sobj.hasOwnProperty("status")) {
        os.status = sobj.status;
    }
    if(sobj.hasOwnProperty("info")) {
        os.info = UnTrim(sobj.info);
    }
    if(sobj.hasOwnProperty("md5ver")) {
        os.md5ver = UnTrim(sobj.md5ver);
    }
    if(sobj.hasOwnProperty("sessid")) {
        os.sessid = UnTrim(sobj.sessid);
    }
    if(sobj.hasOwnProperty("paramcentcount")) {
        os.paramcentcount = sobj.paramcentcount;
    }
    if(sobj.hasOwnProperty("param")) {
        if(isArray(sobj.param)) {
            os.param = sobj.param;
            for(var i = 0; i < os.param.length; i++) {
                for(var key in os.param[i]) {
                    os.param[i][key] = UnTrim(os.param[i][key]);
                }
            }
        }
    }
    if(sobj.hasOwnProperty("datas")) {
        if(os.datas == null) {
            os.datas = function() {};
        }
        for(var okey in sobj.datas) {
            var odarr = sobj.datas[okey];
            if(isArray(odarr)) {
                os.datas[okey] = odarr;
                for(var i = 0; i < os.datas[okey].length; i++) {
                    for(var key in os.datas[okey][i]) {
                        os.datas[okey][i][key] = UnTrim(os.datas[okey][i][key]);
                    }
                }
            }
        }
    }
    return os;
};



// export default {GetOjson, json_parse}
module.exports = GetOjson;
// module.exports .json_parse= json_parse;