//React Hook
import { Unity, useUnityContext } from "react-unity-webgl";

const App = () => {
  const { unityProvider,sendMessage,  addEventListener, removeEventListener,isLoaded, loadingProgression } 
  = useUnityContext({
      loaderUrl: "Build/Build.loader.js",
      dataUrl: "Build/Build.data.unityweb",
      frameworkUrl: "Build/Build.framework.js.unityweb",
      codeUrl: "Build/Build.wasm.unityweb",
    })

    return (
      <div className="App">
        <Unity style={{
            width: '100%',
            height: '100%',
            justifySelf: 'center',
            alignSelf: 'center', }}
            unityProvider={unityProvider}/>
  
      </div>)
}

export default App