var i;
i = 0;
function _$loop_0(_$loop_0__$cont) {
  if (i < 4) {
    setTimeout(function () {
      console.log(i);
      i++;
      _$loop_0(_$loop_0__$cont);
    }, 10);
  } else {
    _$loop_0__$cont();
  }
}
_$loop_0(function () {
  console.log('Done');
});
/* Generated by Continuation.js v0.1.3 */