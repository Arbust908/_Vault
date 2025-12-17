Summerize and extract key point form the following blog ---------- # Paperless-ngx is already great, but here's how to make it even better with a local LLM [![4](https://static0.xdaimages.com/wordpress%2Fwp-content%2Fauthors%2F627baa12c34aa-abhi%20%281%29%20%281%29.png?fit=crop&w=90&h=90)](/author/abhishek-kumar-mishra/) Abhishek is an author at XDA who covers computing. He has loved computers since he got the Lenovo G570 in 2012. Abhishek holds a master's degree in computer applications and began his writing career in 2018. He loves writing how-to articles, listicles, and informational posts on popular operating systems and web services. He closely follows the Windows Insider program and tests new Insider builds to discover upcoming experimental features and upgrades. His past work includes long-term collaborations with reputed publications like [Tom's Hardware](https://www.tomshardware.com/author/abhishek-mishra), and [Windows Latest](https://www.windowslatest.com/author/abhishek/). When not writing anything, he is busy watching new episodes of One Piece or searching for something binge-worthy. Paperless-ngx is a great way to consolidate all your documents, both physical and digital, into one secure location. I have experimented with it in the past, and the results were pretty good considering the effort it takes to pull off such a thing. You can map categories, and finding files becomes insanely simple afterward. But what if you could supercharge an already great software like Paperless-ngx with an LLM? There are several options that can integrate with your setup and use an LLM like OpenAI or Ollama to become a powerful assistant. I used Paperless AI for this self-hosted project, which worked flawlessly with all my documents stored in the [Paperless-ngx setup](https://www.xda-developers.com/host-paperless-ngx-on-your-home-lab/). It requires a little extra effort to deploy Paperless AI, which is actually the core of this project. Without further ado, let's look at how you can deploy this AI supercharged project on your system. ![NotebookLM on an iPad ](https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2025/07/notebooklm-on-an-ipad-1.jpg?q=49&fit=crop&w=220&h=182&dpr=2) Related ## Setting up all the necessary services Using Paperless-ngx isn’t complicated if you pick up a Linux system. I first tried to set it up on a Windows 11 system but soon gave up and jumped ship to an Ubuntu instance running on [Windows Subsystem for Linux](https://www.xda-developers.com/i-tried-multiple-linux-distros-on-wsl-these-are-the-best-5/) (WSL 2). Yes, I had to resort to virtualization because the main PC is powerful enough with an NVIDIA RTX 3060 GPU, which is essential for better performance with a local LLM. I didn’t try using Paperless AI without a GPU, but I wouldn’t mind giving it a go sometime later. Also, WSL 2 recognized my GPU instantly, while you would have to make more efforts to get it working on VMware. Firstly, you must have Docker installed and set up correctly. I went with [Dockge](https://www.xda-developers.com/forget-portainer-simple-tool-dockge/) for this project, which made it incredibly easy to create a stack comprising Paperless-ngx, Paperless AI, and other necessary elements. Before doing so, you must install a Local Language Model (LLM) on your system. I chose Ollama for this project, and all you need to do is run the Curl command listed on the official Ollama website to begin the installation. It won’t download models by default, so you must download one manually. curl -fsSL https://ollama.com/install.sh | sh I used Llama2, a fairly recent iteration, which you can install by running the **ollama run llama2** command. It will take a while, depending on the size of the LLM you picked for the Paperless AI setup. You can test if the model is functioning by running the same command again, which will then ask for a prompt. I asked it to "create a poem on Goku", and it spun it up pretty quickly. Going back to the stack I mentioned, you can use the compose files listed on the official [Paperless-ngx repository](https://github.com/paperless-ngx/paperless-ngx/tree/main/docker/compose). I used the one with Postgres, but you have other options too. Copy the file contents to Dockge and then edit the volume attribute to a different folder than media if you prefer it that way. Also, add the [compose file contents of Paperless AI](https://github.com/clusterzx/paperless-ai/blob/main/docker-compose.yml) below the stack you’re trying to create. Paste the contents of the official **ENV** file into the next section in Dockge and hit **Deploy**. Let’s move to the configuration part. ![Running multiple containers inside Portainer](https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2025/01/portainer-containers-2.jpg?q=49&fit=crop&w=220&h=182&dpr=2) Related ##### [You can manage your self-hosted containers like a pro with Portainer - here's how](/portainer-guide/ "You can manage your self-hosted containers like a pro with Portainer - here's how") Need a beginner-friendly GUI that's laden with all the essential features to manage your containers? Portainer has your back! ## Configuring Paperless-ngx to work with Paperless AI ### Integrating the trio First, log in to the Papeless-ngx webUI using the **URL:portnumber** combo. Alternatively, you can click on the port number in the Dockge stack to redirect to the web UI. Sign up to access the dashboard and then click on **Settings**. We need to create an authorization token for Paperless AI to access it. Click on the **Open Django admin** button and then click (**+**) next to the **Auth Token field**. Pick your username from the list and hit **Save** to generate the token. Copy it and then launch the Paperless AI web UI (**yourIP:3000**). Sign up and enter the API token you copied before, followed by your Paperless-ngx username. Next, set up the AI part with Ollama as your LLM and specify the model name. I used llama2, so I’ll enter that. Lastly, change the auto-scan time to **one** minute for faster analysis and **enable AI processing** and all the features you want. Hit **Save**, and then the dashboard appears. ![Inside the Home Assistant Voice PE box](https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2025/05/home-assistant-voice-pe-box-open.jpg?q=49&fit=crop&w=220&h=182&dpr=2) Related ## The AI advantage ### Manual processing, search, chat, and more If you're using a new instance like me, you have to upload some documents to Paperless-ngx before you can see the AI in action. You can do so with the help of the upload button in the right corner to feed some files to your system. Since we've set up automatic AI processing beforehand, you don't need to do anything else. Wait for Paperless AI to recognize and process these documents, and it'll reflect on the dashboard's Home page. After the processing completes, switch to the **Documents** section in Paperless-ngx, and you'll notice an **AI processed** tag on each document along with the other tags that Paperless-ngx adds on its own. Setting up this tagging system during setup lets you know which files are analyzed and which ones need manual effort. Now, switch to the Paperless AI dashboard again and choose the **Chat** option this time. Here, you can pick any analyzed documents and chat with the AI about them. For example, I asked about the falling material rate, and it gave a quick summary of the document. Or when I asked about the ticket fare from a train ticket invoice, it did it perfectly. If the per-document option isn't for you, try the **RAG chat** feature. It lets you query anything from the processed documents collection without manually selecting a file. So, you can ask the same questions without remembering a filename, and it'll try to find context and the source of your query. You can also view the analyzed document history and even enable/disable AI features in the settings. ![Accessing Papra from a MacBook](https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2025/07/papra-15.jpg?q=49&fit=crop&w=220&h=182&dpr=2) Related ### Turbocharge Paperless-ngx with a local LLM Paperless can already gather a lot of details from your documents using OCR and make them searchable. However, using an LLM with it can help you search in a natural language rather than using specific keywords. If you don’t have an OpenAI subscription, you can host a local LLM on your system. The latter needs a powerful machine, but it will improve the way you handle and sift through your documents.

