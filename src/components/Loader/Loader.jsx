import { InfinitySpin } from 'react-loader-spinner';
const Loader=()=>{
    return(
        <InfinitySpin
        visible={true}
        width="400"
        color="#FFC531"
        ariaLabel="infinity-spin-loading"
      />
    )
}
export default Loader;