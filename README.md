# IlmiSpark - local working demonstration

This is the complete source for the browser prototype used in the supporting-evidence PDF. It uses HTML, CSS and JavaScript. The planned React, TypeScript and Tailwind CSS rewrite is not included or claimed to be complete.

## Run on Windows

1. Extract this ZIP (right-click > Extract All). Do not run files from inside the ZIP.
2. Ensure Node.js 18 or newer is installed.
3. Open the extracted IlmiSpark_Prototype folder in VS Code.
4. Open Terminal > New Terminal and run:

   npm start

5. Open http://127.0.0.1:4173 in Chrome or Edge.
6. Keep the terminal open. Press Ctrl+C to stop the server.

No npm install, database installation, API keys or paid services are required. You can also double-click Start_IlmiSpark.bat after installing Node.js, then open the address printed in its window.

Do not double-click public/index.html: use the local server so browser storage and service-worker features have a suitable origin.

## Publish on GitHub Pages

This project includes a GitHub Actions workflow that publishes the `public` folder as a static GitHub Pages site. The Node server is not used by GitHub Pages.

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings > Pages** and set **Source** to **GitHub Actions**.
3. Wait for the **Deploy to GitHub Pages** workflow to finish under the **Actions** tab.
4. Open the URL shown by the workflow (usually `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`).

The app stores records in the browser's IndexedDB. Each browser, device and deployed site has separate records; GitHub Pages does not provide cloud sync or a database. Use fictional learner codes only.

## Included files

- public/index.html: application shell and navigation
- public/style.css: responsive layout and print styles
- public/app.js: class setup, topic assessments, local storage, revision and progress logic
- public/sw.js: application caching and network-failure fallback
- server.cjs: dependency-free, local-only Node HTTP server
- package.json: npm start and npm run dev commands
- Start_IlmiSpark.bat: Windows launcher
- .github/workflows/deploy-pages.yml: GitHub Pages deployment workflow

## Five-minute demonstration

1. Overview starts with 10 fictional learners and baseline fractions scores.
2. My classroom: add a unique learner code. Use fictional data only.
3. Assessments: edit marks (0-2 per topic), click Save assessment, then reload to check persistence.
4. Revision studio: review topic groups and select an activity. Selection is retained after reload.
5. Assessments: select Reassessment and enter L01 and L02 scores as 2, 2, 1 each. Save.
6. Learning progress: the original sample baselines for L01/L02 produce 25% baseline, 83% reassessment and +58 percentage points across six matched scores. This is a software test, not real improvement evidence.
7. Export backup downloads the current class as JSON. An import interface is not implemented.

## Storage and offline limitations

Records live in IndexedDB in this browser profile at this exact address. Different browsers, profiles, hostnames or ports have separate records. Clearing site data deletes records. Export backups before clearing data.

The service worker caches the application after the first successful load. Disconnected reopening still needs user-device verification; do not claim complete offline reliability from the code alone. To test locally, first load and reload the app while the server is running, stop the server, then reload the page and check the workflow. Record any failures.

This is a development server, bound to your own computer; it is not a public hosting service. When changing cached files, you may need to unregister the service worker in browser developer tools and reload. Avoid clearing IndexedDB if you wish to retain records.

## Verification already performed

- JavaScript syntax checks passed.
- Selected desktop browser tasks passed: score edit/save/reload; revision selection persistence; learner creation and duplicate-code rejection; matched reassessment calculations and persistence.
- No teacher or learner testing has occurred. Full offline, mobile, printing, accessibility and security testing remain outstanding.

## Important development boundaries

Only use fictional learner codes and sample marks. There is no staff login, application-level encryption, cloud sync, multi-school administration or production data protection. Example educational activities require qualified teacher review. A score below 2/2 flags a possible support need; it does not establish mastery or diagnose a learner.

Current screenshot evidence refers to this plain-JavaScript demonstration. React, TypeScript and Tailwind CSS are the next planned implementation.
