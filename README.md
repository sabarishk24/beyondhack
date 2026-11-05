# Care Verified: run it on your computer

## 1. Open in VS Code
Unzip the folder, then in VS Code choose **File → Open Folder** and select `care-verified`.

## 2. Start the homepage (quickest)
Open a terminal (**Terminal → New Terminal**) in this folder and run:

    python -m http.server 8000

Open http://localhost:8000 in your browser. Stop it with Ctrl+C.
The homepage has its sample data built in, so search, filters and the
"Doctors & timings" dropdown all work this way.
The API routes (/api/...) need Option 3 below.

After editing a file, press Ctrl+Shift+R in the browser to reload without cache.

## 3. Run the backend API too
Requires Node.js 18 or newer (check with `node -v`).

    npm install -g netlify-cli
    netlify dev

Open http://localhost:8888. Test the API:
- http://localhost:8888/api/services
- http://localhost:8888/api/search?service=Dialysis
- http://localhost:8888/api/doctors?facility=3a7c5a3b-cf6d-59b8-94ae-4453cd71e9a3&service=20bee163-3532-4a70-bbd9-570986a19a97

If Netlify asks you to log in or link a site, you can skip linking; local development works without it.

## Files
- index.html: homepage (search, results, Doctors & timings dropdown)
- signin.html: sign-in page
- js/api.js: browser client for the API (CareAPI)
- netlify/functions/: API endpoints (search, services, facility, doctors)
- netlify/functions/lib/data/: sample data (facilities, services, prices, doctors). All synthetic.
- netlify.toml: routes /api/* to the functions

## Notes
- All names, doctors, prices and phone numbers are sample data for demonstration.
- With `netlify dev`, the raw data files under netlify/functions/lib/data can be opened in the browser. Move them out of the publish folder before using real data.
