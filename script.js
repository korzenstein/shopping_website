// const decode = (str) => {
//   if(!str) return "";
//   let breakdown = str.split("")
//   .map(element => (element > 0 ? (element++).repeat(element) : element))
//   .join('')
//    return breakdown;
// };
// console.log(decode('3thet4h9e5hh'))

// function decode(encoded) {
//     let uncompressed = []
//     let breakdown = encoded.split("")
//     breakdown.map((element, ind) => {
//       if (ind % 2 === 0) {
//         uncompressed.push(...Array(element).fill(encoded[ind + 1]));
//       }
//     });
  
//     return uncompressed.join('');
//   }
//   console.log(decode('5H3H'))
  
// WINNING CODE 
  // function decode(str) {
  //   if (/^[A-Za-z\s]*$/.test(str)) return str;
  //   if (!str) return "";

  //   let uncompressed = []
  //   let breakdown = str.split("")
  //   breakdown.map((element, ind) => {
  //     if (element > 0) {
  //       uncompressed.push(...Array(element).fill(str[ind + 1].repeat(element)));
  //     }
  //   });
  
  //   return uncompressed.join('');
  // }
  // console.log(decode('HH HH'))


  let total = 0;
  let buttonAdds = Array.from(document.getElementsByClassName('btn-add'))
  let buttonSubs = Array.from(document.getElementsByClassName('btn-add'))
  let counts = Array.from(document.getElementsByClassName('count'))

  // buttonAdds.innerHTML.ForEach(function(button) {
  //   console.log(button)
  // })
  // console.log(buttonAdds[1])
  console.log(counts.innerText)



  

  console.log(buttonAdds)
  

  // FUNCTIONALITY

  const counterAdd = () => {
    total = total + 1;
    counts = total;
  }

  const counterSub = () => {
    total = total - 1;
    counts = total;
  }


  
  buttonAdds[0].addEventListener('click', counterAdd);
 
