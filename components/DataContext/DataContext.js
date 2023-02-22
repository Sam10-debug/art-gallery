import {createContext,useContext} from "react";
import {useRef} from 'react'
const DataContext= createContext()
const {Provider}=DataContext
const DataGet=({children})=>{
	const handleRef=useRef()
	const hamburgerRef= useRef()
	const SHow=()=>{
		handleRef.current.classList.toggle("lol")
		hamburgerRef.current.classList.toggle("close")
	}
	return (
		<Provider value={{SHow,handleRef,hamburgerRef}}>
			{children}
		</Provider>
	)
	
}

const useData=()=>useContext(DataContext)
export {DataGet,useData}