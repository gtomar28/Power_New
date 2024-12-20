import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.power_main.example',
  appName: 'Power',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, // Time in milliseconds the splash screen is displayed
      launchAutoHide: true,    // Automatically hides the splash screen
      backgroundColor: "#ffffff", // Background color of the splash screen
      androidScaleType: "CENTER_CROP", // Scale type for the splash image
      showSpinner: false, // Set to true if you want a loading spinner
      androidSpinnerStyle: "large", // Spinner style (if enabled)
      spinnerColor: "#000000", // Color of the spinner (if enabled)
    }
  }
};

export default config;
