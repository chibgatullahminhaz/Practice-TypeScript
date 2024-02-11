// enum tupe this is diffaracne 3type 
// nuimaric type
var RequestTyp;
(function (RequestTyp) {
    RequestTyp[RequestTyp["deletData"] = 1] = "deletData";
    RequestTyp[RequestTyp["LoadeData"] = 2] = "LoadeData";
    RequestTyp[RequestTyp["userid"] = 3] = "userid";
})(RequestTyp || (RequestTyp = {}));
console.log(RequestTyp);
// string enum 
var RequestString;
(function (RequestString) {
    RequestString["FistName"] = "chibgatullah";
    RequestString["lastName"] = "minhaz";
    RequestString["FullName"] = "chibgatullah Minhaz";
})(RequestString || (RequestString = {}));
console.log(RequestString);
// hotrenous enum 
var RequestHotre;
(function (RequestHotre) {
    RequestHotre["FistName"] = "chibgatullah";
    RequestHotre["lastName"] = "minhaz";
    RequestHotre[RequestHotre["StudentId"] = 102] = "StudentId";
})(RequestHotre || (RequestHotre = {}));
console.log(RequestHotre);
