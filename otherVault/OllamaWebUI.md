# Setting Up Your TechDome AI Server 🎲

## Phase 1: Install Ollama (5 minutes)

**On your Gaming PC (Windows 11):**

1. **Download Ollama:**
   - Go to https://ollama.com/download
   - Click "Download for Windows"
   - Run `OllamaSetup.exe`
   - It installs as a Windows service (runs automatically on startup)

2. **Verify it works:**
   - Open Command Prompt or PowerShell
   ```bash
   ollama --version
   ```
   - You should see the version number

3. **Pull your first model (test):**
   ```bash
   ollama pull llama3.1:8b
   ```
   - This downloads ~4.7GB, takes a few minutes

---

## Phase 2: Install Docker Desktop (10 minutes)

**Why Docker:** Open WebUI runs best in Docker on Windows - cleaner, easier updates.

1. **Download Docker Desktop:**
   - Go to https://www.docker.com/products/docker-desktop/
   - Download for Windows
   - Install with default settings
   - **Restart your PC** when prompted

2. **Enable WSL2 backend** (should be default):
   - Docker Desktop → Settings → General
   - Check "Use WSL 2 based engine"

---

## Phase 3: Install Open WebUI (5 minutes)

**In PowerShell or Command Prompt:**

```bash
docker run -d -p 3000:8080 ^
  --add-host=host.docker.internal:host-gateway ^
  -v open-webui:/app/backend/data ^
  --name open-webui ^
  --restart always ^
  ghcr.io/open-webui/open-webui:main
```

**What this does:**
- `-d`: Runs in background
- `-p 3000:8080`: Maps port 3000 on your PC to container's 8080
- `--add-host`: Lets Docker container talk to Ollama on your Windows host
- `-v open-webui`: Persistent storage for your data
- `--restart always`: Auto-starts with Windows

**Test locally:**
- Open browser on your Gaming PC: http://localhost:3000
- Create your admin account (first user = admin)
- You should see the Open WebUI interface!

---

## Phase 4: Configure Open WebUI to Find Ollama

**In Open WebUI (still on gaming PC):**

1. Click your profile icon (bottom left) → **Settings**
2. Go to **Admin Panel** → **Settings** → **Connections**
3. Set **Ollama API URL** to: `http://host.docker.internal:11434`
4. Click **Save**
5. Go back to main chat - you should see `llama3.1:8b` in the model dropdown!

---

## Phase 5: Install Tailscale (15 minutes)

### On Gaming PC (Windows):

1. **Download Tailscale:**
   - Go to https://tailscale.com/download/windows
   - Install `tailscale-setup.exe`
   - Sign up/login (free tier is perfect for personal use)
   - Use Google/GitHub/Microsoft account

2. **Note your Tailscale IP:**
   - Click Tailscale icon in system tray
   - Look for IP like `100.x.x.x` - **write this down!**
   - Example: `100.101.102.103`

3. **Allow in Windows Firewall:**
   - Open Windows Defender Firewall
   - Click "Allow an app through firewall"
   - Find "Docker Desktop" - check both Private and Public ✓
   - Or manually add rule for port 3000:
     ```
     Settings → Windows Security → Firewall → Advanced settings
     → Inbound Rules → New Rule → Port → TCP 3000 → Allow
     ```

### On Mac Mini M4:

1. Download Tailscale from https://tailscale.com/download/mac
2. Install and login with **same account**
3. It auto-connects to your network

### On iPhone & iPad:

1. Install **Tailscale** app from App Store
2. Login with **same account**
3. Enable VPN (one tap)

---

## Phase 6: Access from Other Devices 🎉

**On Mac Mini, iPhone, or iPad:**

1. **Connect to Tailscale** (enable VPN)
2. **Open Safari/browser** and go to:
   ```
   http://100.x.x.x:3000
   ```
   *(Replace with YOUR Gaming PC's Tailscale IP)*

3. **Login** with the account you created earlier
4. **Start chatting!**

**Bookmark it!** On iPhone/iPad, add to Home Screen for app-like experience.

---

## Phase 7: Download More Models (Optional)

**Back on Gaming PC:**

```bash
# Your beast models:
ollama pull llama3.1:70b-instruct-q5_K_M    # Main workhorse (~40GB)
ollama pull mistral:7b                       # Quick responses
ollama pull deepseek-coder:33b              # Coding help
ollama pull nomic-embed-text                 # For RAG embeddings

# These take time - maybe run overnight for 70B
```

**Check what's running:**
```bash
ollama list
```

---

## Phase 8: Set Up RAG for DnD Documents

**In Open WebUI (from any device now!):**

1. Click the **📚 Knowledge** icon (left sidebar)
2. Click **"+ New Collection"**
3. Name it: "DnD Campaign" (or whatever)
4. **Upload your files:**
   - PDFs, Word docs, text files, markdown
   - Character sheets, campaign notes, world lore
5. Click a chat → **"+"** icon → **Select Collection**
6. Now your chat can reference all those documents!

**Pro tip:** Create separate collections:
- "DnD Rules" (official rulebooks)
- "My Campaign" (your story/NPCs)
- "Character Builds" (optimization guides)

---

## Phase 9: Configure Web Search (Optional)

For internet search in your chats:

1. **Open WebUI Settings** → **Admin Panel** → **Settings**
2. Go to **Web Search** section
3. Enable **SearXNG** or **DuckDuckGo** (simpler)
4. For DuckDuckGo: Just enable it!
5. For SearXNG: You'd need to run another Docker container (I can help with this if you want)

---

## Quick Troubleshooting

**Can't access from iPhone/Mac?**
- Make sure Tailscale is connected (green)
- Check Windows Firewall allows port 3000
- Verify gaming PC isn't sleeping (Power settings → Never sleep)

**Ollama models not showing?**
- Check Ollama API URL: `http://host.docker.internal:11434`
- Restart Open WebUI container: `docker restart open-webui`

**Slow performance?**
- For 70B models, first inference is slow (loading to RAM)
- Subsequent responses much faster
- Check Task Manager - GPU should show "CUDA" activity

---

## Your Final URLs

- **Local (Gaming PC):** http://localhost:3000
- **Tailscale (anywhere):** http://100.x.x.x:3000
- **Mac Mini (wired):** Also use Tailscale URL for consistency

---

**You're done!** You now have a private, GPT-4-class AI that:
- Runs locally on your hardware
- Accessible from all your devices
- Can search the web
- Knows your DnD campaign inside-out
- No monthly fees, no data sharing

Want help with anything specific, like setting up automated model switching or creating custom system prompts for your DM assistant? 🎲