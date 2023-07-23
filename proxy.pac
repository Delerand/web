function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "quorra.com") || dnsDomainIs(host, "www.quorra.com")) 
        return "PROXY 212.102.150.145:8000";
}
