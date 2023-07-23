function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "crunchyroll.com") || dnsDomainIs(host, "www.crunchyroll.com")) 
        return "PROXY 212.102.150.145:8000";
}