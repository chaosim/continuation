var x, i, _$itmp_list, _$itmp;
x = [
  'A',
  15,
  4.67,
  true
];
_$itmp_list = [];
for (i in x) {
  _$itmp_list.push(i);
}
_$itmp = 0;
function _$loop_0(_$loop_0__$cont) {
  if (_$itmp < _$itmp_list.length) {
    i = _$itmp_list[_$itmp];
    console.log(x[i]);
    setTimeout(function () {
      ++_$itmp;
      _$loop_0(_$loop_0__$cont);
    }, 10);
  } else {
    _$loop_0__$cont();
  }
}
_$loop_0(function () {
});
/* Generated by Continuation.js v0.1.3 */