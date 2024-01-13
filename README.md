A form for editing details of an AI-generated, slideshow video.

Details include

1. User-entered prompt.
2. User submits prompt to receive an array of scenes.
    - Title
    - Narration
    - Bullet points
    - Backgrounds (user gives prompt, receives array of suggested values from the api, then picks one)
3. User edits and submits info to receive video from API.

Full user workflow is:
1. Enter prompt.
2. Hit `Generate Scenes` button.
3. For each scene:
    1. Edit title, narration, and bullet points as text fields.
    2. Hit `Generate Audio` button.
    3. Select background from suggested list.
    4. Hit `Generate Scene` button.
4. Hit `Generate Video` button.

The minimum user workflow is:
1. Enter prompt.
2. Hit `Generate Scenes` button.
3. Hit `Generate Video` button.