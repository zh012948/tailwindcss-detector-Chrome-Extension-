Tailwind CSS Detector
--> Introduction
The Tailwind CSS Detector is a Chrome extension designed to check if a website is using Tailwind CSS. It inspects the current webpage and updates the extension icon based on whether Tailwind is present. This tool is ideal for developers and designers who want to quickly identify websites built with Tailwind CSS.

--> Dynamic Icon Update: Changes the extension icon:
--> Colored Icon: If Tailwind CSS is detected.
--> Gray Icon: If Tailwind CSS is not detected.

--> Quick and Easy Usage: Just click the extension icon while visiting any website to know if Tailwind CSS is being used. For Easy Use Just Pin it to Toolbar


--> Download the Extension:

Clone or download the repository files to your local machine.
Enable Developer Mode in Chrome:

--> Open Chrome and navigate to chrome://extensions/.
Toggle the "Developer mode" switch in the top-right corner.
Load the Extension:

--> Click on "Load unpacked".
Select the folder containing the extension files (e.g., tailwind-detector).
Test the Extension:

Visit any website or go to tailwindcss official website.
Click the Tailwind CSS Detector icon in the toolbar.
Observe the icon:
Colored Icon: Tailwind CSS is present.
Gray Icon: Tailwind CSS is not present.

File Structure
tailwind-detector/
│
├── manifest.json        # Chrome extension configuration file
├── background.js        # Logic to detect Tailwind CSS
├── icons/
│   ├── icon-gray.png    # Icon displayed when Tailwind is NOT detected
│   ├── icon-color.png   # Icon displayed when Tailwind IS detected
└── README.md            # Documentation

