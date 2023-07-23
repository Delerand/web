function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "yt3.ggpht.com") || dnsDomainIs(host, "www.yt3.ggpht.com")) 
        return "PROXY 212.102.150.145:8000";
}
