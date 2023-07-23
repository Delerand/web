function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "instagram.com") || dnsDomainIs(host, "www.instagram.com")) 
        return "PROXY 212.102.150.145:8000";
}