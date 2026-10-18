ATLAS GM - HOW TO GET YOUR WINDOWS AND ANDROID APPS (free, no coding)

1. Unzip this project on your PC.
2. Make a free account at https://github.com
3. Click "+" (top right) > "New repository". Name it atlas-gm. Choose Public. Click Create repository.
4. On the new page click the link "uploading an existing file".
5. Open the unzipped folder, select EVERYTHING inside it (including the folder called .github) and drag it into the browser page. Wait for the upload, then click "Commit changes".
6. Check the repo shows a folder named .github. If it does NOT:
   click Add file > Create new file, type this as the name:  .github/workflows/build.yml
   open build-workflow-copy.yml from the project, copy all of it, paste it in, click Commit changes.
7. Click the "Actions" tab. A run called "Build apps" starts by itself. Wait about 10-15 minutes until it has a green check.
8. Click the finished run. At the bottom, under "Artifacts", download AtlasGM-Windows and AtlasGM-Android. Unzip them.

INSTALL
- Windows: run the "Atlas GM Setup ... .exe" (or the portable .exe, which needs no install). If Windows says "protected your PC", click More info > Run anyway (the app is unsigned because signing costs money).
- Android: send app-debug.apk to your phone, open it, and allow "install unknown apps" when asked.

If the Actions run shows a red X, open it, copy the error text and send it to me. I will fix it.
