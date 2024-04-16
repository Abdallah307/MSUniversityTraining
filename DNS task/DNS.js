const DNSDatabase = {
  "https://www.sameer.com": "192.168.1.1",
  "https://www.hosam.com": "192.168.1.5",
  "https://www.kadeer.com": "192.168.1.20",
  "https://www.hameer.com": "192.168.1.88",
};

// function take parameter URL (string) and return the ip address of this URL

const getIpAddressOfURL = (URL) => {
  return DNSDatabase[URL];
};

console.log(getIpAddressOfURL("https://www.sameer.com"));
