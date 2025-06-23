import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({size, color}) => {
  return (
    <ClipLoader
      color={color ? color : 'grey' }
      loading={true}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}

export default Loader;