# I built a self-hosted 2FA server so I don’t have to trust Google anymore [![4](https://static0.xdaimages.com/wordpress%2Fwp-content%2Fauthors%2F684843084e45f-1718179241749.jpeg?fit=crop&w=90&h=90)](/author/raghav-sethi/) Raghav is an author at XDA who began his writing career by contributing to his university's open-source blog. Since then, he has written for other major tech publications, including MakeUseOf, and holds a degree in Computer Science. When he's not writing, Raghav enjoys building AI apps, playing the guitar, and living life on the edge by installing beta software on his daily devices without giving it a second thought. I’ve been using Google Authenticator for as long as I can remember. It was one of those apps I installed once and never really questioned. Lately, [I have been de-Googling my life](https://www.xda-developers.com/de-googling-my-life-heres-how/), but there were still some services I hadn't gotten rid of yet. Of course, [using an authenticator app is much better than relying on SMS](https://www.xda-developers.com/4-reasons-you-should-use-2fa-apps-over-sms-based-authentication/), but the more I thought about it, the less comfortable I was with leaving something that critical in the hands of a company with a long history of killing off products without warning. Security aside, it just felt wrong to outsource something so sensitive to a platform I’m trying to move away from. So, instead of jumping to another third-party app, I figured I’d take a different approach. What if I just hosted my own? That’s when I found 2FAuth, an open-source alternative that you can fully self-host. It works with pretty much any service that supports TOTP and HOTP, and even supports Steam Guard codes, which is a great bonus. The setup is surprisingly straightforward, too, especially if you're already familiar with Docker or running local containers. ![Immich on Android phone and Macbook laptop](https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2025/03/immich-on-phone-and-macbook.jpg?q=49&fit=crop&w=220&h=182&dpr=2) Related ## Deploying 2FAuth with Docker ### Taking control without the headache ![2FAuth running on an iPhone with a MacBook in the background](https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2025/07/2fauth-running-on-a-phone.jpg?q=49&fit=crop&w=825&dpr=2) You can host 2FAuth using Docker by simply grabbing the provided Docker Compose file from the project’s [GitHub repository](https://github.com/Bubka/2FAuth/blob/master/docker/docker-compose.yml). The setup is fairly straightforward, but you’ll need to tweak a few things in the config before spinning it up. I’ll walk through the changes I made below. Out of the box, 2FAuth will run on localhost, which is fine if you just want to use it exclusively on the device you're hosting 2FAuth on. But let’s be honest, you’re going to want access to your codes on other devices, like your phone, too. That’s where a [reverse proxy](https://www.xda-developers.com/what-is-a-reverse-proxy-and-why-should-you-use-it-on-your-lan/) comes in, as you can then expose the service securely over your network or even the internet. The good news is that migration is just as easy. If you’ve been using Google Authenticator or any other MFA app that supports exporting, you can import your saved tokens directly into 2FAuth. And if you’re deploying it at home, you can even create multiple user accounts, so your family can manage their own tokens under one shared instance. Before deploying 2FAuth, though, you'll first need to make some changes to some environment variables in the compose file: \- SITE\_OWNER=mail@example.com \- APP\_KEY=SomeRandomStringOf32CharsExactly \- APP\_URL=http://your-server-ip:8000 \- ASSET\_URL=http://your-server-ip:8000 First, replace the "SITE\_OWNER" variable with your own email address. Then, set a 32-character string for "APP\_KEY". You can create one manually if you prefer, or generate a secure key by running the following command in your terminal: openssl rand -hex 16 After that, update the "APP\_URL" field with the IP address or URL where you want to access 2FAuth. Ensure that you use the same address for "ASSET\_URL" as well; otherwise, assets like images may not load correctly. Once everything is set, run the file using a composer, and 2FAuth should be up and running. ![Top docker containers for productivity](https://static0.xdaimages.com/wordpress/wp-content/uploads/2024/12/best-docker-containers-for-productivity.jpg?q=49&fit=crop&w=220&h=182&dpr=2) Related ## What it’s like using 2FAuth ### You're not missing out on anything The first time you open 2FAuth, it’ll prompt you to create a new account. This is the only account you’ll need to manage all your codes, and you can even secure it further by adding a YubiKey or biometric verification for login. Once that’s done, the interface is clean, simple, and does exactly what you expect from an MFA app, with a few added bonuses. You can start adding services by scanning the standard QR code you’d typically see when setting up 2FA on a site, the same code you’d scan with Google Authenticator or any other app. You also have the option to manually paste in the secret key if you prefer to set things up that way, or even upload a QR code image file if you’ve saved it from somewhere else. If you’re migrating from a previous app, importing your existing 2FA tokens is also fairly straightforward. As long as your old app supports export (Google Authenticator does), you can easily transfer your saved entries into 2FAuth. For Steam users, there’s a dedicated mode that lets you generate Steam Guard codes, saving you from needing the official Steam mobile app entirely. It even has a [browser extension](https://chromewebstore.google.com/detail/kokhpbhfeokchmbimdlaldcmlinjpipm?utm_source=item-share-cb) so that you can view and copy your OTP codes directly from your toolbar. There’s also something here for developers and tinkerers. If you're building something of your own, such as a dashboard or internal tooling, 2FAuth provides a RESTful API that you can use to generate, retrieve, or manage 2FA codes remotely. You’ll find the option to generate a secure API token in the Settings menu, and from there, you can automate or integrate it into your broader self-hosted stack. ![Why I use Bitwarden password manager](https://static0.xdaimages.com/wordpress/wp-content/uploads/2025/04/reasons-bitwarden-is-my-favorite-password-manager.jpg?q=49&fit=crop&w=220&h=182&dpr=2) Related ### 2FAuth does everything you need it to While the setup might take a few extra minutes, just like any self-hosted tool, it's a small price to pay for full control over your authentication data. You don't have to worry about apps being discontinued or your codes being tied to a platform you're moving away from. And once it's up, there's hardly any learning curve. The interface is simple, and it works great on mobile too. ![2FAuth logo](https://static0.xdaimages.com/wordpress/wp-content/uploads/2025/07/2fauth-logo.png?q=70&fit=contain&w=420&dpr=1) ##### 2FAuth ---------- Summerize and extract key point form the following blog