---

Here’s a clean, practical summary of the blog — no fluff, just the core ideas and key takeaways.

---

# **Summary: Supercharging Paperless-ngx with a Local LLM**

The article walks through integrating **Paperless-ngx** (a self-hosted document management system) with **Paperless AI** and a **local LLM** (Ollama + Llama2) to add real natural-language search and contextual chat on top of your documents.

The author sets everything up on **WSL 2 with an NVIDIA GPU**, using **Docker (via Dockge)** to run the whole stack.

---

# **Key Points**

### **1. Why add an LLM to Paperless-ngx?**

* Paperless-ngx already handles OCR and tagging.
* With an LLM, you get:

  * Natural-language queries (“What’s the train fare on this invoice?”)
  * Chat about specific documents
  * RAG across all your documents (search without precise filenames)
  * Automatic AI processing tags

---

### **2. System Setup**

* The author first tried Windows native → gave up → switched to **Ubuntu via WSL2** because it supports GPU passthrough easily.
* GPU is recommended for local LLM inference (RTX 3060 in their case).

---

### **3. Required Components**

* **Docker** (managed with Dockge)
* **Paperless-ngx** (via official docker-compose)
* **Paperless AI** (additional docker-compose)
* **Ollama** as the local LLM host
* **A downloaded LLM** (e.g., `llama2`)

---

### **4. Installing the LLM**

* Install Ollama:

  ```sh
  curl -fsSL https://ollama.com/install.sh | sh
  ```
* Download a model:

  ```sh
  ollama run llama2
  ```
* Validate with a prompt.

---

### **5. Building the Docker Stack**

* Use Paperless-ngx’s official compose file.
* Append the Paperless AI compose section.
* Adjust volume paths if needed.
* Add environment variables from the Paperless AI `.env`.
* Deploy the stack in Dockge.

---

### **6. Connecting Paperless-ngx and Paperless AI**

* Log in to Paperless-ngx → Settings → Django admin.
* Create an **Auth Token** for Paperless AI.
* Log in to Paperless AI → paste token → enter Paperless username.
* Configure:

  * LLM provider: **Ollama**
  * Model name: `llama2`
  * Auto-scan interval: **1 min**
  * Enable AI features.

---

### **7. How the AI Features Work**

Upload documents → wait a minute → Paperless AI processes them.

You get:

* **AI Processed** document tags in Paperless-ngx.
* **Chat** with individual documents.
* **RAG Chat** across *all* processed documents.
* Automatic extraction of relevant info (summaries, values, details).
* A processing history UI.

---

### **8. Bottom Line**

Using a **local LLM** turns Paperless-ngx into a much smarter document hub:

* Natural language search (not keyword-bound)
* Local, private AI processing
* Faster sorting and understanding of stored files

Downside: needs a decent machine, ideally with GPU.

---

If you want, I can also produce:

* A minimal “how to replicate this setup” guide
* A Docker Compose bundle optimized for your hardware
* A version tailored to run on your Asustor NAS or your home server (you have suitable hardware: dual 2.5GbE, SSDs, but CPU is limited)
