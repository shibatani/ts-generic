// 文字列を入力するとその文字列が3つ入った配列を返す関数
function stringToArray(str: string): string[] {
  return [str, str, str];
}

stringToArray("こんにちは");

// さらにnumber型を許容
function stringOrNumberToArray(
  strOrNumber: string | number
): (string | number)[] {
  return [strOrNumber, strOrNumber, strOrNumber];
}

stringOrNumberToArray(1);

// さらにnobject型&数値の配列を許容したいけど冗長すぎない‥
// ジェネリックで解決したろ
function someTypeToArray<T>(arg: T): T[] {
  return [arg, arg, arg];
}

console.log(someTypeToArray({ hoge: 1 }));
