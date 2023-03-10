


function andragradsekvation() {
    let a = parseFloat(prompt("Skriv in värdet på a: "));
    let b = parseFloat(prompt("Skriv in värdet på b: "));
    let c = parseFloat(prompt("Skriv in värdet på c: "));
  
    let diskriminanten = b * b - 4 * a * c;
  
    if (diskriminanten < 0) {
      console.log("Ekvationen har inga reella lösningar.");
    } else if (diskriminanten == 0) {
      let x = -b / (2 * a);
      console.log(`Ekvationen har en dubbelrot: x = ${x}`);
    } else {
      let x1 = (-b + Math.sqrt(diskriminanten)) / (2 * a);
      let x2 = (-b - Math.sqrt(diskriminanten)) / (2 * a);
      console.log(`Ekvationen har två rötter: x1 = ${x1}, x2 = ${x2}`);
    }
  }
  
  // Anropa funktionen
  andragradsekvation();
  