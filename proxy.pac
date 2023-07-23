var direct = 'DIRECT';
var proxy = 'PROXY 212.102.150.145:8000';

var site_list = [
	"spotify.com",
	"crunchyroll.com",
    	"tiktok.com"
];

var site = {};
for (var i = 0; i < site_list.length; i += 1) {
	site[site_list[i]] = true;
}

function hostToDomain(host) {
	var dotpos = host.lastIndexOf(".");
	if (dotpos === -1)
		return host;
	// Find the second last dot
	dotpos = host.lastIndexOf(".", dotpos - 1);
	if (dotpos === -1)
		return host;
	return host.substring(dotpos + 1);
};

function FindProxyForURL(url, host) {
	return site[hostToDomain(host)] ? proxy : direct;
};
