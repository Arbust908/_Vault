# AI with OpenWebUI + ComfyUI

This project sets up a local AI environment using OpenWebUI as a frontend for language models and ComfyUI for image generation workflows, orchestrated with Docker Compose.

## Tech Stack

*   **Frontend (LLM):** [Open WebUI](https://github.com/open-webui/open-webui) (formerly Ollama WebUI)
*   **Image Generation:** [ComfyUI](https://github.com/comfyanonymous/ComfyUI)
*   **Containerization:** [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)
*   **LLM Backend (Example):** [Ollama](https://ollama.ai/) (You'll need to run Ollama separately or add it to the Docker Compose)

## Getting Started

### Prerequisites

*   [Docker](https://docs.docker.com/get-docker/) installed and running.
*   [Docker Compose](https://docs.docker.com/compose/install/) installed.
*   (Optional but Recommended) An NVIDIA GPU with appropriate drivers and the [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) installed for GPU acceleration in ComfyUI.
*   (Optional) [Ollama](https://ollama.ai/) installed and running locally if you want OpenWebUI to connect to it directly without containerizing Ollama itself.

### Setup

1.  **Review `docker-compose.yml`:**
    *   Check the file in this directory.
    *   Adjust volume paths if necessary to persist data outside the containers on your host machine.
    *   Configure GPU access for ComfyUI if applicable (see comments in the `docker-compose.yml`).
    *   Note the ports used (e.g., `8188` for ComfyUI, `8080` for OpenWebUI).

2.  **Prepare ComfyUI Models (Optional but Recommended):**
    *   You might want to pre-download Stable Diffusion models (checkpoints, LoRAs, VAEs) and place them in a local directory that you can mount as a volume into the ComfyUI container (e.g., `./comfyui_models:/opt/ComfyUI/models`). This avoids downloading large files inside the container repeatedly. See ComfyUI documentation for model placement.

3.  **Configure OpenWebUI Backend:**
    *   By default, OpenWebUI will look for Ollama at `http://host.docker.internal:11434`. If you are running Ollama locally (not in Docker), this should work on Docker Desktop (Mac/Windows). On Linux, you might need to use your host's IP address.
    *   Alternatively, you can add an Ollama service to the `docker-compose.yml`.

### Running the Environment

1.  **Start the services:**
    Open a terminal in this directory (`Vault/01--Projects/AI with OpenWebUI + ComfyUI/`) and run:
    ```bash
    docker-compose up -d
    ```
    *(The `-d` runs the containers in detached mode)*

2.  **Access the UIs:**
    *   **OpenWebUI:** Open your browser to `http://localhost:8080` (or the port you configured). The first time, you'll need to create an admin account. Then, configure it to connect to your Ollama instance (either running locally or in another container).
    *   **ComfyUI:** Open your browser to `http://localhost:8188` (or the port you configured).

3.  **Stopping the services:**
    ```bash
    docker-compose down
    ```
    *(Use `docker-compose down -v` to also remove the volumes if you don't need to persist data)*

## Next Steps

*   Download LLMs via Ollama (e.g., `ollama pull llama3`).
*   Configure OpenWebUI to connect to Ollama and use the downloaded models.
*   Download Stable Diffusion models and place them in the appropriate ComfyUI model directories (either inside the container or via mounted volumes).
*   Create and experiment with workflows in ComfyUI.
*   Explore integrating the outputs (text from OpenWebUI, images from ComfyUI) for creative projects.