---

Here’s the blog distilled into a clean, practical summary with the key points pulled out.

---

# **Summary**

The author ditched Google Authenticator as part of a broader de-Googling effort and built a **self-hosted 2FA server using 2FAuth**, an open-source TOTP/HOTP system that runs entirely on your own hardware. The main motivation was long-term control, avoiding dependence on a company known for killing products, and keeping sensitive authentication data in-house.

**2FAuth** turned out to be simple to deploy, easy to migrate to, and feature-complete compared to mainstream authenticator apps. Running it in Docker makes setup painless, and with a reverse proxy, it can be securely accessed from any device on your LAN or remotely. It supports multiple users, imports from Google Authenticator, Steam Guard codes, and can even tie into other tools via a REST API.

Once deployed, the app behaves like a typical MFA manager: scan QR codes, paste secrets, or import your vault. The UI is straightforward, mobile-friendly, and can be secured with biometrics or a YubiKey. It also ships with a browser extension for quick OTP access.

The takeaway: **hosting your own 2FA system isn't complicated anymore**, and the added control and independence make it worth the small configuration overhead.

---

# **Key Points**

### **Why self-host 2FA?**

* Avoid depending on Google or other third-party platforms.
* Keep critical authentication data under your control.
* Escape the risk of product shutdowns or unwanted changes.
* Better fit for a privacy-focused or de-Googled workflow.

---

### **What is 2FAuth?**

* Open-source, self-hosted 2FA server.
* Supports **TOTP**, **HOTP**, and **Steam Guard** codes.
* Multi-user support for families.
* Available as a Docker container for easy deployment.

---

### **Deployment Notes**

* Grab the official **docker-compose.yml** from GitHub.
* Update key environment variables:

  * `SITE_OWNER` — your email
  * `APP_KEY` — 32-character random hex (`openssl rand -hex 16`)
  * `APP_URL` / `ASSET_URL` — base URL/IP where the service will run
* Use a **reverse proxy** (e.g., Traefik, Caddy, Nginx Proxy Manager) for secure LAN/remote access.
* Runs fine on typical home-lab setups (NAS, microserver, Pi, Docker host).

---

### **Migration & Use**

* Import tokens from Google Authenticator or any app that exports.
* Add new services via QR scan, manual key, or uploaded QR image.
* Optional: lock your login behind biometrics or a YubiKey.
* Has a **browser extension** for quick OTP code access.
* Includes a **REST API** for automation or integration with a self-hosted dashboard.

---

### **Overall Experience**

* Interface is clean, simple, and familiar.
* Mobile experience is solid.
* No major features missing compared to commercial authenticators.
* Worth the small setup time for full ownership of your 2FA secrets.

---

If you want, I can also write a **step-by-step setup guide for your own server**, tailored to your home-lab hardware (NAS + Docker stack) .
