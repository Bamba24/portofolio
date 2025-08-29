import { createContext, useState } from "react";

type langueContext = {
  langue: string,
  toggleLangue: ()=> void
}


 export const LangueContext = createContext<langueContext | undefined>( undefined)

export const LangueProvider= ({children}: {children: React.ReactNode}) => {
   const [langue, setLangue] = useState('fr');

   const toggleLangue = ()=>{
     setLangue((prevLangue) => (prevLangue === "fr" ? "en" : "fr"))
   }

   return (
     <LangueContext.Provider value={{langue, toggleLangue}}>
      {children}
     </LangueContext.Provider>
   )

}





