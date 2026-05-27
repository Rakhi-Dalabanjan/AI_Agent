import { useState, useEffect } from "react";

export function useInstallApp() {
  const [installInfo, setInstallInfo] = useState({
    text: "Install",
    action: () => {},
  });

  useEffect(() => {
    const userAgent =
      window.navigator.userAgent || window.navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      setInstallInfo({
        text: "Install APK",
        action: () => {
          if (window.confirm("Do you want to install Kratu AI APK?")) {
            const link = document.createElement("a");
            link.href = "/Kratu AI.apk";
            link.download = "Kratu AI.apk";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        },
      });
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setInstallInfo({
        text: "Open Web App", // Or "Add to Home Screen"
        action: () => {
          window.alert(
            "To install, tap the Share icon at the bottom of your screen and select 'Add to Home Screen'."
          );
        },
      });
    } else if (/Mac/i.test(userAgent) && !/iPhone|iPad|iPod/.test(userAgent)) {
      setInstallInfo({
        text: "Download for macOS",
        action: () => {
          window.alert("macOS app is coming soon!");
        },
      });
    } else if (/Win/i.test(userAgent)) {
      setInstallInfo({
        text: "Download for Windows",
        action: () => {
          window.alert("Windows app is coming soon!");
        },
      });
    } else {
      // Default / Linux
      setInstallInfo({
        text: "Install App",
        action: () => {
          window.alert("App installation is not available for this platform.");
        },
      });
    }
  }, []);

  return installInfo;
}
