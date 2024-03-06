function convertHTML(str) {
  const obj = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" };
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (Object.keys(obj).includes(str[i])) {
      newStr += obj[str[i]];
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

// Test cases
console.log(convertHTML("Dolce & Gabbana")); // Dolce &amp; Gabbana
console.log(convertHTML("Hamburgers < Pizza < Tacos")); // Hamburgers &lt; Pizza &lt; Tacos
console.log(convertHTML("Sixty > twelve")); // Sixty &gt; twelve
console.log(convertHTML('Stuff in "quotation marks"')); // Stuff in &quot;quotation marks&quot;
console.log(convertHTML("Schindler's List")); // Schindler&apos;s List
console.log(convertHTML("<>")); // &lt;&gt;
console.log(convertHTML("abc")); // abc
