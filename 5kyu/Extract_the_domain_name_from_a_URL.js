/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

function domainName(url) {
   if (url.includes('//') && !url.includes('www')) {
      let first = url.split('//');
      let second = first[1].split('.')
      return second[0];
   }
   if (url.includes('www.')) {
      let first = url.split('.');
      return first[1];
   } else {
      let first = url.split('.');
      return first[0];
   }
}

// domainName("http://google.co.jp");
domainName("https://www.youtube.com");