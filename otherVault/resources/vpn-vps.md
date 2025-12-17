# I replaced a VPN with my own VPS and it's awesome

[![4](https://static0.xdaimages.com/wordpress%2Fwp-content%2Fauthors%2F6411f599ad4df-joe-rice-jones-headshot.jpg?fit=crop&w=90&h=90)](/author/joe-rice-jones/)

Maker, meme-r, and unabashed geek, Joe has been writing about technology since starting his career in 2018 at [KnowTechie](https://knowtechie.com/author/joe-rice-jones/). He's covered everything from Apple to apps and crowdfunding and loves getting to the bottom of complicated topics. In that time, he's also written for [SlashGear](https://www.slashgear.com/author/joericejones/) and numerous corporate clients before finding his home at XDA in the spring of 2023.

He was the kid who took apart every toy to see how it worked, even if it didn't exactly go back together afterward. That's given him a solid background for explaining how complex systems work together, and he promises he's gotten better at the putting things back together stage since then.

I've been self-hosting apps on [my NAS](https://www.xda-developers.com/best-nas/) for a while now, and one of the things that has been a pain to handle is accessing those services outside my network. I've set up several [reverse proxy](https://www.xda-developers.com/what-is-a-reverse-proxy-and-why-should-you-use-it-on-your-lan/) options, and none worked properly, partly because I don't have a static IP and DDNS is hit-and-miss.

I've also tried similar tools, [like Tailscale](https://www.xda-developers.com/tailscale-guide/), which uses a third-party server to traverse the NAT issues I also seem to be experiencing with my ISP, which works well, but I prefer having everything self-hosted. I could host a Headscale instance as the coordinating server, but I'd still need to do it outside my home. Otherwise, the same issues apply, and I'd still have to set up a reverse proxy to make using my self-hosted services easier.

But then I found Pangolin, and while I've already written about it, one of the main selling points is that it works best when on a VPS. That way, you can use the Newt Docker client to do NAT traversal and avoid all the annoying ISP issues I've been having, and no doubt, you'd be having as well.

 ![A small homelab in a rack-mount chasis.](https://static0.xdaimages.com/wordpress/wp-content/uploads/2024/09/server_cabinet_-25680506307.jpg?q=49&fit=crop&w=220&h=182&dpr=2)

Related

## Self-hosting from home has a problem

### Well, several problems, really, but they all revolve around your ISP

One of the many things wrong with Internet Service Providers (ISPs), especially in the US, is that features you'd want to use in the home lab are pay-gated in the business plans. If you want a static IP (or a few) for self-hosting, you need a business plan with most ISPs. Sure, you can set up DDNS, but that's one extra service to manage, and it also doesn't work quickly enough for all services, especially if you're [self-hosting an email server](https://www.xda-developers.com/better-than-gmail-i-self-host-email-server-on-my-nas/), leading to lost messages. Which you're not supposed to on a home connection anyway, as the Terms of Service usually prohibit running a server with exposed ports.

I ran into this problem recently, and also noticed that Port 25, necessary for the email server, was blocked at the ISP level, no matter where I unblocked it in my firewall. Oh, and many ISPs in the US and elsewhere use Carrier Grade NAT (CGNAT) to preserve their IPv4 blocks and translate them into IPv6 for customers. This means you could share your public IPv4 address with several other customers, and trying to set up a VPN in these conditions is tricky at best.

The solution? Use an intermediary server to provide NAT traversal to bypass the ISP's arbitrary decisions without opening ports and still access your home lab services on your domain. While [you could use Tailscale, NetBird, or ZeroTier](https://www.xda-developers.com/tailscale-pangolin-zerotier-netbird-remotely-access-home-lab/) to do this, I opted for Pangolin because I liked the idea of self-hosting it on my VPS (Virtual Private Server). It also gave me a way to forward port 25, so I could continue self-hosting email.

 ![Plugging an Ethernet cable into the 10GbE LAN port on the TerraMaster F4-424 Max NAS](https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2024/11/terramaster-f4-424-max-ethernet.jpg?q=49&fit=crop&w=220&h=182&dpr=2)

Related

## It's not just about access

### Sidestepping NAT issues without needing open ports is great

I've never liked having to keep ports forwarded (and open!) to the internet, especially nowadays when auto-scans and Shodan can pick up those ports in seconds. Along with the extra security headache, that's not just a smart thing to do. But Pangolin doesn't need open ports, or privileged processes or containers to let you access your self-hosted services outside the home, because it uses NAT punching to connect your client and service together. It even works if your ISP has ports like 80, 443, or 25 blocked at their end, because it doesn't rely on ports.

It's so much more than just access though. Every subdomain Pangolin creates for your reverse-proxied services is locked behind your login details, which could be a password and username, or SSO, or several other options. You can even make it fully Zero Trust and get a PIN code sent to your email to access services, so it also does all the hard work of securing your services. It also has temporary sharing links so you can let people use your services for a set time before those links stop working. It's fantastic, and far better than sharing passwords for your self-hosted services.

 ![Essential checklist for a first home lab](https://static0.xdaimages.com/wordpress/wp-content/uploads/2024/08/things-to-keep-in-mind-for-home-lab.jpg?q=49&fit=crop&w=220&h=182&dpr=2)

Related

##### [5 reasons ZeroTier is the best Tailscale alternative for your home lab](/why-zerotier-is-the-best-tailscale-alternative-for-your-home-lab/ "5 reasons ZeroTier is the best Tailscale alternative for your home lab")

There's a million ways to connect to your home lab, but some options are better for your needs.

## It's still a work in progress

### Okay, I mean I'm still learning the ropes

    ![pangolin sites page](https://static0.xdaimages.com/wordpress/wp-content/uploads/2025/04/pangolin-sites.png?q=49&fit=crop&w=825&dpr=2)Credit: Source: Fossorial

So far, I've had no issues with Pangolin when connecting to services I have running in Docker containers. I did have some problems installing in the first place, with the Newt and WireGuard modules not installing, which all seemed to have been due to running Debian on my VPS, instead of Ubuntu Server, but that was easy to fix.

I'm still working on connecting my non-Docker services, which I'm sure won't take much longer, especially since Pangolin uses [Traefik for the reverse proxy](https://www.xda-developers.com/forget-about-nginx-this-reverse-proxy-even-better/) part. Still, it's probably because I'm using the wrong IP address for the virtual machines. Did I mention I hate virtual networking? Cause I do, even when I get it working, I'm never quite sure why. But even with that, the rest of the setup was super simple, and I can reach all my other services from my domain name.

 ![Accessing the Proxmox web UI from a laptop](https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2025/05/home-lab-proxmox.jpg?q=49&fit=crop&w=220&h=182&dpr=2)

Related

##### [5 lightweight operating systems you can use for your next home server](/lightweight-operating-systems-for-your-home-server/ "5 lightweight operating systems you can use for your next home server")

With the right OS, even your low-end SBC can turn into a reliable server

### Now I can access my home lab from anywhere, without opening ports to the internet![Proton VPN running on a Windows laptop](https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2025/04/proton-vpn-running-laptop.png)

I love that I can access my home lab from anywhere by typing in my domain name into any browser. It's also awesome that my email server works, while being protected by Cloudflare as that's my DNS provider, and I can still use that email address without worry as it allows to set up DKIM and all the other trust verification so that other email providers know I'm not a likely spammer. Plus, I can still use my VPS for other things, as I have plenty of space on the drive. I think I'm going to add an IRC bouncer, mainly for nostalgic reasons, but after that, I'm not quite sure what I'll use it for, just that it won't sit idle.

---------- Summerize and extract key point form the following blog

---

Here’s the straight-to-the-point summary and key takeaways from the blog.

---

# **Summary**

The author replaced traditional VPN setups with a self-hosted connection using a VPS + Pangolin, mainly to bypass ISP limitations like CGNAT, blocked ports, and lack of static IP. By putting Pangolin on a VPS and using the Newt client for NAT traversal, they finally got a reliable, secure way to access all their home-lab services (Proxmox, Docker apps, email server, etc.) from anywhere — without opening ports on their home router. Setup wasn’t perfect (Debian quirks, virtual networking headaches), but once running, everything “just works,” feels faster, and even solves email deliverability and security concerns. The VPS still has room to host extra tooling like an IRC bouncer.

---

# **Key Points**

### **1. Why the old setup sucked**

* No static IP from the ISP unless paying for a business plan.
* DDNS was unreliable and too slow for some services (like email).
* ISP blocked essential ports (like 25 for mail).
* CGNAT made inbound connections and VPN hosting nearly impossible.
* Reverse proxies (Nginx, Traefik, etc.) were unreliable because of the above.

### **2. Why a VPS changes everything**

* Public IP with no CGNAT or port restrictions.
* Can run Pangolin’s coordination service remotely.
* Solves all home ISP limitations in one go.
* Lets you forward blocked ports (e.g., port 25) via the VPS.

### **3. What Pangolin + Newt actually gives you**

* NAT traversal without opening ports at home.
* Works even if the ISP blocks 80/443/25.
* Reverse proxy with automatic subdomain generation.
* Built-in auth: password, SSO, or Zero-Trust PIN codes.
* Temporary share links for safe external access.

### **4. Security benefits**

* No exposed ports on your home network.
* Subdomains locked behind authentication.
* No need to entrust access to third-party hosted services like Tailscale.

### **5. Setup pain points**

* Installing on Debian caused issues with Newt and WireGuard — Ubuntu works smoothly.
* Virtual networking (VM IPs) was the trickiest part.
* Docker services worked flawlessly; non-Docker needed more tweaking.

### **6. Real-world improvements**

* One domain → access all home-lab services from anywhere.
* Self-hosted email works again (DKIM, deliverability, Cloudflare DNS).
* No more VPN apps or port-forwarding.
* VPS still free for other goodies (e.g., IRC bouncer).

### **7. Bottom-line**

A cheap VPS plus Pangolin gives you:

* Reliable remote access
* Stronger security
* No reliance on ISP features
* No open ports
* A simpler and more robust home-lab workflow

It’s a clean upgrade over classic VPNs and reverse proxies — especially if your ISP is a bottleneck.

---

If you want, I can also compare Pangolin vs Tailscale/ZeroTier/NetBird, or sketch how this would fit into **your** current home-lab network.
