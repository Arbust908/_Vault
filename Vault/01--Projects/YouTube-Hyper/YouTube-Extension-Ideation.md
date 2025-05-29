# YouTube Extension Ideation

## Introduction

This document outlines the initial ideas for a Chrome extension designed to enhance the YouTube experience with features not currently available on the platform.

## Features

### Block Video

*   **Description:** Allow users to block specific videos from appearing in their recommendations, search results, and homepage.
*   **Implementation Notes:**  Consider using a blacklist approach, storing blocked video IDs locally or in cloud sync.
*   **Potential Challenges:**  Circumventing YouTube's algorithm to effectively hide blocked videos.

### Block Channel

*   **Description:** Enable users to block entire channels from appearing in their recommendations, search results, and homepage.
*   **Implementation Notes:** Similar to "Block Video," but operate on channel IDs.
*   **Potential Challenges:**  Handling channels with multiple associated accounts.

### Playlist De-dupe

*   **Description:** Automatically identify and remove duplicate videos within a user's YouTube playlists.
*   **Implementation Notes:**  Compare video IDs within playlists. Provide options for automatic or manual removal.
*   **Potential Challenges:**  Handling different playlist formats and potential false positives.

### Main Feed Subscriber Badge

*   **Description:** Display a badge or indicator next to channels in the main feed to indicate whether the user is subscribed.
*   **Implementation Notes:**  Access YouTube API to check subscription status.
*   **Potential Challenges:**  API rate limits and maintaining accurate subscription information.

## Future Ideas

*   Advanced filtering options for the main feed (e.g., by topic, upload date).
*   Customizable themes and appearance.
*   Integration with other services (e.g., Discord, Reddit).
*   Download videos in various formats.

## Tech
wxt