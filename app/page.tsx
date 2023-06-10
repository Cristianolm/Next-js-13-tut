import Image from "next/image";
import { Navigator } from "./components";
import { Routes } from "./models";
import Mustachy from "../public/images/mustachy_.png";
import { mustachyBlur } from "./models/mustachy.blur";
import Script from "next/script";

function App() {
  /*
    --------------------------
    Using external Scripts
        Ex: <Script strategy="afterInteractive" src="https://example.com/script.js" />
    --------------------------
    strategy="beforeInteractive" - Load the "<Script />" before the page becomes interactive(before hydration).
    strategy="afterInteractive": (default)  - Load the "<Script />" after the page becomes interactive (after hydration) -> Ex: Analytics.
    strategy="lazyOnload" - Load the script later during browser idle time (tempo ocioso).
    strategy="lazyOnload": (experimental) - Load the script in a web worker (works in parallel -NOT async - ideal for alerting on notifications and updates).
  
    --------------------------
    Using internal Scripts -> 2 options
      - (Must use Sanitize HTML npm) They can be written by placing the JavaScript within curly braces:
      - Or by using the dangerouslySetInnerHTML property:
    
    
      onLoad: Execute code after the script has finished loading.
      onReady: Execute code after the script has finished loading and every time the component is mounted.
      onError: Execute code if the script fails to load.    
     --------------------------

    <Script id="show-banner">
      {`document.getElementById('banner').classList.remove('hidden')`}
    </Script>

    <Script
      id="show-banner"
      dangerouslySetInnerHTML={{
        __html: `document.getElementById('banner').classList.remove('hidden')`,
      }}
    />
    */
  return (
    <>
      <Script
        src="https://example.com/script.js"
        onLoad={() => {
          console.log("Script has loaded");
        }}
      />
      <div>
        <h1>Wellcome to Rick and Morty app</h1>
        <h2>What do you want to see ?</h2>
        <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATION]} />
        <Image
          src={Mustachy}
          blurDataURL={mustachyBlur}
          placeholder="blur"
          alt="Mustachy"
        />
      </div>
    </>
  );
}

export default App;
