# bookmarklets

ブックマークレット集とブラウザ登録用のコンパイルスクリプト

## ブックマークレットコンパイラーの使い方

```
$ bash bml-compiler.sh SOME-JS-FILE.js
-> javascript:(function(){const confirmStr = document ...
```

### on Mac

直接クリップボードへコピー

```
$ bash bml-compiler.sh SOME-JS-FILE.js | pbcopy
```