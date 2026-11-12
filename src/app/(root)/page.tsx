import { BASE_PATH } from "@/lib/site";

// The site has /en/ and /ar/ versions. GitHub Pages can't redirect on the
// server, so the root page forwards visitors in the browser, choosing Arabic
// when that is the device's language.
const target = `${BASE_PATH}/en/`;
const script = `(function(){var l=(navigator.language||'').toLowerCase().indexOf('ar')===0?'ar':'en';location.replace('${BASE_PATH}/'+l+'/');})();`;

export default function RootRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content={`1;url=${target}`} />
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <p style={{ fontFamily: "system-ui, sans-serif", color: "#F8F5ED", padding: 32 }}>
        Opening Anbariyya… <a href={target} style={{ color: "#C6A15B" }}>Continue</a>
      </p>
    </>
  );
}
