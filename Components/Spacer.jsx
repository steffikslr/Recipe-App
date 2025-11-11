import { View } from "react-native"


const Spacer = ({height = 40, ...props}) => {
  return (
    <View style = {{height}} {...props}/>
    
  )
}

export default Spacer

