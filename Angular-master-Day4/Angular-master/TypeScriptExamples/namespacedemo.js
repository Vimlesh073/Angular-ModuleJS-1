var A;
(function (A) {
    function show() {
        console.log("this is show");
    }
    A.show = show;
})(A || (A = {}));
A.show();
