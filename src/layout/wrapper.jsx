/* eslint-disable react/prop-types */

function Wrapper({children}) {
  return (
    <div className="max-w-[1200px] px-[20px] w-full mx-auto">{children}</div>
  )
}

export default Wrapper