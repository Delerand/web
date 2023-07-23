function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "twitter.com") || dnsDomainIs(host, "www.twitter.com")) 
        return "PROXY 212.102.150.145:8000";
}
